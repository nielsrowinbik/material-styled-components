import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { font } from '../mixins/typography';

const DialogTitleComponent = ({ className, children }) => (
	<div className={className}>
		<h2>{ children }</h2>
	</div>
);

const DialogTitle = styled(DialogTitleComponent)`
	padding: 24px 24px 20px 24px;
	
	&:last-child {
		padding-bottom: 24px;
	}

	& > h2 {
		margin: 0;
		color: ${props => props.theme.textColors.primary};
		${ font(500, 21, 24) }
	}
`;

DialogTitle.propTypes = {
	children: PropTypes.string
};

export default DialogTitle;