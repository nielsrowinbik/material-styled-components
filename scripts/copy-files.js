import path from 'path';
import fs from 'fs-extra';

const copyFile = async (file) => {
	let buildPath = path.resolve(__dirname, '../lib/', path.basename(file));

	await fs.copy(file, buildPath, (err) => {
		if (err) throw err;
	});

	return;
};

const createPackage = async () => {
	let data = await fs.readFile(path.resolve(__dirname, '../package.json'), 'utf8');

	let packageData = JSON.parse(data),
		buildPackage = {
			...packageData,
			name: 'material-styled-components',
			main: './index.js'
		},
		buildPath = path.resolve(__dirname, '../lib/package.json'),
		buildPackageData = JSON.stringify(buildPackage, null, 2);

	await fs.writeFile(buildPath, buildPackageData);

	return;
};

const files = ['README.md', 'CONTRIBUTING.md', 'LICENSE'];

Promise.all(files.map(file => copyFile(file))).then(() => createPackage());