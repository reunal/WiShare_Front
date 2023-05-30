import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Header from './components/navbar/Header';
import ProductPage from './pages/product/ProductPage';
import { DefaultLayout } from './components/Layout/DefaultLayout';
import ReceivedPresentDetail from './components/present/ReceivedPresentDetail';
import PresentPage from './pages/present/PresentPage';
// import Login from "./components/userForm/Login";
import MyWiShPage from './pages/mywish/MyWishPage';
import LoginPage from './pages/userForm/LoginPage';
import UserRegisterPage from './pages/join/UserRegisterPage';
import Join from './pages/join/JoinPage';
import ProductDetail from './components/productList/ProductDetail';
import UserJoin from './components/userForm/join/UserJoin';
import SoldProductDetail from './components/market/SoldProductDetail';
import MarketPage from './pages/market/MarketPage';
import SalesProductDetail from './components/market/SalesProductDetail';
import FriendPage from './pages/friend/FriendPage';

const App = (): JSX.Element => {
	return (
		<BrowserRouter>
			<Header />

			<Routes>
				<Route element={<DefaultLayout />}>
					<Route path="/" element={<ProductPage />} />
					<Route path="/product/:id" element={<ProductDetail />} />
					<Route path="/MyWish" element={<MyWiShPage />} />
					<Route path="/Login" element={<LoginPage />} />
					<Route path="/Join" element={<Join />} />
					<Route path="/userRegister" element={<UserRegisterPage />} />
					<Route path="/present/:id" element={<ReceivedPresentDetail />} />
					<Route path="/present" element={<PresentPage />} />
					<Route path="/signUp" element={<UserJoin />} />
					<Route path="/signUp/seller" element={<UserJoin />} />
					<Route path="/market" element={<MarketPage />} />
					<Route path="/salesList/:id" element={<SalesProductDetail />} />
					<Route path="/soldList/:id" element={<SoldProductDetail />} />
					<Route path="/friend" element={<FriendPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
