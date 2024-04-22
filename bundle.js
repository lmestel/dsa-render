import * as esbuild from "esbuild";

await esbuild.build({
  entryPoints: ["index.jsx"],
  bundle: true,
  outdir: "tmp",
  format: "esm",
  jsx: "automatic",
  alias: {
    react: "preact/compat",
    "react-dom": "preact/compat",
  },
  loader: {
    ".css": "empty",
  },
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
  },
  banner: {
    js: 'import * as std from "std";',
  },
  logLevel: "info",
  minify: true,
});