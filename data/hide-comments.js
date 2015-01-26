var css = 'a.profileLink { animation: profilelinkanim; } @keyframes profilelinkanim { } \
.UFIDetected:not(:hover) { overflow: hidden; height: 1px; }'
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
	    if ( hasClass (p, "UFIComment")){
	    	//p.style.display = "none"
	      p.className += " UFIDetected"

	      if (p.nextElementSibling.tagName === "UL"){
	    		//p.nextElementSibling.style.display = "none"
	      	p.appendChild(p.nextElementSibling)
	      }
	    	break
	    }
	    p = p.parentNode
	  }
	}
}

var profileLinks = document.getElementsByClassName("profileLink")
  for(var i = 0; i < profileLinks.length; ++i)
    HideCommentOfProfileLink(profileLinks[i])

var cb = function(event){
	if (event.animationName === 'profilelinkanim')
		HideCommentOfProfileLink(event.target)
}
document.body.addEventListener('animationstart', cb, false)
