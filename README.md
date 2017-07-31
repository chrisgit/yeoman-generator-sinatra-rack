# generator-sinatra-rack [![NPM version][npm-image]][npm-url] 
> Generate a basic Sinatra application with provision for separating Models, Views and Controllers

This was just a play application to get a feel for Yeoman.

Yeoman is a Web Scaffolding Tool for Modern Web Apps, see: http://yeoman.io/

Yeoman is for web applications but that shouldn't restrict it's usage, since creating this generator I have used it several times for generating non web templates.

Contrasting with some generators built with chef generate, my conclusion was that building a template with Yeoman was easier.

It took a few hours to go from nothing to creating my own generator.

Overall I found Yeoman very simple to use and extremely powerful. Love it!

## Installation

First, install [Yeoman](http://yeoman.io) and generator-sinatra-rack using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-sinatra-rack
```

Then generate your new project:

```bash
yo sinatra-rack
```

The full pre-requisite details are here: http://yeoman.io/codelab/setup.html


## Developing

To develop the generator refer to http://yeoman.io/authoring/

When developing you can link your source to the NPM package folder with

```
npm link
```

This creates a symlink between your source code folder and the npm packages folder. Any changes will be automatically brought included when you run the generator (yo -h).

To unlink use

```
npm unlink
```

## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

MIT © [Chris Sullivan]()


[npm-image]: https://badge.fury.io/js/generator-sinatra-rack.svg
[npm-url]: https://npmjs.org/package/generator-sinatra-rack
[travis-image]: https://travis-ci.org/chrisgit/generator-sinatra-rack.svg?branch=master
[travis-url]: https://travis-ci.org/chrisgit/generator-sinatra-rack
[daviddm-image]: https://david-dm.org/chrisgit/generator-sinatra-rack.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/chrisgit/generator-sinatra-rack
