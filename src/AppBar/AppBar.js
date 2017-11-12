import React, { createElement } from 'react';
import styled from 'styled-components';
import elevation from '../mixins/elevation';

const AppBarComponent = ({ className, title, children }) => (
	<header className={className}>
		{ title && <Title>{ title }</Title> }
		{children}
	</header>
);

const AppBar = styled(AppBarComponent)`
	position: relative;
	width: 100%;
	height: ${props => props.dense ? 48 : 56 }px;
	padding: 0 16px;
	box-sizing: border-box;
	background-color: ${props => props.theme.primary};
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: center;
	${ elevation(4) }

	@media (min-width: 601px) {
		height: ${props => props.dense ? 48 : 64 }px;
	}
`;

const TitleComponent = ({ className, children }) => createElement(
	'h2',
	{ className },
	children
);

const Title = styled(TitleComponent)`
	color: white;
	font: 500 21px Roboto, Arial, sans-serif;
	margin: 0;
	display: inline-block;
`;

export default AppBar;