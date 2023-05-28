import React from 'react';
import { StyledPageChangeButton } from '../../styles/CommonStyled';
import SideBar from '../navbar/SideBar';

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
		<SideBar>
			<h3>선물함</h3>
			<StyledPageChangeButton color={check === true ? '#ff5555' : undefined} onClick={onChangeReceiveCheck}>
				받은 선물
			</StyledPageChangeButton>
			<StyledPageChangeButton color={check === true ? undefined : '#ff5555'} onClick={onChangeSendCheck}>
				내가 준 선물
			</StyledPageChangeButton>
		</SideBar>
	);
};

export default PresentSideBar;
