module.exports = function (grunt) {
    grunt.initConfig({
        myth: {
            dist: {
                files: {
                    'css/style.css': 'css/sources/style.css',
                    'css/print.css': 'css/sources/print.css',
                    'css/theme.css': 'css/sources/theme.css',
                    'css/transcription.css': 'css/sources/transcription.css',
                }
            }
        },

        cmq: {
            dist: {
                files: {
                    'css/style.css': 'css/style.css',
                    'css/print.css': 'css/print.css',
                    'css/theme.css': 'css/theme.css',
                    'css/transcription.css': 'css/transcription.css',
                }
            },
        },

        //et on minify le css
        cssmin: {
            dist: {
                files: {'css/style.min.css': 'css/style.css',}
            },
            print: {
                files: {'css/print.min.css': 'css/print.css',}
            },
            theme: {
                files: {'css/theme.min.css': 'css/theme.css'}
            },
            theme: {
                files: {'css/transcription.css': 'css/transcription.css'}
            },

        },

        watch: {
            scripts: {
                files: ['css/**/*.css', 'css/*.css'],
                tasks: ['myth', 'cmq', 'cssmin'],
                options: {
                    spawn: false,
                },
            },
        },

    })

    grunt.loadNpmTasks('grunt-myth');
    grunt.loadNpmTasks('grunt-combine-media-queries');
    grunt.loadNpmTasks('grunt-css');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['myth', 'cmq', 'cssmin'])
}
