import styled from 'styled-components';

export const StyledFriend = styled.div`
	margin-top: 50px;

	h4 {
		font-size: 20px;
	}
`;

export const FriendCard = styled.div`
	width: 100%;
	height: 90%;
	border: solid 1px #e5e5e5;
	border-radius: 10px;
	margin-top: 10px;

	div {
		float: left;
		padding: 20px 10px;
	}

	div:nth-child(2) {
		padding: 35px 0;
	}

	div:last-child {
		float: right;
		margin-right: 10px;

		button {
			margin-top: 20px;
			margin-right: 0px;
		}
	}

	img {
		width: 70px;
		border-radius: 50%;
		border: solid 1px #c8c8c8;
	}

	h5 {
		font-size: 20px;
	}

	p {
		font-size: 12px;
		color: #666;
		margin-top: 5px;
	}
`;

export const FriendRequestCard = styled.div`
	width: 100%;
	border-radius: 5px;
	border: solid 1px #e5e5e5;
	margin-top: 10px;

	div {
		padding: 7px;
	}

	div:nth-child(2) {
		padding: 25px 15px;
	}

	img {
		width: 70px;
		border: solid 1px #e5e5e5;
		border-radius: 50px;
	}

	h5 {
		font-size: 17px;
	}
	p {
		font-size: 14px;
		color: #666;
		margin-top: 3px;
	}

	button {
		margin-top: 20px;
		margin-left: 15px;
	}
`;
