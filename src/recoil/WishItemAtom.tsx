import { atom } from 'recoil';

export interface IProductType {
	id: number;
	img: string;
	name: string;
	brand: string;
	price: number;
	description: string;
	wished: boolean;
	inventory: number;
}

export const myWishListState = atom<IProductType[]>({
	key: 'wishList',
	default: [],
});
