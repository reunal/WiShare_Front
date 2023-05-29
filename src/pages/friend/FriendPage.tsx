import React, { useState } from 'react';
import { Grid } from '@mui/material';
import FriendSideBar from '../../components/friend/FriendSideBar';
import { StyledFriend } from '../../styles/friend/StyledFriend';
import FriendListPage from './FriendListPage';
import FriendRequestPage from './FriendRequestPage';

const FriendPage = (): JSX.Element => {
	const [check, setCheck] = useState<boolean>(true);

	return (
		<StyledFriend>
			<Grid container spacing={3}>
				<FriendSideBar check={check} setCheck={setCheck} />
				{check ? <FriendListPage /> : <FriendRequestPage />}
			</Grid>
		</StyledFriend>
	);
};

export default FriendPage;
