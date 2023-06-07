import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { PageTitleKr, PageBody, PageTitleHead } from '../../styles/CommonStyled';
import FilterBtn from '../../components/productList/FilterBtn';
import Product from '../../components/productList/Product';
import { IProductType, ProductAtom } from '../../recoil/ProductAtom';

const ProductPage = (): JSX.Element => {
	const productData = useRecoilValue(ProductAtom);
	const [, setProduct] = useRecoilState<IProductType[]>(ProductAtom);

	const onChangeViewCnt = (productId: number) => {
		setProduct((prevProduct) => {
			return prevProduct.map((item) => {
				if (item.id === productId) {
					return { ...item, viewCnt: (item.viewCnt || 0) + 1 };
				}
				return item;
			});
		});
	};

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
								<Link
									to={`/product/${id}`}
									state={{ data }}
									onClick={() => {
										return onChangeViewCnt(id);
									}}
								>
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
