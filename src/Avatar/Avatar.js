import { createElement } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { font } from '../mixins/typography';

const AvatarComponent = ({ children, src, size, ...props }) => {
	let res;

	if (typeof children === 'string') {
		let words = children.split(' ');
		res = words.length > 1 ? [words[0], words[words.length - 1]].map((str) => str[0]) : words[0][0];
	}

	return createElement(
		src ? 'img' : 'div',
		{ src, ...props },
		src ? null : res ? res : children
	);
};

const Avatar = styled(AvatarComponent)`
	display: inline-block;
	width: ${props => props.size}px;
	height: ${props => props.size}px;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: rgb(185, 185, 185);
	color: #fff;
	${ font(500, 16, 20) }
	text-transform: uppercase;
`;

Avatar.propTypes = {
	src: PropTypes.string,
	children: PropTypes.node,
	size: PropTypes.number.isRequired
};

Avatar.defaultProps = {
	size: 40
};

export default Avatar;