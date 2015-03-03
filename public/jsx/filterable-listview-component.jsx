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
      render: function () {
        return (
          <div>
            <SearchBar />
            <ListView entries={this.props.entries}/>
          </div>
        );
      }
    });

    return FilterableListView;
  });