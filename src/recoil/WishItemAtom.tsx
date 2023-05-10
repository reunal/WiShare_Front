import { atom } from 'recoil';

export interface IProductType {
	id: number;
	img: string;
	name: string;
	brand: string;
	price: number;
	description: string;
	wished: boolean;
}

export const myWishListState = atom<IProductType[]>({
	key: 'products',
	default: [],
});
