# @magic-themes/example

this is the
[@magic-theme](https://github.com/magic-themes)
of [THESYSTEM.at](https://thesystem.at).

#### install:
```bash
npm install --save --save-exact @thesystem-at/magic-theme
```

#### usage:

##### declare usage:
```javascript
// config.mjs:

module.exports = {
  //... other config
  THEME: '@thesystem-at/magic-theme',

  // multiple themes
  // THEME: [...other themes, '@thesystem-at/magic-theme']
}
```

@magic will then import and use the theme automagically.
