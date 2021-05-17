module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: ['plugin:vue/essential', '@vue/standard', 'prettier', 'plugin:prettier/recommended'],
	plugins: ['vuetify'],
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

		'space-before-function-paren': 0,
		'no-trailing-spaces': ['error', { skipBlankLines: true }],
		semi: [2, 'always'],
		'no-extra-semi': 0,
		// 'no-tabs': 0,
		// indent: ['error', 'tab'],

		'vuetify/no-deprecated-classes': 'warn',
		'vuetify/grid-unknown-attributes': 'warn',
		'vuetify/no-legacy-grid': 'warn',

		'prettier/prettier': 'error'

		// // this rule require eslint-plugin-vue v7.1.0 (v6 now)
		// 'vue/valid-v-slot': ['error', { allowModifiers: true }]
	},
	parserOptions: {
		parser: 'babel-eslint'
	}
};
