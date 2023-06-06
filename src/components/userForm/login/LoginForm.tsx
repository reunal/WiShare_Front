import React, { ChangeEvent, useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { idState, pwState } from '../../../recoil/LoginAtom';
import { LoginTextField, StyledLoginForm, LoginButton } from '../../../styles/login/StyledLoginForm';

const LoginForm = (): JSX.Element => {
	const [id, setId] = useRecoilState<string>(idState);
	const [pw, setPw] = useRecoilState<string>(pwState);

	const idOnChange = useCallback(
		(e: ChangeEvent<HTMLInputElement>): void => {
			const { value } = e.target;
			setId(value);
		},
		[setId]
	);

	const pwOnChange = useCallback(
		(e: ChangeEvent<HTMLInputElement>): void => {
			const { value } = e.target;
			setPw(value);
		},
		[setPw]
	);

	const onSubmit = () => {
		window.console.log('id: ', id);
		window.console.log('pw: ', pw);
	};

	return (
		<StyledLoginForm>
			<LoginTextField type="text" placeholder="ID" onChange={idOnChange} />
			<LoginTextField type="text" placeholder="PASSWORD" onChange={pwOnChange} />
			<LoginButton onClick={onSubmit}>로그인</LoginButton>
		</StyledLoginForm>
	);
};

export default LoginForm;
