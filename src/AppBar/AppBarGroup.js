import React from 'react';
import styled from 'styled-components';

const AppBarGroup = styled(({ ...props }) => <div {...props} />)`
	flex: auto;
	height: 100%;
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: center;
	justify-content: center;

	&:first-child {
		padding-left: 16px;
		justify-content: flex-start;
	}
	
	&:last-child {
		padding-right: 16px;
		justify-content: flex-end;
	}
`;

export default AppBarGroup;