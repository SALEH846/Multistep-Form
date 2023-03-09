import AddressForm from "./components/AddressForm";
import UserForm from "./components/UserForm";
import AccountForm from "./components/AccountForm";
import { useMultistepForm } from "./hooks/useMultistepForm";
import { FormEvent, useState } from "react";

type FormData = {
	firstName: string;
	lastName: string;
	age: string;
	street: string;
	city: string;
	state: string;
	zip: string;
	email: string;
	password: string;
};

const INITIAL_DATA: FormData = {
	firstName: "",
	lastName: "",
	age: "",
	street: "",
	city: "",
	state: "",
	zip: "",
	email: "",
	password: "",
};

function App() {
	// State for the form
	const [data, setData] = useState(INITIAL_DATA);

	// Function for updatign values
	function updateFields(updatedFields: Partial<FormData>) {
		setData((prevData) => {
			return {
				...prevData,
				...updatedFields,
			};
		});
	}

	const {
		step,
		steps,
		currentStepIndex,
		next,
		previous,
		isFirstStep,
		isLastStep,
		goTo,
	} = useMultistepForm([
		<UserForm {...data} updateFields={updateFields} />,
		<AddressForm {...data} updateFields={updateFields} />,
		<AccountForm {...data} updateFields={updateFields} />,
	]);

	// Form submission handler
	function submitHandler(e: FormEvent) {
		e.preventDefault();
		if (!isLastStep) {
			next();
			return;
		}
		alert("Success! Form Submitted");
		setData(INITIAL_DATA);
		goTo(0);
	}

	return (
		<div
			style={{
				position: "relative",
				background: "white",
				border: "1px solid black",
				padding: "2rem",
				margin: "1rem",
				borderRadius: ".5rem",
				fontFamily: "Arial",
				maxWidth: "max-content",
			}}
		>
			<form onSubmit={submitHandler}>
				<div style={{ position: "absolute", top: ".5rem", right: ".5rem" }}>
					{currentStepIndex + 1} / {steps.length}
				</div>
				{step}
				<div
					style={{
						marginTop: "1rem",
						display: "flex",
						gap: ".5rem",
						justifyContent: "flex-end",
					}}
				>
					{!isFirstStep && (
						<button type="button" onClick={previous}>
							Back
						</button>
					)}

					<button type="submit">{isLastStep ? "Finish" : "Next"}</button>
				</div>
			</form>
		</div>
	);
}

export default App;
