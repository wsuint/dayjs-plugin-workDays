const commonjs = require("rollup-plugin-commonjs");
module.exports = {
  input: "src/workDays.js",
  output: [
    {
      file: "dist/workDays.es.js",
      name: "workDays",
      format: "es",
    },
    {
      file: "dist/workDays.cjs.js",
      name: "workDays",
      format: "cjs",
    },
    {
      file: "dist/workDays.umd.js",
      name: "workDays",
      format: "umd",
    },
  ],
  plugins: [
    commonjs(),
  ],
};
