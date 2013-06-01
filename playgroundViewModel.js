define(
  ['jquery', 'underscore', 'jsontemplate', 'knockout', 'knockout.mapping'],
  function($, _, jsontemplate, ko, komap) {
    return function playgroundViewModel(repo) {
      var self = this;

      this.repo = ko.observable(repo);
      this.widgets = ko.observableArray([]);

      this.selectedWidget = ko.observable();

      $.getJSON(
        'https://api.github.com/repos/' + this.repo() + '/contents/',
        function (files) {
          ko.utils.arrayPushAll(
            self.widgets(),
            _.filter(files, function (f) { return f.type === 'dir'; } )
          );
          self.widgets.valueHasMutated();
        }
      );
    };
  }
);
