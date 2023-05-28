import React from 'react';
import { SmallNameText } from '../../styles/CommonStyled';
import {
	StyledProductRegisterForm,
	StyledProductRegisterInput,
	StyledProductRegisterLabel,
	StyledProductRegisterSelect,
} from '../../styles/market/StyledMarket';

const ProductRegisterForm = () => {
	return (
		<StyledProductRegisterForm>
			<SmallNameText>상품명</SmallNameText>
			<StyledProductRegisterInput type="text" placeholder="상품명" />
			<SmallNameText>가격</SmallNameText>
			<StyledProductRegisterInput type="text" placeholder="가격" />
			<SmallNameText>카테고리</SmallNameText>
			<StyledProductRegisterSelect>
				<option value="cloth">의류</option>
				<option value="hat">모자</option>
			</StyledProductRegisterSelect>
			<SmallNameText>브랜드</SmallNameText>
			<StyledProductRegisterInput type="text" placeholder="MLB" />
			<SmallNameText>재고</SmallNameText>
			<StyledProductRegisterInput type="text" placeholder="재고량" />
			<SmallNameText>이미지</SmallNameText>
			<StyledProductRegisterLabel htmlFor="file">
				<p>첨부</p>
				<StyledProductRegisterInput type="file" id="file" />
			</StyledProductRegisterLabel>
		</StyledProductRegisterForm>
	);
};

export default ProductRegisterForm;
