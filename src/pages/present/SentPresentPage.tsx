import React from 'react';
import { Grid } from '@material-ui/core';
import SendPresent from '../../components/present/SendPresent';

const data = [
	{
		id: 1,
		sender: '김철수',
		title: 'MLB 캡 모자',
		price: 39000,
	},
	{
		id: 2,
		sender: '김영희',
		title: '삼다수 2L * 24',
		price: 20000,
	},
	{
		id: 3,
		sender: '김갑수',
		title: '미니선풍기',
		price: 15000,
	},
];

const SentPresentPage = (): JSX.Element => {
	return (
		<Grid item xs={9}>
			{data.map((item) => {
				return <SendPresent key={item.id} item={item} />;
			})}
		</Grid>
	);
};

export default SentPresentPage;
