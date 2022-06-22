const postcss = require('postcss')
module.exports = postcss.plugin('postcss-theme-customization', (opts = {}) => {
  return (root, result) => {
    root.walkDecls(/^-dark?/, function (decl) {
      if (decl.prop === '-dark-color') {
        const newDecl = postcss.decl({
          prop: 'color',
          value: decl.value
        })
        decl.root().append(postcss.rule({
          selector: `html[data-theme='dark'] ${decl.parent.selector}`,
          nodes: [newDecl],
        }))
      } else if (decl.prop === '-dark-background-color') {
        const newDecl = postcss.decl({
          prop: 'background-color',
          value: decl.value
        })
        decl.root().append(postcss.rule({
          selector: `html[data-theme='dark'] ${decl.parent.selector}`,
          nodes: [newDecl],
        }))
      }
    })
  }
})
