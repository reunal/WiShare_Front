import React from 'react';
import { Grid, Switch, FormControlLabel } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { useRecoilState } from 'recoil';
import { StyledWishItem, StyledItemInfo, StyledButtons } from '../../styles/wishItem/StyledWishItem';
import { IWishItemType, myWishListState } from '../../recoil/WishItemAtom';

const Item = (data: IWishItemType) => {
	const [wishItems, setWishItems] = useRecoilState<IWishItemType[]>(myWishListState);
	const { id, name, img, brand, price } = data;
	console.log(img);
	function removeWishItemWithId(arr: IWishItemType[], index: number): IWishItemType[] {
		console.log(index);
		return [...arr.slice(0, index), ...arr.slice(index + 1)];
	}

	const findIndex = wishItems.findIndex((listItem) => {
		return listItem.id === id;
	});

	const onRemoveItem = (): void => {
		const newList = removeWishItemWithId(wishItems, findIndex);
		setWishItems(newList);
	};

	return (
		<StyledWishItem>
			<Grid container xs={12}>
				<Grid item xs={10}>
					<StyledItemInfo>
						<div>
							<img src={`${process.env.PUBLIC_URL}${img}`} alt="no_image" title="" />
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
						<IconButton aria-label="delete" onClick={onRemoveItem}>
							<DeleteIcon />
						</IconButton>
					</StyledButtons>
				</Grid>
			</Grid>
		</StyledWishItem>
	);
};

export default Item;
