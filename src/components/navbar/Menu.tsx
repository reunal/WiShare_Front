import React from 'react';
import { StyledMenu } from '../../styles/header/StyledHeader';

const Menu = (): JSX.Element => {
	return (
		<StyledMenu>
			<ul>
				<li>홈</li>
				<li>마켓</li>
				<li>마이위시</li>
				<li>선물함</li>
				<li>마이프렌드</li>
			</ul>
		</StyledMenu>
	);
};

export default Menu;
