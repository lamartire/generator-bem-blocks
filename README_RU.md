# generator-bem-blocks [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url]
>

[Эта документация на Английском](https://github.com/lamartire/generator-bem-blocks/blob/master/README_RU.md).

## Установка

```bash
npm install -g generator-bem-blocks
```

## Использование

Это действительно простейший способ генерировать блоки.

```bash
yo bem-blocks
```

Базовая структура блока:

```
blockName/
  ├──blockName.markupExtension
  └──blockName.styleExtension
```

## Поддерживаемые расширения

| **Markup** | **Style** |
|------------|-----------|
|`jsx`|`styl`|
|`pug`|`css`|
|`pug bem-to`|`sass`|
|`html`|`scss`|
|~|`less`|
|~|`sss`|

Кстати, вместе с блоком на основе `jsx`, генерируется `index.jsx` для более удобного импорта.

Stay BEMed!

## License

MIT © [lamartire]()

[npm-image]: https://badge.fury.io/js/generator-bem-blocks.svg
[npm-url]: https://npmjs.org/package/generator-bem-blocks
[travis-image]: https://travis-ci.org/lamartire/generator-bem-blocks.svg?branch=master
[travis-url]: https://travis-ci.org/lamartire/generator-bem-blocks
[coveralls-image]: https://coveralls.io/repos/lamartire/generator-bem-blocks/badge.svg
[coveralls-url]: https://coveralls.io/r/lamartire/generator-bem-blocks
