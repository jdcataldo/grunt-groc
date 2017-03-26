grunt-groc
================

[![Greenkeeper badge](https://badges.greenkeeper.io/jdcataldo/grunt-groc.svg)](https://greenkeeper.io/)

> A simple grunt task to generate a project's documentation using [Groc](http://nevir.github.com/groc/)

[![Build Status](https://travis-ci.org/jdcataldo/grunt-groc.svg?branch=master)](https://travis-ci.org/jdcataldo/grunt-groc)
[![Downloads](https://img.shields.io/npm/dm/grunt-groc.svg)](https://www.npmjs.com/package/grunt-groc)


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
