import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { font } from '../mixins/typography';

const ListItemText = styled(({ primary, secondary, ...props }) => (
	<div {...props}>
		<h3>{ primary }</h3>
		{ secondary && <p>{ secondary }</p> }
	</div>
))`
	flex: 1 1 auto;
	padding-left: 16px;
	text-align: left;

	h3,
	p,
	a {
		margin: 0;
		display: block;
		text-decoration: none;
	}

	h3 {
		${ font(400, 16, 24) }
		color: ${({ theme }) => theme ? theme.textColors.primary : 'rgba(0, 0, 0, 0.87)'};
	}

	p {
		${ font(400, 14, 20) }
		color: ${({ theme }) => theme ? theme.textColors.secondary : 'rgba(0, 0, 0, 0.54)'};
	}
`;

ListItemText.propTypes = {
	primary: PropTypes.string.isRequired,
	secondary: PropTypes.string
};

ListItemText.displayName = 'ListItemText';
export default ListItemText;