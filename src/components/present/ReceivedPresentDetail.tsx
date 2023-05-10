import React from 'react';
import { Grid } from '@mui/material';
import { Divider } from '@material-ui/core';
import WestIcon from '@material-ui/icons/ArrowBack';
import { useNavigate, useParams } from 'react-router-dom';
import {
	EnterAddressBoxStyled,
	EnterAddressForm,
	PresentDetailCardStyled,
	StyledEnterAddress,
	StyledPresent,
} from '../../styles/present/StyledPresent';
import logo from '../../logo.svg';

const data = [
	{
		id: 1,
		brand: 'MLB',
		title: 'MLB 캡 모자',
		sender: '홍길동',
		date: '2023-05-08',
	},
	{
		id: 2,
		brand: '삼다수',
		title: '삼다수 2L * 24',
		sender: '홍길동',
		date: '2023-05-07',
	},
	{
		id: 3,
		brand: '허쉬',
		title: '허쉬초콜릿',
		sender: '홍길동',
		date: '2023-05-06',
	},
	{
		id: 4,
		brand: '네스프레소',
		title: '네스프래소 캡슐',
		sender: '홍길동',
		date: '2023-05-05',
	},
];

const ReceivedPresentDetail = (): JSX.Element => {
	const { id } = useParams();
	const navigate = useNavigate();

	const onBack = () => {
		navigate(-1);
	};

	return (
		<StyledPresent>
			<Grid container spacing={3} direction="row" justifyContent="center" alignItems="center">
				<Grid item xs={2} />
				<Grid item xs={8}>
					<StyledEnterAddress>
						<button type="button" onClick={onBack}>
							<WestIcon /> 목록
						</button>
						<EnterAddressBoxStyled>
							<PresentDetailCardStyled>
								<h2>{data[Number(id) - 1].sender} 님의 선물</h2>
								<img src={logo} alt="" title="" />
								<div>
									<p>{data[Number(id) - 1].brand}</p>
									<h2>{data[Number(id) - 1].title}</h2>
								</div>
							</PresentDetailCardStyled>
							<Divider />
							<EnterAddressForm>
								<p>배송지</p>
								<div>
									<input type="text" placeholder="주소를 입력해주세요" />
									<button type="button">배송지 수정</button>
								</div>
							</EnterAddressForm>
						</EnterAddressBoxStyled>
					</StyledEnterAddress>
				</Grid>
				<Grid item xs={2} />
			</Grid>
		</StyledPresent>
	);
};

export default ReceivedPresentDetail;
