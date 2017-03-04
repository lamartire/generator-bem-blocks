# generator-bem-blocks [![NPM version][npm-image]][npm-url] [![Build Status](https://travis-ci.org/lamartire/generator-bem-blocks.svg?branch=master)](https://travis-ci.org/lamartire/generator-bem-blocks)
[![Coverage Status](https://coveralls.io/repos/github/lamartire/generator-bem-blocks/badge.svg?branch=master)](https://coveralls.io/github/lamartire/generator-bem-blocks?branch=master)
>

## Installation

First, install [Yeoman](http://yeoman.io) and generator-bem-blocks using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-bem-blocks
```

## Usage

This is really easiest way to generate bem blocks.

```bash
yo bem-blocks
```

Basic structure of generated block:

```
blockName/
  ├──blockName.markupExtension
  └──blockName.styleExtension
```

## Supported extensions

| **Markup** | **Style** |
|------------|-----------|
|`jsx`|`styl`|
|`pug`|`css`|
|`pug bem-to`|`sass`|
|`html`|`scss`|
|~|`less`|
|~|`sss`|

Also, with `jsx` block it creates `index.jsx` to more comfortable import.

## License

MIT © [lamartire]()


[npm-image]: https://badge.fury.io/js/generator-bem-blocks.svg
[npm-url]: https://npmjs.org/package/generator-bem-blocks
[travis-image]: https://travis-ci.org/lamartire/generator-bem-blocks.svg?branch=master
[travis-url]: https://travis-ci.org/lamartire/generator-bem-blocks
[daviddm-image]: https://david-dm.org/lamartire/generator-bem-blocks.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/lamartire/generator-bem-blocks
[coveralls-image]: https://coveralls.io/repos/lamartire/generator-bem-blocks/badge.svg
[coveralls-url]: https://coveralls.io/r/lamartire/generator-bem-blocks
