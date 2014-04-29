requirejs.config({
  shim: {
    'jsontemplate': { exports: 'jsontemplate' },
    'underscore': { exports: '_' },
    'angular': { exports: 'angular' },
    'google-analytics': { exports: '_gat' }
  },
  paths: {
    underscore: 'components/underscore/underscore-min',
    propertyParser: 'components/requirejs-plugins/src/propertyParser',
    font: 'components/requirejs-plugins/src/font',
    domReady: 'components/requirejs-domready/domReady',
    jsontemplate: 'vendor/json-template',
    angular: 'components/angular/angular.min',
    'google-analytics': 'https://www.google-analytics.com/ga'
  }
});

require(
  [
    'angular',
    'jsontemplate',
    'google-analytics',
    'font!google,families:[Montserrat,PT Sans]',
    'domReady!'
  ],
  function (angular, jsontemplate, analytics) {
    angular.module('showpiece', []);

    angular.module('showpiece').
      directive('show', function() {
        return {
          restrict: 'E',
          transclude: true,
          template: '<textarea ng-transclude wrap="off" rows="10"></textarea><div class="rendered" />',
          scope: {
            template: '@'
          },
          link: function(scope, element, attrs) {
            var text = element.text().replace(/^\s*\n/gm, ''),
              input = element.find('textarea'),
              rendered = element.find('div');

            function updateRender() {
              rendered.html(
                jsontemplate.expand(scope.template, JSON.parse(input.val()))
              );
            }

            input.bind('keyup', updateRender);

            attrs.$observe('template', function(value) {
              if(value) {
                updateRender();
              }
            });

            input.val(text);
          }
        };
      }).
      controller('ShowpieceCtrl', function($scope, $http) {
        $http.get(
          'https://api.github.com/repos/begriffs/showpiece/contents/templates/menu/template?ref=master'
        ).then(
          function(response) {
            $scope.menu_template = window.atob(response.data.content.replace(/\s/g, ''));
          },
          function(response) { // github api limit error
            $scope.menu_template = "Github Error: " + response.data.message;
          }
        );
      });

    angular.bootstrap(document, ['showpiece']);
    analytics._getTracker('UA-41919791-1')._trackPageview();
  }
);
