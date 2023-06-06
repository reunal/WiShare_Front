import React from 'react';
import { Grid } from '@material-ui/core';
import { useRecoilValue } from 'recoil';
import { StyledSalesProductListBox } from '../../styles/market/StyledMarket';
import SalesProduct from '../../components/market/SalesProduct';
import { IProductType, ProductAtom } from '../../recoil/ProductAtom';

const SalesProductPage = (): JSX.Element => {
	const productData = useRecoilValue(ProductAtom);

	return (
		<Grid item xs={9}>
			<h1>{productData.length}개의 등록된 상품이 있습니다.</h1>
			<StyledSalesProductListBox>
				<Grid container spacing={2}>
					{productData.map((data: IProductType) => {
						const { id, img, name, brand, category, price, description, wished, inventory, viewCnt, like } = data;

						return (
							<SalesProduct
								key={id}
								id={id}
								img={img}
								name={name}
								brand={brand}
								category={category}
								description={description}
								wished={wished}
								price={price}
								inventory={inventory}
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
