module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: ['plugin:vue/essential', '@vue/standard'],
	plugins: ['vuetify'],
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'space-before-function-paren': 0,
		'no-trailing-spaces': ['error', { skipBlankLines: true }],
		semi: [2, 'always'],
		'no-extra-semi': 0,
		'no-tabs': 0,
		indent: [2, 'tab'],

		'vuetify/no-deprecated-classes': 'warn',
		'vuetify/grid-unknown-attributes': 'warn',
		'vuetify/no-legacy-grid': 'warn'
	},
	parserOptions: {
		parser: 'babel-eslint'
	}
};
