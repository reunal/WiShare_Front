import React from 'react';
// import { useRecoilState } from 'recoil';
import { CardBaseStyle, ProductCardStyle } from '../../styles/CommonStyled';
import { IProductType } from '../../recoil/ProductAtom';
// import { myWishListState } from '../../recoil/WishItemAtom';

const Product = (data: IProductType) => {
	// const [wishList, setWishList] = useRecoilState<IProductType[]>(myWishListState);

	const { name, img, brand, price } = data;

	// const addWish = (e: any) => {
	// 	e.preventDefault();
	// };

	return (
		<CardBaseStyle>
			<ProductCardStyle>
				<img src={`${process.env.PUBLIC_URL}${img}`} alt="no_Image" title="" />
				<div>
					<p>{brand}</p>
					<h6>{name}</h6>
				</div>
				<div>
					<h3>{price.toLocaleString()}원</h3>
					<button type="button">위시하기</button>
				</div>
			</ProductCardStyle>
		</CardBaseStyle>
	);
};

export default Product;
