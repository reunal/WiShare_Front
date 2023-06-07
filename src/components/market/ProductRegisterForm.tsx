import React, { useState, ChangeEvent } from 'react';
import { SmallNameText } from '../../styles/CommonStyled';
import {
	StyledProductRegisterButton,
	StyledProductRegisterForm,
	StyledProductRegisterInput,
	StyledProductRegisterLabel,
	StyledProductRegisterSelect,
} from '../../styles/market/StyledMarket';

interface IEventType extends ChangeEvent<HTMLInputElement | HTMLSelectElement> {
	target: HTMLInputElement | HTMLSelectElement;
}

const ProductRegisterForm = () => {
	const [content, setContent] = useState({
		img: '',
		name: '',
		brand: '',
		category: '',
		price: 0,
		quantity: 10,
		viewCnt: 0,
		like: 0,
		entered: false,
		date: '2023-05-07',
	});

	const onChangeContent = (e: IEventType) => {
		setContent({
			...content,
			[e.target.name]: e.target.value,
		});
	};

	const onUploadImg = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files.length > 0) {
			const img = URL.createObjectURL(e.target.files[0]);
			setContent({
				...content,
				[e.target.name]: img,
			});
		}
	};

	const onSubmit = () => {};

	return (
		<StyledProductRegisterForm>
			<SmallNameText>상품명</SmallNameText>
			<StyledProductRegisterInput
				type="text"
				placeholder="상품명"
				name="name"
				value={content.name}
				onChange={onChangeContent}
			/>
			<SmallNameText>가격</SmallNameText>
			<StyledProductRegisterInput
				type="text"
				placeholder="가격"
				name="price"
				value={content.price}
				onChange={onChangeContent}
			/>
			<SmallNameText>카테고리</SmallNameText>
			<StyledProductRegisterSelect name="category" value={content.category} onChange={onChangeContent}>
				<option value="hat">모자</option>
				<option value="cloth">옷</option>
				<option value="accessory">악세사리</option>
				<option value="food">음식</option>
				<option value="drink">음료수</option>
			</StyledProductRegisterSelect>
			<SmallNameText>브랜드</SmallNameText>
			<StyledProductRegisterInput
				type="text"
				placeholder="MLB"
				name="brand"
				value={content.brand}
				onChange={onChangeContent}
			/>
			<SmallNameText>재고</SmallNameText>
			<StyledProductRegisterInput
				type="text"
				placeholder="재고량"
				name="quantity"
				value={content.quantity}
				onChange={onChangeContent}
			/>
			<SmallNameText>이미지</SmallNameText>
			<StyledProductRegisterLabel htmlFor="file">
				<span>{content.img}</span>
				<p>첨부</p>
				<StyledProductRegisterInput type="file" id="file" name="img" onChange={onUploadImg} />
			</StyledProductRegisterLabel>
			<StyledProductRegisterButton onClick={onSubmit}>등록하기</StyledProductRegisterButton>
		</StyledProductRegisterForm>
	);
};

export default ProductRegisterForm;
