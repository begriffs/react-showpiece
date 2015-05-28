'use strict';

var React = require('react');
var cx = require('classnames');

var Menu = React.createClass({
  propTypes: {
    sub: React.PropTypes.bool
  },

  getDefaultProps: function () {
    return {
      sub: false
    };
  },

  render: function() {
    var classes = cx({
      'main': !this.props.sub,
      'sub': this.props.sub
    });
    return (
      <ul className={classes}>
        <li>Hi</li>
      </ul>
    );
  }
});

module.exports = Menu;
