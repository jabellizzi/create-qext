import template from './template.html';
import initialProperties from './initial-properties.json';
import definition from './definition.js';
import paint from './paint.js';
import localCSS from './style.scss';

export default window.define(['qlik'], function(qlik) {
  return {
    template: template,
    initialProperties: initialProperties,
    definition: definition,
    paint: paint
  }
})