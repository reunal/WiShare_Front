import React from 'react';
import SideBar from '../navbar/SideBar';
import { StyledPageChangeButton } from '../../styles/CommonStyled';

interface CheckProps {
	check: number;
	setCheck: React.Dispatch<React.SetStateAction<number>>;
}

const MarketSideBar = ({ check, setCheck }: CheckProps) => {
	const onChangeCheck = (num: number) => {
		setCheck(num);
	};

	return (
		<SideBar>
			<h3>마켓 관리</h3>
			<StyledPageChangeButton
				name="상품 관리"
				color={check === 1 ? '#ff5555' : undefined}
				onClick={() => {
					return onChangeCheck(1);
				}}
			>
				상품 관리
			</StyledPageChangeButton>
			<StyledPageChangeButton
				name="새 상품 등록"
				color={check === 2 ? '#ff5555' : undefined}
				onClick={() => {
					return onChangeCheck(2);
				}}
			>
				새 상품 등록
			</StyledPageChangeButton>
			<StyledPageChangeButton
				name="판매된 상품"
				color={check === 3 ? '#ff5555' : undefined}
				onClick={() => {
					return onChangeCheck(3);
				}}
			>
				판매된 상품
			</StyledPageChangeButton>
		</SideBar>
	);
};

export default MarketSideBar;
