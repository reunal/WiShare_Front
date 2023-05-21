import React from 'react';
import { Grid } from '@mui/material';
import FriendRequest from '../../components/friend/FriendRequest';

const FriendRequestPage = (): JSX.Element => {
	return (
		<Grid xs={9}>
			<h4>4개의 친구 요청</h4>
			<FriendRequest />
		</Grid>
	);
};

export default FriendRequestPage;
