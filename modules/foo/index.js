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
    var Foo = App.module('Foo');

    /**
     * MODELS ----------------------------
     */

    // is a backbone model: http://backbonejs.org/#Model
    Foo.Foo = Backbone.Model.extend({
        defaults: {
            name: '',
            somevalue: 'hello to you'
        }
    });

    // is a backbone collection: http://backbonejs.org/#Collection
    Foo.FoosCollection = Backbone.Collection.extend({
        url: 'data/foos.json',
        model: Foo.Foo
    });

    // is a backbone model: http://backbonejs.org/#Model
    Foo.Hello = Backbone.Model.extend({
        defaults: {
            message: ''
        }
    });


    /**
     * VIEWS ----------------------------
     */

    // is a marionette item view: http://marionettejs.com/docs/v2.4.3/marionette.itemview.html
    Foo.FooView = Marionette.ItemView.extend({
        tagName: 'li',
        template: 'foo/single-foo.html',
        templateHelpers: function () {
            return {
                displayName: function(){
                    if (this.name === "foo_e"){
                        return this.name + ' is the coolest!';
                    }
                    return this.name;
                }
            };
        }
    });

    // is a marionette composite view: http://marionettejs.com/docs/v2.4.3/marionette.compositeview.html
    Foo.FoosView = Marionette.CompositeView.extend({
        template: 'foo/index.html',
        childViewContainer: '#foos'
    });


    /**
     * CONTROLLER ----------------------------
     */

    // is a marionette controller: http://marionettejs.com/docs/v2.4.3/marionette.controller.html
    Foo.Controller = Marionette.Controller.extend({
        /**
         * @author info@lucamele.ch
         *
         * @constructor
         */
        initialize: function() {
            // constructor
            console.log('hi foo');
        },
        /**
         * @author info@lucamele.ch
         */
        index: function() {
            // index stuff
            this.foos = new Foo.FoosCollection();

            // initialize the composite view. Is not in the dom yet!
            this.foosView = new Foo.FoosView({
                collection: this.foos,
                childView: Foo.FooView,
                model: new Foo.Hello({
                    message: 'Welcome to this awesome FOO-BAR app!'
                })
            });

            // context is the Foo.Controller and listen on foos! how awesome!
            // when the collection has finished to load, proceed
            this.listenTo(this.foos, 'sync', function() {
                console.log('The collection has load!');
                this._setupLayout();
            });

            // get the data from th server
            this.foos.fetch();
        },

        /**
         * @author info@lucamele.ch
         */
        _setupLayout: function() {

            // render everything to the DOM in the main region as defined in app.js (App.addRegions)
            App.major.show(this.foosView);
        }
    });

    return Foo;
});
