requirejs.config({
  shim: {
    'jsontemplate':     { exports: 'jsontemplate' },
    'underscore':       { exports: '_' },
    'jquery.details':   ['jquery']
  },
  paths: {
    'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min',
    'jquery.details': 'jquery.details',
    'underscore': 'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.4.4/underscore-min',
    'jsontemplate': 'json-template',
    'google-analytics': 'http://www.google-analytics.com/ga'
  }
});

require(
  ['jquery', 'underscore', 'jsontemplate', 'jquery.details'],
  function ($, _, jsontemplate) {
    window.ga = {
      q: [['create', 'UA-41919791-1', 'begriffs.github.io'], ['send', 'pageview']],
      l: Date.now()
    };
    window.GoogleAnalyticsObject = 'ga';
    require(['google-analytics']);

    $(function () {
      $('#examples').change(function () {
        $.ajax({
          url: this.value,
          dataType: 'json',
          success: function (data) {
            $('#editor').val(window.atob(data.content.replace(/\s/g, '')));
          }
        });
      });
      $('#styles').change(function () {
        $.ajax({
          url: this.value,
          dataType: 'json',
          success: function (data) {
            $('#css').val(window.atob(data.content.replace(/\s/g, '')));
          }
        });
      });

      $('#widgets').change(function () {
        $('#examples').empty();
        $('#styles').empty();
        var widget = this.value;
        $.ajax({
          url: 'https://api.github.com/repos/begriffs/showpiece/contents/' + widget + '/examples',
          dataType: 'json',
          success: function (data) {
            _.each(data, function (file) {
              $('#examples').append(
                $('<option></option>')
                  .attr('value', file.url)
                  .text(file.name)
              );
            });
            $('#examples').trigger('change');

            $.ajax({
              url: 'https://api.github.com/repos/begriffs/showpiece/contents/' + widget + '/template?ref=master',
              dataType: 'json',
              success: function (data) {
                $('#template').val(window.atob(data.content.replace(/\s/g, '')));
              }
            });
          }
        });

        $.ajax({
          url: 'https://api.github.com/repos/begriffs/showpiece/contents/' + widget + '/styles',
          dataType: 'json',
          success: function (data) {
            _.each(data, function (file) {
              $('#styles').append(
                $('<option></option>')
                  .attr('value', file.url)
                  .text(file.name)
              );
            });
            $('#styles').trigger('change');
          }
        });
      });

      $.ajax({
        url: 'https://api.github.com/repos/begriffs/showpiece/contents/templates',
        dataType: 'json',
        success: function (data) {
          _.each(data, function (file) {
            if(file.type === 'dir') {
              $('#widgets').append(
                $('<option></option>')
                  .attr('value', file.path)
                  .text(file.name)
              );
            }
          });
          $('#widgets').trigger('change');
        }
      });

      $('#render').click(function () {
        $('#preview').html(
          jsontemplate.expand(
            $('#template').val(),
            JSON.parse($('#editor').val())
          )
        );
        $('details').details(); // polyfill
      });

      $('#apply').click(function () {
        $('style.github').html($('#css').val());
      });
    });
  }
);
