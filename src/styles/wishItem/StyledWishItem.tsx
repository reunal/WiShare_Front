import styled from 'styled-components';

export const StyledWishItem = styled.div`
	width: 100%;
	height: 80px;
	border: solid 1px #e5e5e5;
	border-radius: 10px;
	padding: 10px;
	margin-top: 15px;
`;

export const StyledItemInfo = styled.div`
	div {
		float: left;
	}

	div:nth-child(2) {
		margin-left: 13px;
	}

	div:last-child {
		float: right;
		margin-right: 10px;
		line-height: 60px;
	}

	img {
		width: 60px;
		height: 60px;
		border-radius: 50%;
		border: solid 1px red;
	}

	h3 {
		font-size: 24px;
	}

	h6 {
		color: #333;
		font-size: 20px;
		margin-top: 10px;
	}

	p {
		color: #666;
		font-size: 12px;
	}
`;

export const StyledButtons = styled.div`
	margin-left: 10px;
	margin-top: 10px;

	button {
		margin-left: 20px;
	}
`;
