//TODO remove comments of removed comment

var css = 'a.profileLink { animation: profilelinkanim; } @keyframes profilelinkanim {} }'
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
