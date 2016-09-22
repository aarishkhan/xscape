module.exports = function(grunt) {

  // Project configuration.

  grunt.initConfig({
  uglify: {
    options: {
      mangle: false
    },
    my_target: {
      files: {
	      'www/js/main.min.js': ['www/js/main.min.js']
	    }
    }
  }
});

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).


};
