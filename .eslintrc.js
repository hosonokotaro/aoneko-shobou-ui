// eslint-disable-next-line @typescript-eslint/no-var-requires
const eslintRules = require('@hosonokotaro/eslint-rules')

module.exports = {
  ...eslintRules,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:storybook/recommended',
    'prettier',
  ],
  rules: {
    ...eslintRules.rules,
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
  },
}
