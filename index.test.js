const postcss = require('postcss')

const plugin = require('./')

async function run(input, output, opts = {}) {
  let result = await postcss([plugin(opts)]).process(input, {from: undefined})
  expect(result.css).toEqual(output)
  expect(result.warnings()).toHaveLength(0)
}

/* Write tests here

it('does something', async () => {
  await run('a{ }', 'a{ }', { })
})

*/
// index.js
postcss([plugin]).process(`
.header[data-v-271ce826] {
    color: #fff;
    -dark-color: #000;
}
`).then(result => {
  console.log(result.css)
})
