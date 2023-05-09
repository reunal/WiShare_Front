import styled from 'styled-components';

interface Icolor {
	color?: string;
}

export const StyledRegisterForm = styled.div`
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

	background: ${({ color }: Icolor) => {
		return color || 'none';
	}};
	border: ${({ color }: Icolor) => {
		return color ? 'none' : '1px solid #E5E5E5';
	}};
	color: ${({ color }: Icolor) => {
		return color && 'white';
	}};
`;

export const StyledRegisterForm2 = styled.div``;
