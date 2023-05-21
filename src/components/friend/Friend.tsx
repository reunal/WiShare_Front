import React from 'react';
import { Grid, IconButton } from '@mui/material';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import { FriendCard } from '../../styles/friend/StyledFriend';
import noImage from '../../asset/images/noImage.jpeg';

interface IFriendType {
	item: {
		id: number;
		name: string;
		birthday: string;
		wishList: any;
		gender: string;
		friendActive: boolean;
	};
}

const Friend = ({ item }: IFriendType) => {
	const { name, birthday } = item;

	return (
		<Grid item xs={4}>
			<FriendCard>
				<div>
					<img src={noImage} alt="noImage" title="noImage" />
				</div>
				<div>
					<h5>{name}</h5>
					<p>{birthday}</p>
				</div>
				<div>
					<IconButton>
						<PersonRemoveIcon />
					</IconButton>
				</div>
			</FriendCard>
		</Grid>
	);
};

export default Friend;
