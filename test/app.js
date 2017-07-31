'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-generator').test;

describe('generator-sinatra-rack:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
            .withPrompts({
              project_name: 'WebApp',
              project_author: 'Test Author',
              github: 'yougit'
            })
        .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'CODE_OF_CONDUCT.md',
      'config.ru',
      'CONTRIBUTING.md',
      'Gemfile',
      'README.md',
      'app/init.rb',
      'app/controllers/application.rb',
      'app/controllers/orders.rb',
      'app/controllers/products.rb',
      'app/models/order.rb',
      'app/models/product.rb',
      'app/views/order.erb',
      'app/views/product.erb',
      'public/css/main.css',
      'public/css/normalize.css',
	  'public/favicon.ico',
      'public/index.html'
    ]);
  });
});
