import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import elevation from '../mixins/elevation';

const AppBar = styled(({ children, color, dense, mainHeight, mobileHeight, title, ...props }) => <header {...props} />).attrs({
	mainHeight: ({ dense }) => dense ? 48 : 64,
	mobileHeight: ({ dense }) => dense ? 48 : 56,
	color: ({ color, theme }) => theme[color] ? theme.color : color
})`
	${({ fixed }) => fixed ? `
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
	` : `position: relative;`}

	width: 100%;
	height: ${({ mobileHeight }) => mobileHeight}px;
	padding: 0 16px;
	box-sizing: border-box;
	background-color: ${({ color }) => color};
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: center;
	${ elevation(4) }

	@media (min-width: 601px) {
		height: ${({ mainHeight }) => mainHeight}px;
	}
`;

AppBar.propTypes = {
	dense: PropTypes.bool,
	fixed: PropTypes.bool,
	color: PropTypes.string
};

AppBar.displayName = 'AppBar';
export default AppBar;