import styled from 'styled-components';
import React from 'react';
import colors from '../colors/all';
import PropTypes from 'prop-types';

const Indicator = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	height: 2px;
	background: ${props => props.theme.accent};
	transition: all 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
	will-change: left, width;
`;

const Tabs = styled(({ color, center, children, backgroundColor, ...props }) => (
	<div {...props}>
		{ children }
		<Indicator />
	</div>
)).attrs({
	backgroundColor: props => props.color === 'primary' ? props.theme.primary : props.color === 'accent' ? props.theme.accent : props.color
})`
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	position: relative;
	justify-content: ${props => props.center ? `center` : `flex-start`};
	background: ${props => props.backgroundColor };
`;

Tabs.propTypes = {
	center: PropTypes.bool,
	color: PropTypes.oneOf([
		'primary',
		'accent',
		...colors
	]).isRequired
};

Tabs.defaultProps = {
	color: 'primary'
};

Tabs.displayName = 'Tabs';
export default Tabs;