# Material Styled Components

A set of [Styled Components](https://github.com/styled-components/styled-components) that implement Google's Material Design.

```sh
$ npm install material-styled-components
$ yarn add material-styled-components
```

[![npm](https://img.shields.io/npm/v/material-styled-components.svg)](https://www.npmjs.com/package/material-styled-components) [![Build status](https://travis-ci.org/nielsrowinbik/material-styled-components.svg?branch=master)](https://travis-ci.org/nielsrowinbik/material-styled-components)

[![dependencies Status](https://david-dm.org/nielsrowinbik/material-styled-components/status.svg)](https://david-dm.org/nielsrowinbik/material-styled-components) [![devDependencies Status](https://david-dm.org/nielsrowinbik/material-styled-components/dev-status.svg)](https://david-dm.org/nielsrowinbik/material-styled-components?type=dev)

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

## Extending components

All components are exported as Styled Components, which means you can extend them:

```jsx
import Card from 'material-styled-components/Card';

const BlueCard = Card.extend`
	background-color: blue;
`;
```

## Props

All props that are not part of the component's props will be applied to the root element. As a result, any non-HTML attributes may trigger a warning. To remedy this, simply omit your custom prop from the props applied to the element like so:

```jsx
import Button from 'material-styled-components/Button';
import styled from 'styled-components';

const MyButton = styled(({ myCustomProp, ...props }) => <Button {...props} />)`
	/* use your prop here */
`;
```

## Contributing

Thanks for wanting to help make Material Styled Components better! We invite you to use GitHub Issues for any feature requests, questions, and so forth. Please try to label your issue appropriately. If you'd like to add a feature to a component or add a component to the library, feel free to send a pull request. To save yourself from doing a lot of work and not having the PR merged, open an issue about your intended feature first.

## License

This project is licensed under the [MIT license](LICENSE).