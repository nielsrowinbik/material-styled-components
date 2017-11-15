import React, { cloneElement } from 'react';
import CardActions from '../Card/CardActions';

const DialogActions = ({ children, ...props }) => cloneElement(
	<CardActions />,
	{ ...props, alignRight: true },
	children
);

export default DialogActions;