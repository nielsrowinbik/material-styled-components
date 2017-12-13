import React from 'react';
import { mount, shallow } from 'enzyme';
import 'jest-styled-components';

import theme from '../theme/defaultTheme';
import Button from './Button';

describe('<Button />', () => {
	it('renders correctly', () => {
		mount(<Button theme={theme} />);
	});

	it('renders correctly when no theme is provided', () => {
		mount(<Button />);
	});

	it('should render children when passed in', () => {
		const children = 'Sign In';
		const wrapper = shallow(<Button theme={theme}>{ children }</Button>);
		expect(wrapper.contains(children)).toBe(true);
	});
});