/**
 * @jsx React.DOM
 */

define(['react'], function (React) {
  'use strict';

  var SearchBar = React.createClass({displayName: "SearchBar",
    render: function () {
      return (
        React.createElement("form", null, 
          React.createElement("input", {type: "text", placeholder: "Search..."}), 
          React.createElement("p", null, 
            React.createElement("input", {type: "checkbox"}), 
            ' ', 
            "Only show products in stock"
          )
        )
      );
    }
  });

  return SearchBar;
});
