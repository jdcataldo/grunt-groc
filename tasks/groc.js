/*
 * grunt-groc
 * https://github.com/jdcataldo/grunt-groc
 *
 * Copyright (c) 2013 Justin Cataldo
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
  var groc = require("groc").CLI;

  grunt.registerMultiTask('groc', 'Generate documenation using groc', function() {
    // Merge options
    var options = this.options(),
        // Set task as async
        done    = this.async(),
        // Alias for Lo-Dash
        _       = grunt.util._,
        // Array of arguments to pass into groc
        args    = [];

    // Loops through the files and generate the documentation
    _.forEach(this.files, function(f){
      // Add the files to the arguments
      args.push(f.src);
      // Loop through the options and add them to args
      _.each(options, function(value, key) {
        // Convert to the key to a switch
        var sw = (key.length > 1 ? '--' : '-') + key;
        // Add the switch and its value
        args.push([sw, value.toString()]);
      });

      // Pass the args to groc
      groc(_.flatten(args), function(error){
        if(error) {
          grunt.warn(error);
          process.exit(1);
          done(false);
          return;
        }
        done();
      });
    });
  });
};