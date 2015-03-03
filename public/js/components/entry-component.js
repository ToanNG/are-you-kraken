/**
 * @jsx React.DOM
 */

define(['react'], function (React) {
  'use strict';

  var ListView = React.createClass({displayName: "ListView",
    render: function () {
      return (
        React.createElement("div", {class: "entry"}, this.props.entry.title)
      );
    }
  });

  return ListView;
});