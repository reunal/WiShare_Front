import React from 'react';
import { useLocation } from 'react-router-dom';
import { Grid, Button, ButtonGroup } from '@mui/material';
import noImage from '../../asset/images/noImage.jpeg';
import { DetailImage, DetailContent, DetailUnderLine } from '../../styles/product/StyledProduct';

const ProductDetail = (): JSX.Element => {
	const location = useLocation();
	const data = location.state?.data;
	return (
		<Grid container spacing={2}>
			<Grid item xs />
			<Grid item xs={5}>
				<DetailImage>
					<img src={noImage} alt="" />
				</DetailImage>
			</Grid>
			<Grid item xs={5}>
				<DetailContent>
					<h3>MLB 캡 모자</h3>
					<p>MLB</p>

					<h2>39,000 원</h2>
					<DetailUnderLine />
					<div>
						<ButtonGroup>
							<Button>위시하기</Button>
							<Button>선물하기</Button>
						</ButtonGroup>
					</div>
				</DetailContent>
			</Grid>
			<Grid item xs />
		</Grid>
	);
};

export default ProductDetail;
