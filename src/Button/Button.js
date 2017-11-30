import PropTypes from 'prop-types';
import { darken, transparentize } from 'polished';
import styled, { css } from 'styled-components';
import elevation, { elevationTransition } from '../mixins/elevation';
import { font } from '../mixins/typography';
import withRipple from '../hoc/withRipple';
import colors from '../colors/all';
import React from 'react';

const round = css`
	border-radius: 50%;
	width: ${({ raised, mini }) => raised ? mini ? 40 : 56 : mini ? 40 : 48 }px;
	height: ${({ raised, mini }) => raised ? mini ? 40 : 56 : mini ? 40 : 48 }px;
	padding: 0;
	
	${(props) => props.raised ? raised : flat}
`;

const regular = css`
	border-radius: 2px;
	height: ${({ dense }) => dense ? 32 : 36}px;
	min-width: 88px;
	padding: 0 16px;
	letter-spacing: 0.3px;
	${({ dense }) => font(500, dense ? 13 : 14, dense ? 32 : 36) }

	${props => props.raised ? raised : flat}
`;

const raised = css`
	${({ round }) => round ? elevation(6) : elevation(2) };
	
	&:active {
		${({ round }) => round ? elevation(12) : elevation(8) };
	}

	${({ color }) => color !== 'default' && `color: white;`}
	background: ${({ backgroundColor }) => backgroundColor};

	&:hover {
		background: ${({ backgroundColor }) => darken(0.12, backgroundColor)};
	}
`;

const flat = css`
	${({ color, backgroundColor }) => color !== 'default' && `color: ${backgroundColor};`}

	&:hover {
		${({ color, backgroundColor }) => color !== 'default' && `background: ${transparentize(0.12, backgroundColor)};`}
	}
`;

const Button = styled(({ color, raised, round, mini, dense, backgroundColor, ...props }) => <button {...props} />).attrs({
	backgroundColor: ({ color, theme }) => color === 'default' ? '#ffffff' : color === 'primary' ? theme.primary : color === 'accent' ? theme.accent : color
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