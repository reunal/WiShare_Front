import styled from 'styled-components';

export const StyledJoinForm = styled.div`
	margin-top: 30px;
`;

export const JoinPageTextStyled = styled.p`
	font-family: var(--font-NotoSans);
	font-size: 14px;
	font-weight: bold;
	text-align: left;
`;

export const JoinTextInput = styled.input`
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
`;
