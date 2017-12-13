import PropTypes from 'prop-types';
import styled from 'styled-components';
import elevation from '../mixins/elevation';
import React from 'react';

const BottomNavigation = styled(({ sidebar, ...props }) => <div {...props} />)`
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
		${({ sidebar }) => sidebar ? `
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
		` : `display: none;`}
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