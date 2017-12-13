import { createElement } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { font } from '../mixins/typography';

const Avatar = styled(({ children, shortChildren, size, ...props }) => createElement(props.src ? 'img' : 'div', props, shortChildren || children)).attrs({
	shortChildren: ({ children }) => {
		if (typeof children === 'string') {
			const words = children.split(' ');
			return words.length > 1 ? [words[0], words[words.length - 1]].map(str => str[0]) : words[0][0];
		}
		return false;
	}
})`
	display: inline-block;
	width: ${({ size }) => size}px;
	height: ${({ size }) => size}px;
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
	children: PropTypes.string,
	size: PropTypes.number,
	src: PropTypes.string
};

Avatar.defaultProps = {
	size: 40
};

export default Avatar;