const fs = require('fs');
const path = require('path');
const { findpath } = require('nw');
const { spawn } = require('child_process');

const configFilePath = path.resolve(__dirname, '..', 'orange.config.json');

if (!fs.existsSync(configFilePath)) {
	throw new Error('The file orange.config.json was not found on the root path.');
}

const configFileContent = fs.readFileSync(configFilePath, 'utf8');
const config = JSON.parse(configFileContent);

if (typeof config !== 'object' || !config.gameDirectoryPath) {
	throw new Error('There was an error while trying the read the gameDirectoryPath property from the configuration.');
}

if (!fs.existsSync(config.gameDirectoryPath)) {
	throw new Error('The gameDirectoryPath could not be found.');
}

const deleteFolderRecursive = function (filePath) {
	if (!fs.existsSync(filePath)) {
		return;
	}

	fs.readdirSync(filePath)
		.forEach(function (file) {
			const curPath = path.join(filePath, file);

			if (fs.lstatSync(curPath).isDirectory()) {
				deleteFolderRecursive(curPath);
			} else {
				fs.unlinkSync(curPath);
			}
		});

	fs.rmdirSync(filePath);
};

if (fs.existsSync(path.join(__dirname, 'runtime'))) {
	deleteFolderRecursive(path.join(__dirname, 'runtime'));
}

fs.mkdirSync(path.join(__dirname, 'runtime'));

fs.readdirSync(config.gameDirectoryPath, {
	withFileTypes: true,
})
	.map(fileName => {
		if (fileName !== 'package.json') {
			fs.symlinkSync(path.join(config.gameDirectoryPath, fileName), path.join(__dirname, 'runtime', fileName));
		}

		return fileName;
	});

const packageFile = fs.readFileSync(path.join(config.gameDirectoryPath, 'package.json'), 'utf8');
const packageJSON = JSON.parse(packageFile);

packageJSON['inject_js_start'] = path.join(__dirname, 'babel.js');

fs.writeFileSync(path.join(__dirname, 'runtime', 'package.json'), JSON.stringify(packageJSON));

spawn(findpath(), [path.join(__dirname, 'runtime')], {
	cwd: path.join(__dirname, 'runtime'),
}).unref();
