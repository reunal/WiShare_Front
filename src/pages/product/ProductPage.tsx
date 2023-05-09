import React from 'react';
import { Grid } from '@mui/material';
import { PageTitleKr } from '../../styles/CommonStyled';
import { ProductPageContainer, ProductPageHead, ProductPageBody } from '../../styles/product/StyledProduct';
import ProductDummyData from '../../model/ProductDummyData';
import FilterBtn from '../../components/productList/FilterBtn';
import Product from '../../components/productList/Product';

const ProductPage = (): JSX.Element => {
	return (
		<ProductPageContainer>
			<ProductPageHead>
				<PageTitleKr>마켓 : 원하는 아이템을 위시하세요!</PageTitleKr>
				<FilterBtn />
			</ProductPageHead>
			<ProductPageBody>
				<Grid container spacing={2}>
					{ProductDummyData.map((data) => {
						const { id, img, name, brand, price, description, wished } = data;
						return (
							<Grid item xs={3}>
								<Product
									key={id}
									id={id}
									img={img}
									name={name}
									brand={brand}
									price={price}
									description={description}
									wished={wished}
								/>
							</Grid>
						);
					})}
				</Grid>
			</ProductPageBody>
		</ProductPageContainer>
	);
};

export default ProductPage;
