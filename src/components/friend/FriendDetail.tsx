import React from 'react';
import { useLocation } from 'react-router-dom';

const FriendDetail = (): JSX.Element => {
	const location = useLocation();
	// const data = location.state?.data;
	console.log(location);

	return <>friendDetail</>;
};

export default FriendDetail;
