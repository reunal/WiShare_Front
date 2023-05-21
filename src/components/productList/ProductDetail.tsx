import React from 'react';
import { useLocation } from 'react-router-dom';
import { Grid } from '@mui/material';
import noImage from '../../asset/images/noImage.jpeg';
import { DetailImage, DetailContent, DetailUnderLine, DetailBtnGroup } from '../../styles/product/StyledProduct';

const ProductDetail = () => {
	const location = useLocation();
	const data = location.state?.data;

	const { name, brand, price, inventory } = data;

	return (
		<Grid container spacing={2}>
			<Grid item xs={2} />
			<Grid item xs={4}>
				<DetailImage>
					<img src={noImage} alt="" />
				</DetailImage>
			</Grid>
			<Grid item xs={4}>
				<DetailContent>
					<h3>{name}</h3>
					<p>{brand}</p>

					<h2>{price.toLocaleString()}원</h2>
					<DetailUnderLine />
					<div>{inventory <= 10 ? <p>{inventory.toLocaleString()} 개 남았습니다!</p> : ''}</div>
					<DetailBtnGroup>
						<button type="button">위시하기</button>
						<button type="button">선물하기</button>
					</DetailBtnGroup>
				</DetailContent>
			</Grid>
			<Grid item xs={2} />
		</Grid>
	);
};

export default ProductDetail;
