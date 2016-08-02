const cssnext = require('postcss-cssnext')
const importer = require('postcss-import')
const reporter = require('postcss-reporter')

// A callable that provides the PostCSS configuration.
module.exports = (webpack) => ([
  importer({
    addToDependency: webpack
  }),
  cssnext(),
  reporter()
])
