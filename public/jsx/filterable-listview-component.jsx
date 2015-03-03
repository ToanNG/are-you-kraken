/**
 * @jsx React.DOM
 */

define([
    'react',
    'components/searchbar-component',
    'components/listview-component'
  ], function (React, SearchBar, ListView) {
    'use strict';

    var FilterableListView = React.createClass({
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
          <div>
            <SearchBar
              filterText={this.state.filterText}
              onUserInput={this.handleUserInput}
            />
            <ListView
              entries={this.props.entries}
              filterText={this.state.filterText}
            />
          </div>
        );
      }
    });

    return FilterableListView;
  });