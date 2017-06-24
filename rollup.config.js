//Dependencies
import babel from 'rollup-plugin-babel';
//import eslint from 'rollup-plugin-eslint';

//Module
export default {
	entry: 'lib/index.js',
	format: 'cjs',
	dest: 'tensor-lib.js',
	plugins: [
		/*eslint({
			exclude: [
				'',
			]
		}),*/
		babel({
			exclude: 'node_modules/**',
		}),
	],
};