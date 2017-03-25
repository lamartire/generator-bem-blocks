'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-bem-blocks:pug+styl (common generation)', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({
        blockPath: '.',
        blocksNames: 'helloWorld',
        markup: 'pug',
        style: 'styl'
      })
      .toPromise();
  });

  it('creates directory helloWorld with helloWorld.pug and helloWorld.styl files', function () {
    assert.file([
      'helloWorld',
      'helloWorld/helloWorld.pug',
      'helloWorld/helloWorld.styl'
    ]);
  });
});

describe('generator-bem-blocks:jsx+styl (common generation)', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({
        blockPath: '.',
        blocksNames: 'helloWorld',
        markup: 'jsx',
        style: 'styl'
      })
      .toPromise();
  });

  it('creates directory helloWorld with helloWorld.jsx, helloWorld.styl and index.jsx files', function () {
    assert.file([
      'helloWorld',
      'helloWorld/index.jsx',
      'helloWorld/helloWorld.jsx',
      'helloWorld/helloWorld.styl'
    ]);
  });
});

describe('generator-bem-blocks:jsx+styl (multiple generation)', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({
        blockPath: '.',
        blocksNames: 'Block1 Block2 Block3',
        markup: 'jsx',
        style: 'styl'
      })
      .toPromise();
  });

  it('creates directory helloWorld with helloWorld.jsx, helloWorld.styl and index.jsx files', function () {
    assert.file([
      'Block1',
      'Block1/index.jsx',
      'Block1/Block1.jsx',
      'Block1/Block1.styl',
      'Block2',
      'Block2/index.jsx',
      'Block2/Block2.jsx',
      'Block2/Block2.styl',
      'Block3',
      'Block3/index.jsx',
      'Block3/Block3.jsx',
      'Block3/Block3.styl'
    ]);
  });
});
