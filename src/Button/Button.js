import PropTypes from 'prop-types';
import { darken, readableColor, transparentize } from 'polished';
import styled, { css } from 'styled-components';
import elevation from '../mixins/elevation';
import { font } from '../mixins/typography';
import withRipple from '../hoc/withRipple';
import React from 'react';

const round = css`
	border-radius: 50%;
	width: ${({ height: width }) => width}px;
	height: ${({ height }) => height}px;
	padding: 0;
	
	${(props) => props.raised ? raised : flat}
`;

const regular = css`
	border-radius: 2px;
	height: ${({ height }) => height}px;
	min-width: 88px;
	padding: 0 16px;
	letter-spacing: 0.3px;
	${({ dense }) => font(500, dense ? 13 : 14, dense ? 32 : 36) }

	${props => props.raised ? raised : flat}
`;

const raised = css`
	background: ${({ color }) => color};
	${({ elevationHeight }) => elevation(elevationHeight) };
	
	&:active {
		${({ elevationHeight }) => elevation(elevationHeight + 6) };
	}

	&:hover {
		background: ${({ color }) => darken(0.12, color)};
	}
`;

const flat = css`
	&:hover {
		background: ${({ color }) => transparentize(0.12, color)};
	}
`;

const Button = styled(({ color, dense, elevationHeight, height, mini, raised, round, ...props }) => <button {...props} />).attrs({
	color: ({ color, theme }) => theme[color] ? theme[color] : color,
	height: ({ dense, mini, raised, round }) => {
		if (round) return raised ? mini ? 40 : 56 : mini ? 40 : 48;
		return dense ? 32 : 36;
	},
	elevationHeight: ({ raised, round }) => raised ? round ? 6 : 2 : 0
})`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	border: none;
	outline: none;
	background: ${({ color }) => color};
	color: ${({ color }) => readableColor(color)};
	fill: currentColor;
	text-align: center;
	text-decoration: none;
	text-transform: uppercase;
	overflow: hidden;
	vertical-align: middle;
	user-select: none;
	box-sizing: border-box;
	transition: box-shadow 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, background-color 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

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
	color: PropTypes.string.isRequired,
	dense: PropTypes.bool,
	mini: PropTypes.bool,
	raised: PropTypes.bool,
	round: PropTypes.bool,
	type: PropTypes.string
};

Button.defaultProps = {
	color: '#ffffff',
	type: 'button'
};

Button.displayName = 'Button';
export default withRipple(Button);