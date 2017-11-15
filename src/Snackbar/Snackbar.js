import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import Transition from 'react-transition-group/Transition';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import SnackbarMessage from './SnackbarMessage';
import SnackbarActionMessage from './SnackbarActionMessage';
import SnackbarBase from './SnackbarBase';

class SnackbarClass extends Component {
	state = {
		visible: false
	}

	handleActionClick = (event) => {
		if (this.props.onRequestClose) this.props.onRequestClose('action');
		if (this.props.action) this.props.action(event);
	}
	
	handleClick = () => {
		if (this.props.onRequestClose) this.props.onRequestClose('click');
	}
	
	onEntered = () => this.setState({ visible: true });
	
	onExit = () => this.setState({ visible: false });

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
		let { open, message, actionMessage, portal, className } = this.props;

		const CompToRender = (
			<Transition
				timeout={{ enter: 0, exit: 225 }}
				in={open}
				mountOnEnter
				unmountOnExit
				onEntered={this.onEntered}
				onExit={this.onExit}
			>
				<SnackbarBase className={className} onClick={this.handleClick} {...this.state}>
					<SnackbarMessage>{ message }</SnackbarMessage>
					{ actionMessage && <SnackbarActionMessage onClick={this.handleActionClick}>{ actionMessage }</SnackbarActionMessage> }
				</SnackbarBase>
			</Transition>
		);

		return portal ? createPortal(CompToRender, document.body) : CompToRender;
	}
}

const Snackbar = styled(SnackbarClass)``;

Snackbar.propTypes = {
	open: PropTypes.bool.isRequired,
	message: PropTypes.string.isRequired,
	portal: PropTypes.bool.isRequired,
	action: PropTypes.func,
	actionMessage: PropTypes.string,
	autohideDuration: PropTypes.number,
	onRequestClose: PropTypes.func
};

Snackbar.defaultProps = {
	portal: true
};

Snackbar.displayName = 'Snackbar';
export default Snackbar;