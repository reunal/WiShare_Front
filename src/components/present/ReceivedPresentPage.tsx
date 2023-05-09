import React from 'react';
import { Grid } from '@mui/material';
import { StyledPresent } from '../../styles/present/StyledPresent';
import Present from './Present';
import PresentSideBar from './PresentSideBar';

const ReceivedPresent = () => {
	return (
		<StyledPresent>
			<Grid container spacing={3}>
				<PresentSideBar />
				<Grid item xs={9}>
					<h1>4개의 선물</h1>
					<Grid container spacing={3}>
						<Present />
						<Present />
						<Present />
						<Present />
					</Grid>
				</Grid>
			</Grid>
		</StyledPresent>
	);
};

export default ReceivedPresent;
