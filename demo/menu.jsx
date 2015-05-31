'use strict';

var React = require('react');
var Menu = require('../lib/Menu.jsx');
var Dispatcher = require('flux').Dispatcher;
var Select = require('react-select');

var ExampleMenusStore = require('./store/ExampleMenusStore');

function getStateFromStores() {
  return {
    example_names: Object.keys(ExampleMenusStore.getExamples()),
    examples: ExampleMenusStore.getExamples()
  };
}

var App = React.createClass({
  getInitialState: function () {
    return getStateFromStores();
  },

  componentDidMount: function () {
    ExampleMenusStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function () {
    ExampleMenusStore.removeChangeListener(this._onChange);
  },

  render: function () {
    var names = this.state.example_names, vals = this.state.examples;
    var options = names.map(function (n) {
      return { value: vals[n], label: n };
    });

    function logChange(val) {
      console.log("Selected: " + val);
    }

    return <Select
        name="form-field-name"
        value="one"
        options={options}
        onChange={logChange}
      />;
  }
});

React.render(<App />, document.getElementById('content'));
