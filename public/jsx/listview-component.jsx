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
          return <Entry entry={entry} />
        });

        return (
          <div>{entries}</div>
        );
      }
    });

    return ListView;
  });