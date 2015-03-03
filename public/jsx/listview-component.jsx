/**
 * @jsx React.DOM
 */

define(['react'], function (React) {
  'use strict';

  var ListView = React.createClass({
    render: function () {
      return (
        <div className="commentBox">
          Hello, world! I am a CommentBox.
        </div>
      );
    }
  });

  return ListView;
});