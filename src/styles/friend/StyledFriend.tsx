import styled from 'styled-components';

export const StyledFriend = styled.div`
	margin-top: 50px;
`;

export const FriendCard = styled.div`
	width: 100%;
	height: 12.5vh;
	border: solid 1px #e5e5e5;
	border-radius: 10px;
	margin-top: 10px;

	div {
		float: left;
		padding: 10px;
	}

	div:nth-child(2) {
		margin: 15px 0px;
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
		border: solid 1px red;
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
