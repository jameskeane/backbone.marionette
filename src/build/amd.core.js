(function (root, factory) {
  if (typeof exports === 'object') {

    var underscore = require('underscore');
    var backbone = require('backbone');
    var wreqr = require('backbone.wreqr');
    var babysitter = require('backbone.babysitter');

    module.exports = factory(underscore, backbone, wreqr, babysitter);

  } else if (typeof define === 'function' && define.amd) {

    define(['underscore', 'backbone', 'backbone.wreqr', 'backbone.babysitter'], factory);

  }
}(this, function (_, Backbone, Wreqr, BabySitter) {
  Backbone.Wreqr = Backbone.Wreqr || Wreqr;
  Backbone.BabySitter = Backbone.BabySitter || Wreqr;

  // @include marionette.core.js
  return Backbone.Marionette;

}));
