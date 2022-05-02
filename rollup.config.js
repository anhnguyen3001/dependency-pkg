import path from "path";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

const extensions = [".ts", ".tsx"];
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
    peerDepsExternal(),
    nodeResolve({ extensions }),
    typescript({ exclude: "node_modules/**" }),
  ],
  external,
};
