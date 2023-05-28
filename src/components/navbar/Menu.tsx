import React from 'react';
import { Link } from 'react-router-dom';
import { StyledMenu } from '../../styles/header/StyledHeader';

const Menu = (): JSX.Element => {
	return (
		<StyledMenu>
			<ul>
				<Link to="/" aria-label="마켓">
					<li>홈</li>
				</Link>
				<Link to="/market" aria-label="마켓">
					<li>마켓</li>
				</Link>
				<Link to="/MyWish" aria-label="마이위시">
					<li>마이위시</li>
				</Link>
				<Link to="/present" aria-label="마이위시">
					<li>선물함</li>
				</Link>
				<li>마이프렌드</li>
			</ul>
		</StyledMenu>
	);
};

export default Menu;
