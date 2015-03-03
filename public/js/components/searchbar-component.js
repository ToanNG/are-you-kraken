/**
 * @jsx React.DOM
 */

define(['react'], function (React) {
  'use strict';

  var SearchBar = React.createClass({displayName: "SearchBar",
    handleChange: function () {
      this.props.onUserInput(
        this.refs.filterTextInput.getDOMNode().value
      );
    },

    render: function () {
      return (
        React.createElement("form", null, 
          React.createElement("input", {
            type: "text", 
            placeholder: "Search...", 
            value: this.props.filterText, 
            ref: "filterTextInput", 
            onChange: this.handleChange}
          )
        )
      );
    }
  });

  return SearchBar;
});
