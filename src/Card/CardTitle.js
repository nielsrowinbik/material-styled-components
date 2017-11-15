import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import typography, { font } from '../mixins/typography';

const CardTitleComponent = ({ className, primary, secondary }) => (
	<div className={className}>
		{ primary && <h2>{ primary }</h2> }
		{ secondary && <h3>{ secondary }</h3> }
	</div>
);

const CardTitle = styled(CardTitleComponent)`
	padding: ${props => props.primary ? 24 : 16}px 16px 16px 16px;
	text-align: left;

	&:last-child {
		padding-bottom: 24px;
	}

	& > h2 {
		${ typography('headline') }
		margin: 0;
	}
	
	& > h3 {
		${ font(400, 14, 20) }
		margin: 0;
		color: ${props => props.theme.textColors.secondary};
	}
`;

CardTitle.propTypes = {
	primary: PropTypes.string,
	secondary: PropTypes.string,
	smallTitle: PropTypes.bool
};

CardTitle.displayName = 'CardTitle';
export default CardTitle;