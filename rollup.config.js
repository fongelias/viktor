//Dependencies
import babel from 'rollup-plugin-babel';
import localResolve from 'rollup-plugin-local-resolve';
import resolve from 'rollup-plugin-node-resolve';
//import eslint from 'rollup-plugin-eslint';

//Module
export default {
	entry: 'lib/index.js',
	format: 'cjs',
	dest: 'tensor-lib.js',
	plugins: [
		localResolve(),
		resolve(),
		/*eslint({
			exclude: [
				'',
			]
		}),*/
		babel({
			exclude: 'node_modules/**',
		}),
	],
	external: ['stones'],
};