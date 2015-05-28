'use strict';

var React = require('react');
var cx = require('classnames');

var propTypeNonnegInteger = function(props, name, componentName) {
  function isInt(i) {
    // http://stackoverflow.com/a/14794066/3102996
    return !isNaN(i) && parseInt(Number(i)) == i && !isNaN(parseInt(i, 10))
  }

  if(!isInt(props[name]) || props[name] < 0) {
    return new Error(
      "Invalid prop `" + name +"` with value `" + props[name] +
      "` supplied to `" + componentName +
      "`, expected nonnegative integer");
  }
};

var Item = React.createClass({
  propTypes: {
    text: React.PropTypes.string,
    url: React.PropTypes.string,
    description: React.PropTypes.string,
    level: propTypeNonnegInteger
  },

  getDefaultProps: function () {
    return { level: 0 };
  },

  render: function() {
    var inner = (this.props.url
      ? <a className="text" href={this.props.url}>{this.props.text}</a>
      : <span className="text">{this.props.text}</span>);

    var described = this.props.description
      ? <dl><dt>{inner}</dt><dd>{this.props.description}</dd></dl>
      : inner;

    return (this.props.items
      ? <details>
          <summary>{described}</summary>
          <Menu className="options" level={this.props.level+1}
            items={this.props.items} />
        </details>
      : described
    );
  }
});

var Menu = React.createClass({
  propTypes: {
    level: propTypeNonnegInteger,
    items: React.PropTypes.array
  },

  getDefaultProps: function () {
    return {
      level: 0,
      items: []
    };
  },

  render: function() {
    var level = this.props.level;
    var levelClass = "level-" + this.props.level;
    var classes = cx(this.props.className, 'shwp-menu', levelClass);

    var items = this.props.items.map(function (i) {
      return <li className={levelClass}>
          <Item level={level} {...i} />
        </li>;
    });
    return (
      <ul className={classes}>
        {items}
      </ul>
    );
  }
});

module.exports = Menu;
