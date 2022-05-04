import path from "path";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";

const root = process.platform === "win32" ? path.resolve("/") : "/";

// external and globals
// are required for 'umd' output
// which has not been tested.
const external = (id) => !id.startsWith(".") && !id.startsWith(root);

export default {
  input: {
    index: "src/index.ts",
  },
  output: [
    {
      format: "cjs",
      dir: "dist",
      entryFileNames: "[name].js",
    },
    {
      format: "es",
      dir: "dist",
      entryFileNames: "[name].es.js",
    },
  ],
  plugins: [
    nodeResolve({ extensions: [".ts", ".tsx"] }),
    typescript({ exclude: "node_modules/**" }),
  ],
  external,
};
