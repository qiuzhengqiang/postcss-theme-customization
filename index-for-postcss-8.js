module.exports = (opts = {}) => {
  // Work with options here
  return {
    postcssPlugin: 'postcss-theme-customization',
    Declaration(decl, {Rule, Declaration}) {
      if (decl.prop === '-dark-color') {
        const newDecl = new Declaration({
          prop: 'color',
          value: decl.value
        })
        decl.root().append(new Rule({
          selector: `html[data-theme='dark'] ${decl.parent.selector}`,
          nodes: [newDecl],
        }))
      } else if (decl.prop === '-dark-background-color') {
        const newDecl = new Declaration({
          prop: 'background-color',
          value: decl.value
        })
        decl.root().append(new Rule({
          selector: `html[data-theme='dark'] ${decl.parent.selector}`,
          nodes: [newDecl],
        }))
      }
    },
  }
}

module.exports.postcss = true
