import styled from 'styled-components';
import { font } from '../mixins/typography';

const AppBarTitle = styled.h2`
	${ font(500, 21)}
	color: white;
	margin: 0;
	display: inline-block;
`;

export default AppBarTitle;