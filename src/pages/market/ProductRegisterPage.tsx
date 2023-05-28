import { Grid } from '@material-ui/core';
import React from 'react';
import ProductRegisterTitle from '../../components/market/ProductRegisterTitle';
import { StyledProductRegisterBox } from '../../styles/market/StyledMarket';
import ProductRegisterForm from '../../components/market/ProductRegisterForm';

const ProductRegisterPage = () => {
	return (
		<Grid item xs={6}>
			<StyledProductRegisterBox>
				<ProductRegisterTitle />
				<ProductRegisterForm />
			</StyledProductRegisterBox>
		</Grid>
	);
};

export default ProductRegisterPage;
