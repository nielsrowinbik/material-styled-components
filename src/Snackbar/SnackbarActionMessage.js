import styled from 'styled-components';
import { font } from '../mixins/typography';

const SnackbarActionMessage = styled.span`
	text-align: right;
	margin-left: 24px;
	color: ${props => props.theme.accent};
	${ font(500, 14, 20) }

	&:hover {
		cursor: pointer;
	}

	@media (min-width: 601px) {
		margin-left: 48px;
	}
`;

export default SnackbarActionMessage;