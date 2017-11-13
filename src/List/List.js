import styled from 'styled-components';

const List = styled.ul`
	position: relative;
	margin: 8px 0;
	padding: 0;
	list-style: none;

	&:not(:last-child):after {
		content: '';
		position: absolute;
		bottom: -4px;
		left: 0;
		right: 0;
		height: 1px;
		background: rgba(0, 0, 0, 0.12);
	}
`;

List.displayName = 'List';
export default List;