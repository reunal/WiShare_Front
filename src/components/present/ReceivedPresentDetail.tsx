import React from 'react';
import { Grid } from '@mui/material';
import { Divider } from '@material-ui/core';
import WestIcon from '@material-ui/icons/ArrowBack';
import {
	EnterAddressBoxStyled,
	EnterAddressForm,
	PresentDetailCardStyled,
	StyledEnterAddress,
	StyledPresent,
} from '../../styles/present/StyledPresent';
import logo from '../../logo.svg';

const ReceivedPresentDetail = (): JSX.Element => {
	return (
		<StyledPresent>
			<Grid container spacing={3} direction="row" justifyContent="center" alignItems="center">
				<Grid item xs={2} />
				<Grid item xs={8}>
					<StyledEnterAddress>
						<p>
							<WestIcon /> 목록
						</p>
						<EnterAddressBoxStyled>
							<PresentDetailCardStyled>
								<h2>강수성 님의 선물</h2>
								<img src={logo} alt="" title="" />
								<div>
									<p>MLB</p>
									<h2>MLB 캡 모자</h2>
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
