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
    var choosenTemplates = [{
      type: 'markup',
      extension: this.props.markup
    }, {
      type: 'style',
      extension: this.props.style
    }];

    this.props.blocksNames.split(' ').map(blockName => {
      return choosenTemplates.map(template => {
        try {
          fs.readdirSync(this.props.blocksPath);
        } catch (err) {
          if (err.code === 'ENOENT') {
            fs.mkdirSync(this.props.blocksPath);
          }
        }

        var templateData = {
          blockName: blockName
        };
        var inputExtension = templatesMap[template.type][template.extension].input;
        var outputExtension = templatesMap[template.type][template.extension].output;

        if (outputExtension === 'jsx') {
          this.fs.copyTpl(
            this.templatePath('helpers/index.jsx'),
            this.destinationPath(`${this.props.blocksPath}/${blockName}/index.jsx`),
            templateData
          );
        }

        return this.fs.copyTpl(
          this.templatePath(`${template.type}/block.${inputExtension}`),
          this.destinationPath(`${this.props.blocksPath}/${blockName}/${blockName}.${outputExtension}`),
          templateData
        );
      });
    });
  }
});
