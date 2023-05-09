import React from 'react';
import { Grid } from '@material-ui/core';
import { StyledPresent } from '../../styles/present/StyledPresent';
import PresentSideBar from './PresentSideBar';
import SendPresent from './SendPresent';

const SentPresent = (): JSX.Element => {
	return (
		<StyledPresent>
			<Grid container spacing={3}>
				<PresentSideBar />
				<Grid item xs={9}>
					<SendPresent />
				</Grid>
			</Grid>
		</StyledPresent>
	);
};

export default SentPresent;
