import React from 'react';
import { Grid } from '@mui/material';
import { StyledSideBar, StyledUserInfo, StyledIconImage, StyledPageChange } from '../../styles/CommonStyled';
import logo from '../../logo.svg';

type SideBarProps = {
	children: React.ReactNode;
};

const SideBar = ({ children }: SideBarProps) => {
	return (
		<Grid item xs={3}>
			<StyledSideBar>
				<StyledUserInfo>
					<StyledIconImage src={logo} />
					<div>
						<h2>모유진</h2>
						<p>11월 7일</p>
					</div>
				</StyledUserInfo>
				<StyledPageChange>{children}</StyledPageChange>
			</StyledSideBar>
		</Grid>
	);
};

export default SideBar;
