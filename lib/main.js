var buttons = require('sdk/ui/button/action')
var tabs = require('sdk/tabs')
var data = require("sdk/self").data

var hideComments = data.url("hide-comments.js")

require("sdk/ui/button/action").ActionButton({
  id: "nuke-comments",
  label: "Hide facebook comments where people are tagged",
  icon: "./icon-16.png",
  onClick: function() {
    tabs.activeTab.attach({
      contentScriptFile: hideComments
    })
  }
})