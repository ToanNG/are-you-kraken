/**
 * @jsx React.DOM
 */

define(['react'], function (React) {
  'use strict';

  var ListView = React.createClass({displayName: "ListView",
    render: function () {
      return (
        React.createElement("div", {className: "commentBox"}, 
          "Hello, world! I am a CommentBox."
        )
      );
    }
  });

  return ListView;
});