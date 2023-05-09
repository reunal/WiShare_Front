import React from 'react';
import { Grid, Switch, FormControlLabel } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { StyledWishItem, StyledItemInfo, StyledButtons } from '../../styles/wishItem/StyledWishItem';

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
							<h3>34,000원</h3>
						</div>
					</StyledItemInfo>
				</Grid>
				<Grid item xs={2}>
					<div className="h90Line fl ml10" />
					<StyledButtons>
						<FormControlLabel
							value="공개여부"
							control={<Switch color="primary" />}
							label="공개여부"
							labelPlacement="start"
						/>
						<IconButton aria-label="delete">
							<DeleteIcon />
						</IconButton>
					</StyledButtons>
				</Grid>
			</Grid>
		</StyledWishItem>
	);
};

export default Item;
