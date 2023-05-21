import React from 'react';
import { Grid, IconButton } from '@mui/material';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import PersonRemoveAlt1Icon from '@mui/icons-material/PersonRemoveAlt1';
import { blue } from '@mui/material/colors';
import { FriendRequestCard } from '../../styles/friend/StyledFriend';
import noImage from '../../asset/images/noImage.jpeg';

const FriendRequest = (): JSX.Element => {
	return (
		<FriendRequestCard>
			<Grid container>
				<Grid xs={1}>
					<img src={noImage} alt="noImage" title="noImage" />
				</Grid>
				<Grid xs={9}>
					<h5>모유진</h5>
					<p>03월 01일</p>
				</Grid>
				<Grid xs={2}>
					<IconButton>
						<PersonAddAlt1Icon sx={{ color: blue[500] }} />
					</IconButton>
					<IconButton>
						<PersonRemoveAlt1Icon />
					</IconButton>
				</Grid>
			</Grid>
		</FriendRequestCard>
	);
};

export default FriendRequest;
