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
  ['angular', 'font!typekit,families:["Alternate Gothic No. 1 D","Proxima Nova Alt Condensed"]'],
  function (angular) {
    console.log("hi");
  }
);
