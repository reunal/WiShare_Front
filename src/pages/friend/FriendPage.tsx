import React, { useState } from 'react';
import { Grid } from '@mui/material';
import FriendSideBar from '../../components/friend/FriendSideBar';
import { StyledFriend } from '../../styles/friend/StyledFriend';

const FriendPage = (): JSX.Element => {
	const [check, setCheck] = useState<boolean>(true);

	return (
		<StyledFriend>
			<Grid container spacing={3}>
				<FriendSideBar check={check} setCheck={setCheck} />
				{check ? '마이프렌드 리스트' : '요청받은 친구'}
			</Grid>
		</StyledFriend>
	);
};

export default FriendPage;
