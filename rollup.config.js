import uglify from 'rollup-plugin-uglify'

export default [

  // {
  //   input: "index-generic",
  //   output: { file: "dist/generic.js", format: "umd", name: "magiq" }
  // }
  {
    input: "generic-index",
    output: { file: "dist/generic.js", format: "umd", name: "magiq.gen" }
  },
  {
    input: "generic-index",
    plugins: [uglify()],
    output: { file: "dist/generic.min.js", format: "umd", name: "magiq.gen" }
  },
  {
    input: "bar-index",
    output: { file: "dist/bar-chart.js", format: "umd", name: "magiq.bar" }
  },
  {
    input: "interaction-index",
    output: { file: "dist/interaction.js", format: "umd", name: "magiq.interact" }
  },
  {
    input: "waterfall-index",
    output: { file: "dist/waterfall-chart.js", format: "umd", name: "magiq.waterfall" }
  }

]
