import React from 'react';
import { mount, shallow } from 'enzyme';
import 'jest-styled-components';

import theme from '../theme/defaultTheme';
import AppBar from './AppBar';

describe('<AppBar />', () => {
	it('renders correctly', () => {
		mount(<AppBar theme={theme} />);
	});

	it('renders children when passed in', () => {
		const children = <div className="test" />;
		const wrapper = shallow(<AppBar theme={theme}>{ children }</AppBar>);
		expect(wrapper.contains(children)).toBe(true);
	});
});