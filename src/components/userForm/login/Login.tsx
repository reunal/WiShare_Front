import React from "react";
import { Grid } from "@mui/material";
import { PageTitleEng } from "../../../styles/CommonStyled";
import { StyledLogin } from "../../../styles/login/StyledLoginForm";

import LoginForm from "./LoginForm";

const Login = (): JSX.Element => {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs></Grid>
        <Grid item xs={6}>
          <StyledLogin>
            <PageTitleEng>WISHARE LOGIN</PageTitleEng>
            <LoginForm />
          </StyledLogin>
        </Grid>
        <Grid item xs></Grid>
      </Grid>
    </>
  );
};

export default Login;
