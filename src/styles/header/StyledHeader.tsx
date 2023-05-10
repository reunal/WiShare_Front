import styled from 'styled-components';

// 헤더 스타일
export const StyledHeader = styled.div`
	width: 100%;
	height: 72px;
	background: #fff;
	box-shadow: 1px 3px 5px #e6e6e6;
`;

// 로고 스타일
export const Logo = styled.h1`
	font-size: 2.6rem;
	font-family: var(--font-BebasNeue);
	line-height: 72px;
`;

// menu
export const StyledMenu = styled.div`
	height: 72px;
	font-size: 14px;

	ul {
		height: 100%;
	}

	li {
		float: left;
		line-height: 72px;
		padding: 0 15px;
		transition: all 0.2s;
		color: black;
	}

	li:hover {
		background: #ff5555;
		color: #fff;
		cursor: pointer;
	}
`;

export const LoginButton = styled.button`
	width: 75px;
	height: 36px;
	border-radius: 30px;
	color: #fff;
	background: #ff5555;
	font-size: 12px;
	margin-top: 18px;

	:hover {
		background: #fa4158;
	}
`;

export const JoinButton = styled.button`
	width: 75px;
	height: 36px;
	border-radius: 30px;
	color: #000;
	background: #fff;
	font-size: 12px;
	margin-top: 18px;
	margin-left: 5px;

	:hover {
		color: #ff5555;
	}
`;
