/**
 * @jsx React.DOM
 */

define([
    'react',
    'components/entry-component'
  ], function (React, Entry) {
    'use strict';

    var ListView = React.createClass({displayName: "ListView",
      render: function () {
        var entries = this.props.entries.map(function (entry) {
          if (!~entry.title.toLowerCase().indexOf(this.props.filterText)) {
            return null;
          }
          return React.createElement(Entry, {entry: entry})
        }.bind(this));

        return (
          React.createElement("div", {class: "entries-container"}, entries)
        );
      }
    });

    return ListView;
  });