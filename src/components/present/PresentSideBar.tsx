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

interface CheckProps {
	check: boolean;
	setCheck: React.Dispatch<React.SetStateAction<boolean>>;
}

const PresentSideBar = ({ check, setCheck }: CheckProps) => {
	const onChangeReceiveCheck = () => {
		setCheck(true);
	};

	const onChangeSendCheck = () => {
		setCheck(false);
	};

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
					<StyledPageChangeButton color={check === true ? '#ff5555' : undefined} onClick={onChangeReceiveCheck}>
						받은 선물
					</StyledPageChangeButton>
					<StyledPageChangeButton color={check === true ? undefined : '#ff5555'} onClick={onChangeSendCheck}>
						내가 준 선물
					</StyledPageChangeButton>
				</StyledPageChange>
			</StyledSideBar>
		</Grid>
	);
};

export default PresentSideBar;
