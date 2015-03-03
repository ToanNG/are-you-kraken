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
      getInitialState: function () {
        return {
          filterText: ''
        };
      },

      handleUserInput: function (filterText) {
        this.setState({
          filterText: filterText
        });
      },

      render: function () {
        return (
          React.createElement("div", null, 
            React.createElement(SearchBar, {
              filterText: this.state.filterText, 
              onUserInput: this.handleUserInput}
            ), 
            React.createElement(ListView, {
              entries: this.props.entries, 
              filterText: this.state.filterText}
            )
          )
        );
      }
    });

    return FilterableListView;
  });