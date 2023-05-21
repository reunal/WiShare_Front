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
import Join from './components/userForm/join/Join';
import ProductDetail from './components/productList/ProductDetail';
// import FriendPage from './pages/friend/FriendPage';
import FriendRequest from './components/friend/FriendRequest';

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
					<Route path="/present/:id" element={<ReceivedPresentDetail />} />
					<Route path="/present" element={<PresentPage />} />
					<Route path="/friend" element={<FriendRequest />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
