import React from 'react';
import { Divider, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import {
	StyledProductNameWrapper,
	StyledSoldProductCard,
	StyledSoldProductStatusText,
	StyledProductItem,
	StyledSoldProductContent,
	StyledInvoiceInputButton,
} from '../../styles/market/StyledMarket';
import noImage from '../../asset/images/noImage.jpeg';
import { BrandText, NameText } from '../../styles/CommonStyled';

interface ISoldProductType {
	id: number;
	name: string;
	brand: string;
	price: number;
	quantity: number;
	purchaser: string;
	address: string;
	orderNumber: number;
	entered: boolean;
	date: string;
}

const SoldProduct = (data: ISoldProductType) => {
	const { id, name, brand, quantity, orderNumber, entered, date } = data;

	return (
		<StyledSoldProductCard>
			<p>{date}</p>
			<Grid container spacing={3}>
				<Grid item xs={2}>
					<img src={noImage} alt={name} />
				</Grid>
				<Grid item xs={10}>
					<StyledProductItem>
						{/* <Grid container item direction="row" spacing={3} alignItems="center"> */}
						<Grid item xs={8}>
							<StyledProductNameWrapper>
								<BrandText>{brand}</BrandText>
								<NameText>{name}</NameText>
							</StyledProductNameWrapper>
							<p>
								수량 : {quantity} | 주문번호 : {orderNumber}
							</p>
						</Grid>
						<Grid item xs={2}>
							<StyledSoldProductContent>
								<Divider orientation="vertical" flexItem />
								<StyledSoldProductStatusText status={entered}>
									<NameText>{entered ? '입력 완료' : '입력 대기'}</NameText>
								</StyledSoldProductStatusText>
							</StyledSoldProductContent>
						</Grid>
						<Grid item xs={2}>
							<StyledSoldProductContent>
								<Divider orientation="vertical" flexItem />
								<Link to={`/soldList/${id}`} state={{ data }}>
									<StyledInvoiceInputButton>입력하기</StyledInvoiceInputButton>
								</Link>
							</StyledSoldProductContent>
						</Grid>
					</StyledProductItem>
				</Grid>
			</Grid>
			{/* </Grid> */}
		</StyledSoldProductCard>
	);
};

export default SoldProduct;
