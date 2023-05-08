import React from "react";
import {
  LoginTextField,
  StyledLoginForm,
  LoginButton,
} from "../../../styles/login/StyledLoginForm";

const LoginForm = (): JSX.Element => {
  return (
    <>
      <StyledLoginForm>
        <LoginTextField type="text" placeholder="ID" />
        <LoginTextField type="password" placeholder="PASSWORD" />
        <LoginButton>로그인</LoginButton>
      </StyledLoginForm>
    </>
  );
};

export default LoginForm;
