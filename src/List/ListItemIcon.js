import { Children, cloneElement } from 'react';
import styled from 'styled-components';

const ListItemIcon = styled(({ children, ...props }) => cloneElement(Children.only(children), props))`
	flex-shrink: 0;
	margin-right: 16px;
	width: 24px;
	color: ${({ theme }) => theme ? theme.textColors.icon : 'rgba(0, 0, 0, 0.54)'};
`;

export default ListItemIcon;