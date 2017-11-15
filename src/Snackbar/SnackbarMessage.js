import styled from 'styled-components';
import { font } from '../mixins/typography';

const SnackbarMessage = styled.span`
	flex: auto;
	text-align: left;
	color: white;
	${ font(400, 14, 20) }
	word-wrap: break-word;
`;

export default SnackbarMessage;