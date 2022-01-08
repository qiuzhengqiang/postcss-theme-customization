# postcss-theme-customization

[PostCSS] plugin for theme customization.

[PostCSS]: https://github.com/postcss/postcss

```css
.header[data-v-271ce826] {
  color: #FFF;
  background-color: #FFF;
  -dark-color: #000;
  -dark-background-color: #000;
}
```

```css
.header[data-v-271ce826] {
  color: #FFF;
  background-color: #FFF;
  -dark-color: #000;
  -dark-background-color: #000;
}
html[data-theme='dark'] .header[data-v-271ce826] {
  color: #000;
}
html[data-theme='dark'] .header[data-v-271ce826] {
  background-color: #000;
}


```

## Usage

**Step 1:** Install plugin:

```sh
npm install --save-dev postcss postcss-theme-customization
```

**Step 2:** Check you project for existed PostCSS config: `postcss.config.js`
in the project root, `"postcss"` section in `package.json`
or `postcss` in bundle config.

If you do not use PostCSS, add it according to [official docs]
and set this plugin in settings.

**Step 3:** Add the plugin to plugins list:

```diff
module.exports = {
  plugins: [
+   require('postcss-theme-customization'),
    require('autoprefixer')
  ]
}
```

[official docs]: https://github.com/postcss/postcss#usage
