import styled from 'styled-components';
import { font } from '../mixins/typography';

const Snackbar = styled.div`
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	min-height: 48px;
	max-height: 80px;
	background-color: #323232;
	padding: 0 24px;
	color: white;
	${ font(400, 14, 20) }
`;

Snackbar.displayName = 'Snackbar';
export default Snackbar;