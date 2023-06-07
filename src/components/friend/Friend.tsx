import React from 'react';
import { useRecoilState } from 'recoil';
import { Grid, IconButton } from '@mui/material';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import { Link } from 'react-router-dom';
import { FriendCard } from '../../styles/friend/StyledFriend';
import noImage from '../../asset/images/noImage.jpeg';
import { FriendList, IFriendType } from '../../recoil/FriendAtom';

interface FriendProps {
	data: IFriendType;
}

function removeFriendWithId(arr: IFriendType[], index: number): IFriendType[] {
	return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

const Friend = ({ data }: FriendProps) => {
	const [Friends, setFriends] = useRecoilState<IFriendType[]>(FriendList);
	const { id, name, birthday } = data;

	const findIndex = Friends.findIndex((listItem) => {
		return listItem === data;
	});

	const onClickDelete = (): void => {
		if (!window.confirm('정말 친구삭제하시겠습니까?')) return;

		const newList = removeFriendWithId(Friends, findIndex);
		setFriends(newList);
	};

	return (
		<Grid item xs={4}>
			<FriendCard>
				<div>
					<img src={noImage} alt="noImage" title="noImage" />
				</div>
				<div>
					<Link to={`/Friend/${id}`} state={data}>
						<h5>{name}</h5>
					</Link>
					<p>{birthday}</p>
				</div>
				<div>
					<IconButton onClick={onClickDelete}>
						<PersonRemoveIcon />
					</IconButton>
				</div>
			</FriendCard>
		</Grid>
	);
};

export default Friend;
