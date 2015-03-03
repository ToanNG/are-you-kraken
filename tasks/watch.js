'use strict';


module.exports = function stylus(grunt) {
  // Load task
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Options
  return {
      react: {
          files: 'public/jsx/**/*.jsx',
          tasks: ['react']
      }
  };
};
