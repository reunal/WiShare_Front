import React from 'react';
import { Grid } from '@mui/material';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import { FriendCard } from '../../styles/friend/StyledFriend';
import noImage from '../../asset/images/noImage.jpeg';

const Friend = (): JSX.Element => {
	return (
		<Grid item xs={4}>
			<FriendCard>
				<div>
					<img src={noImage} alt="noImage" title="noImage" />
				</div>
				<div>
					<h5>모유진</h5>
					<p>03월 01일</p>
				</div>
				<div>
					<PersonRemoveIcon />
				</div>
			</FriendCard>
		</Grid>
	);
};

export default Friend;
