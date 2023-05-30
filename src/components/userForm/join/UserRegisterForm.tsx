import React from 'react';
import { RegisterTextField } from '../../../styles/join/StyledJoin';

const UserRegisterForm = (): JSX.Element => {
	return (
		<>
			<div>아이디</div>
			<RegisterTextField type="text" />
		</>
	);
};

export default UserRegisterForm;
