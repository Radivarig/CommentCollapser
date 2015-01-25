var data = require("sdk/self").data
var pageMod = require("page-mod")

pageMod.PageMod({
  include: "*.facebook.com"
  ,attachTo: 'top'
  ,contentScriptFile: data.url("hide-comments.js")
})