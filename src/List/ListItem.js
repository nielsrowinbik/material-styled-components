import PropTypes from 'prop-types';
import styled from 'styled-components';

const ListItem = styled.li`
	padding: 12px 16px;
	min-height: 48px;
	box-sizing: border-box;
	display: flex;
    position: relative;
    align-items: center;
    justify-content: flex-start;
    text-decoration: none;

	&:hover {
		cursor: pointer;
    	background-color: rgba(0, 0, 0, 0.12);
	}
`;

ListItem.propTypes = {
	primary: PropTypes.string,
	secondary: PropTypes.string,
	children: PropTypes.node
};

ListItem.displayName = 'ListItem';
export default ListItem;