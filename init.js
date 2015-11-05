/**
 * Created by info@lucamele.ch
 */
require.config({
    deps: [
        'main'
    ],
    paths : {
        backbone: 'bower_components/backbone/backbone',
        app: 'modules/app',
        jquery: 'bower_components/jquery/dist/jquery',
        underscore: 'bower_components/underscore/underscore',
        marionette: 'bower_components/backbone.marionette/lib/backbone.marionette'
    },
    shim : {
        Backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'backbone'
        },
        Marionette: {
            deps: ['backbone', 'underscore'],
            exports: 'marionette'
        },
        underscore: {
            exports: '_'
        }
    },
    map : {
        // '' : ''
    }
});
