import React from 'react';
import { Grid } from '@material-ui/core';
import { StyledSalesProductListBox } from '../../styles/market/StyledMarket';
import SoldDummyData from '../../model/SoldProductDummyList';
import SalesProduct from '../../components/market/SalesProduct';

const SalesProductPage = () => {
	return (
		<Grid item xs={9}>
			<h1>{SoldDummyData.length}개의 등록된 상품이 있습니다.</h1>
			<StyledSalesProductListBox>
				<Grid container spacing={2}>
					{SoldDummyData.map((data) => {
						const { id, name, brand, category, price, quantity, orderNumber, viewCnt, like } = data;

						return (
							<SalesProduct
								key={id}
								id={id}
								name={name}
								brand={brand}
								category={category}
								price={price}
								quantity={quantity}
								orderNumber={orderNumber}
								viewCnt={viewCnt}
								like={like}
							/>
						);
					})}
				</Grid>
			</StyledSalesProductListBox>
		</Grid>
	);
};

export default SalesProductPage;
