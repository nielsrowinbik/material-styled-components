import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const vertical = css`
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
`;

const CardActions = styled.div`
	padding: 6px 8px;
	text-align: ${props => props.alignRight ? 'right' : 'left'};

	& > * {
		margin: 2px 0;
	}

	& > *:not(:last-child) {
		margin-right: 8px;
	}

	${props => props.vertical && vertical}
`;

CardActions.propTypes = {
	alignRight: PropTypes.bool,
	vertical: PropTypes.bool
};

CardActions.defaultProps = {
	alignRight: false,
	vertical: false
};

CardActions.displayName = 'CardActions';
export default CardActions;