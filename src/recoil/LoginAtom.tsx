import { atom } from 'recoil';

export interface LoginData {
	id: string;
	pw: string;
}

export const idState = atom<string>({
	key: 'idState',
	default: '',
});

export const pwState = atom<string>({
	key: 'pwState',
	default: '',
});
