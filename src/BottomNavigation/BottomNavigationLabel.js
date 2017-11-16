import PropTypes from 'prop-types';
import styled from 'styled-components';
import { font } from '../mixins/typography';

const BottomNavigationLabel = styled.label`
	${props => font(400, 12) }
	pointer-events: none;

	@media (min-width: 601px) {
		${ font(400, 10) }
		margin-top: 6px;
		transition: none;
	}
`;

BottomNavigationLabel.propTypes = {
	children: PropTypes.node.isRequired
};

BottomNavigationLabel.displayName = 'BottomNavigationLabel';
export default BottomNavigationLabel;