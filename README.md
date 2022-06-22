# postcss-theme-customization

[PostCSS] plugin for theme customization.



Support Postcss7.  Sass, Less, Stylus, css all can use it.

It is a simplest way to add the dark mode to your app. 

You only need add `-dark-color: #000;`  or  `-dark-background-color: #000;` to your existing style block.

It can extract the two css attribute to a new style block with `html[data-theme='dark']` selector.

Then you can add attribute `data-theme='dark'` dynamiclly by js and the style in html[data-theme='dark'] block will work.

In the way that you can add the dark mode to your app.



[PostCSS]: https://github.com/postcss/postcss

For example:

The input css code

```css
.header[data-v-271ce826] {
  color: #FFF;
  background-color: #FFF;
  -dark-color: #000;
  -dark-background-color: #000;
}
```



The output css code


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
