import React from 'react';
import { Grid } from '@mui/material';
import { CardBaseStyle } from '../../styles/CommonStyled';
import { PresentCardStyled } from '../../styles/present/StyledPresent';

interface IProps {
	item: {
		id: number;
		brand: string;
		title: string;
		sender: string;
		date: string;
	};
}

const Present = ({ item }: IProps): JSX.Element => {
	const { brand, title, sender, date } = item;
	return (
		<Grid item xs={4}>
			<CardBaseStyle>
				<PresentCardStyled>
					<img src="" alt="" title="" />
					<div>
						<p>{brand}</p>
						<h5>{title}</h5>
					</div>
					<div>
						<h6>From</h6>
						<span>{sender}</span>
						<p>{date}</p>
					</div>
				</PresentCardStyled>
			</CardBaseStyle>
		</Grid>
	);
};

export default Present;
