## @thesystem-at/magic-theme

a simple [@magic](https://github.com/magic/core/) theme for thesystem.at

[demo](https://thesystem-at.github.io/magic-theme/)

#### install:
```bash
npm install --save --save-exact @thesystem-at/magic-theme
```

#### usage:

##### declare usage:
```javascript
// config.mjs:

export default {
  //... other config
  THEME: '@thesystem-at/magic-theme',

  // multiple themes
  // THEME: [...other themes, '@thesystem-at/magic-theme']
}
```

@magic will then import and use the theme automagically.

