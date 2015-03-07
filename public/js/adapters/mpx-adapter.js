define(['jquery'], function ($) {
  'use strict';

  var feedUrl = '';

  function MPXAdapter () {

  }

  MPXAdapter.prototype.init = function () {

  };

  MPXAdapter.prototype.findAll = function (params) {
    var d = new $.Deferred();

    setTimeout(function () {
      d.resolve([
          {
            title: 'vod 1'
          },
          {
            title: 'vod 2'
          }
        ]);
    }, 3000);

    return d.promise();
  };

  MPXAdapter.prototype.findOne = function () {

  };

  return MPXAdapter;
});