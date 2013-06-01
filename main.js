requirejs.config({
  shim: {
    'jsontemplate': {
      exports: 'jsontemplate'
    },
    'underscore': {
      exports: '_'
    }
  },
  paths: {
    'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min',
    'underscore': 'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.4.4/underscore-min',
    'knockout': 'https://ajax.aspnetcdn.com/ajax/knockout/knockout-2.2.1',
    'knockout.mapping': 'https://cdnjs.cloudflare.com/ajax/libs/knockout.mapping/2.3.5/knockout.mapping',
    'domReady': 'vendor/domReady',
    'jsontemplate': 'vendor/json-template',
    'playgroundViewModel': 'playgroundViewModel'
  }
});

require(
  ['knockout', 'playgroundViewModel', 'domReady!'],
  function (ko, playgroundViewModel) {
    ko.applyBindings(new playgroundViewModel('begriffs/showpiece'));
  }
);
