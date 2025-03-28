const commonjs = require("rollup-plugin-commonjs");
const copy = require("rollup-plugin-copy");

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
    copy({
      targets: [
        { src: "src/workDays.d.ts", dest: "dist" }
      ]
    })
  ],
};
