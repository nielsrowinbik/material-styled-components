import React from 'react';
import { Transition, TransitionGroup } from 'react-transition-group';
import styled, { keyframes } from 'styled-components';
import _isStyledComponent from 'styled-components/lib/utils/isStyledComponent';

const DURATION_BASE = 225;

const rippleScale = keyframes`
	from { transform: scale(0); }
	to { transform: scale(1); }
`;

const rippleOpacity = keyframes`
	from { opacity: 0.3; }
	to { opacity: 0; }
`;

const RippleSpan = styled.span`
	position: absolute;
	pointer-events: none;
	background: currentColor;
	opacity: 0;
	border-radius: 50%;
	top: ${props => props.y - props.size / 2}px;
	left: ${props => props.x - props.size / 2}px;
	width: ${props => props.size}px;
	height: ${props => props.size}px;
	animation: ${rippleScale} ${3 * DURATION_BASE}ms cubic-bezier(0.4, 0, 0.2, 1), ${rippleOpacity} ${3 * DURATION_BASE}ms linear;
`;

const Ripple = (props) => (
	<Transition
		in
		timeout={{ enter: 3 * DURATION_BASE, exit: 0 }}
		{...props}
	><RippleSpan /></Transition>
);

const RippleContainer = styled.span`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background: transparent;
	transition: background ${2 * DURATION_BASE}ms ease, opacity ${2 * DURATION_BASE}ms ease;

	${props => props.active && `
		opacity: 0.3;
		background: currentColor;
		transition: background 500ms ease;
	`}
`;

const injectRipple = (Component) => {
	const componentName = Component.displayName || Component.name || 'Component',
		isStyledComponent = _isStyledComponent(Component);
	
	let ExtendedComponent;

	if (isStyledComponent) {
		ExtendedComponent = Component.extend`
			position: relative !important;
			overflow: hidden !important;
		`;
	}

	class WithRipple extends React.Component {
		static displayName = `WithRipple(${componentName})`;
		static styledComponentId = 'withRipple';

		state = {
			active: false,
			ripples: []
		}

		ignoringMouseDown = false;

		prepare = (event) => {
			if (event.type === 'mousedown' && this.ignoringMouseDown) {
				this.ignoringMouseDown = false;
				return;
			}

			if (event.type === 'touchstart') {
				this.ignoringMouseDown = true;
			}

			let element = event.target,
				rect = element.getBoundingClientRect(),
				x, y, size;

			const clientX = event.clientX ? event.clientX : event.touches[0].clientX;
			const clientY = event.clientY ? event.clientY : event.touches[0].clientY;
			x = Math.round(clientX - rect.left);
			y = Math.round(clientY - rect.top);

			const sizeX = Math.max(Math.abs((element ? element.clientWidth : 0) - x), x) * 2 + 2;
			const sizeY = Math.max(Math.abs((element ? element.clientHeight : 0) - y), y) * 2 + 2;
			size = Math.sqrt(Math.pow(sizeX, 2) + Math.pow(sizeY, 2));

			this.setState({ active: { x, y, size } });
		}

		start = (event) => {
			let { active } = this.state;
			if (active) {
				this.setState({ active: false, ripples: [...this.state.ripples, active] });
			}
		}

		handleRippleDone = () => this.setState({ ripples: this.state.ripples.slice(1) });

		render() {
			let { children, ...props } = this.props,
				{ active, ripples } = this.state;
			const RippledComponent = isStyledComponent ? ExtendedComponent : Component;
			return (
				<RippledComponent
					{...props}
					onMouseDown={this.prepare}
					onMouseUp={this.start}
					onMouseLeave={this.start}
					onTouchStart={this.prepare}
					onTouchEnd={this.start}
				>
					{ children }
					<TransitionGroup
						enter
						exit
						active={active}
						component={RippleContainer}
					>
						{ ripples.map((ripple, id) => (
							<Ripple
								key={id}
								{...ripple}
								onEntered={this.handleRippleDone}
							/>
						)) }
					</TransitionGroup>
				</RippledComponent>
			);
		}
	}

	return styled(WithRipple)``;
};

export default injectRipple;