import { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ListItemIconComponent = ({ children, className }) => cloneElement(Children.only(children), { className });

const ListItemIcon = styled(ListItemIconComponent)`
	flex-shrink: 0;
	margin-right: 16px;
	width: 24px;
	color: ${props => props.theme.textColors.icon};
`;

ListItemIcon.propTypes = {
	children: PropTypes.node.isRequired
};

export default ListItemIcon;