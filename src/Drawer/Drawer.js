import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import elevation from '../mixins/elevation';

const temporary = css`
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	background-color: white;
	${ elevation(12) }
	transition: ${props => props.open ? 'transform 195ms cubic-bezier(0.0, 0.0, 0.2, 1)' : 'transform 225ms cubic-bezier(0.4, 0.0, 0.2, 1)' };
	transform: ${props => props.open ? 'translate3d(0, 0, 0)' : 'translate3d(-110%, 0, 0)' };
`;

const DrawerComponent = ({ className, children }) => (
	<aside className={className}>{ children }</aside>
);

const Drawer = styled(DrawerComponent)`
	width: calc(100vw - 56px);
	max-width: 280px;

	@media (max-width: 600px) {
		${temporary}
	}

	@media (min-width: 601px) {
		${props => props.mode === 'temporary' && temporary }
	}
`;

Drawer.propTypes = {
	mode: PropTypes.oneOf([
		'permanent',
		'clipped',
		'floating',
		'card',
		'temporary'
	]).isRequired,
	open: PropTypes.bool
};

Drawer.displayName = 'Drawer';
export default Drawer;