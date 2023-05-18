import React from 'react';
import { JoinPageTextStyled, JoinTextInput, StyledJoinForm } from '../../../styles/join/StyledJoinForm';

const UserRegisterForm = () => {
	return (
		<StyledJoinForm>
			<JoinPageTextStyled>아이디</JoinPageTextStyled>
			<JoinTextInput type="text" placeholder="ID" />
			<JoinPageTextStyled>비밀번호</JoinPageTextStyled>
			<JoinTextInput type="password" placeholder="PASSWORD" />
			<JoinPageTextStyled>이름</JoinPageTextStyled>
			<JoinTextInput type="text" />
			<JoinPageTextStyled>생년월일</JoinPageTextStyled>
			<JoinTextInput type="date" />
			<JoinPageTextStyled>성별</JoinPageTextStyled>
			<JoinTextInput type="text" />
			<JoinPageTextStyled>연락처</JoinPageTextStyled>
			<JoinTextInput type="text" />
			<JoinPageTextStyled>배송지</JoinPageTextStyled>
			<JoinTextInput type="text" />
		</StyledJoinForm>
	);
};

export default UserRegisterForm;
