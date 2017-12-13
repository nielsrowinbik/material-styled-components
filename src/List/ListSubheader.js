import styled from 'styled-components';
import { font } from '../mixins/typography';

const ListSubheader = styled.div`
	top: 0;
	z-index: 1;
	position: sticky;
	background-color: inherit;
	${ font(500, 14, 48) }
	color: ${({ theme }) => theme ? theme.textColors.secondary : 'rgba(0, 0, 0, 0.54)'};
	padding: 0 16px;
`;

ListSubheader.displayName = 'ListSubheader';
export default ListSubheader;