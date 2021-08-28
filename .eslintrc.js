module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb-base", "eslint-config-prettier"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "max-len": ["error", { ignoreComments: true }],
    "import/no-unresolved": "off",
    "import/extensions": ["warn", "never"],
  },
};
