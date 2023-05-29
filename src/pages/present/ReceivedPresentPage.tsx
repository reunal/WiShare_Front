import React from 'react';
import { Grid } from '@mui/material';
import Present from '../../components/present/Present';
import { ReceivedListContainer } from '../../styles/present/StyledPresent';

const data = [
	{
		id: 1,
		brand: 'MLB',
		title: 'MLB 캡 모자',
		sender: '홍길동',
		date: '2023-05-08',
	},
	{
		id: 2,
		brand: '삼다수',
		title: '삼다수 2L * 24',
		sender: '홍길동',
		date: '2023-05-07',
	},
	{
		id: 3,
		brand: '허쉬',
		title: '허쉬초콜릿',
		sender: '홍길동',
		date: '2023-05-06',
	},
	{
		id: 4,
		brand: '네스프레소',
		title: '네스프래소 캡슐',
		sender: '홍길동',
		date: '2023-05-05',
	},
];

const ReceivedPresentPage = () => {
	return (
		<Grid item xs={9}>
			<h1>4개의 선물</h1>
			<ReceivedListContainer>
				<Grid container spacing={2}>
					{data.map((item) => {
						return <Present item={item} key={item.id} />;
					})}
				</Grid>
			</ReceivedListContainer>
		</Grid>
	);
};

export default ReceivedPresentPage;
