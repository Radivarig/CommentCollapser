var data = require("sdk/self").data
var pageMod = require("sdk/page-mod")

pageMod.PageMod({
  include: "*.facebook.com"
  ,attachTo: 'top'
  ,contentScriptFile: data.url("collapse-comments.js")
})