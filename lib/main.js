var buttons = require('sdk/ui/button/action')
var tabs = require('sdk/tabs')
var data = require("sdk/self").data;

require("sdk/ui/button/action").ActionButton({
  id: "highlight-comments",
  label: "Highlight comments",
  icon: "./icon-16.png",
  onClick: function() {
    tabs.activeTab.attach({
      contentScriptFile: data.url("hide-comments.js")
    })
  }
})
