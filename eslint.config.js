// eslint.config.js
import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import nextPlugin from "@next/eslint-plugin-next";
import { FlatCompat } from "@eslint/eslintrc";
import path from "path";
import { fileURLToPath } from "url";

// Polyfill __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default tseslint.config(
  // Ignore patterns (moved to top level)
  {
    ignores: [
      ".next/",
      "node_modules/",
      "dist/",
      "build/",
      "public/",
      "coverage/",
      "postcss.config.mjs",
      "next.config.js",
      "eslint.config.js",
    ],
  },

  // Base ESLint recommended rules for all files
  js.configs.recommended,

  // Configuration for TypeScript files
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: ["./tsconfig.json"], // Specify your tsconfig.json path
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    settings: {
      react: {
        version: "detect", // Automatically detect the React version
      },
    },
    plugins: {
      react: react,
      "react-hooks": reactHooks,
      "@next/next": nextPlugin,
    },
    rules: {
      // React specific rules
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      ...reactHooks.configs.recommended.rules,

      // Next.js specific rules
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,

      // Custom rules or overrides
      "no-unused-vars": "warn",
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    },
  },

  // Configuration for JavaScript/JSX files (without type-aware rules)
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    plugins: {
      react: react,
      "react-hooks": reactHooks,
      "@next/next": nextPlugin,
    },
    rules: {
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      ...reactHooks.configs.recommended.rules,
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
    },
  },

  // Temporarily removed: Compatibility layer for eslint-config-next
  // ...compat.extends(
  //   "plugin:@next/next/recommended",
  //   "plugin:@next/next/core-web-vitals"
  // ),
);