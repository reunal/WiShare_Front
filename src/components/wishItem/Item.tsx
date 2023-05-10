import React from 'react';
import { Grid, Switch, FormControlLabel } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { StyledWishItem, StyledItemInfo, StyledButtons } from '../../styles/wishItem/StyledWishItem';
import noImage from '../../asset/images/noImage.jpeg';

interface IWishItem {
	id: number;
	img: string;
	name: string;
	brand: string;
	price: number;
	description: string;
	wished: boolean;
	open: boolean;
}

const Item = (data: IWishItem) => {
	const { name, brand, price } = data;

	return (
		<StyledWishItem>
			<Grid container xs={12}>
				<Grid item xs={10}>
					<StyledItemInfo>
						<div>
							<img src={noImage} alt="no_image" title="" />
						</div>
						<div>
							<h6>{name}</h6>
							<p>{brand}</p>
						</div>
						<div>
							<h3>{price.toLocaleString()}원</h3>
						</div>
					</StyledItemInfo>
				</Grid>
				<Grid item xs={2}>
					<div className="h90Line fl ml10" />
					<StyledButtons>
						<FormControlLabel
							value="공개여부"
							control={<Switch color="primary" defaultChecked />}
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
