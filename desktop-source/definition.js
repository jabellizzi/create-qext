define(function() {
  'use strict';

  return {
    type: 'items',
    component: 'accordion',
    items: {
      dimensions: {
        uses: 'dimensions',
        min: 1,
        max: 1
      },
      measures: {
        uses: "measures",
        min: 1,
        max: 1
      },
      sorting: {
        uses: "sorting"
      },
      addons: {
        uses: "addons",
        items: {
          dataHandling: {
            uses: "dataHandling"
          }
        }
      },
      appearance: {
        uses: "settings",
        items: {
          general: {
            uses: "general"
          }
        }
      }
    }
  }
})