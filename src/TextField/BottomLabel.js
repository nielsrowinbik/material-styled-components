import styled from 'styled-components';

const BottomLabel = styled.p`
	color: ${props => props.disabled ? props.theme.textColors.secondary : props.error ? props.theme.textColors.error : props.theme.textColors.primary };
	margin: 0;
	font-size: 12px;
	text-align: left;
	margin-top: 8px;
`;

export default BottomLabel;