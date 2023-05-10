import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/navbar/Header';
import Product from './components/productList/Product';
import { DefaultLayout } from './components/Layout/DefaultLayout';
import ReceivedPresentDetail from './components/present/ReceivedPresentDetail';
import PresentPage from './components/present/PresentPage';
// import Login from "./components/userForm/Login";

const App = (): JSX.Element => {
	return (
		<BrowserRouter>
			<Header />

			<Routes>
				<Route element={<DefaultLayout />}>
					<Route path="/" element={<Product />} />
					<Route path="/present/:id" element={<ReceivedPresentDetail />} />
					<Route path="/present" element={<PresentPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
