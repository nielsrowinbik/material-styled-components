import React, { Component } from 'react';
import styled from 'styled-components';

const patch = (TargetComponent) => {
	const ExtendedStylesComponent = TargetComponent.extend`
		position: relative;
		overflow: hidden;
	`;

	const RippleContainer = styled.div`
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	`;

	const Ripple = styled.div`
		position: absolute;
		border-radius: 100%;
		background: currentColor;
		top: ${props => props.top || 0}px;
		left: ${props => props.left || 0}px;
		width: ${props => props.width || 0}px;
		height: ${props => props.height || 0}px;
		opacity: ${props => props.done ? 0 : props.held ? 0.4 : 0.2 };
		transform: ${props => props.held ? 'scale(3)' : 'scale(0)'};
		pointer-events: none;
		user-select: none;
		transition: transform 225ms ease-out, opacity 225ms ease-out;
	`;

	return class RippleEnabledComponent extends Component {
		state = {
			held: false,
			done: false,
			top: 0,
			left: 0,
			height: 0,
			width: 0
		}

		handleClick = (event) => {
			if (this.state.held) return;
			
			let holder = event.target,
				size = holder.offsetWidth,
				pos = holder.getBoundingClientRect(),
				x = event.pageX - pos.left - (size / 2),
				y = event.pageY - pos.top - (size / 2);

			this.setState({
				held: true,
				top: y,
				left: x,
				height: size,
				width: size
			});
		}

		reset = () => {
			this.setState({ done: true });
			setTimeout(() => this.setState({
				held: false,
				done: false,
				top: 0,
				left: 0,
				height: 0,
				width: 0
			}), 225);
		}

		render = () => (
			<ExtendedStylesComponent {...this.props}>
				{this.props.children}
				<RippleContainer onMouseDown={this.handleClick} onMouseUp={this.reset}>
					<Ripple {...this.state} />
				</RippleContainer>
			</ExtendedStylesComponent>
		);
	};
};

const withRipple = (composedComponent) => {
	if (
		typeof composedComponent === 'function' &&
        (!composedComponent.prototype || !composedComponent.prototype.render) &&
        !composedComponent.isReactClass &&
        !Component.isPrototypeOf(composedComponent)
	) {
		return withRipple(
			class extends Component {
				static displayName = composedComponent.displayName || composedComponent.name;
                static contextTypes = composedComponent.contextTypes;
                static propTypes = composedComponent.propTypes;
				static defaultProps = composedComponent.defaultProps;
				
				render = () => composedComponent.call(this, this.props, this.context);
			}
		);
	}

	if (!composedComponent) throw new Error("Please pass a valid component to 'withRipple'");

	const target = composedComponent,
		patched = patch(target);

	return patched;
};


export default withRipple;