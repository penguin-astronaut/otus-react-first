module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: "@typescript-eslint/parser",
  extends: [
    "airbnb-base",
    "plugin:@typescript-eslint/recommended",
    "eslint-config-prettier",
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "max-len": ["error", { ignoreComments: true }],
    "import/no-unresolved": "off",
    "import/extensions": ["warn", "never"],
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "@typescript-eslint/no-var-requires": "off",
  },
  plugins: ["jest-dom", "@typescript-eslint"],
};
