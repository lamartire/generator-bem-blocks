'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-bem-blocks:pug+styl (common generation)', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({
        blockPath: 'test',
        blockName: 'helloWorld',
        markup: 'pug',
        style: 'styl'
      })
      .toPromise();
  });

  it('creates directory helloWorld with helloWorld.pug and helloWorld.styl files', function () {
    assert.file([
      'test/helloWorld',
      'test/helloWorld/helloWorld.pug',
      'test/helloWorld/helloWorld.styl'
    ]);
  });
});

describe('generator-bem-blocks:jsx+styl (common generation)', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({
        blockPath: 'test',
        blockName: 'helloWorld',
        markup: 'jsx',
        style: 'styl'
      })
      .toPromise();
  });

  it('creates directory helloWorld with helloWorld.jsx, helloWorld.styl and index.jsx files', function () {
    assert.file([
      'test/helloWorld',
      'test/helloWorld/index.jsx',
      'test/helloWorld/helloWorld.jsx',
      'test/helloWorld/helloWorld.styl'
    ]);
  });
});
