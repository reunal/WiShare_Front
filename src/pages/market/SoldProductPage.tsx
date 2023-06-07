import React from 'react';
import { Grid } from '@material-ui/core';
import { useRecoilValue } from 'recoil';
import SoldProduct from '../../components/market/SoldProduct';
import { SoldProductList, ISoldProductType } from '../../recoil/SoldProductAtom';

const SoldProductPage = () => {
	const soldProductData = useRecoilValue(SoldProductList);

	return (
		<Grid item xs={9}>
			{soldProductData.map((data: ISoldProductType) => {
				const {
					id,
					name,
					img,
					brand,
					category,
					price,
					quantity,
					description,
					purchaser,
					address,
					addressNumber,
					orderNumber,
					entered,
					date,
				} = data;
				return (
					<SoldProduct
						key={id}
						id={id}
						img={img}
						name={name}
						brand={brand}
						category={category}
						description={description}
						price={price}
						quantity={quantity}
						purchaser={purchaser}
						address={address}
						addressNumber={addressNumber}
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
