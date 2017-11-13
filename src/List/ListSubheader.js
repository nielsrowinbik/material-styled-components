import PropTypes from 'prop-types';
import styled from 'styled-components';
import { font } from '../mixins/typography';

const ListSubheader = styled.div`
	top: 0;
	z-index: 1;
	position: sticky;
	background-color: inherit;
	${ font(500, 14, 48) }
	color: ${props => props.theme.textColors.secondary};
	padding: 0 16px;
`;

ListSubheader.propTypes = {
	children: PropTypes.string
};

ListSubheader.displayName = 'ListSubheader';
export default ListSubheader;