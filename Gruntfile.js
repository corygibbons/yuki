'use strict';
module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({


        watch: {
            compass: {
                files: ['sass/**/*.{scss,sass}'],
                tasks: ['compass']
            }
        },


        compass: {
            dist: {
                options: {
                    config: 'config.rb',
                    force: true
                }
            }
        }

    });


    grunt.registerTask('default', ['watch']);

};