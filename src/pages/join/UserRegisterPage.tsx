import { Grid } from '@material-ui/core';
import React from 'react';
import { PageTitleEng30 } from '../../styles/CommonStyled';
import { StyledJoin } from '../../styles/join/StyledJoin';
import UserRegisterForm from '../../components/userForm/join/UserRegisterForm';

const UserRegisterPage = (): JSX.Element => {
	return (
		<div>
			<Grid container spacing={2}>
				<Grid item xs={3} />
				<Grid item xs={6}>
					<StyledJoin>
						<PageTitleEng30>WISHARE : 일반 회원가입</PageTitleEng30>
						<UserRegisterForm />
					</StyledJoin>
				</Grid>
			</Grid>
		</div>
	);
};

export default UserRegisterPage;
