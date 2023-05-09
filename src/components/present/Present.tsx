import React from 'react';
import { Grid } from '@mui/material';
import { CardBaseStyle } from '../../styles/CommonStyled';
import { PresentCardStyled } from '../../styles/present/StyledPresent';

const Present = (): JSX.Element => {
	return (
		<Grid item xs={4}>
			<CardBaseStyle>
				<PresentCardStyled>
					<img src="" alt="" title="" />
					<div>
						<p>MLB</p>
						<h5>MLB 캡모자</h5>
					</div>
					<div>
						<h6>From</h6>
						<span>모유진</span>
						<p>2023.05.09</p>
					</div>
				</PresentCardStyled>
			</CardBaseStyle>
		</Grid>
	);
};

export default Present;
