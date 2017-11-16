import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
	100% {
		transform: rotate(360deg);
	}
`;

const circularDash = keyframes`
	0% {
		stroke-dasharray: 1,200;
		stroke-dashoffset: 0;
	}
	50% {
		stroke-dasharray: 100,200;
		stroke-dashoffset: 15;
	}
	100% {
		stroke-dasharray: 1,200;
		stroke-dashoffset: -120;
	}
`;

const CircularComponent = ({ className, thickness }) => (
	<div className={className}>
		<svg viewBox="0 0 50 50">
			<circle cx="25" cy="25" r="20" fill="none" strokeWidth={thickness} />
		</svg>
	</div>
);

const Circular = styled(CircularComponent)`
	display: inline-block;
	width: ${props => props.size}px;
	height: ${props => props.size}px;
	color: ${props => props.accent ? props.theme.accent : props.theme.primary};

	svg {
		animation: ${rotate} 1.4s linear infinite;

		circle {
			stroke-dasharray: 80, 200;
			stroke-dashoffset: 0;
			stroke: currentColor;
			stroke-linecap: round;
			animation: ${circularDash} 1.4s ease-in-out infinite;
		}
	}
`;

Circular.propTypes = {
	accent: PropTypes.bool,
	size: PropTypes.number.isRequired,
	thickness: PropTypes.number.isRequired
};

Circular.defaultProps = {
	size: 40,
	thickness: 3.6
};

Circular.displayName = 'Circular';
export default Circular;