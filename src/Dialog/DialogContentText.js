import styled from 'styled-components';
import { font } from '../mixins/typography';

const DialogContentText = styled.p`
	${ font(400, 16, 24) }
	color: ${props => props.theme.textColors.secondary};
	margin: 0;
`;

export default DialogContentText;