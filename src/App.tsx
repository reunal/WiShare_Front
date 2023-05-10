import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Header from './components/navbar/Header';
import ProductPage from './pages/product/ProductPage';
import { DefaultLayout } from './components/Layout/DefaultLayout';
import ReceivedPresentDetail from './components/present/ReceivedPresentDetail';
import PresentPage from './components/present/PresentPage';
// import Login from "./components/userForm/Login";
import MyWiShPage from './pages/mywish/MyWishPage';
import LoginPage from './pages/userForm/LoginPage';

const App = (): JSX.Element => {
	return (
		<BrowserRouter>
			<Header />

			<Routes>
				<Route element={<DefaultLayout />}>
					<Route path="/" element={<ProductPage />} />
					<Route path="/MyWish" element={<MyWiShPage />} />
					<Route path="/Login" element={<LoginPage />} />
					<Route path="/present/:id" element={<ReceivedPresentDetail />} />
					<Route path="/present" element={<PresentPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
