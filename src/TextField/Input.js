import { createElement } from 'react';
import styled from 'styled-components';

const Input = ({ type, children, ...props }) => createElement(
	type === 'multiline' ? 'textarea' : 'input',
	{ type, ...props },
	children
);

export default styled(Input)`
	display: block;
	flex: 0 0 100%;
	font-family: inherit;
	font-size: inherit;
	color: ${props => props.disabled ? 'rgba(0, 0, 0, 0.42)' : 'inherit'};
	border: none;
	padding: 7px 0 9px;
	background: none;
	resize: none;
	outline: none;
`;