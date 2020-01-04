define('super-rentals/components/rental-listing', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Component.extend({
        isWide: false,
        actions: {
            toggleImageSize() {
                this.toggleProperty('isWide');
            }
        }
    });
});