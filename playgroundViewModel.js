define(
  ['jquery', 'underscore', 'jsontemplate', 'knockout', 'knockout.mapping'],
  function($, _, jsontemplate, ko, komap) {
    function base64decode(encoded) {
      return window.atob(encoded.replace(/\s/g, ''));
    }

    return function playgroundViewModel(repo) {
      var self = this;

      this.repo = ko.observable(repo);
      this.widgets = ko.observableArray([]);
      this.selectedWidget = ko.observable();

      this.examples = ko.observableArray([]);
      ko.computed(function () {
        if(!self.selectedWidget()) { return; }
        $.getJSON(
          ['https://api.github.com/repos', self.repo(),
           'contents', self.selectedWidget(), 'examples'
          ].join('/'),
          self.examples
        );
      });
      this.selectedExampleURL = ko.observable();
      this.selectedExample = ko.observable();
      ko.computed(function () {
        $.getJSON(
          self.selectedExampleURL(),
          function (data) {
            self.selectedExample(base64decode(data.content));
          }
        );
      });

      this.selectedTemplate = ko.observable();
      ko.computed(function () {
        if(!self.selectedWidget()) { return; }
        $.getJSON(
          'https://api.github.com/repos/begriffs/showpiece/contents/' + self.selectedWidget() + '/template?ref=master',
          function (data) {
            self.selectedTemplate(base64decode(data.content));
          }
        );
      });

      this.renderedResult = ko.computed(function () {
        if(!self.selectedExample() || !self.selectedWidget()) { return; }
        return jsontemplate.expand(
          self.selectedTemplate(),
          JSON.parse(self.selectedExample())
        );
      }).extend({ throttle: 500 });


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
