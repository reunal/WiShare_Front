import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import WestIcon from '@material-ui/icons/ArrowBack';
import { Grid } from '@mui/material';
import noImage from '../../asset/images/noImage.jpeg';
import { DetailImage, DetailContent, DetailUnderLine, DetailBtnGroup, Back } from '../../styles/product/StyledProduct';

const ProductDetail = () => {
	const location = useLocation();
	const data = location.state?.data;
	const navigate = useNavigate();

	const onBack = () => {
		navigate(-1);
	};

	const { name, brand, price, inventory } = data;

	return (
		<Grid container spacing={2}>
			<Grid item xs={2} />
			<Grid item xs={4}>
				<Back>
					<button type="button" onClick={onBack}>
						<WestIcon /> 목록
					</button>
				</Back>
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
