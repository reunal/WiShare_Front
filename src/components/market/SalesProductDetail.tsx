import React from 'react';
import { Divider, Grid } from '@material-ui/core';
import WestIcon from '@material-ui/icons/ArrowBack';
import { useLocation, useNavigate } from 'react-router-dom';
import { BrandText, NameText, SmallTitleText, StyledDetailCard, StyledDetailItemInfo } from '../../styles/CommonStyled';
import { StyledDetailItemData, StyledMarket } from '../../styles/market/StyledMarket';

const SalesProductDetail = () => {
	const location = useLocation();
	const data = location.state?.data;
	const navigate = useNavigate();

	const { name, brand, img, category, price, quantity, viewCnt, like } = data;
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
							<img src={`${process.env.PUBLIC_URL}${img}`} alt="" title="" />
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
								<p>카테고리</p>
								<p>{category}</p>
							</div>
							<Divider />
							<div>
								<p>브랜드</p>
								<p>{brand}</p>
							</div>
							<Divider />
							<div>
								<p>재고</p>
								<p>{quantity}</p>
							</div>
							<Divider />
							<div>
								<p>조회수</p>
								<p>{viewCnt}</p>
							</div>
							<Divider />
							<div>
								<p>좋아요</p>
								<p>{like}</p>
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

export default SalesProductDetail;
