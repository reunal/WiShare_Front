import React from 'react';
import { Grid } from '@material-ui/core';
import { StyledHeader, Logo, LoginButton, JoinButton } from '../../styles/header/StyledHeader';
import StyledContainer from '../../styles/StyledContainer';

const Header = (): JSX.Element => {
	const login = false;

	return (
		<StyledHeader>
			<StyledContainer>
				<Grid container>
					{/* Logo */}
					<Grid item xs={2}>
						<Logo>WISHARE</Logo>
					</Grid>

					{/* Menu */}
					<Grid item xs={8}>
						{login ? <>menu</> : ''}
					</Grid>

					{/* Login */}
					<Grid item xs={2}>
						<LoginButton color="#ff5555">로그인</LoginButton>
						<JoinButton>회원가입</JoinButton>
					</Grid>
				</Grid>
			</StyledContainer>
		</StyledHeader>
	);
};

export default Header;
