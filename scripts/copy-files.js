import path from 'path';
import fs from 'fs-extra';

const copyFile = async (file) => {
	let buildPath = path.resolve(__dirname, '../lib/', path.basename(file));

	await fs.copy(file, buildPath, (err) => {
		if (err) throw err;
	});

	return;
};

const files = ['package.json', 'README.md', 'CONTRIBUTING.md', 'LICENSE'];

Promise.all(files.map(file => copyFile(file)));