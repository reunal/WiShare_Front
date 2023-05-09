import { Box } from '@material-ui/core';
import styled from 'styled-components';

export const StyledPresent = styled.div`
	margin-top: 5vh;
	width: 100%;
`;

// 사이드 바
export const StyledSideBar = styled.div`
	width: 100%;
`;

export const StyledUserInfo = styled.div`
	display: grid;
	grid-template-columns: 1fr 2fr;
	/* justify-content: center; */
	align-items: center;
`;

// 이름 추후 수정 예정
// 받은 선물 <-> 내가 준 선물 이동하는 버튼 가지고 있는 div
export const StyledPageChange = styled.div`
	width: 100%;
	height: 100%;
	margin-top: 3vh;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 5px;
`;

export const StyledPageChangeButton = styled.button`
	width: 100%;
	height: 3vh;
	transition: all 0.3s;
	font-size: 14px;
	text-align: start;
	padding: 5px 10px;
	border-radius: 5px;

	background-color: ${({ color }) => {
		return color || 'none';
	}};

	border: ${({ color }) => {
		return color ? 'none' : '1px solid #E5E5E5';
	}};
	color: ${({ color }) => {
		return color ? 'white' : '#333';
	}};
`;

export const StyledIconImage = styled.img`
	width: 70px;
	height: 70px;
	background-color: #d9d9d9;
	border-radius: 50%;
`;

// 받은 선물 Main
export const PresentCardStyled = styled.div`
	img {
		width: 100%;
		height: 240px;
	}

	div {
		width: 100%;
		margin-top: 1vh;
		p {
			font-size: 12px;
		}

		h5 {
			font-weight: normal;
			font-size: 18px;
			margin-top: 3px;
		}

		h6 {
			font-family: var(--font-BebasNeue);
			font-size: 18px;
			display: inline;
			margin-right: 5px;
		}
	}
`;

// 보낸 선물 style
export const SendPresentCardStyled = styled(Box)`
	width: 100%;
	height: 180px;
	margin-top: 2vh;
	border: 1px solid #e5e5e5;
	border-radius: 10px;
	p {
		height: 25%;
		font-weight: 700;
		font-size: 16px;
		padding: 15px 20px 10px;
	}

	div {
		height: 75%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 2vw;
	}
`;