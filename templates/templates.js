(function() {
window["JST"] = window["JST"] || {};

window["JST"]["bar/index.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<h3>Hello Bar!</h3>\n\n<h5>' +
((__t = ( message )) == null ? '' : __t) +
'</h5>\n\n<a href="#bar">go to bar</a>\n<a href="#foo">go to foos</a>\n';

}
return __p
}})();
(function() {
window["JST"] = window["JST"] || {};

window["JST"]["foo/index.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<h3>Hello all foos!</h3>\n<ul id="foos">\n    ';
 // here are gonna be append all foos ;
__p += '\n</ul>\n<a href="#bar">go to bar</a>\n<a href="#foo">go to foos</a>\n';

}
return __p
}})();
(function() {
window["JST"] = window["JST"] || {};

window["JST"]["foo/single-foo.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<strong>' +
((__t = ( displayName() )) == null ? '' : __t) +
'</strong>\n<em> ' +
((__t = ( somevalue )) == null ? '' : __t) +
'...</em>\n';

}
return __p
}})();