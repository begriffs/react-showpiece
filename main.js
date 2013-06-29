requirejs.config({
  shim: {
    'jsontemplate': { exports: 'jsontemplate' },
    'underscore': { exports: '_' }
  },
  paths: {
    underscore: 'components/underscore/underscore-min',
    propertyParser: 'components/requirejs-plugins/src/propertyParser',
    font: 'components/requirejs-plugins/src/font',
    jsontemplate: 'vendor/json-template',
    angular: 'components/angular/angular.min'
  }
});

require(
  ['angular', 'font!google,families:[Montserrat,PT Sans]'],
  function (angular) {
    console.log("hi");
  }
);
