import { atom } from 'recoil';
import ProductDummyData from '../model/ProductDummyData';

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

export const ProductAtom = atom<IProductType[]>({
	key: 'products',
	default: ProductDummyData,
});
