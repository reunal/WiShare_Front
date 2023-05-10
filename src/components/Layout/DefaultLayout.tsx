import React from 'react';
import { Outlet } from 'react-router-dom';
import StyledContainer from '../../styles/StyledContainer';

// eslint-disable-next-line import/prefer-default-export
export const DefaultLayout = (): JSX.Element => {
	return (
		<StyledContainer>
			<Outlet />
		</StyledContainer>
	);
};
