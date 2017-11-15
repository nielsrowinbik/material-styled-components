import styled from 'styled-components';
import elevation, { elevationTransition } from '../mixins/elevation';

const SnackbarBase = styled.div`
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
	transform: ${props => props.visible ? `translate3d(0, 0, 0)` : `translate3d(0, 100%, 0)`};
	transition: ${elevationTransition}, transform 225ms ${props => props.visible ? `cubic-bezier(0.4, 0, 0.2, 1)` : `cubic-bezier(0, 0, 0.2, 1)`};

	@media (min-width: 601px) {
		width: auto;
		min-width: 288px;
		max-width: 568px;
		border-radius: 2px;
		left: 50%;
		transform: ${props => props.visible ? `translate3d(-50%, 0, 0)` : `translate3d(-50%, 100%, 0)`};
	}
`;

export default SnackbarBase;