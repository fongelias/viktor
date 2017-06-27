//Dependencies
import babel from 'rollup-plugin-babel';
import localResolve from 'rollup-plugin-local-resolve';
//import eslint from 'rollup-plugin-eslint';

//Module
export default {
	entry: 'lib/index.js',
	format: 'cjs',
	dest: 'index.js',
	plugins: [
		localResolve(),
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