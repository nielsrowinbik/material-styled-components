import React, { Component } from 'react';
import styled from 'styled-components';

import FloatingLabel from './FloatingLabel';
import Inner from './Inner';
import BottomLabel from './BottomLabel';
import Input from './Input';
import Adornment from './Adornment';

// TODO: Clean all of this up

class InputField extends Component {
	state = {
		focus: false,
		controlled: false
	}

	onFocus = () => {
		this.setState({ focus: true });
		if (this.props.onFocus) this.props.onFocus();
	}
	
	onBlur = () => {
		this.setState({ focus: false });
		if (this.props.onBlur) this.props.onBlur();
	}
	
	render = () => {
		let { adornment, className, label, fullWidth, help, disabled, value, type, ...props } = this.props,
			{ controlled, focus, error, internalValue } = this.state;
		return (
			<div className={className}>
				<FloatingLabel
					shrink={focus || adornment || value || internalValue}
					focus={focus}
					disabled={disabled}
					error={error}
				>{ label }</FloatingLabel>
				<Inner
					focus={focus}
					disabled={disabled}
					error={error}
				>
					{ adornment && <Adornment>{ adornment }</Adornment> }
					<Input
						value={value || internalValue}
						type={type}
						onFocus={this.onFocus}
						onBlur={this.onBlur}
						onInput={this.onInput}
						disabled={disabled}
					/>
				</Inner>
				{ (help || error) && <BottomLabel error={error} disabled={disabled}>{ error ? error : help }</BottomLabel> }
			</div>
		);
	}
}

export default styled(InputField)`
	position: relative;
	display: inline-flex;
	flex-direction: column;
	width: ${props => props.fullWidth ? '100%' : 'auto' };
`;