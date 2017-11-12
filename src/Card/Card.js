import React from 'react';
import styled from 'styled-components';
import elevation from '../mixins/elevation';

const CardComponent = ({ className, children }) => (
	<div className={className}>{ children }</div>
);

const Card = styled(CardComponent)`
	display: inline-block;
	border-radius: 2px;
	background-color: white;
	${ elevation(2) }
`;

export default Card;