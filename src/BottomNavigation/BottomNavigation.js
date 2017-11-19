import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import elevation from '../mixins/elevation';

const sidebar = css`
	right: auto;
	left: 0;
	top: 0;
	height: auto;
	${ elevation(0) }
	flex-direction: column;
	justify-content: flex-start;
	padding-top: 64px;
	width: 72px;
	background-color: transparent;
`;

const BottomNavigation = styled.div`
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
	${ elevation(8) }

	@media (min-width: 601px) {
		${props => props.sidebar ? sidebar : `display: none;` }
	}
`;

BottomNavigation.propTypes = {
	sidebar: PropTypes.bool.isRequired
};

BottomNavigation.defaultProps = {
	sidebar: true
};

BottomNavigation.displayName = 'BottomNavigation';
export default BottomNavigation;