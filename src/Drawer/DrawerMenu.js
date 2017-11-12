import React from 'react';
import styled from 'styled-components';
import { font } from '../mixins/typography';

const DrawerMenuComponent = ({ className, subheader, children }) => (
	<nav className={className}>
		{ subheader && <h2>{ subheader }</h2> }
		{ children }
	</nav>
);

const DrawerMenu = styled(DrawerMenuComponent)`
	position: relative;
	margin: 8px 0;

	&:not(:last-child):after {
		content: '';
		position: absolute;
		bottom: -4px;
		left: 0;
		right: 0;
		height: 1px;
		background: rgba(0, 0, 0, 0.12);
	}

	& > h2 {
		padding: 0 16px;
		margin: 0;
		height: 48px;
		color: ${props => props.theme.textColors.secondary};
		${ font(500, 14, 50) }
	}
`;

DrawerMenu.displayName = 'DrawerMenu';
export default DrawerMenu;