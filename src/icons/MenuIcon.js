import { createElement } from 'react';

const icon = createElement('path', { d: 'M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z' });

const MenuIcon = (props) => createElement(
	'svg',
	props,
	icon
);

MenuIcon.defaultProps = {
	viewBox: '0 0 24 24',
	width: '24px',
	height: '24px'
};

export default MenuIcon;