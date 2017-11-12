import React from 'react';
import styled, { css } from 'styled-components';
import elevation from '../mixins/elevation';

const BottomNavigationComponent = ({ className, children }) => (
	<div className={className}>{ children }</div>
);

const primary = css`
	background-color: ${props => props.theme.primary};
`;

const accent = css`
	background-color: ${props => props.theme.accent};
`;

const BottomNavigation = styled(BottomNavigationComponent)`
	position: fixed;
	left: 0;
	bottom: 0;
	right: 0;
	height: 56px;
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: center;
	background-color: white;
	${props => props.primary && primary};
	${props => props.accent && accent};
	${ elevation(8) }

	@media (min-width: 601px) {
		display: none;
	}
`;

export default BottomNavigation;