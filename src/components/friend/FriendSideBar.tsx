import React, { KeyboardEvent, useRef, useState, ChangeEvent } from 'react';
import SideBar from '../navbar/SideBar';
import { StyledPageChangeButton } from '../../styles/CommonStyled';
import { StyledFriendSearch } from '../../styles/friend/StyledFriend';

interface CheckProps {
	check: boolean;
	setCheck: React.Dispatch<React.SetStateAction<boolean>>;
}

const FriendSideBar = ({ check, setCheck }: CheckProps): JSX.Element => {
	const [text, setText] = useState<string>('');
	const inputRef = useRef<HTMLInputElement>(null);

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setText(e.target.value);
	};

	const onChangeReceiveCheck = () => {
		setCheck(true);
	};

	const onChangeSendCheck = () => {
		setCheck(false);
	};

	const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			if (text === '') {
				alert('친구 이름을 입력해주세요');
			}

			window.console.log(text);
		}
	};

	return (
		<SideBar>
			<h3>마이프렌드</h3>
			<StyledPageChangeButton color={check === true ? '#ff5555' : undefined} onClick={onChangeReceiveCheck}>
				친구 목록
			</StyledPageChangeButton>
			<StyledPageChangeButton color={check === true ? undefined : '#ff5555'} onClick={onChangeSendCheck}>
				친구 요청
			</StyledPageChangeButton>
			<StyledFriendSearch
				type="text"
				placeholder="친구 검색"
				onChange={onChange}
				onKeyPress={handleKeyPress}
				ref={inputRef}
			/>
		</SideBar>
	);
};

export default FriendSideBar;
