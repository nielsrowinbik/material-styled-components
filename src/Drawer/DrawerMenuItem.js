import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import withRipple from '../decorators/withRipple';
import { font } from '../mixins/typography';

const DrawerMenuItemComponent = ({ className, icon, label, children, href, to }) => createElement(
	href || to ? 'a' : 'div',
	{ className },
	icon ? icon : null,
	<span>{ label }</span>,
	children
);

const DrawerMenuItem = styled(DrawerMenuItemComponent)`
	display: block;
	${ font(500, 14, 50) }
	color: ${props => props.active ? props.theme.primary : props.theme.textColors.primary};
	padding: 0 16px;
	height: 48px;

	&:hover {
		cursor: pointer;
	}

	& > svg {
		display: inline-block;
		vertical-align: middle;
		padding-right: 32px;
		color: ${props => props.active ? props.theme.primary : props.theme.textColors.icon};
	}
`;

DrawerMenuItem.propTypes = {
	active: PropTypes.bool,
	label: PropTypes.string.isRequired,
	icon: PropTypes.node
};

DrawerMenuItem.displayName = 'DrawerMenuItem';
export default withRipple(DrawerMenuItem);