import styled from 'styled-components';

const FloatingLabel = styled.label`
	position: absolute;
	top: 0;
	left: 0;
	color: ${props => props.disabled ? props.theme.textColors.primary : props.error ? props.theme.error : props.focus ? props.theme.primary : props.theme.textColors.primary };
    padding: 0;
	transform-origin: top left;
	transform: ${props => props.shrink ? 'translate(0, 1.5px) scale(0.75)' : 'translate3d(0, 23px, 0) scale(1)' };
	transition: transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;
`;

export default FloatingLabel;