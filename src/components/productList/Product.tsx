import React from 'react';
import { CardBaseStyle, ProductCardStyle } from '../../styles/CommonStyled';
import noImage from '../../asset/images/noImage.jpeg';

interface IProductType {
	id: number;
	img: string;
	name: string;
	brand: string;
	price: number;
	description: string;
	wished: boolean;
}

const Product = (data: IProductType) => {
	const { name, brand, price } = data;

	return (
		<CardBaseStyle>
			<ProductCardStyle>
				<img src={noImage} alt="no_Image" title="" />
				<div>
					<p>{brand}</p>
					<h6>{name}</h6>
				</div>
				<div>
					<h3>{price.toLocaleString()}</h3>
					<button type="button">위시하기</button>
				</div>
			</ProductCardStyle>
		</CardBaseStyle>
	);
};

export default Product;
