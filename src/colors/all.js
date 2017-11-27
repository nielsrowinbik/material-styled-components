import * as colors from './index';

// eslint-disable-next-line prefer-spread
const all = [].concat.apply([], Object.values(colors).map((obj) => Object.values(obj)));

export default all;