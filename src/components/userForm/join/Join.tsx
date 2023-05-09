import React from 'react';
import { Grid } from '@mui/material';
import { PageTitleEng, PageTitleKr } from '../../../styles/CommonStyled';
import { StyledLogin } from '../../../styles/login/StyledLoginForm';
import { StyledRegisterForm } from '../../../styles/join/StyledJoinForm';

const Join = (): JSX.Element => {
	return (
		<div>
			<Grid container spacing={3} direction="column" justifyContent="center" alignItems="center">
				{/* <Grid item xs></Grid> */}
				<Grid item xs={6}>
					<StyledLogin>
						<PageTitleEng>WISHARE</PageTitleEng>회원가입
					</StyledLogin>
				</Grid>
				<Grid container item spacing={3} justifyContent="center" alignItems="center">
					<Grid item xs={4}>
						<StyledRegisterForm color="#ff5555">
							<PageTitleKr>일반사용자 가입</PageTitleKr>
						</StyledRegisterForm>
					</Grid>
					<Grid item xs={4}>
						<StyledRegisterForm>
							<PageTitleKr>마켓 등록</PageTitleKr>
						</StyledRegisterForm>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
};

export default Join;
