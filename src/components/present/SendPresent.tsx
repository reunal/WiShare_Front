import React from 'react';
import { Divider } from '@material-ui/core';
import { SendPresentCardStyled } from '../../styles/present/StyledPresent';

const SendPresent = (): JSX.Element => {
	return (
		<SendPresentCardStyled>
			<p>To. 강수성</p>
			<Divider />
			<div>
				<h2>MLB 캡 모자</h2>
				<h2>39,000</h2>
			</div>
		</SendPresentCardStyled>
	);
};

export default SendPresent;
