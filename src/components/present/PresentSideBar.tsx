import React from 'react';
import { Grid } from '@mui/material';
import {
	StyledSideBar,
	StyledUserInfo,
	StyledIconImage,
	StyledPageChange,
	StyledPageChangeButton,
} from '../../styles/present/StyledPresent';
import logo from '../../logo.svg';

const PresentSideBar = (): JSX.Element => {
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
				<StyledPageChange>
					<h3>선물함</h3>
					<StyledPageChangeButton color="#ff5555">받은 선물</StyledPageChangeButton>
					<StyledPageChangeButton>내가 준 선물</StyledPageChangeButton>
				</StyledPageChange>
			</StyledSideBar>
		</Grid>
	);
};

export default PresentSideBar;
