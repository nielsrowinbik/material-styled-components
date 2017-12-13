import React from 'react';
import styled from 'styled-components';

const List = styled(({ ...props }) => <ul {...props} />)`
	position: relative;
	margin: 8px 0;
	padding: 0;
	list-style: none;
`;

List.displayName = 'List';
export default List;