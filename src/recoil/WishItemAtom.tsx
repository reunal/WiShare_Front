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

export const productState = atom<IProductType[]>({
	key: 'products',
	default: [
		{
			id: 1,
			img: '',
			name: 'MLB 모자',
			brand: 'MLB',
			price: 39000,
			description: '꽤 괜찮은 모자',
			wished: false,
		},
		{
			id: 2,
			img: '',
			name: 'MLB 후드티',
			brand: 'MLB',
			price: 79000,
			description: '꽤 괜찮은 후드티',
			wished: false,
		},
		{
			id: 3,
			img: '',
			name: 'AirPod Pro3',
			brand: 'APPLE',
			price: 200000,
			description: '애플에서 출시한 에이팟 프로3',
			wished: false,
		},
		{
			id: 4,
			img: '',
			name: '까스활명수',
			brand: 'COOPSKET',
			price: 700,
			description: '먹으면 속 풀림',
			wished: false,
		},
		{
			id: 5,
			img: '',
			name: '스타벅스 아메리카노',
			brand: 'STARBUCKS',
			price: 4500,
			description: '너무 써',
			wished: false,
		},
		{
			id: 6,
			img: '',
			name: 'BBQ 후라이드 치킨',
			brand: 'BBQ',
			price: 20000,
			description: '너무 비싸',
			wished: false,
		},
	],
});
