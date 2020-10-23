/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
module.exports = function(grunt) {
  // Project configuration.

  var fs = require('fs');

  require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

  let buildOperations = {

    jshint: {
      all: ['src/libs/**/*.js'],
      options: {
        esversion: 6
      }
    },

    watch: {
      scripts: {
        files: ['src/libs/**/*.js'],
        tasks: ['concat', 'babel', 'jshint'],
        options: {
          spawn: false,
        },
      }

    },

    babel: {
      options: {
        sourceMap: true,
        presets: ['babel-preset-es2015']
      },

      lib: {
        files: [{
          expand: false,
          cwd: '',
          src: ['concat/radian.js'],
          dest: 'dist/radian/radian.js'
        }]
      }
    },

    concat: {
      options: {
        separator: ';',
      },
      lib: {
        src: [
          'src/libs/radian/*.js',
          'src/libs/radian/*/**.js'
        ],
        dest: 'concat/radian.js'
      }
    }
  };


  grunt.initConfig(buildOperations);

  grunt.registerTask('default', ['concat', 'babel', 'watch']);


};