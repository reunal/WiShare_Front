import styled from 'styled-components';
import { lighten, darken } from 'polished';

interface Icolor {
	color?: string;
}

export const StyledJoin = styled.div`
	width: 100%;
	height: auto;
	margin-top: 5vh;
	text-align: center;
`;

export const StyledRegisterButton = styled.button`
	width: 100%;
	height: 370px;
	transition: all 0.3s;
	margin-top: 30px;
	text-align: center;
	vertical-align: middle;
	border-radius: 10px;
	display: flex;
	justify-content: center;
	align-items: center;

	background-color: ${({ color }: Icolor) => {
		return color || 'none';
	}};
	border: ${({ color }: Icolor) => {
		return color ? 'none' : '1px solid #E5E5E5';
	}};
	color: ${({ color }: Icolor) => {
		return color ? 'white' : '#333';
	}};

	&:hover {
		background: ${({ color }: Icolor) => {
			return color ? `${lighten(0.1, color)}` : `${darken(0.1, 'white')}`;
		}};
	}

	&:active {
		background: ${({ color }) => {
			return color ? `${darken(0.1, color)}` : `${lighten(0.1, 'white')}`;
		}};
	}
`;

// StyledRegisterButton.defaultProps = {
// 	color: 'white',
// };

export const RegisterTextField = styled.input`
	font-family: var(--font-NotoSans);
	width: 100%;
	height: 45px;
	padding: 20px 0;
	border: 1px solid #e5e5e5;
`;
