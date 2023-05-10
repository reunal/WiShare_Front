import React from 'react';
import { Grid } from '@mui/material';
import { StyledLogin } from '../../styles/login/StyledLoginForm';
import LoginForm from '../../components/userForm/login/LoginForm';
import LoginTitle from '../../components/userForm/login/LoginTitle';

const LoginPage = () => {
	return (
		<Grid container spacing={3}>
			<Grid item xs />
			<Grid item xs={6}>
				<StyledLogin>
					<LoginTitle />
					<LoginForm />
				</StyledLogin>
			</Grid>
			<Grid item xs />
		</Grid>
	);
};

export default LoginPage;
