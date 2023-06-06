import React from 'react';
import { useRecoilValue } from 'recoil';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { PageTitleKr, PageBody, PageTitleHead } from '../../styles/CommonStyled';
import FilterBtn from '../../components/productList/FilterBtn';
import Product from '../../components/productList/Product';
import { ProductAtom } from '../../recoil/ProductAtom';

const ProductPage = (): JSX.Element => {
	const productData = useRecoilValue(ProductAtom);

	return (
		<>
			<PageTitleHead>
				<PageTitleKr>마켓 : 원하는 아이템을 위시하세요!</PageTitleKr>
				<FilterBtn />
			</PageTitleHead>
			<PageBody>
				<Grid container spacing={2}>
					{productData.map((data) => {
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
