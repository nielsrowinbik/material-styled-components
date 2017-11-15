import React, { createElement, Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import elevation from '../mixins/elevation';

const Overlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	background: rgba(0, 0, 0, 0.54);
	z-index: 24;
`;

const BaseComponent = ({ children, isForm, ...props }) => createElement(
	isForm ? 'form' : 'div',
	{ ...props },
	children
);

const Base = styled(BaseComponent)`
	border-radius: 2px;
	${ elevation(24) }
	background: white;
	max-width: 600px;
	margin: 32px;
	flex: 0 1 auto;
	max-height: 90vh;
	overflow-y: auto;
`;

class Dialog extends Component {

	handleOverlayClick = (event) => {
		if (this.props.onRequestClose) this.props.onRequestClose('click');
	}

	handleBaseClick = (event) => event.stopPropagation();

	handleSubmit = (event) => {
		event.preventDefault();
		if (this.props.onRequestClose) this.props.onRequestClose('submit');
		this.props.onSubmit(event);
	}

	componentWillReceiveProps(nextProps) {
		let { open: newOpen } = nextProps,
			{ open: curOpen } = this.props;

		if (curOpen !== newOpen && newOpen === true) {
			document.body.style.overflow = 'hidden';
		}
		else if (curOpen !== newOpen && newOpen === false) {
			document.body.style.overflow = null;
		}
	}

	render() {
		let { open, onSubmit, children } = this.props;
		return open && createPortal((
			<Overlay
				ref={node => this.overlay = node}
				onClick={this.handleOverlayClick}
			>
				<Base
					onClick={this.handleBaseClick}
					onSubmit={this.handleSubmit}
					isForm={typeof onSubmit === 'function'}
				>{ children }</Base>
			</Overlay>
		), document.body);
	}
}

Dialog.PropTypes = {
	onSubmit: PropTypes.func,
	onRequestClose: PropTypes.func,
	open: PropTypes.bool.isRequired
};

Dialog.displayName = 'Dialog';
export default Dialog;