import React from 'react';
import styled from 'styled-components';
import typography from '../mixins/typography';

const CardContentComponent = ({ className, children }) => (
	<div className={className}>{ children }</div>
);

const CardContent = styled(CardContentComponent)`
	padding: 16px;
	${ typography('body1') }
`;

CardContent.displayName = 'CardContent';
export default CardContent;