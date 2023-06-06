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

export const StyledModalBox = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	width: 40%;
	height: 60%;
	overflow: auto;
	padding-top: 20px;
	text-align: center;
	transform: translate(-50%, -50%);
	background-color: white;
	border: '2px solid #000';
`;

export const StyledFriendList = styled.div`
	width: 80%;
	display: flex;
	flex-direction: column;
	margin: 0 auto;
`;

export const StyledPresentFriendCard = styled.div`
	width: 100%;
	border: solid 1px #e5e5e5;
	border-radius: 10px;
	margin-top: 10px;
	margin-bottom: 5px;

	div {
		float: left;
		padding: 10px 5px;
	}

	div:nth-child(2) {
		margin-top: 15px;
	}

	div:last-child {
		float: right;
		margin-top: 5px;
		margin-right: 10px;
	}

	img {
		width: 50px;
		border-radius: 50%;
		border: solid 1px #c8c8c8;
	}

	h5 {
		font-size: 20px;
	}
`;
