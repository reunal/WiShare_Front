import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import WestIcon from '@material-ui/icons/ArrowBack';
import { Grid, Modal } from '@mui/material';
import noImage from '../../asset/images/noImage.jpeg';
import {
	DetailImage,
	DetailContent,
	DetailUnderLine,
	DetailBtnGroup,
	Back,
	StyledModalBox,
	StyledFriendList,
	StyledPresentFriendCard,
} from '../../styles/product/StyledProduct';
import { NameText } from '../../styles/CommonStyled';
import FriendDummyData from '../../model/FriendDummyData';

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

	function callback(response: any) {
		const { success } = response;

		if (success) {
			alert('결제 성공');
		} else {
			alert(`결제 실패:`);
		}
	}

	const { name, brand, price, inventory } = data;

	const onPayment = (user: IUserType) => {
		const { IMP } = window;
		IMP.init('imp40654317');

		const payment = {
			pg: 'html5_inicis', // PG사 (필수항목)
			pay_method: 'card', // 결제수단 (필수항목)
			merchant_uid: `mid_${new Date().getTime()}`, // 결제금액 (필수항목)
			name, // 주문명 (필수항목)
			amount: price, // 금액 (필수항목)
			custom_data: { name: user.name, desc: '세부 부가정보' },
			buyer_email: '',
			buyer_name: user.name,
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
							{FriendDummyData.filter((item) => {
								return item.friendActive === true;
							}).map((item) => {
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
													return onPayment(item);
												}}
											>
												선물하기
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
