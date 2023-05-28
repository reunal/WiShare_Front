import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Divider, Grid } from '@material-ui/core';
import WestIcon from '@material-ui/icons/ArrowBack';
import { StyledDetailItemData, StyledMarket } from '../../styles/market/StyledMarket';
import { BrandText, NameText, SmallTitleText, StyledDetailCard, StyledDetailItemInfo } from '../../styles/CommonStyled';
import logo from '../../logo.svg';

const SoldProductDetail = () => {
	const location = useLocation();
	const data = location.state?.data;
	const navigate = useNavigate();

	const { name, brand, price, quantity, purchaser, address, orderNumber } = data;

	const onBack = () => {
		navigate(-1);
	};

	return (
		<StyledMarket>
			<Grid container spacing={3} direction="row" justifyContent="center" alignItems="center">
				<Grid item xs={2} />
				<Grid item xs={8}>
					<StyledDetailCard>
						<button type="button" onClick={onBack}>
							<WestIcon /> 목록
						</button>
						<StyledDetailItemInfo>
							<img src={logo} alt="" title="" />
							<div>
								<BrandText>{brand}</BrandText>
								<NameText>{name}</NameText>
							</div>
						</StyledDetailItemInfo>
						<Divider />
						<StyledDetailItemData>
							<SmallTitleText>상품 정보</SmallTitleText>
							<Divider />
							<div>
								<p>상품명</p>
								<p>{name}</p>
							</div>
							<Divider />
							<div>
								<p>가격</p>
								<p>{price}</p>
							</div>
							<Divider />
							<div>
								<p>주문번호</p>
								<p>{orderNumber}</p>
							</div>
							<Divider />
							<div>
								<p>구매자</p>
								<p>{purchaser}</p>
							</div>
							<Divider />
							<div>
								<p>재고</p>
								<p>{quantity}</p>
							</div>
							<Divider />
							<div>
								<p>주소</p>
								<p>{address}</p>
							</div>
							<Divider />
							<div>
								<p>송장번호</p>
								<p>00000000</p>
								<button type="button">번호입력</button>
							</div>
							<Divider />
						</StyledDetailItemData>
					</StyledDetailCard>
				</Grid>
				<Grid item xs={2} />
			</Grid>
		</StyledMarket>
	);
};

export default SoldProductDetail;
