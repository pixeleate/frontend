var root     = __dirname + '/..';
var baseSrc  = './app';
var baseDest = './build';
var bowerSrc = './bower_components';

module.exports = {
  browserSync: {
    server: {
      baseDir: [baseDest, baseSrc]
    },
    files: [
      baseDest + '/**'
    ]
  },
  fonts: {
    src:       baseSrc +  '/fonts/**/*',
    dest:      baseDest + '/assets/',
    bowerSrc:  bowerSrc
  },
  images: {
    src:  baseSrc +  '/images/**/*',
    dest: baseDest + '/assets/'
  },
  javascripts: {
    debug: true,
    extensions: ['.jade'],
    commonjs: {
      src:  bowerSrc + '/commonjs-require/commonjs-require.js',
      dest: baseDest + '/assets/'
    },
    bundleConfigs: [{
      src: {
        javascripts: [
          bowerSrc + '/jquery/dist/jquery.js',
          bowerSrc + '/angular/angular.js',
          bowerSrc + '/angular-foundation/mm-foundation-tpls.js',
          bowerSrc + '/angular-resource/angular-resource.js',
          bowerSrc + '/foundation/js/foundation.js',
          // Foundation Apps
          bowerSrc + '/fastclick/lib/fastclick.js',
          bowerSrc + '/viewport-units-buggyfill/viewport-units-buggyfill.js',
          bowerSrc + '/tether/tether.js',
          bowerSrc + '/angular-animate/angular-animate.js',
          bowerSrc + '/foundation-apps/js/angular/components/**/*.js',
          bowerSrc + '/foundation-apps/js/angular/services/foundation.core.js',
          bowerSrc + '/foundation-apps/js/angular/foundation.js',
          // End of Foundation Apps
          bowerSrc + '/modernizr/modernizr.js',
          bowerSrc + '/ui-router/release/angular-ui-router.js',
          bowerSrc + '/underscore/underscore.js',
          baseSrc + '/javascripts/vendors/**/*.js',
          baseSrc + '/javascripts/dependencies/**/*.js',
          baseSrc + '/javascripts/config.js',
          baseSrc + '/javascripts/tools/**',
          baseSrc + '/javascripts/deploy_my_codes.js',
          baseSrc + '/javascripts/deploy_my_codes/**'
        ]
      },
      dest:       baseDest + '/assets/',
      outputName: 'deploy_my_codes.js',
    }]
  },
  templates: {
    static: {
      src: baseSrc + '/templates/**/*.jade',
      dest: baseDest
    },
    javascript: {
      src: {
        jade: [
          baseSrc + '/javascripts/templates/**',
        ],
        html: [
          bowerSrc + '/foundation-apps/js/angular/**/*.html',
        ]
      },
      dest: baseDest
    }
  },
  stylesheets: {
    src:       baseSrc +  '/stylesheets/**/*.scss',
    dest:      baseDest + '/assets/',
    bowerSrc:  bowerSrc
  },
  tests: {
    configFile: root + '/karma.conf.js'
  }
};
