'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
var path = require('path');
var mkdirp = require('mkdirp');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the ' + chalk.red('generator-sinatra-rack') + ' generator!'
    ));

    const prompts = [{
      type: 'input',
      name: 'project_name',
      message: 'What is the name of this project?',
      default: path.basename(process.cwd())
    }, {
      type: 'input',
      name: 'project_author',
      message: 'Who is the project author?',
      default: 'webapp'
    }, {
      type: 'input',
      name: 'github',
      message: 'What is your Github repo name?',
      default: 'git'
    }];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.log('Going ahead and generating a new Sinatra project names ', props.project_name);
      this.props = props;
    });
  }

  writing() {
    // Root
    this.fs.copy(
      this.templatePath('CODE_OF_CONDUCT.md'),
      this.destinationPath('CODE_OF_CONDUCT.md')
    );

    this.fs.copy(
      this.templatePath('config.ru'),
      this.destinationPath('config.ru')
    );

    this.fs.copy(
      this.templatePath('CONTRIBUTING.md'),
      this.destinationPath('CONTRIBUTING.md')
    );

    this.fs.copy(
      this.templatePath('Gemfile'),
      this.destinationPath('Gemfile')
    );

    this.fs.copyTpl(
      this.templatePath('README.md'),
      this.destinationPath('README.md'),
      this.props
    );

    // aap
    this.fs.copy(
      this.templatePath('app/init.rb'),
      this.destinationPath('./app/init.rb')
    );

    // app - controllers
    this.fs.copy(
      this.templatePath('app/controllers/application.rb'),
      this.destinationPath('./app/controllers/application.rb')
    );

    this.fs.copy(
      this.templatePath('app/controllers/orders.rb'),
      this.destinationPath('./app/controllers/orders.rb')
    );

    this.fs.copy(
      this.templatePath('app/controllers/products.rb'),
      this.destinationPath('./app/controllers/products.rb')
    );

    // app - models
    this.fs.copy(
      this.templatePath('app/models/order.rb'),
      this.destinationPath('./app/models/order.rb')
    );

    this.fs.copy(
      this.templatePath('app/models/product.rb'),
      this.destinationPath('./app/models/product.rb')
    );

    // app - views
    this.fs.copy(
      this.templatePath('app/views/order.erb'),
      this.destinationPath('./app/views/order.erb')
    );

    this.fs.copy(
      this.templatePath('app/views/product.erb'),
      this.destinationPath('./app/views/product.erb')
    );

    // public
    this.fs.copy(
      this.templatePath('public/apple-touch-icon.png'),
      this.destinationPath('./public/apple-touch-icon.png')
    );

    this.fs.copy(
      this.templatePath('public/favicon.ico'),
      this.destinationPath('./public/favicon.ico')
    );

    this.fs.copy(
      this.templatePath('public/index.html'),
      this.destinationPath('./public/index.html')
    );

    // public - css
    this.fs.copy(
      this.templatePath('public/css/main.css'),
      this.destinationPath('./public/css/main.css')
    );

    this.fs.copy(
      this.templatePath('public/css/normalize.css'),
      this.destinationPath('./public/css/normalize.css')
    );

    // public - img
    this.log(yosay(
      chalk.green('Create ') + ' empty public image folder'
    ));
    mkdirp('./public/img', function (err) {
      if (err) this.log.error(err)
    });

    // public - js
    this.log(yosay(
      chalk.green('Create ') + ' empty public js folder'
    ));
    mkdirp('./public/js', function (err) {
      if (err) this.log.error(err)
    });
    
    // spec
    this.fs.copy(
      this.templatePath('spec/spec_helper.rb'),
      this.destinationPath('./spec/spec_helper.rb')
    );

    // spec - controllers
    mkdirp('./spec/controllers', function (err) {
      if (err) this.log.error(err)
    });

    // spec - models
    mkdirp('./spec/models', function (err) {
      if (err) this.log.error(err)
    });
  }

  install() {
  }
};
