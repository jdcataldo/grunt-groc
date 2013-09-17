'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    groc: {
      javascript: [
        "tasks/*.js", "README.md"
      ],
      options: {
        "github": true
      }
    },
    jshint: {
      all_files: [
        'Gruntfile.js',
        'tasks/*.js'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    }
  });

  // Load he plugin task
  grunt.loadTasks('tasks');

  // Include jshint
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['jshint','groc']);

};