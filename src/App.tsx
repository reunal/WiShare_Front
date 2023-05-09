import React from 'react';
import './App.css';
import Header from './components/navbar/Header';
import StyledContainer from './styles/StyledContainer';
import PresentPage from './components/present/PresentPage';
// import Login from "./components/userForm/Login";

const App = (): JSX.Element => {
	return (
		<>
			<Header />

			{/* container : 1232px */}
			<StyledContainer>
				{/* 로그인 컴포넌트 */}
				{/* <Login /> */}

				{/* 회원가입 컴포넌트 */}
				<PresentPage />
			</StyledContainer>
		</>
	);
};

export default App;
