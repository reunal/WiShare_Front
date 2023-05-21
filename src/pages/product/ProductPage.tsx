import React from 'react';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { PageTitleKr, PageBody, PageTitleHead } from '../../styles/CommonStyled';
import ProductDummyData from '../../model/ProductDummyData';
import FilterBtn from '../../components/productList/FilterBtn';
import Product from '../../components/productList/Product';

const ProductPage = (): JSX.Element => {
	return (
		<>
			<PageTitleHead>
				<PageTitleKr>마켓 : 원하는 아이템을 위시하세요!</PageTitleKr>
				<FilterBtn />
			</PageTitleHead>
			<PageBody>
				<Grid container spacing={2}>
					{ProductDummyData.map((data) => {
						const { id, img, name, brand, price, description, wished, inventory } = data;
						return (
							<Grid item xs={3}>
								<Link to={`/product/${id}`} state={{ data }}>
									<Product
										key={id}
										id={id}
										img={img}
										name={name}
										brand={brand}
										price={price}
										description={description}
										wished={wished}
										inventory={inventory}
									/>
								</Link>
							</Grid>
						);
					})}
				</Grid>
			</PageBody>
		</>
	);
};

export default ProductPage;
