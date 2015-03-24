grunt-groc
================

> A simple grunt task to generate a project's documentation using [Groc](http://nevir.github.com/groc/)

[![Travis branch](https://img.shields.io/travis/joyent/node/v0.6.svg)](https://travis-ci.org/jdcataldo/grunt-groc)
[![npm](https://img.shields.io/npm/dm/localeval.svg)](https://www.npmjs.com/package/grunt-groc)


### Usage
Install this plugin with the following command:

```js
npm install grunt-groc --save-dev
```

Load the plugin in your Gruntfile.js:

```js
grunt.loadNpmTasks('grunt-groc');
```

Running `grunt groc:javascript` (or `grunt groc` since groc is a multitask) will generate documentation for the specified files.

```js
// Project configuration.
grunt.initConfig({
  groc: {
    javascript: [
      "tasks/*.js", "README.md"
    ],
    options: {
      "out": "doc/"
    }
  }
});
```

See [Groc's cli](http://nevir.github.com/groc/cli.html) for all available options
