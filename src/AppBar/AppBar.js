import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../Button';
import MenuIcon from '../icons/MenuIcon';
import elevation from '../mixins/elevation';
import { font } from '../mixins/typography';

const Title = styled.h2`
	${ font(500, 21) }
	color: white;
	margin: 0;
	display: inline-block;
`;

const MenuButton = Button.extend`
	margin-right: 8px;
	color: white !important;
`;

const ChildContainer = styled.div`
	flex: auto;
	height: 100%;
	padding-left: 16px;
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: center;
	justify-content: flex-end;
`;

const AppBarComponent = ({ className, title, dense, menuAction, children }) => (
	<header className={className}>
		{ menuAction && <MenuButton round mini={dense} onClick={menuAction}><MenuIcon /></MenuButton> }
		{ title && typeof title === 'string' && <Title>{ title }</Title> }
		{ typeof title !== 'string' && title }
		<ChildContainer>{ children }</ChildContainer>
	</header>
);

const AppBar = styled(AppBarComponent)`
	${ props => props.fixed && `
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
	` }
	${ props => !props.fixed && `position: relative;` }
	width: 100%;
	height: ${props => props.dense ? 48 : 56 }px;
	padding: 0 16px;
	box-sizing: border-box;
	background-color: ${props => props.theme.primary};
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: center;
	${ elevation(4) }

	@media (min-width: 601px) {
		height: ${props => props.dense ? 48 : 64 }px;
	}
`;

AppBar.propTypes = {
	dense: PropTypes.bool,
	fixed: PropTypes.bool,
	title: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node
	]),
	menuAction: PropTypes.func
};

AppBar.defaultProps = {
	dense: false,
	fixed: false
};

AppBar.displayName = 'AppBar';
export default AppBar;