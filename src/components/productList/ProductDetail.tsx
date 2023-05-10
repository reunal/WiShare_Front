import React from 'react';
import { Grid } from '@mui/material';

const ProductDetail = (): JSX.Element => {
	return (
		<Grid container spacing={2}>
			<Grid item xs />
			<Grid item xs={5}>
				<img src="" alt="" />
			</Grid>
			<Grid item xs={5}>
				<h3>MLB 캡 모자</h3>
				<p>MLB</p>

				<h2>39,000 원</h2>
			</Grid>
			<Grid item xs />
		</Grid>
	);
};

export default ProductDetail;
