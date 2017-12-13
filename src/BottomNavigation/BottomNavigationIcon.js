import { Children, cloneElement } from 'react';
import styled from 'styled-components';

const BottomNavigationIcon = styled(({ children, ...props }) => cloneElement(Children.only(children), props))`
	fill: currentColor;
	flex: 0 0 24px;
`;

BottomNavigationIcon.displayName = 'BottomNavigationIcon';
export default BottomNavigationIcon;