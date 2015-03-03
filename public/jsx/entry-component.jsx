/**
 * @jsx React.DOM
 */

define(['react'], function (React) {
  'use strict';

  var ListView = React.createClass({
    render: function () {
      return (
        <div class="entry">{this.props.entry.title}</div>
      );
    }
  });

  return ListView;
});