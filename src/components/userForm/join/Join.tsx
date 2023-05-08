import React from "react";
import { PageTitleEng } from "../../../styles/CommonStyled";
import { StyledLogin } from "../../../styles/login/StyledLoginForm";
import { Grid } from "@mui/material";

const Join = (): JSX.Element => {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs></Grid>
        <Grid item xs={6}>
          <StyledLogin>
            <PageTitleEng>WISHARE</PageTitleEng>회원가입
          </StyledLogin>
        </Grid>
        <Grid item xs></Grid>
      </Grid>
    </>
  );
};

export default Join;
