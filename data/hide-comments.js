//TODO remove comments of removed comment

/*var l = document.createElement("style")
l.setAttribute("rel", "stylesheet")
l.setAttribute("type", "text/css")
l.setAttribute("href", chrome://url/to/anims.css) //TODO setup chrome.manifest
document.getElementsByTagName("head")[0].appendChild(l)*/

var css = 'a.profileLink { color: #333;	background-color: #0c0;	animation: profilelinkanim 1s ease 3; } @keyframes profilelinkanim { 50% { opacity: 0; } }'
var head = document.head
var style = document.createElement('style')
style.type = 'text/css'
style.appendChild(document.createTextNode(css))
head.appendChild(style)

var hasClass = function(element, cls){
  return (' ' +element.className +' ').indexOf(' ' +cls +' ') > -1
}

var HideCommentOfProfileLink = function(p){
	if (hasClass (p.parentNode, "UFICommentBody")){
	  p = p.parentNode.parentNode
	  while (p) {
	    if ( hasClass (p, "UFIComment") && p.style.display != "none")
	      p.style.display = "none"
	    p = p.parentNode
	  }
	}
}

var HideComments = function(){
  var profileLinks = document.getElementsByClassName("profileLink")
  for(var i = 0; i < profileLinks.length; ++i)
    HideCommentOfProfileLink(profileLinks[i])
}

var cb = function(event){
	if (event.animationName === 'profilelinkanim')
		HideCommentOfProfileLink(event.target)
}
document.body.addEventListener('animationstart', cb, false)

/*
var observer = new MutationObserver( cb )

var target = document.body
var config = {
	childList: true
	,attributes: true
	,subtree: true
	,attributeFilter: ["UFIList"]
}

observer.observe(target, config)
//observer.disconnect()*/