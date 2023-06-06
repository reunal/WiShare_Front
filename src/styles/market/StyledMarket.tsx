import styled from 'styled-components';

interface ISoldProductStatusTextType {
	readonly status: boolean;
}

export const StyledMarket = styled.div`
	margin-top: 5vh;
	width: 100%;
`;

export const StyledSoldProductCard = styled.div`
	width: 100%;
	height: 160px;
	margin-top: 2vh;
	font-family: var(--font-BebasNeue), var(--font-NotoSans);
	margin: 0 auto;
	img {
		width: 100%;
	}
`;

export const StyledSalesProductCard = styled.div`
	img {
		width: 100%;
		height: 240px;
	}

	div {
		width: 100%;
		margin-top: 1vh;
		padding: 5px 10px;
	}
	color: black;
`;

export const StyledProductItem = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	border-top: 1px solid black;
	border-bottom: 1px solid black;
	padding-left: 10px;
`;

export const StyledSoldProductContent = styled.div`
	width: 100%;
	height: 100%;
	display: flex;

	padding-top: 10px;
`;

export const StyledProductNameWrapper = styled.div`
	display: inline-flex;
	flex-direction: column;
	align-items: center;
	padding-top: 10px;
`;

export const StyledSoldProductStatusText = styled.span`
	padding: 10px;
	color: ${({ status }: ISoldProductStatusTextType) => {
		return status ? '#39B535' : 'inherit';
	}};
`;

export const StyledInvoiceInputButton = styled.button`
	border: 1px solid #dcdcdc;
	border-radius: 5px;
	width: 90px;
	height: 32px;
	margin: 10px;
`;

export const StyledDetailItemData = styled.div`
	margin-top: 1vh;

	div {
		display: flex;
		align-items: center;
		p {
			font-size: 14px;
			margin: 6px 2px;
			min-width: 100px;
		}

		button {
			width: 60px;
			height: 24px;
			background: #d3d6d9;
			border: 1px solid #dcdcdc;
			border-radius: 5px;
		}
	}
`;

export const StyledSalesProductListBox = styled.div`
	margin-top: 20px;
`;

export const StyledProductRegisterBox = styled.div`
	text-align: center;
`;

export const StyledProductRegisterForm = styled.div`
	margin-top: 20px;
	text-align: start;
`;

export const StyledProductRegisterInput = styled.input`
	font-family: var(--font-BebasNeue), var(--font-NotoSans);

	width: 100%;
	height: 45px;
	padding: 0 15px;

	font-size: 16px;
	border: solid 1px #dcdcdc;
	border-radius: 5px;
	margin-top: 5px;
	margin-bottom: 10px;
	transition: all 0.5s;

	:focus {
		outline: none;
		border-bottom: solid 1px #c8c8c8;
	}

	&[type='file'] {
		display: none;
	}
`;

export const StyledProductRegisterLabel = styled.label`
	display: flex;
	width: 100%;
	height: 45px;
	padding: 0 15px;
	justify-content: space-between;
	align-items: center;

	font-size: 16px;
	border: solid 1px #dcdcdc;
	border-radius: 5px;
	margin-top: 5px;
	margin-bottom: 10px;
	transition: all 0.5s;

	:focus {
		outline: none;
		border-bottom: solid 1px #c8c8c8;
	}

	p {
		width: 96px;
		height: 35px;
		color: #333333;
		background: #d3d6d9;
		border: 1px solid #dcdcdc;
		border-radius: 5px;
		text-align: center;
		line-height: 35px;
	}
`;

export const StyledProductRegisterSelect = styled.select`
	width: 30%;
	height: 45px;
	padding: 0 15px;

	font-size: 16px;
	border: solid 1px #dcdcdc;
	border-radius: 5px;
	margin-top: 5px;
	margin-bottom: 10px;
	transition: all 0.5s;

	:focus {
		outline: none;
		border-bottom: solid 1px #c8c8c8;
	}
`;

export const StyledProductRegisterButton = styled.button`
	width: 100px;
	padding: 8px 20px;
	background: #ff5555;
	color: white;
	border-radius: 30px;
	font-size: 12px;

	&:hover {
		background: #fa4158;
	}
`;
