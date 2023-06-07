import { atom } from 'recoil';
import SoldDummyData from '../model/SoldProductDummyList';

export interface ISoldProductType {
	id: number;
	img: string;
	name: string;
	brand: string;
	category?: string;
	price: number;
	description: string;
	quantity: number;
	purchaser: string;
	address: string;
	addressNumber: string;
	orderNumber: number;
	entered: boolean;
	date: string;
}

export const SoldProductList = atom<ISoldProductType[]>({
	key: 'soldProducts',
	default: SoldDummyData,
});
