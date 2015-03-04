/**
 * @jsx React.DOM
 */

define(['react'], function (React) {
  'use strict';

  var Entry = React.createClass({
    render: function () {
      return (
        <div className="entry">{this.props.entry.title}</div>
      );
    }
  });

  return Entry;
});