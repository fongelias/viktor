//Dependencies
import babel from 'rollup-plugin-babel';
import eslint from 'rollup-plugin-eslint'

//Module
export default {
	entry: 'lib/entry.js',
	format: 'cjs',
	dest: 'tensor-lib.js',
	plugins: [
		eslint({
			/*exclude: [
				'',
			]*/
		}),
		babel({
			exclude: 'node_modules/**',
		}),
	],
};