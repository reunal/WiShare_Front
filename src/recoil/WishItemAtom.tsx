import { atom } from 'recoil';
import MyWishItemDummyData from '../model/MyWishItemDummyData';

export interface IWishItemType {
	id: number;
	img: string;
	name: string;
	brand: string;
	price: number;
	description: string;
	wished: boolean;
	open: boolean;
}

export const myWishListState = atom<IWishItemType[]>({
	key: 'wishList',
	default: MyWishItemDummyData,
});
