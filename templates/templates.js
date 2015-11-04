(function() {
window["JST"] = window["JST"] || {};

window["JST"]["bar/index.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<h3>Hello Bar!</h3>\r\n\r\n<h5>' +
((__t = ( message )) == null ? '' : __t) +
'</h5>\r\n\r\n<a href="#bar">go to bar</a>\r\n<a href="#foo">go to foos</a>\r\n';

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
__p += '<h3>Hello all foos!</h3>\r\n<ul id="foos">\r\n    ';
 // here are gonna be append all foos ;
__p += '\r\n</ul>\r\n<a href="#bar">go to bar</a>\r\n<a href="#foo">go to foos</a>\r\n';

}
return __p
}})();
(function() {
window["JST"] = window["JST"] || {};

window["JST"]["foo/single-foo.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if(name === "foo_e"){ ;
__p += '\r\n    <strong>' +
((__t = ( name )) == null ? '' : __t) +
', the SPECIAL ONE</strong>\r\n';
 } else { ;
__p += '\r\n    <strong>' +
((__t = ( name )) == null ? '' : __t) +
'</strong>\r\n';
 } ;
__p += '\r\n<em> ' +
((__t = ( somevalue )) == null ? '' : __t) +
'...</em>\r\n';

}
return __p
}})();