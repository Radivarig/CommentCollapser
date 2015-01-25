var buttons = require('sdk/ui/button/action')
var tabs = require('sdk/tabs')
var data = require("sdk/self").data
var pageMod = require("page-mod")

var hideComments = data.url("hide-comments.js")

pageMod.PageMod({
  include: "*.facebook.com"
  ,attachTo: 'top'
  ,contentScriptFile: hideComments
})

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