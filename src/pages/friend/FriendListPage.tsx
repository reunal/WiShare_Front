import React from 'react';
import { Grid } from '@mui/material';
import Friend from '../../components/friend/Friend';
import FriendDummyData from '../../model/FriendDummyData';

const FriendListPage = (): JSX.Element => {
	return (
		<Grid item xs={9}>
			<h4>30명의 친구</h4>
			<div>
				<Grid container spacing={2}>
					{FriendDummyData.filter((data) => {
						return data.friendActive === true;
					}).map((item) => {
						return <Friend item={item} key={item.id} />;
					})}
				</Grid>
			</div>
		</Grid>
	);
};

export default FriendListPage;
