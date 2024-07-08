const commonjs = require("rollup-plugin-commonjs");
const resolve = require("rollup-plugin-node-resolve");
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
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    commonjs(),
  ],
};
