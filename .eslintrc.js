module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["standard-with-typescript", "plugin:react/recommended", "prettier"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  settings: {
    react: {
      version: "detect", // React version. "detect" automatically picks the version you have installed.
    },
  },
  ignorePatterns: ["react-app-env.d.ts", "reportWebVitals.ts"],
  plugins: ["react"],
  rules: {
    "n/no-missing-import": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/restrict-plus-operands": ["error", {}],
  },
};
