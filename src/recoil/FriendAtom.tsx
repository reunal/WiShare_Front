import { atom } from 'recoil';
import FriendDummyData from '../model/FriendDummyData';

export interface IFriendType {
	id: number;
	name: string;
	birthday: string;
	wishList: object;
	gender: string;
	friendActive: boolean;
}

export const FriendList = atom<IFriendType[]>({
	key: 'friends',
	default: FriendDummyData,
});
