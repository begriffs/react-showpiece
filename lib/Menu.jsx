'use strict';

var React = require('react');
var cx = require('classnames');

var propTypeNonnegInteger = function(props, name, componentName) {
  function isInt(i) {
    // http://stackoverflow.com/a/14794066/3102996
    return !isNaN(i) && parseInt(Number(i)) === i && !isNaN(parseInt(i, 10));
  }

  if(!isInt(props[name]) || props[name] < 0) {
    return new Error(
      "Invalid prop `" + name + "` with value `" + props[name] +
      "` supplied to `" + componentName +
      "`, expected nonnegative integer");
  }
};

var Item = React.createClass({
  propTypes: {
    text: React.PropTypes.string,
    url: React.PropTypes.string,
    description: React.PropTypes.string,
    level: propTypeNonnegInteger,
    groups: React.PropTypes.array
  },

  render: function () {
    var summary;
    if(this.props.description) {
      var described = <dl>
        <dt className="text">{this.props.text}</dt>
        <dd>{this.props.description}</dd>
      </dl>;
      summary = (this.props.url
        ? <a href={this.props.url}>{described}</a>
        : described);
    } else {
      summary = (this.props.url
        ? <a className="text" href={this.props.url}>{this.props.text}</a>
        : <span className="text">{this.props.text}</span>);
    }
    return (this.props.items || this.props.groups
      ? <details open={this.props.open}>
          <summary>{summary}</summary>
          <Menu className="options" level={this.props.level + 1}
            items={this.props.items} groups={this.props.groups} />
        </details>
      : summary
    );
  }
});

var Group = React.createClass({
  propTypes: {
    text: React.PropTypes.string,
    level: propTypeNonnegInteger
  },

  render: function() {
    var menu = <Menu level={this.props.level} items={this.props.items} />;
    var inner = (this.props.url
      ? <a href={this.props.url}>{this.props.text}</a>
      : <span>{this.props.text}</span>);
    return (this.props.text
      ? <fieldset data-item={this.props.id}><legend>{inner}</legend>{menu}</fieldset>
      : <fieldset data-item={this.props.id}>{menu}</fieldset>
    );
  }
});

var Menu = React.createClass({
  propTypes: {
    level: propTypeNonnegInteger,
    items: React.PropTypes.array,
    groups: React.PropTypes.array
  },

  getDefaultProps: function () {
    return {
      level: 0,
      items: [],
      groups: []
    };
  },

  render: function() {
    var level = this.props.level;
    var levelClass = "level-" + this.props.level;
    var classes = cx(this.props.className, 'shwp-menu', levelClass);

    var items = (this.props.items || []).map(function (i) {
      var liClasses = cx(levelClass, {'with-groups': !!i.groups});
      return <li className={liClasses} data-item={i.id}>
          <Item level={level} {...i} />
        </li>;
    });
    if(items.length > 0) {
      items = <div className={classes}><ul>{items}</ul></div>;
    }
    var groups = (this.props.groups || []).map(function (g) {
      return <Group level={level} {...g} />;
    });
    if(groups.length > 0) {
      groups = <div className="options">{groups}</div>;
    }
    return (
      <div>
        {items}
        {groups}
      </div>
    );
  }
});

module.exports = Menu;
