import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { font } from '../mixins/typography';

const BottomNavigationButtonComponent = ({ className, icon, label }) => (
	<div className={className}>
		<label>{ label }</label>
		{ icon }
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
	justify-content: center;
	color: ${props => props.theme.textColors.icon};
	
	& > label {
		${props => font(400, 12) }
		transition: font 225ms ease;
		pointer-events: none;
	}
	
	& > svg {
		fill: currentColor;
		flex: 0 0 24px;
	}

	&:hover {
		cursor: pointer;
	}

	@media (min-width: 601px) {
		width: 100%;
		min-width: auto;
		max-width: none;
		flex: 0 0 72px;
		border-radius: 50%;
		padding: 0;

		& > label {
			${ font(400, 10) }
			margin-top: 6px;
			transition: none;
		}
	}
`;

BottomNavigationButton.propTypes = {
	label: PropTypes.string.isRequired,
	icon: PropTypes.node.isRequired
};

BottomNavigationButton.displayName = 'BottomNavigationButton';
export default BottomNavigationButton;