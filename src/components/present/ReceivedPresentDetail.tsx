import React from 'react';
import { Grid } from '@mui/material';
import { StyledPresent } from '../../styles/present/StyledPresent';

const ReceivedPresentDetail = (): JSX.Element => {
	return (
		<StyledPresent>
			<Grid container spacing={3}>
				<Grid item xs={8}>
					안녕하세요
				</Grid>
			</Grid>
		</StyledPresent>
	);
};

export default ReceivedPresentDetail;
