'use strict';

var React = require('react');
var cx = require('classnames');

function isInt(i) {
  // http://stackoverflow.com/a/14794066/3102996
  return !isNaN(i) && parseInt(Number(i)) == i && !isNaN(parseInt(i, 10))
}

var Item = React.createClass({
  propTypes: {
    text: React.PropTypes.string,
    url: React.PropTypes.string,
    description: React.PropTypes.string
  },

  render: function() {
    var inner = this.props.url
      ? <a className="text" href={this.props.url}>{this.props.text}</a>
      : <span className="text">{this.props.text}</span>

    return (this.props.description
      ? <dl><dt>{inner}</dt><dd>{this.props.description}</dd></dl>
      : inner
    );
  }
});

var Menu = React.createClass({
  propTypes: {
    level: function(props, name, componentName) {
      if(!isInt(props[name]) || props[name] < 0) {
        return new Error(
          "Invalid prop `" + name +"` with value `" + props[name] +
          "` supplied to `" + componentName +
          "`, expected nonnegative integer");
      }
    },
    items: React.PropTypes.array
  },

  getDefaultProps: function () {
    return {
      level: 0,
      items: []
    };
  },

  render: function() {
    var lvl = "level-" + this.props.level;
    var items = this.props.items.map(function (i) {
      return <li className={lvl}><Item {...i} /></li>
    });
    return (
      <ul className={lvl}>
        {items}
      </ul>
    );
  }
});

module.exports = Menu;
