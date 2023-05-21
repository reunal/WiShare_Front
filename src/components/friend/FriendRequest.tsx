import React from 'react';
import { Grid } from '@mui/material';
import { FriendCard } from '../../styles/friend/StyledFriend';
import noImage from '../../asset/images/noImage.jpeg';

const FriendRequest = (): JSX.Element => {
	return (
		<Grid item xs={9}>
			<FriendCard>
				<div>
					<img src={noImage} alt="noImage" title="noImage" />
				</div>
				<div>
					<h5>모유진</h5>
					<p>03월 01일</p>
				</div>
				<div>icon</div>
			</FriendCard>
		</Grid>
	);
};

export default FriendRequest;
