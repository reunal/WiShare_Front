import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import PresentSideBar from '../../components/present/PresentSideBar';
import { StyledPresent } from '../../styles/present/StyledPresent';
import ReceivedPresent from './ReceivedPresentPage';
import SentPresentPage from './SentPresentPage';

const PresentPage = (): JSX.Element => {
	const [check, setCheck] = useState<boolean>(true);

	return (
		<StyledPresent>
			<Grid container spacing={3}>
				<PresentSideBar check={check} setCheck={setCheck} />
				{check ? <ReceivedPresent /> : <SentPresentPage />}
			</Grid>
		</StyledPresent>
	);
};

export default PresentPage;
