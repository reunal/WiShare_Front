import { Box } from '@material-ui/core';
import styled from 'styled-components';

export const StyledPresent = styled.div`
	margin-top: 5vh;
	width: 100%;
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
		padding: 5px 5px;
		p {
			font-size: 12px;
			color: #aaa;
		}

		h5 {
			font-weight: bold;
			font-size: 22px;
			margin-top: 3px;
		}

		h6 {
			font-family: var(--font-BebasNeue);
			font-size: 18px;
			display: inline;
			margin-right: 5px;
		}
	}
	color: black;
`;

export const ReceivedListContainer = styled.div`
	margin-top: 20px;
`;

// 보낸 선물 style
export const SendPresentCardStyled = styled(Box)`
	width: 100%;
	height: 150px;
	margin-top: 2vh;
	border: 1px solid #e5e5e5;
	border-radius: 10px;
	p {
		height: 25%;
		font-weight: normal;
		font-size: 14px;
		padding: 12px;
		color: #333;
	}

	div {
		height: 75%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 2vw;
	}
`;

// 받은 선물 배송지 관리 style
export const StyledEnterAddress = styled.div`
	width: 100%;

	svg {
		font-size: 1rem;
	}
`;

export const EnterAddressBoxStyled = styled.div`
	width: 80%;
	margin: 0 auto;
`;

export const PresentDetailCardStyled = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 5vh 0;

	img {
		width: 30%;
		height: 220px;
	}

	div {
		p {
			text-align: center;
			margin-bottom: 1vh;
		}
	}
`;

export const EnterAddressForm = styled.div`
	width: 100%;
	margin-top: 2vh;

	p {
		font-size: 16px;
		font-weight: 700;
		margin-bottom: 1vh;
	}

	div {
		width: 100%;
		display: flex;
		justify-content: space-between;

		input {
			width: 85%;
			height: 35px;
			border: 1px solid #dcdcdc;
			border-radius: 5px;
			padding: 0 10px;
		}

		button {
			/* width: 10%; */
			height: 35px;

			background-color: black;
			padding: 3px;
			border-radius: 5px;
			color: #ffffff;
		}
	}
`;
