import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import WestIcon from '@material-ui/icons/ArrowBack';
import { Grid, Modal } from '@mui/material';
import { useRecoilState, useRecoilValue } from 'recoil';
import noImage from '../../asset/images/noImage.jpeg';
import { Back, NameText } from '../../styles/CommonStyled';
import {
	DetailImage,
	DetailContent,
	DetailUnderLine,
	DetailBtnGroup,
	StyledModalBox,
	StyledFriendList,
	StyledPresentFriendCard,
} from '../../styles/product/StyledProduct';
import { FriendList, IFriendType } from '../../recoil/FriendAtom';
import { IWishItemType, myWishListState } from '../../recoil/WishItemAtom';
import { ISoldProductType, SoldProductList } from '../../recoil/SoldProductAtom';
import { IProductType, ProductAtom } from '../../recoil/ProductAtom';

declare global {
	interface Window {
		IMP?: any;
	}
}

interface IUserType {
	name: string;
}

const ProductDetail = () => {
	const location = useLocation();
	const data = location.state?.data;
	const navigate = useNavigate();
	const [isVisible, setIsVisible] = useState(false);
	const Friends = useRecoilValue<IFriendType[]>(FriendList);
	const [wishList, setWishList] = useRecoilState<IWishItemType[]>(myWishListState);
	const [, setProductList] = useRecoilState<IProductType[]>(ProductAtom);
	const [soldProductLists, setSoldProductLists] = useRecoilState<ISoldProductType[]>(SoldProductList);

	useEffect(() => {
		const jquery = document.createElement('script');
		jquery.src = 'https://code.jquery.com/jquery-1.12.4.min.js';
		const iamport = document.createElement('script');
		iamport.src = 'https://cdn.iamport.kr/js/iamport.payment-1.1.7.js';
		document.head.appendChild(jquery);
		document.head.appendChild(iamport);
		return () => {
			document.head.removeChild(jquery);
			document.head.removeChild(iamport);
		};
	}, []);

	const onChangeModal = () => {
		setIsVisible(!isVisible);
	};

	const onBack = () => {
		navigate(-1);
	};

	const onInsertWishList = () => {
		const newItem: IWishItemType = {
			id: wishList.length + 1,
			img: data.img,
			name: data.name,
			brand: data.brand,
			price: data.price,
			description: data.description,
			wished: false,
			open: true,
		};

		const isDuplicate = wishList.some((item) => {
			return item.name === newItem.name;
		});

		if (!isDuplicate) {
			setWishList((prevWishList) => {
				return [...prevWishList, newItem];
			});
		}
		onBack();
	};

	const onChangeProductList = () => {
		setProductList((prevProduct) => {
			return prevProduct.map((item) => {
				if (item.id === data.id) {
					return {
						...item,
						inventory: data.inventory - 1,
					};
				}
				return item;
			});
		});
	};

	const onInsertSoldProductList = () => {
		const newItem: ISoldProductType = {
			id: soldProductLists.length + 1,
			img: data.img,
			name: data.name,
			brand: data.brand,
			category: data.category,
			price: data.price,
			description: data.description,
			quantity: 1,
			purchaser: '모유진',
			address: '경상북도 구미시 대학로 61 금오공과대학교',
			addressNumber: '',
			orderNumber: 312655,
			entered: false,
			date: '2023-05-07',
		};

		setSoldProductLists((prevWishList) => {
			return [...prevWishList, newItem];
		});
	};

	function callback(response: any) {
		const { success } = response;

		if (success) {
			onChangeProductList();
			onInsertSoldProductList();
			alert('결제 성공');
			navigate('/');
		} else {
			alert(`결제 실패:`);
		}
	}

	const { name, brand, img, price, inventory } = data;

	const onPayment = (user: IUserType, company: string) => {
		if (!window.confirm(`${user.name}에게 선물하시겠습니까?`)) return;

		const { IMP } = window;
		IMP.init('imp40654317');

		const payment = {
			pg: company, // PG사 (필수항목)
			pay_method: 'card', // 결제수단 (필수항목)
			merchant_uid: `mid_${new Date().getTime()}`, // 결제금액 (필수항목)
			name, // 주문명 (필수항목)
			amount: price, // 금액 (필수항목)
			custom_data: { name: user.name, desc: '세부 부가정보' },
			buyer_email: 'scab12341@gmail.com',
			buyer_name: '모유진',
			buyer_tel: '010-1234-5678',
			buyer_addr: '서울특별시 강남구 삼성동',
			buyer_postcode: '123-456',
		};
		IMP.request_pay(payment, callback);
	};

	return (
		<Grid container spacing={2}>
			<Grid item xs={2} />
			<Grid item xs={4}>
				<Back>
					<button type="button" onClick={onBack}>
						<WestIcon />
					</button>
				</Back>
				<DetailImage>
					<img src={`${process.env.PUBLIC_URL}${img}`} alt="" />
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
						<button type="button" onClick={onInsertWishList}>
							위시하기
						</button>
						<button type="button" onClick={onChangeModal}>
							선물하기
						</button>
					</DetailBtnGroup>
				</DetailContent>
				<Modal
					open={isVisible}
					onClose={onChangeModal}
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description"
				>
					<StyledModalBox>
						<NameText>선물할 친구를 선택해주세요</NameText>
						<StyledFriendList>
							{Friends.filter((item: IFriendType) => {
								return item.friendActive === true;
							}).map((item: IFriendType) => {
								return (
									<StyledPresentFriendCard>
										<div>
											<img src={noImage} alt="noImage" title="noImage" />
										</div>
										<div>
											<h5>{item.name}</h5>
										</div>
										<DetailBtnGroup>
											<button
												type="button"
												onClick={() => {
													return onPayment(item, 'html5_inicis');
												}}
											>
												선물하기
											</button>
											<button
												type="button"
												onClick={() => {
													return onPayment(item, 'kakaopay');
												}}
											>
												카카오페이
											</button>
										</DetailBtnGroup>
									</StyledPresentFriendCard>
								);
							})}
						</StyledFriendList>
					</StyledModalBox>
				</Modal>
			</Grid>
			<Grid item xs={2} />
		</Grid>
	);
};

export default ProductDetail;
