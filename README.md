# praline

[![][bithound_badge]][bithound] [![][bithound_dependencies_badge]][bithound_dependencies] [![][bithound_dev_dependencies_badge]][bithound_dev_dependencies]

## Dependencies

### Node.js

Node.js is required to build the sources and run the development server. Both `node` and `npm` should be available in the environment from the command line.

Install Node.js either from [the official binaries][nodejs] or via [Chocolatey][chocolatey].

## Usage

Starting the development server (access via https://localhost:8080):

```
npm run start
```

Building the sources:

```
npm run build
```

## Tech stack

- [Webpack][webpack] is used to build the project sources
- [Webpack Development Server][webpack_dev_server] run a development server (sourcemaps, live reloading)
- [Sass][sass] for authoring the stylesheets
- [PostCSS][postcss] to process stylesheets
- [Babel.js][babeljs] transpiler for adding syntax support for future ECMAScript proposals
- [Service worker][service_worker] to make the application available offline
- [imagemin][imagemin] for minifying images

More at [awesome lists][awesome] or the [SO documentation][documentation].

[awesome]: https://github.com/sindresorhus/awesome-sass
[babeljs]: https://babeljs.io/
[chocolatey]: https://chocolatey.org/packages/nodejs
[documentation]: stackoverflow.com/documentation
[imagemin]: https://github.com/imagemin/imagemin
[nodejs]: https://nodejs.org/en/
[postcss]: https://github.com/postcss/postcss
[sass]: http://sass-lang.com
[sass]: https://github.com/HugoGiraudel/awesome-sass
[service_worker]: https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API
[webpack]: http://webpack.github.io/
[webpack_dev_server]: https://webpack.github.io/docs/webpack-dev-server.html

[bithound]: https://www.bithound.io/github/nevenagaj/praline
[bithound_badge]: https://www.bithound.io/github/nevenagaj/praline/badges/score.svg
[bithound_dependencies]: https://www.bithound.io/github/nevenagaj/praline/master/dependencies/npm
[bithound_dependencies_badge]: https://www.bithound.io/github/nevenagaj/praline/badges/dependencies.svg
[bithound_dev_dependencies]: https://www.bithound.io/github/nevenagaj/praline/master/dependencies/npm
[bithound_dev_dependencies_badge]: https://www.bithound.io/github/nevenagaj/praline/badges/devDependencies.svg
