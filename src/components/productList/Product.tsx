import React from 'react';
import { Grid } from '@mui/material';
import { CardBaseStyle, ProductCardStyle } from '../../styles/CommonStyled';

const Product = (): JSX.Element => {
	return (
		<Grid item xs={3}>
			<CardBaseStyle>
				<ProductCardStyle>
					<img src="" alt="" title="" />
					<div>
						<p>Category</p>
						<h6>MLB 캡모자</h6>
					</div>
					<div>
						<h3>39,000</h3>
						<button type="button">위시하기</button>
					</div>
				</ProductCardStyle>
			</CardBaseStyle>
		</Grid>
	);
};

export default Product;
