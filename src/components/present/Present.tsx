import React from 'react';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { BrandText, CardBaseStyle, SmallTitleText } from '../../styles/CommonStyled';
import { PresentCardStyled } from '../../styles/present/StyledPresent';

interface IProps {
	item: {
		id: number;
		img: string;
		brand: string;
		title: string;
		sender: string;
		date: string;
	};
}

const Present = ({ item }: IProps): JSX.Element => {
	const { brand, title, img, sender, date } = item;
	return (
		<Grid item xs={4}>
			<CardBaseStyle>
				<Link to={`/present/${item.id}`}>
					<PresentCardStyled>
						<img src={`${process.env.PUBLIC_URL}${img}`} alt="" title="" />
						<div>
							<BrandText>{brand}</BrandText>
							<SmallTitleText>{title}</SmallTitleText>
						</div>
						<div>
							<SmallTitleText>From. {sender}</SmallTitleText>
							<BrandText>{date}</BrandText>
						</div>
					</PresentCardStyled>
				</Link>
			</CardBaseStyle>
		</Grid>
	);
};

export default Present;
