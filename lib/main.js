var buttons = require('sdk/ui/button/action')
var tabs = require('sdk/tabs')
var pageMod = require("sdk/page-mod");
var data = require("sdk/self").data;


buttons.ActionButton({
	id: "mozilla-link",
	label: "Visit Mozilla",
	icon: {
		"16": "./icon-16.png",
		"32": "./icon-32.png",
		"64": "./icon-64.png"
	},
	onClick: handleClick
})

var handleClick = function(state) {
	tabs.open("https://www.mozilla.org/");
}

pageMod.PageMod({
//  include: "*.facebook.com",
	include: "*"
	,contentScriptFile: data.url("hide-comments.js") //[ data.url("hide-comments.js"),],
	,onAttach: function(worker) {
  	worker.port.emit("getElements")
  }
})

