import { Grid } from '@material-ui/core';
import React from 'react';
import { PageTitleEng } from '../../../styles/CommonStyled';
import { StyledJoin } from '../../../styles/join/StyledJoin';
import UserJoinForm from './UserJoinForm';

const UserJoinUp = (): JSX.Element => {
	return (
		<div>
			<Grid container spacing={3} direction="column" justifyContent="center" alignItems="center">
				{/* <Grid item xs></Grid> */}
				<Grid item xs={6}>
					<StyledJoin>
						<PageTitleEng>WISHARE : 일반 회원가입</PageTitleEng>
						<UserJoinForm />
					</StyledJoin>
				</Grid>
			</Grid>
		</div>
	);
};

export default UserJoinUp;
