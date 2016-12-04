'use strict';

module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            css: {
                options: {
                    stripBanners: {
                        block: true
                    },
                    banner: '/*! <%= pkg.name %> --- <%= grunt.template.today("dd mmm yyyy HH:MM:ss") %> */\n'
                },
                src: [
                    'resources/public/css/yaml/core/base.css',
                    'resources/public/css/yaml/screen/screen-FULLPAGE-layout.css',
                    'resources/public/css/yaml/navigation/hlist.css',
                    'resources/public/css/yaml/forms/gray-theme.css',
                    'resources/public/js/syntaxhighlighter/style/shCoreRDark.css',
                    'resources/public/js/syntaxhighlighter/style/shThemeRDark.css',
                    'resources/public/css/main.css'
                ],
                dest: 'resources/public/assets/<%= pkg.name %>.css'
            },
            js: {
                src: [
                    'resources/public/js/syntaxhighlighter/shCore.js',
                    'resources/public/js/syntaxhighlighter/shBrushPhp.js',
                    'resources/public/js/syntaxhighlighter/shBrushXml.js',
                    'resources/public/js/syntaxhighlighter/shBrushJScript.js',
                    'resources/public/js/syntaxhighlighter/shBrushSql.js',
                    'resources/public/js/syntaxhighlighter/shBrushBash.js',
                    'resources/public/js/syntaxhighlighter/shBrushPlain.js',
                    'resources/public/vendor/jquery/jquery.js'
                ],
                dest: 'resources/public/assets/<%= pkg.name %>.js'
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'resources/public/assets/<%= pkg.name %>.min.css': ['<%= concat.css.dest %>']
                }
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> v<%= pkg.version %> ' +
                '--- <%= grunt.template.today("dd mmm yyyy HH:MM:ss") %> */\n'
            },
            dist: {
                files: {
                    'resources/public/assets/<%= pkg.name %>.min.js': ['<%= concat.js.dest %>']
                }
            }
        }
    });

    grunt.registerTask('build', ['concat', 'uglify', 'cssmin']);
    grunt.registerTask('default', ['build']);
};
