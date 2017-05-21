//Dependencies
import babel from 'rollup-plugin-babel';

//Module
export default {
	entry: 'lib/entry.js',
	format: 'cjs',
	dest: 'tensor-lib.js',
	plugins: [
		babel({
			exclude: 'node_modules/**',
		}),
	],
};