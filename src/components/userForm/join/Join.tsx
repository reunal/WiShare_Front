import React from 'react';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { PageTitleEng, PageTitleKr } from '../../../styles/CommonStyled';
import { StyledLogin } from '../../../styles/login/StyledLoginForm';
import { StyledRegisterButton } from '../../../styles/join/StyledJoin';

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
						<Link to="/signUp">
							<StyledRegisterButton color="#ff5555">
								<PageTitleKr>일반사용자 가입</PageTitleKr>
							</StyledRegisterButton>
						</Link>
					</Grid>
					<Grid item xs={4}>
						<Link to="/signUp/seller">
							<StyledRegisterButton>
								<PageTitleKr>마켓 등록</PageTitleKr>
							</StyledRegisterButton>
						</Link>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
};

export default Join;
