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
          return React.createElement(Entry, {entry: entry})
        });

        return (
          React.createElement("div", null, entries)
        );
      }
    });

    return ListView;
  });