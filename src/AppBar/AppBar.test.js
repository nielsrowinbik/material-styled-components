import React from 'react';
import { mount, shallow } from 'enzyme';
import ThemeProvider from '../theme/ThemeProvider';
import AppBar from './AppBar';

describe('<AppBar />', () => {
	it('renders without crashing', () => {
		mount(<ThemeProvider><AppBar /></ThemeProvider>);
	});

	it('renders children when passed in', () => {
		const children = <div className="test" />;
		const wrapper = shallow((
			<ThemeProvider>
				<AppBar>{ children }</AppBar>
			</ThemeProvider>
		));
		expect(wrapper.contains(children)).toBe(true);
	});
});