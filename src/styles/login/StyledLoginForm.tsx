import styled from 'styled-components';

export const StyledLogin = styled.div`
	width: 100%;
	height: auto;
	margin-top: 10vh;
	text-align: center;
`;

export const StyledLoginForm = styled.div`
	margin-top: 30px;
`;

export const LoginTextField = styled.input`
	width: 100%;
	height: 45px;
	padding: 20px 0;
	font-family: var(--font-BebasNeue);
	font-size: 16px;
	border: none;
	border-bottom: solid 1px #e5e5e5;
	margin-top: 15px;
	transition: all 0.5s;

	:focus {
		outline: none;
		border-bottom: solid 1px #c8c8c8;
	}
`;

export const LoginButton = styled.button`
	width: 75px;
	height: 36px;
	border-radius: 30px;
	color: #fff;
	background: #ff5555;
	font-size: 12px;
	margin-top: 30px;

	:hover {
		background: #fa4158;
	}
`;
