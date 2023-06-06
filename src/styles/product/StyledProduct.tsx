import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const FilterSelector = styled.select`
	padding: 6px 10px;
	background-color: #e5e5e5;
	border: none;
	border-radius: 30px;
	margin-top: 5px;
	font-size: 11px;
	float: right;
`;

// 제품 상세보기 페이지

export const DetailImage = styled.div`
	width: 100%;
	height: auto;
	margin-top: 10px;

	img {
		width: 100%;
		height: 100%;
		border: solid 1px #e5e5e5;
	}
`;

export const DetailContent = styled.div`
	margin-top: 90px;
	h3 {
		font-size: 24px;
		color: #333;
	}

	p {
		color: #666;
		font-size: 14px;
	}

	h2 {
		font-size: 30px;
		margin-top: 30px;
	}

	div {
		margin-top: 10px;
	}
`;

export const DetailUnderLine = styled.div`
	width: 100%;
	height: 1px;
	background: #e5e5e5;
`;

export const DetailBtnGroup = styled.div`
	padding-top: 30px;

	button {
		padding: 10px 20px;
		border-radius: 5px;
	}

	button:first-child {
		color: #fff;
		background: #ff5555;
	}

	button:last-child {
		margin-left: 10px;
		border: solid 1px #e5e5e5;
	}
`;
