import React from 'react';
import { useRecoilValue } from 'recoil';
import { PageTitleKr, PageBody, PageTitleHead } from '../../styles/CommonStyled';
import Item from '../../components/wishItem/Item';
import { IWishItemType, myWishListState } from '../../recoil/WishItemAtom';

const MyWiShPage = () => {
	const wishItem = useRecoilValue<IWishItemType[]>(myWishListState);
	return (
		<>
			<PageTitleHead>
				<PageTitleKr>마이위시 : 위시한 아이템을 공개하세요!</PageTitleKr>
			</PageTitleHead>
			<PageBody>
				{wishItem.map((data) => {
					const { id, img, name, brand, price, description, wished, open } = data;
					return (
						<Item
							key={id}
							id={id}
							img={img}
							name={name}
							brand={brand}
							price={price}
							description={description}
							wished={wished}
							open={open}
						/>
					);
				})}
			</PageBody>
		</>
	);
};

export default MyWiShPage;
