import styled from 'styled-components';

interface SmallTitleTextProps {
	weight?: number;
}

export const PageTitleHead = styled.div`
	display: inline-block;
	width: 100%;
	height: auto;
	margin-top: 50px;
`;

export const PageBody = styled.div`
	display: inline-block;
	width: 100%;
	height: auto;
	margin-top: 20px;
`;

export const PageTitleEng = styled.h1`
	font-family: var(--font-BebasNeue);
	text-align: center;
	letter-spacing: 2px;
	font-size: 50px;
`;

export const PageTitle = styled.h1`
	letter-spacing: 2px;
	font-size: 50px;
`;

export const PageTitleKr = styled.h1`
	font-family: var(--font-NotoSans);
	font-size: 1.4rem;
	display: inline-block;
`;

// CardBaseStyle
export const CardBaseStyle = styled.div`
	width: 100%;
	height: 380px;
	background: #fff;
	transition: all 0.3s;
	border: solid 1px #e9e9e9;
	color: black;
	:hover {
		box-shadow: 1px 3px 5px #e5e5e5;
		cursor: pointer;
	}
	border-radius: 5px;
`;

export const ProductCardStyle = styled.div`
	img {
		width: 100%;
		height: 250px;
	}

	div {
		width: 100%;
	}

	div > * {
		margin: 10px;
	}
	div p {
		font-size: 12px;
		color: #666;
	}

	div h6 {
		font-weight: normal;
		font-size: 16px;
		color: #333;
		margin-top: 5px;
	}

	div h3 {
		font-size: 26px;
		float: left;
	}

	div button {
		float: right;
		padding: 8px 20px;
		background: #ff5555;
		color: white;
		border-radius: 30px;
		font-size: 12px;
	}

	div button:hover {
		background: #fa4158;
	}
`;

// 사이드 바  side bar
export const StyledSideBar = styled.div`
	width: 100%;
`;

export const StyledUserInfo = styled.div`
	display: grid;
	grid-template-columns: 1fr 2fr;
	/* justify-content: center; */
	align-items: center;
`;

// 이름 추후 수정 예정
// 받은 선물 <-> 내가 준 선물 이동하는 버튼 가지고 있는 div
export const StyledPageChange = styled.div`
	width: 100%;
	height: 100%;
	margin-top: 3vh;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 5px;
`;

export const StyledPageChangeButton = styled.button`
	width: 100%;
	transition: all 0.3s;
	font-size: 14px;
	text-align: start;
	padding: 10px 10px;
	border-radius: 5px;

	background-color: ${({ color }) => {
		return color || 'none';
	}};

	border: ${({ color }) => {
		return color ? 'none' : '1px solid #E5E5E5';
	}};
	color: ${({ color }) => {
		return color ? 'white' : '#333';
	}};
`;

export const StyledIconImage = styled.img`
	width: 70px;
	height: 70px;
	background-color: #d9d9d9;
	border-radius: 50%;
`;

// 상품명과 브랜드 이름 css
// 이름 수정해야 함
export const NameText = styled.p`
	font-size: 22px;
	font-weight: 700;
	/* 원하는 스타일 추가 */
`;

export const BrandText = styled.h6`
	font-size: 14px;
	color: #666666;
	/* 원하는 스타일 추가 */
`;

export const SmallTitleText = styled.p`
	font-size: 16px;
	font-weight: 700;

	font-weight: ${({ weight }: SmallTitleTextProps) => {
		return weight || 700;
	}};
`;

export const SmallNameText = styled.p`
	font-size: 14px;
	font-weight: 700;
`;

// 이름 수정해야 함
// 판매된 상품 상태 수정, 상세보기, 선불 배송지 입력 Form
export const StyledDetailCard = styled.div`
	width: 100%;

	svg {
		font-size: 1rem;
	}
`;

export const StyledDetailItemInfo = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 5vh 0;

	img {
		width: 30%;
		height: 220px;
	}

	div {
		h6 {
			text-align: center;
		}
	}
`;
