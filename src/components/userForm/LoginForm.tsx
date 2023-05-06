import React from "react";
import {
  LoginTextField,
  StyledLoginForm,
} from "../../styles/login/StyledLoginForm";

const LoginForm = (): JSX.Element => {
  return (
    <>
      <StyledLoginForm>
        <LoginTextField type="text" placeholder="ID" />
        <LoginTextField type="password" placeholder="PASSWORD" />
        <button>로그인</button>
      </StyledLoginForm>
    </>
  );
};

export default LoginForm;
