const postcss = require('postcss')

const plugin = require('./')

postcss([plugin]).process(`
.header[data-v-271ce826] {
  color: #FFF;
  background-color: #FFF;
  -dark-color: #000;
  -dark-background-color: #000;
}
`).then(result => {
  console.log(result.css)
})
