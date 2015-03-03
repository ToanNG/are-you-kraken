/**
 * @jsx React.DOM
 */

define(['react'], function (React) {
  'use strict';

  var ListView = React.createClass({displayName: "ListView",
    render: function () {
      return (
        React.createElement("h3", null, this.props.entry.name)
      );
    }
  });

  return ListView;
});