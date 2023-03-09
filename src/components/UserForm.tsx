import { FormWrapper } from "../styles/FormWrapper";

type UserData = {
	firstName: string;
	lastName: string;
	age: string;
};

type UserFormProps = UserData & {
	updateFields: (updateFields: Partial<UserData>) => void;
};

const UserForm = ({
	firstName,
	lastName,
	age,
	updateFields,
}: UserFormProps) => {
	return (
		<FormWrapper title="User Details">
			<label htmlFor="firstName">First Name</label>
			<input
				type="text"
				id="firstName"
				value={firstName}
				onChange={(e) => updateFields({ firstName: e.target.value })}
				autoFocus
				required
			/>
			<label htmlFor="lastName">Last Name</label>
			<input
				type="text"
				id="lastName"
				value={lastName}
				onChange={(e) => updateFields({ lastName: e.target.value })}
				required
			/>
			<label htmlFor="age">Age</label>
			<input
				type="number"
				id="age"
				value={age}
				onChange={(e) => updateFields({ age: e.target.value })}
				min={1}
				required
			/>
		</FormWrapper>
	);
};

export default UserForm;
