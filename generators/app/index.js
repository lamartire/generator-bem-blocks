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
      name: 'blockPath',
      message: 'Specify the path to the directory where the block will be created:',
      default: '.'
    }, {
      type: 'input',
      name: 'blockName',
      message: 'Enter block name:',
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

    choosenTemplates.map(template => {
      try {
        fs.readdirSync(this.props.blockPath);
      } catch (err) {
        if (err.code === 'ENOENT') {
          fs.mkdirSync(this.props.blockPath);
        }
      }

      var templateData = {
        blockName: this.props.blockName
      };
      var inputExtension = templatesMap[template.type][template.extension].input;
      var outputExtension = templatesMap[template.type][template.extension].output;

      if (outputExtension === 'jsx') {
        this.fs.copyTpl(
          this.templatePath('helpers/index.jsx'),
          this.destinationPath(`${this.props.blockPath}/${this.props.blockName}/index.jsx`),
          templateData
        );
      }

      return this.fs.copyTpl(
        this.templatePath(`${template.type}/block.${inputExtension}`),
        this.destinationPath(`${this.props.blockPath}/${this.props.blockName}/${this.props.blockName}.${outputExtension}`),
        templateData
      );
    });
  }
});
