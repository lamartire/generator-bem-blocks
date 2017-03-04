'use strict';

var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var path = require('path');
var fs = require('fs');
var templatesMap = require('./templatesMap');

module.exports = Generator.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the posh ' + chalk.red('generator-bem-blocks') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'blockPath',
      message: 'Укажите путь до директории, где будет создан блок:',
      default: path.resolve(__dirname)
    }, {
      type: 'input',
      name: 'blockName',
      message: 'Введите имя блока:',
      default: 'block'
    }, {
      type: 'list',
      name: 'markup',
      message: 'Выберите расширение для файла разметки:',
      choices: [
        'jsx', 'pug', 'pug bem-to', 'html'
      ],
      default: 0
    }, {
      type: 'list',
      name: 'style',
      message: 'Выберите расширение для файла стилей:',
      choices: [
        'styl', 'css', 'less', 'sass', 'scss', 'sss'
      ],
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

  // install: function () {
  //   this.installDependencies();
  // }
});
