requirejs.config({
  shim: {
    'jsontemplate': { exports: 'jsontemplate' },
    'underscore': { exports: '_' },
    'angular': { exports: 'angular' }
  },
  paths: {
    underscore: 'components/underscore/underscore-min',
    propertyParser: 'components/requirejs-plugins/src/propertyParser',
    font: 'components/requirejs-plugins/src/font',
    domReady: 'components/requirejs-domready/domReady',
    jsontemplate: 'vendor/json-template',
    angular: 'components/angular/angular.min'
  }
});

require(
  [
    'angular',
    'font!google,families:[Montserrat,PT Sans]',
    'domReady!'
  ],
  function (angular) {
    angular.bootstrap(document);
  }
);
