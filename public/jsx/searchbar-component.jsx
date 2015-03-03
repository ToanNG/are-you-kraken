/**
 * @jsx React.DOM
 */

define(['react'], function (React) {
  'use strict';

  var SearchBar = React.createClass({
    handleChange: function () {
      this.props.onUserInput(
        this.refs.filterTextInput.getDOMNode().value
      );
    },

    render: function () {
      return (
        <form>
          <input
            type="text"
            placeholder="Search..."
            value={this.props.filterText}
            ref="filterTextInput"
            onChange={this.handleChange}
          />
        </form>
      );
    }
  });

  return SearchBar;
});
