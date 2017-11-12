import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import typography, { font } from '../mixins/typography';

const CardTitleComponent = ({ className, title, smallTitle, subtitle }) => (
	<div className={className}>
		{ (title || smallTitle) && <h2>{ title || smallTitle }</h2> }
		{ subtitle && <h3>{ subtitle }</h3> }
	</div>
);

const CardTitle = styled(CardTitleComponent)`
	padding: ${props => props.title ? 24 : 16}px 16px 16px 16px;

	&:last-child {
		padding-bottom: 24px;
	}

	& > h2 {
		${ typography('headline') }
		margin: 0;
	}
	
	& > h3 {
		${ font(400, 14, 14) }
		margin: 0;
		color: ${props => props.theme.textColors.secondary};
		padding-top: 12px;
	}
`;

CardTitle.propTypes = {
	title: PropTypes.string,
	subtitle: PropTypes.string,
	smallTitle: PropTypes.string
};

CardTitle.displayName = 'CardTitle';
export default CardTitle;