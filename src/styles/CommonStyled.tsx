import styled from 'styled-components';

export const PageTitleHead = styled.div`
	display: inline-block;
	width: 100%;
	height: auto;
	margin-top: 50px;
`;

export const PageBody = styled.div`
	display: inline-block;
	width: 100%;
	height: auto;
	margin-top: 20px;
`;

export const PageTitleEng = styled.h1`
	font-family: var(--font-BebasNeue);
	text-align: center;
	letter-spacing: 2px;
	font-size: 50px;
`;

export const PageTitle = styled.h1`
	letter-spacing: 2px;
	font-size: 50px;
`;

export const PageTitleKr = styled.h1`
	font-family: var(--font-NotoSans);
	font-size: 1.4rem;
	display: inline-block;
`;

// CardBaseStyle
export const CardBaseStyle = styled.div`
	width: 100%;
	height: 380px;
	background: #fff;
	transition: all 0.3s;
	color: black;
	:hover {
		box-shadow: 1px 3px 5px #e5e5e5;
		cursor: pointer;
	}
`;

export const ProductCardStyle = styled.div`
	img {
		width: 100%;
		height: 250px;
	}

	div {
		width: 100%;
	}

	div > * {
		margin: 10px;
	}
	div p {
		font-size: 12px;
		color: #666;
	}

	div h6 {
		font-weight: normal;
		font-size: 16px;
		color: #333;
		margin-top: 5px;
	}

	div h3 {
		font-size: 26px;
		float: left;
	}

	div button {
		float: right;
		padding: 8px 20px;
		background: #ff5555;
		color: white;
		border-radius: 30px;
		font-size: 12px;
	}

	div button:hover {
		background: #fa4158;
	}
`;
