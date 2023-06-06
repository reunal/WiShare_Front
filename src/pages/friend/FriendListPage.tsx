import React from 'react';
import { Grid } from '@mui/material';
import { useRecoilValue } from 'recoil';
import Friend from '../../components/friend/Friend';
// import FriendDummyData from '../../model/FriendDummyData';
import { FriendList, IFriendType } from '../../recoil/FriendAtom';

const FriendListPage = (): JSX.Element => {
	const Friends = useRecoilValue<IFriendType[]>(FriendList);

	return (
		<Grid item xs={9}>
			<h4>30명의 친구</h4>
			<div>
				<Grid container spacing={2}>
					{Friends.filter((data: IFriendType) => {
						return data.friendActive === true;
					}).map((data: IFriendType) => {
						return <Friend data={data} key={data.id} />;
					})}
				</Grid>
			</div>
		</Grid>
	);
};

export default FriendListPage;
