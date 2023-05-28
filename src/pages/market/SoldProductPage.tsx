import React from 'react';
import { Grid } from '@material-ui/core';
import SoldDummyData from '../../model/SoldProductDummyList';
import SoldProduct from '../../components/market/SoldProduct';

const SoldProductPage = () => {
	return (
		<Grid item xs={9}>
			{SoldDummyData.map((data) => {
				const { id, name, brand, price, quantity, purchaser, address, orderNumber, entered, date } = data;
				return (
					<SoldProduct
						key={id}
						id={id}
						name={name}
						brand={brand}
						price={price}
						quantity={quantity}
						purchaser={purchaser}
						address={address}
						orderNumber={orderNumber}
						entered={entered}
						date={date}
					/>
				);
			})}
		</Grid>
	);
};

export default SoldProductPage;
