import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { font } from '../mixins/typography';
import elevation, { elevationTransition } from '../mixins/elevation';

const Message = styled.span`
	flex: auto;
	text-align: left;
	color: white;
	${ font(400, 14, 20) }
	word-wrap: break-word;
`;

const ActionMessage = styled.span`
	text-align: right;
	margin-left: 24px;
	color: ${props => props.theme.accent};
	${ font(500, 14, 20) }

	&:hover {
		cursor: pointer;
	}

	@media (min-width: 601px) {
		margin-left: 48px;
	}
`;

class SnackbarComponent extends Component {

	handleActionClick = (event) => {
		if (this.props.onRequestClose) this.props.onRequestClose('action');
		if (this.props.action) this.props.action(event);
	}
	
	handleClick = () => {
		if (this.props.onRequestClose) this.props.onRequestClose('click');
	}

	componentWillReceiveProps(nextProps) {
		let { open: newOpen, autohideDuration } = nextProps,
			{ open: curOpen } = this.props;

		if (curOpen !== newOpen && newOpen === true && autohideDuration > 0) {
			setTimeout(() => {
				if (this.props.onRequestClose) this.props.onRequestClose('timeout');
			}, autohideDuration);
		}
	}

	render() {
		let { className, message, actionMessage } = this.props;
		return (
			<div className={className} onClick={this.handleClick}>
				<Message>{ message }</Message>
				{ actionMessage && <ActionMessage onClick={this.handleActionClick}>{ actionMessage }</ActionMessage> }
			</div>
		);
	}
}

const Snackbar = styled(SnackbarComponent)`
	display: flex;
	flex-direction: row;
	align-items: center;
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100vw;
	min-height: 48px;
	max-height: 112px;
	padding: 14px 24px; // TODO: top and bottom padding should be 24px when message spans across multiple lines
	box-sizing: border-box;
	background-color: #323232;
	${ elevation(1) }
	transform: ${props => props.open ? `translate3d(0, 0, 0)` : `translate3d(0, 100%, 0)`};
	transition: ${elevationTransition}, transform 225ms ${props => props.open ? `cubic-bezier(0.4, 0, 0.2, 1)` : `cubic-bezier(0, 0, 0.2, 1)`};

	@media (min-width: 601px) {
		width: auto;
		min-width: 288px;
		max-width: 568px;
		border-radius: 2px;
		left: 50%;
		transform: ${props => props.open ? `translate3d(-50%, 0, 0)` : `translate3d(-50%, 100%, 0)`};
	}
	
	& > * {
		// TODO: tweak this animation
		opacity: ${props => props.open ? 1 : 0};
		transition: opacity 225ms ease-out 75ms;
	}
`;

Snackbar.propTypes = {
	open: PropTypes.bool.isRequired,
	message: PropTypes.string.isRequired,
	action: PropTypes.func,
	actionMessage: PropTypes.string,
	autohideDuration: PropTypes.number,
	onRequestClose: PropTypes.func
};

Snackbar.defaultProps = {
	open: false
};

Snackbar.displayName = 'Snackbar';
export default Snackbar;