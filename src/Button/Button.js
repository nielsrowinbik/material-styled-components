import PropTypes from 'prop-types';
import color from 'color';
import styled, { css } from 'styled-components';
import elevation, { elevationTransition } from '../mixins/elevation';
import { font } from '../mixins/typography';

const round = css`
	border-radius: 50%;
	width: ${props => props.raised ? props.mini ? 40 : 56 : props.mini ? 32 : 48 }px;
	height: ${props => props.raised ? props.mini ? 40 : 56 : props.mini ? 32 : 48 }px;
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

	${props => (props.primary || props.accent) && `color: white;`}
	${props => props.primary && `background: ${props.theme.primary};` };
	${props => props.accent && `background: ${props.theme.accent};` };

	&:hover {
		${props => props.primary && `background: ${color(props.theme.primary).darken(0.12).toString()}` };
		${props => props.accent && `background: ${color(props.theme.accent).darken(0.12).toString()}` };
	}
`;

const flat = css`
	${props => props.primary && `color: ${props.theme.primary};` };
	${props => props.accent && `color: ${props.theme.accent};` };

	&:hover {
		${props => props.primary && `background: ${color(props.theme.primary).alpha(0.12).toString()}` };
		${props => props.accent && `background: ${color(props.theme.accent).alpha(0.12).toString()}` };
	}
`;

const Button = styled.button`
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
	primary: PropTypes.bool,
	accent: PropTypes.bool,
	raised: PropTypes.bool,
	round: PropTypes.bool,
	mini: PropTypes.bool,
	ripple: PropTypes.bool
};

Button.defaultProps = {
	ripple: true
};

Button.displayName = 'Button';
export default Button;