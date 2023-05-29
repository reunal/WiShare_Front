import React from 'react';
import { Grid, IconButton } from '@mui/material';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import { Link } from 'react-router-dom';
import { FriendCard } from '../../styles/friend/StyledFriend';
import noImage from '../../asset/images/noImage.jpeg';

interface IFriendType {
	item: {
		id: number;
		name: string;
		birthday: string;
		wishList: object;
		gender: string;
		friendActive: boolean;
	};
}

const Friend = ({ item }: IFriendType) => {
	const { name, birthday } = item;

	return (
		<Grid item xs={4}>
			<Link to={`/Friend/${item.id}`}>
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
			</Link>
		</Grid>
	);
};

export default Friend;
