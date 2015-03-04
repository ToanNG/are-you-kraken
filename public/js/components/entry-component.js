/**
 * @jsx React.DOM
 */

define(['react'], function (React) {
  'use strict';

  var Entry = React.createClass({displayName: "Entry",
    render: function () {
      return (
        React.createElement("div", {className: "entry"}, this.props.entry.title)
      );
    }
  });

  return Entry;
});