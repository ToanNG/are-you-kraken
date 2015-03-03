/**
 * @jsx React.DOM
 */

define(['react'], function (React) {
  'use strict';

  var ListView = React.createClass({
    render: function () {
      return (
        <h3>{this.props.entry.name}</h3>
      );
    }
  });

  return ListView;
});