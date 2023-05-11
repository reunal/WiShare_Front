import React from 'react';
import { Divider } from '@material-ui/core';
import { SendPresentCardStyled } from '../../styles/present/StyledPresent';

interface IProps {
	item: {
		id: number;
		sender: string;
		title: string;
		price: number;
	};
}

const SendPresent = ({ item }: IProps): JSX.Element => {
	const { sender, title, price } = item;
	return (
		<SendPresentCardStyled>
			<p>To. {sender}</p>
			<Divider />
			<div>
				<h2>{title}</h2>
				<h2>{price.toLocaleString()}원</h2>
			</div>
		</SendPresentCardStyled>
	);
};

export default SendPresent;
