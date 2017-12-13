import React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';

import theme from '../theme/defaultTheme';
import BottomNavigation from './BottomNavigation';

describe('<BottomNavigation />', () => {
	it('renders correctly', () => {
		mount(<BottomNavigation theme={theme} />);
	});

	it('renders correctly when no theme is provided', () => {
		mount(<BottomNavigation />);
	});
});