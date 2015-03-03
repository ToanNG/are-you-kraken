/**
 * @jsx React.DOM
 */

define([
    'react',
    'components/searchbar-component',
    'components/listview-component'
  ], function (React, SearchBar, ListView) {
    'use strict';

    var FilterableListView = React.createClass({displayName: "FilterableListView",
      render: function () {
        return (
          React.createElement("div", null, 
            React.createElement(SearchBar, null), 
            React.createElement(ListView, {entries: this.props.entries})
          )
        );
      }
    });

    return FilterableListView;
  });