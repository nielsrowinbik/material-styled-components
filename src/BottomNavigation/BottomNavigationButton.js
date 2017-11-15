import { createElement } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BottomNavigationButtonComponent = ({ component, children, ...props }) => createElement(
	component,
	{ ...props },
	children
);

const BottomNavigationButton = styled(BottomNavigationButtonComponent)`
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
	color: ${props => props.theme.textColors.icon};
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
	children: PropTypes.arrayOf(PropTypes.element),
	component: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.element
	])
};

BottomNavigationButton.defaultProps = {
	component: 'div'
};

BottomNavigationButton.displayName = 'BottomNavigationButton';
export default BottomNavigationButton;