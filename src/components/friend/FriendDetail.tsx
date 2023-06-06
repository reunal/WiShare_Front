import React from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import WestIcon from '@material-ui/icons/ArrowBack';
import {
	StyledFriendDetailUser,
	FriendWishTitle,
	FriendWishList,
	FriendsWishItem,
	FriendDelBtn,
} from '../../styles/friend/StyledFriend';
import { UnderLineW100, Back } from '../../styles/CommonStyled';
import noImage from '../../asset/images/noImage.jpeg';

const FriendDetail = (): JSX.Element => {
	const location = useLocation();
	const data = location.state;
	const navigate = useNavigate();

	const onBack = () => {
		navigate(-1);
	};

	return (
		<Grid container>
			<Grid xs={2} />
			<Grid xs={8}>
				<Back>
					<button type="button" onClick={onBack}>
						<WestIcon />
					</button>
				</Back>
				<StyledFriendDetailUser>
					<img src={noImage} alt="noImage" title="noImage" />
					<h3>{data.name}</h3>
					<p>{data.birthday}</p>
				</StyledFriendDetailUser>
				<UnderLineW100 top="30px" />
				<FriendWishTitle>
					<p>{data.name}님의 위시리스트</p>
				</FriendWishTitle>
				<FriendWishList container spacing={2}>
					{data.wishList.map(() => {
						return (
							<Grid item xs={4}>
								<FriendsWishItem>item</FriendsWishItem>
							</Grid>
						);
					})}
				</FriendWishList>
				<FriendDelBtn>
					<Link to="/friend">
						{/* 삭제 기능 구현 */}
						<button type="button">친구삭제</button>
					</Link>
				</FriendDelBtn>
			</Grid>
			<Grid xs={2} />
		</Grid>
	);
};

export default FriendDetail;
