# Material Styled Components

A set of [Styled Components](https://github.com/styled-components/styled-components) that implement Google's Material Design.

```sh
$ npm install material-styled-components
& yarn add material-styled-components
```

[![npm](https://img.shields.io/npm/v/material-styled-components.svg)](https://www.npmjs.com/package/material-styled-components) [![Build status](https://travis-ci.org/nielsrowinbik/material-styled-components.svg?branch=master)](https://travis-ci.org/nielsrowinbik/material-styled-components)

## Usage

This quick example should get you going within seconds:

```jsx
import React from 'react';
import { render } from 'react-dom';
import Button from 'material-styled-components/Button';

function App() {
	return (
		<Button>Hello World</Button>
	);
}

render(<App />, document.querySelector('#app'));
```

## Contributing

Thanks for wanting to help make Material Styled Components better! We invite you to use GitHub Issues for any feature requests, questions, and so forth. Please try to label your issue appropriately.

Read more on contributions in [CONTRIBUTING.md](CONTRIBUTING.md).

## License

This project is licensed under the [MIT license](LICENSE).