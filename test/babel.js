require('@babel/register')({
	presets: ['@babel/preset-env'],
});

nw.Window.get().showDevTools();

require('../start');