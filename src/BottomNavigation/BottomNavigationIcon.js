import { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BottomNavigationIconComponent = ({ children, className }) => cloneElement(Children.only(children), { className });

const BottomNavigationIcon = styled(BottomNavigationIconComponent)`
	fill: currentColor;
	flex: 0 0 24px;
`;

BottomNavigationIcon.propTypes = {
	children: PropTypes.node.isRequired
};

BottomNavigationIcon.displayName = 'BottomNavigationIcon';
export default BottomNavigationIcon;