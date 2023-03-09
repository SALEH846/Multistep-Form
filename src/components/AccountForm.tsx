import { FormWrapper } from "../styles/FormWrapper";

type AccountData = {
	email: string;
	password: string;
};

type AccountFormProps = AccountData & {
	updateFields: (updatedFields: Partial<AccountData>) => void;
};

const AccountForm = ({ email, password, updateFields }: AccountFormProps) => {
	return (
		<FormWrapper title="">
			<label htmlFor="email">Email</label>
			<input
				type="email"
				id="email"
				value={email}
				onChange={(e) => updateFields({ email: e.target.value })}
				autoFocus
				required
			/>
			<label htmlFor="password">Password</label>
			<input
				type="password"
				id="password"
				value={password}
				onChange={(e) => updateFields({ password: e.target.value })}
				required
			/>
		</FormWrapper>
	);
};

export default AccountForm;
