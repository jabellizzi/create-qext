define(function(require) {
  'use strict';

  var template = require('text!./template.html');
  var initialProperties = require('./initial-properties');
  var definition = require('./definition');
  var paint = require('./paint');
  var cssContent = require('text!./style.css');

  $('<style>').html(cssContent).appendTo('head');

  return {
    template: template,
    initialProperties: initialProperties,
    definition: definition,
    paint: paint
  }
})