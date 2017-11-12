import React from 'react';
import styled from 'styled-components';
import withRipple from '../decorators/withRipple';

const BottomNavigationButtonComponent = ({ className, icon, children, label }) => (
	<div className={className}>
		<label>{ label }</label>
		{ icon }
		{ children }
	</div>
);

const BottomNavigationButton = styled(BottomNavigationButtonComponent)`
	min-width: 80px;
	max-width: 168px;
	flex: auto;
	height: 100%;
	box-sizing: border-box;
	padding: 9px 12px 10px 12px;
	display: flex;
	flex-direction: column-reverse;
	flex-wrap: nowrap;
	align-items: center;
	justify-content: ${props => props.title && props.icon ? 'space-between' : 'center' };
	
	& > label {
		color: ${props => props.active ? props.theme.accent : '#878787'};
		font: 400 ${props => props.active ? 14 : 12 }px Roboto, Arial, sans-serif;
		transition: font 225ms ease;
	}
	
	& > svg {
		fill: ${props => props.active ? props.theme.accent : '#878787'};
		flex: 0 0 24px;
	}

	&:hover {
		cursor: pointer;
	}
`;

export default withRipple(BottomNavigationButton);