function hasClass(element, cls){
	return (' ' +element.className +' ').indexOf(' ' +cls +' ') > -1
}
var profileLinks = document.getElementsByClassName("profileLink")
for(var i = 0; i < profileLinks.length; ++i){
	var p = profileLinks[i]
	if (hasClass (p.parentNode, "UFICommentBody")){
	    p = p.parentNode.parentNode
		while (p) {
	    if ( hasClass (p, "UFIComment"))
				 p.setAttribute("style", "border: solid red 3px;")
	    p = p.parentNode
		}
	}
}
