/**
 * Created by sobdemanda on 25/10/15.
 */
/* recebe o objeto grunt como parâmetro*/
module.exports = function(grunt) {

    grunt.initConfig({

        watch: {
            sass: {
                files: 'public/**/*.scss',
                tasks: ['sassCompile']
            }
        },
        copy: {
            project: {
                expand: true,
                cwd: '.',
                src: ['**', '!Gruntfile.js', '!package.json',
                    '!public/bower.json'],
                dest: 'dist'
            }
        },
        clean: {
            dist: {
                src: 'dist'
            },
            publicStyles: {
                src: 'public/styles/'
            }
        },
        uglify: {
            options: {
                report: 'min',
                mangle: false
            }
        },
        usemin : {
            html: 'dist/app/views/**/*.ejs'
        },
        useminPrepare: {
            options: {
                root: 'dist/public',
                dest: 'dist/public'
            },
            html: 'dist/app/views/**/*.ejs'
        },
        ngAnnotate: {
            scripts: {
                expand: true,
                src: ['dist/public/js/**/*.js']
            }
        },
        sass: {
            src: {
                files: [{
                    expand: true,
                    cwd: 'public',
                    src: ['**/*.scss'],
                    dest: 'public/styles/',
                    ext: '.css'
                }]
            }
        }

    });

    grunt.registerTask('default', ['dist', 'minifica']);
    grunt.registerTask('sassCompile', ['clean:publicStyles', 'sass']);
    grunt.registerTask('dist', ['sassCompile', 'clean:dist', 'copy']);
    grunt.registerTask('minifica', ['useminPrepare', 'ngAnnotate', 'concat', 'uglify', 'cssmin', 'usemin']);

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-ng-annotate');
};