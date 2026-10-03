import js from "@eslint/js";
import tseslint from "typescript-eslint";

const config = tseslint.config(js.configs.recommended, ...tseslint.configs.recommended, {
  ignores: [".next/**", "node_modules/**"],
});
export default config;
