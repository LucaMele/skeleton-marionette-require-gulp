/**
 * Created by info@lucamele.ch
 */
define([
    'backbone',
    'marionette',
    'underscore',
    'app'
], function (Backbone, Marionette, _, App) {

    "use strict";

    // MODULE
    var Bar = App.module('Bar');

    /**
     * MODELS ----------------------------
     */

    // is a backbone model: http://backbonejs.org/#Model
    Bar.Hello = Backbone.Model.extend({
        defaults: {
            message: ''
        }
    });


    /**
     * VIEWS ----------------------------
     */

    // is a marionette item view: http://marionettejs.com/docs/v2.4.3/marionette.itemview.html
    Bar.BarView = Marionette.ItemView.extend({
        tagName: 'li',
        template: 'bar/index.html'
    });


    /**
     * CONTROLLER ----------------------------
     */

    // is a marionette controller: http://marionettejs.com/docs/v2.4.3/marionette.controller.html
    Bar.Controller = Marionette.Controller.extend({
        /**
         * @author info@lucamele.ch
         *
         * @constructor
         */
        initialize: function() {
            // constructor
            console.log('hi bar');
        },
        /**
         * @author info@lucamele.ch
         */
        index: function() {
            // index stuff
            // initialize the item view. Is not in the dom yet!
            this.barView = new Bar.BarView({
                model: new Bar.Hello({
                    message: 'Hello everyone'
                })
            });

            this._setupLayout();
        },
        /**
         * @author info@lucamele.ch
         */
        _setupLayout: function() {

            // render everything to the DOM in the main region as defined in app.js (App.addRegions)
            App.major.show(this.barView);
        }
    });

    return Bar;
});
