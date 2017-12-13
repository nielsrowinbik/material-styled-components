import { Component, createElement } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import withRipple from '../hoc/withRipple';

const BottomNavigationButton = styled(({ component, ...props }) => createElement(component, props))`
	min-width: 80px;
	max-width: 168px;
	flex: auto;
	height: 100%;
	box-sizing: border-box;
	padding: 9px 12px 10px 12px;
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	align-items: center;
	justify-content: center;
	color: ${({ theme }) => theme ? theme.textColors.icon : 'rgba(0, 0, 0, 0.54)'};
	text-decoration: none;

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
	}
`;

BottomNavigationButton.propTypes = {
	component: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.instanceOf(Component)
	])
};

BottomNavigationButton.defaultProps = {
	component: 'div'
};

BottomNavigationButton.displayName = 'BottomNavigationButton';
export default withRipple(BottomNavigationButton);