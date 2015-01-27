var data = require("sdk/self").data
var pageMod = require("sdk/page-mod")
var buttons = require('sdk/ui/button/action')
var tabs = require('sdk/tabs')

pageMod.PageMod({
  include: "*.facebook.com"
  ,attachTo: 'top'
  ,contentScriptFile: data.url("collapse-comments.js")
})

require("sdk/ui/button/action").ActionButton({
  id: "hide-collapsed"
  ,label: "Hide all collapsed facebook comments."
  ,icon: "./icon-64.png"
  ,onClick: function() {
    tabs.activeTab.attach({
      contentScriptFile: data.url("hide-collapsed.js")
    })
  }
})