'use strict';


module.exports = function react(grunt) {
    // Load task
    grunt.loadNpmTasks('grunt-react');

    // Options
    return {
        files: {
            expand: true,
            cwd: 'public/jsx',
            src: ['**/*.jsx'],
            dest: 'public/js/components',
            ext: '.js'
        }
    };
};
