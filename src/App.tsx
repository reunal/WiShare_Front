import React from "react";
import "./App.css";
import Header from "./components/navbar/Header";
import StyledContainer from "./styles/StyledContainer";
// import Login from "./components/userForm/Login";
// import Join from "./components/userForm/join/Join";
import Product from "./components/productList/Product";

const App = (): JSX.Element => {
  return (
    <>
      <Header></Header>

      {/* container : 1232px */}
      <StyledContainer>
        {/* 로그인 컴포넌트 */}
        {/* <Login /> */}

        {/* 회원가입 컴포넌트 */}
        {/* <Join /> */}

        <Product></Product>
      </StyledContainer>
    </>
  );
};

export default App;
