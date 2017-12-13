import React from 'react';
import { mount, shallow } from 'enzyme';
import 'jest-styled-components';

import theme from '../theme/defaultTheme';
import List, { ListItem, ListItemText } from './';

describe('<List />', () => {
	it('renders correctly', () => {
		mount(<List theme={theme} />);
	});

	it('renders correctly when no theme is provided', () => {
		mount(<List />);
	});

	it('renders children when passed in', () => {
		const children = (
			<ListItem>
				<ListItemText
					primary="Primary"
					secondary="Secondary"
				/>
			</ListItem>
		);
		const wrapper = shallow(<List>{ children }</List>);
		expect(wrapper.contains(children)).toBe(true);
	});
});