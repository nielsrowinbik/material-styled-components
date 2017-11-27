import PropTypes from 'prop-types';
import color from 'color';
import styled, { css } from 'styled-components';
import elevation, { elevationTransition } from '../mixins/elevation';
import { font } from '../mixins/typography';
import withRipple from '../hoc/withRipple';
import colors from '../colors/all';
import React from 'react';

const round = css`
	border-radius: 50%;
	width: ${props => props.raised ? props.mini ? 40 : 56 : props.mini ? 40 : 48 }px;
	height: ${props => props.raised ? props.mini ? 40 : 56 : props.mini ? 40 : 48 }px;
	padding: 0;
	
	${props => props.raised ? raised : flat}
`;

const regular = css`
	border-radius: 2px;
	height: ${props => props.dense ? 32 : 36}px;
	min-width: 88px;
	padding: 0 16px;
	letter-spacing: 0.3px;
	${props => font(500, props.dense ? 13 : 14, props.dense ? 32 : 36) }

	${props => props.raised ? raised : flat}
`;

const raised = css`
	${props => props.round ? elevation(6) : elevation(2) };
	
	&:active {
		${props => props.round ? elevation(12) : elevation(8) };
	}

	${props => props.color !== 'default' && `color: white;`}
	background: ${props => props.backgroundColor};

	&:hover {
		background: ${props => color(props.backgroundColor).darken(0.12).toString()};
	}
`;

const flat = css`
	${props => props.color !== 'default' && `color: ${props.backgroundColor};`}

	&:hover {
		${props => props.color !== 'default' && `background: ${color(props.backgroundColor).alpha(0.12).toString()};`}
	}
`;

const Button = styled(({ color, raised, round, mini, dense, backgroundColor, ...props }) => <button {...props} />).attrs({
	backgroundColor: props => props.color === 'default' ? '#ffffff' : props.color === 'primary' ? props.theme.primary : props.color === 'accent' ? props.theme.accent : props.color
})`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	border: none;
	outline: none;
	background: transparent;
	color: inherit;
	fill: currentColor;
	text-align: center;
	text-decoration: none;
	text-transform: uppercase;
	overflow: hidden;
	vertical-align: middle;
	user-select: none;
	box-sizing: border-box;
	transition: ${ elevationTransition }, background-color 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

	&:active {
		outline: none;
	}

	&:hover {
		cursor: pointer;
		background-color: rgba(0, 0, 0, 0.12);
	}

	fieldset:disabled &,
	&:disabled {
		${ elevation(0) };
		color: rgba(0, 0, 0, 0.26);
		background-color: rgba(0, 0, 0, .12);
		pointer-events: none;
	}

	${props => props.round && round || regular }
`;

Button.propTypes = {
	color: PropTypes.oneOf([
		'default',
		'primary',
		'accent',
		...colors
	]).isRequired,
	raised: PropTypes.bool,
	round: PropTypes.bool,
	mini: PropTypes.bool,
	dense: PropTypes.bool,
	type: PropTypes.string
};

Button.defaultProps = {
	type: 'button',
	color: 'default'
};

Button.displayName = 'Button';
export default withRipple(Button);