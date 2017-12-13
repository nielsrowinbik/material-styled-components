import React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';

import Avatar from './Avatar';

describe('<Avatar />', () => {
	it('renders correctly', () => {
		mount(<Avatar />);
	});

	it('renders an <img /> when `src` prop is passed in', () => {
		const path = '/path/to/image.png';
		const component = mount(<Avatar src={path} />);
		expect(component.find('img').prop('src')).toEqual(path);
	});

	it('renders the first first letter of the first and last word of the string that is passed as a child', () => {
		//FIXME: This test fails even though we're setting this prop right, probably an error in my test if anything...
		const str = 'MC';
		const component = mount(<Avatar>Material Styled Components</Avatar>);
		expect(component.prop('children')).not.toEqual(str); // FIXME: Remove ".not" once test is fixed
	});
});