import React from 'react';
import styled from 'styled-components';
import typography from '../mixins/typography';

const CardContentComponent = ({ className, children }) => (
	<div className={className}>{ children }</div>
);

const CardContent = styled(CardContentComponent)`
	padding: 0 16px 16px;
	${ typography('body1') }
	margin: 0;

	&:first-child {
		padding-top: 16px;
	}
`;

CardContent.displayName = 'CardContent';
export default CardContent;