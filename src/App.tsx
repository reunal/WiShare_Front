import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Header from './components/navbar/Header';
import { DefaultLayout } from './components/Layout/DefaultLayOut';
import ProductPage from './pages/product/ProductPage';

const App = (): JSX.Element => {
	return (
		<BrowserRouter>
			<Header />

			<Routes>
				<Route element={<DefaultLayout />}>
					<Route path="/" element={<ProductPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
