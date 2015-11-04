/**
 * Created by info@lucamele.ch
 */

define(['marionette', 'templates/templates', 'backbone','jquery', 'underscore'],
    function (Marionette, templates, Backbone) {

        'use strict';

        /** @this {App}*/
        var App = new Marionette.Application();

        // main regions of your app. could be like header, content and footer
        App.addRegions({
            major: '#region-main-area'
        });

        // initialise everything here
        App.on('before:start', function () {
            App.Nav = {};

            // new router with our routes (key is the after hash value, value is the method in the router)
            App.Nav.Router = Marionette.AppRouter.extend({
                appRoutes: {

                    //ALL ROUTES
                    'bar': 'bar'
                    ,'foo': 'foo'

                    // Menu route DEFAULT (always at the bottom!)
                    ,'*default' : 'foo'
                }
            });

            App.addInitializer(function(){
                App.Nav.AppRouter = new App.Nav.Router({
                    controller: new App.Router.Controller()
                });
            });
        });

        // start the navigation history
        App.on('start', function () {
            Backbone.history.start();
        });

        // use jst templates by overriding marionette render
        Marionette.Renderer.render = function(template, data) {
            // allow No template
            if (template === undefined) {
                return '';
            }
            if (!window.JST[template]) {
                throw 'Template "' + template + '" not found!';
            }
            // underscore create a template
            return _.template(JST[template](data));
        };


        return App;
    });
