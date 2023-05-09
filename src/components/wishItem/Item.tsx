import React from 'react';
import { Grid } from '@mui/material';
import { StyledWishItem, StyledItemInfo } from '../../styles/wishItem/StyledWishItem';

const Item = (): JSX.Element => {
	return (
		<StyledWishItem>
			<Grid container xs={12}>
				<Grid item xs={10}>
					<StyledItemInfo>
						<div>
							<img src="" alt="" title="" />
						</div>
						<div>
							<h6>MLB 캡모자</h6>
							<p>더 보기</p>
						</div>
						<div>
							<h3>38,000원</h3>
						</div>
					</StyledItemInfo>
				</Grid>
				<Grid item xs={2}>
					switch button
				</Grid>
			</Grid>
		</StyledWishItem>
	);
};

export default Item;
