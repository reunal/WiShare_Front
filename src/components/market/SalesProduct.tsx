import React from 'react';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { BrandText, CardBaseStyle, NameText, SmallTitleText } from '../../styles/CommonStyled';
import logo from '../../logo.svg';
import { StyledSalesProductCard } from '../../styles/market/StyledMarket';

interface ISoldProductType {
	id: number;
	name: string;
	brand: string;
	category: string;
	price: number;
	quantity: number;
	orderNumber: number;
	viewCnt: number;
	like: number;
}

const SalesProduct = (data: ISoldProductType) => {
	const { id, name, price, quantity } = data;
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
							<BrandText>남은 재고 : {quantity}ea</BrandText>
						</div>
					</StyledSalesProductCard>
				</Link>
			</CardBaseStyle>
		</Grid>
	);
};

export default SalesProduct;
