/**
 * @jsx React.DOM
 */

define([
    'react',
    'components/entry-component'
  ], function (React, Entry) {
    'use strict';

    var ListView = React.createClass({
      render: function () {
        var entries = this.props.entries.map(function (entry) {
          if (!~entry.title.toLowerCase().indexOf(this.props.filterText.toLowerCase())) {
            return null;
          }
          return <Entry entry={entry} />
        }.bind(this));

        return (
          <div className="entries-container">{entries}</div>
        );
      }
    });

    return ListView;
  });