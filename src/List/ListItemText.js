import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { font } from '../mixins/typography';

const ListItemTextComponent = ({ className, primary, secondary }) => (
	<div className={className}>
		{ primary && <h3>{ primary }</h3> }
		{ secondary && <p>{ secondary }</p> }
	</div>
);

const ListItemText = styled(ListItemTextComponent)`
	flex: 1 1 auto;
	padding-left: 16px;
	text-align: left;

	& > h3,
	& > p {
		margin: 0;
		display: inline-block;
		text-decoration: none;
	}

	& > h3 {
		${ font(400, 16, 24) }
		color: ${props => props.theme.textColors.primary};
	}

	& > p {
		${ font(400, 14, 20) }
		color: ${props => props.theme.textColors.secondary};
	}
`;

ListItemText.propTypes = {
	primary: PropTypes.string.isRequired,
	secondary: PropTypes.string
};

ListItemText.displayName = 'ListItemText';
export default ListItemText;