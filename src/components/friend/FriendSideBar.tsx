import React from 'react';
import SideBar from '../navbar/SideBar';
import { StyledPageChangeButton } from '../../styles/CommonStyled';

interface CheckProps {
	check: boolean;
	setCheck: React.Dispatch<React.SetStateAction<boolean>>;
}

const FriendSideBar = ({ check, setCheck }: CheckProps): JSX.Element => {
	const onChangeReceiveCheck = () => {
		setCheck(true);
	};

	const onChangeSendCheck = () => {
		setCheck(false);
	};

	return (
		<SideBar>
			<h3>마이프렌드</h3>
			<StyledPageChangeButton color={check === true ? '#ff5555' : undefined} onClick={onChangeReceiveCheck}>
				친구 목록
			</StyledPageChangeButton>
			<StyledPageChangeButton color={check === true ? undefined : '#ff5555'} onClick={onChangeSendCheck}>
				친구 요청
			</StyledPageChangeButton>
		</SideBar>
	);
};

export default FriendSideBar;
