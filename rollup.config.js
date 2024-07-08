export default [
  {
    input: "src/workDays.js",
    output: {
      file: "dist/index.esm.js",
      format: "esm",
    },
  },
  {
    input: "src/workDays.js",
    output: {
      file: "dist/index.cjs.js",
      format: "cjs",
    },
  },
];
