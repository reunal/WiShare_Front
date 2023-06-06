import React from 'react';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { BrandText, CardBaseStyle, NameText, SmallTitleText } from '../../styles/CommonStyled';
import logo from '../../logo.svg';
import { StyledSalesProductCard } from '../../styles/market/StyledMarket';
import { IProductType } from '../../recoil/ProductAtom';

const SalesProduct = (data: IProductType) => {
	const { id, name, price, inventory } = data;
	return (
		<Grid item xs={4}>
			<CardBaseStyle>
				<Link to={`/salesList/${id}`} state={{ data }}>
					<StyledSalesProductCard>
						<img src={logo} alt="" title="" />
						<div>
							<SmallTitleText weight={400}>{name}</SmallTitleText>
							<NameText>{price}</NameText>
						</div>
						<div>
							<BrandText>남은 재고 : {inventory}ea</BrandText>
						</div>
					</StyledSalesProductCard>
				</Link>
			</CardBaseStyle>
		</Grid>
	);
};

export default SalesProduct;
