import styled from 'styled-components';
import { createElement } from 'react';
import withRipple from '../hoc/withRipple';
import { font } from '../mixins/typography';
import PropTypes from 'prop-types';

const Tab = styled(({ active, component, children, ...props }) => createElement(component, { ...props }, children))`
	display: flex;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
	min-width: 72px;
	max-width: 264px;
	height: 48px;
	margin: 0;
	border: none;
	background-color: inherit;
	padding: 6px 12px;
	outline: none;
	text-transform: uppercase;
	text-decoration: none;
	text-align: center;
	word-wrap: break-word;
	overflow: hidden;
	${ font(400, 14, 20) }
	color: white;
	opacity: ${props => props.active ? 1 : 0.7};
	cursor: pointer;

	@media (min-width: 601px) {
		min-width: 160px;
	}
`;

Tab.propTypes = {
	active: PropTypes.bool.isRequired,
	component: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.element
	]).isRequired
};

Tab.defaultProps = {
	active: false,
	component: 'button'
};

Tab.displayName = 'Tab';
export default withRipple(Tab);