import React from "react";
import "./App.css";
import Header from "./components/navbar/Header";
import StyledContainer from "./styles/StyledContainer";
import Login from "./components/userForm/Login";

const App = (): JSX.Element => {
  return (
    <>
      <Header></Header>
      <StyledContainer>
        <Login></Login>
      </StyledContainer>
    </>
  );
};

export default App;
