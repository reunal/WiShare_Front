import React from 'react';
import { Grid } from '@mui/material';
import FriendRequest from '../../components/friend/FriendRequest';

const FriendRequestPage = (): JSX.Element => {
	return (
		<Grid xs={9}>
			<FriendRequest />
		</Grid>
	);
};

export default FriendRequestPage;
