function hasClass(element, cls){
	return (' ' +element.className +' ').indexOf(' ' +cls +' ') > -1
}
var cnt = 0
var profileLinks = document.getElementsByClassName("profileLink")
for(var i = 0; i < profileLinks.length; ++i){
	var p = profileLinks[i]
	if (hasClass (p.parentNode, "UFICommentBody")){
	    p = p.parentNode.parentNode
		while (p) {
	    if ( hasClass (p, "UFIComment") && p.style.display != "none"){
	    	p.style.display = "none"
	    	//p.setAttribute("style", "display: none;")
	    	cnt += 1
	    }
	    p = p.parentNode
		}
	}
}
console.error("@@@ nuked ", +cnt + " noobs.")
