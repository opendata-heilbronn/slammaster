const util = require('util');
const copy = util.promisify(require('copy'));
const makeDir = require('make-dir');

(async function() {
	await makeDir('dist/projector');
	await Promise.all([
		copy('main.js', 'dist'),
		copy('app/projector/*', 'dist/projector')
	]);
})();

