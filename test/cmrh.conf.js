const sass = require('node-sass')

module.exports = {
  extensions: [ '.scss' ],
  preprocessCss: data => sass.renderSync({ data }).css
}