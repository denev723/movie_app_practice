import js from "@eslint/js";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";
import prettier from "eslint-config-prettier";
import pluginPrettier from "eslint-plugin-prettier";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: tsparser,
    },
  },
  {
    plugins: {
      react,
      "react-hooks": reactHooks,
      "@typescript-eslint": tseslint,
      prettier: pluginPrettier, // ✅ plugins에 Prettier 추가
    },
  },
  {
    rules: {
      "prettier/prettier": "error", // ✅ Prettier를 ESLint에서 적용하도록 설정
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          vars: "all",
          args: "after-used",
          ignoreRestSiblings: true,
          argsIgnorePattern: "^_",
        },
      ],
      "react/jsx-uses-react": "off",
      "react/jsx-uses-vars": "warn",
      "react/prop-types": "off",
    },
  },
  prettier, // ✅ Prettier 설정 추가
];
