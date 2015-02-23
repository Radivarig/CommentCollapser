var hasClass = function(element, cls){
  return (' ' +element.className +' ').indexOf(' ' +cls +' ') > -1
}

var HideCommentOfProfileLink = function(p){
	if (hasClass (p.parentNode, "UFICommentBody")){
	  p = p.parentNode.parentNode
	  while (p) {
	    if ( hasClass (p, "UFIComment") && !hasClass(p.parentNode, "UFIReplyList") ){
	      p.className += " UFIDetected"

	      if (p.nextElementSibling.tagName === "UL"){
	      	p.appendChild(p.nextElementSibling)
	      }
	    	break
	    }
	    p = p.parentNode
	  }
	}
}

var cb = function(event){
	if (event.animationName === 'profilelinkanim')
		HideCommentOfProfileLink(event.target)
}
document.body.addEventListener('animationstart', cb, false)
