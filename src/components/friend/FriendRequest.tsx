import React from 'react';
import { IconButton } from '@mui/material';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import PersonRemoveAlt1Icon from '@mui/icons-material/PersonRemoveAlt1';
import { blue } from '@mui/material/colors';
import { FriendCard } from '../../styles/friend/StyledFriend';
import noImage from '../../asset/images/noImage.jpeg';

const FriendRequest = (): JSX.Element => {
	return (
		<FriendCard>
			<div>
				<img src={noImage} alt="noImage" title="noImage" />
			</div>
			<div>
				<h5>모유진</h5>
				<p>03월 01일</p>
			</div>
			<div>
				<IconButton>
					<PersonAddAlt1Icon sx={{ color: blue[500] }} />
				</IconButton>
				<IconButton>
					<PersonRemoveAlt1Icon />
				</IconButton>
			</div>
		</FriendCard>
	);
};

export default FriendRequest;
