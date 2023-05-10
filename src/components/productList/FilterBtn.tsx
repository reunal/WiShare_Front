import React from 'react';
import { FilterSelector } from '../../styles/product/StyledProduct';

const FilterBtn = (): JSX.Element => {
	return (
		<FilterSelector>
			<option value="인기순">인기순</option>
			<option value="판매순">판매순</option>
			<option value="가격순">가격순</option>
		</FilterSelector>
	);
};

export default FilterBtn;
