# generator-bem-blocks [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url]
>

![generator-bem-blocks](http://i.imgur.com/j7BMJeX.gif)

## ⚠️ This project deprecated

This project was deprecated since `0.1.2` version. Fork it if you need additional features,
or use [hygen](http://github.com/jondot/hygen) for blazing fast components scaffolding.

## Installation

```bash
npm install -g generator-bem-blocks
```

## Usage

This is really easiest way to generate bem blocks.

```bash
yo bem-blocks
```

You can create multiple blocks.

```
Block1 Block2 Block3
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

Stay BEMed!

## License

MIT © [lamartire]()


[npm-image]: https://badge.fury.io/js/generator-bem-blocks.svg
[npm-url]: https://npmjs.org/package/generator-bem-blocks
[travis-image]: https://travis-ci.org/lamartire/generator-bem-blocks.svg?branch=master
[travis-url]: https://travis-ci.org/lamartire/generator-bem-blocks
[coveralls-image]: https://coveralls.io/repos/lamartire/generator-bem-blocks/badge.svg
[coveralls-url]: https://coveralls.io/r/lamartire/generator-bem-blocks
