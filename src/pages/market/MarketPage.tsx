import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import { StyledMarket } from '../../styles/market/StyledMarket';
import MarketSideBar from '../../components/market/MarketSideBar';
import SoldProductPage from './SoldProductPage';
import SalesProductPage from './SalesProductPage';
import ProductRegisterPage from './ProductRegisterPage';

const MarketPage = () => {
	const [check, setCheck] = useState<number>(1);
	const [currentPage, setCurrentPage] = useState<React.ReactNode>(null);

	useEffect(() => {
		if (check === 1) setCurrentPage(<SalesProductPage />);
		else if (check === 2) setCurrentPage(<ProductRegisterPage />);
		else setCurrentPage(<SoldProductPage />);
	}, [check]);

	return (
		<StyledMarket>
			<Grid container spacing={3}>
				<MarketSideBar check={check} setCheck={setCheck} />
				{currentPage}
			</Grid>
		</StyledMarket>
	);
};

export default MarketPage;
