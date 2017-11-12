import React from 'react';
import { ThemeProvider } from 'styled-components';
import defaultTheme from './defaultTheme';

const MaterialThemeProvider = ({ children, theme = {} }) => {
	let final = Object.assign({}, defaultTheme, theme);
	return <ThemeProvider theme={final}>{ children }</ThemeProvider>;
};

export default MaterialThemeProvider;