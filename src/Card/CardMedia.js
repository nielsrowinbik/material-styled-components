import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardMediaComponent = ({ className, src, children }) => (
	<div className={className}>
		<img src={src} />
	</div>
);

const CardMedia = styled(CardMediaComponent)`
	position: relative;
	padding-bottom: 52.25%;

	& > img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

CardMedia.propTypes = {
	src: PropTypes.string.isRequired
};

CardMedia.defaultProps = {
	square: false
};

CardMedia.displayName = 'CardMedia';
export default CardMedia;