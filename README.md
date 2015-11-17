# Skeleton with MarionetteJs, BackboneJs, RequireJs, UnderscoreJs and JST templates
This is a skaleton for a SPA app with requireJs, BackboneJs, MarionetteJs and JST Templates


##How to install:##

_After have cloned the repo on your machine_

First, if you don't have already bower as a global node_module:

`npm install -g bower`

After bower is installed, install all npm dependencies:

`npm install`

This will install all npm modules and bower dependecies

Now you can see the preview of the application by starting the server. The url address is gonna be http://localhost:3000 (configured in server.js):

`node server.js`

Please don't use the server configuration for production. Is only for local testing!

### On development ###

Start everything with:

`gulp`

##A quick build example of require##

You can execute `gulp build` to have a minified and bundled version of the whole project. To test it, run first `node server.js` and access to the demo HTML page by: localhost:3000/index-built.html


##References and good to know:##

http://marionettejs.com/

http://backbonejs.org/

http://requirejs.org/

http://underscorejs.org/

http://gulpjs.com/