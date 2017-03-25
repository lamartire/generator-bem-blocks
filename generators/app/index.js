'use strict';

var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var fs = require('fs');
var templatesMap = require('./templatesMap');

module.exports = Generator.extend({
  prompting: function () {
    this.log(yosay(
      `Welcome to the posh ${chalk.green('generator-bem-blocks')} generator!`
    ));
    var prompts = [{
      type: 'input',
      name: 'blocksPath',
      message: 'Specify the path to the directory where the blocks will be created:',
      default: '.'
    }, {
      type: 'input',
      name: 'blocksNames',
      message: 'Enter blocks names (separated by spaces):',
      default: 'block'
    }, {
      type: 'list',
      name: 'markup',
      message: 'Choose markup file extension:',
      choices: Object.keys(templatesMap.markup),
      default: 0
    }, {
      type: 'list',
      name: 'style',
      message: 'Choose style file extension:',
      choices: Object.keys(templatesMap.style),
      default: 0
    }];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    var {markup, style, blocksPath, blocksNames} = this.props;
    var choosenTemplates = [{
      type: 'markup',
      extension: markup
    }, {
      type: 'style',
      extension: style
    }];

    blocksNames.split(' ').map(blockName => {
      return choosenTemplates.map(template => {
        var {type, extension} = template;

        try {
          fs.readdirSync(blocksPath);
        } catch (err) {
          if (err.code === 'ENOENT') {
            fs.mkdirSync(blocksPath);
          }
        }

        var templateData = {
          blockName: blockName,
          stylesExtension: style
        };
        var inputExtension = templatesMap[type][extension].input;
        var outputExtension = templatesMap[type][extension].output;

        if (outputExtension === 'jsx') {
          this.fs.copyTpl(
            this.templatePath('helpers/index.jsx'),
            this.destinationPath(`${blocksPath}/${blockName}/index.jsx`),
            templateData
          );
        }

        return this.fs.copyTpl(
          this.templatePath(`${type}/block.${inputExtension}`),
          this.destinationPath(
            `${blocksPath}/${blockName}/${blockName}.${outputExtension}`
          ),
          templateData
        );
      });
    });
  }
});
