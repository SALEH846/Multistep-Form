import { FormWrapper } from "../styles/FormWrapper";

type AddressData = {
	street: string;
	city: string;
	state: string;
	zip: string;
};

type AddressFormProps = AddressData & {
	updateFields: (updatedFields: Partial<AddressData>) => void;
};

const AddressForm = ({
	street,
	city,
	state,
	zip,
	updateFields,
}: AddressFormProps) => {
	return (
		<FormWrapper title="">
			<label htmlFor="street">Street</label>
			<input
				type="text"
				id="street"
				value={street}
				onChange={(e) => updateFields({ street: e.target.value })}
				autoFocus
				required
			/>
			<label htmlFor="city">City</label>
			<input
				type="text"
				id="city"
				value={city}
				onChange={(e) => updateFields({ city: e.target.value })}
				required
			/>
			<label htmlFor="state">State</label>
			<input
				type="text"
				id="state"
				value={state}
				onChange={(e) => updateFields({ state: e.target.value })}
				required
			/>
			<label htmlFor="zip">Zip</label>
			<input
				type="text"
				id="zip"
				value={zip}
				onChange={(e) => updateFields({ zip: e.target.value })}
				required
			/>
		</FormWrapper>
	);
};

export default AddressForm;
