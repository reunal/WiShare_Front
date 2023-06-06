import React from 'react';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { StyledHeader, Logo, LoginButton, JoinButton } from '../../styles/header/StyledHeader';
import StyledContainer from '../../styles/StyledContainer';
import Menu from './Menu';

const Header = (): JSX.Element => {
	const login = true;

	return (
		<StyledHeader>
			<StyledContainer>
				<Grid container>
					{/* Logo */}
					<Grid item xs={2}>
						<Link to="/" aria-label="마켓">
							<Logo>WISHARE</Logo>
						</Link>
					</Grid>

					{/* Menu */}
					<Grid item xs={8}>
						{login ? <Menu /> : ''}
					</Grid>

					{/* Login */}
					<Grid item xs={2}>
						<Link to="/Login">
							<LoginButton color="#ff5555">로그인</LoginButton>
						</Link>
						<Link to="/Join">
							<JoinButton>회원가입</JoinButton>
						</Link>
					</Grid>
				</Grid>
			</StyledContainer>
		</StyledHeader>
	);
};

export default Header;
