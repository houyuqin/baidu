module.exports = function (grunt) {
  grunt.initConfig({
    htmlmin: {
      options: {
        collapseWhitespace: true,
        preserveLineBreaks: false
      },
      files: {
        src: './index.html',
        dest: 'dist/index.html'
      }
    },
    cssmin: {
      'dist/baidu.min.css':'./baidu.css'
    }
  });

  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['cssmin']); 
};
