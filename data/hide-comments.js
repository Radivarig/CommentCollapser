self.port.on("getElements", function() {
	var tag = "div" //"UFIComment"
	var elements = document.getElementsByTagName(tag)
	for (var i = 0; i < elements.length; i++) {
		//self.port.emit("gotElement", elements[i])
		//console.log(elements[i].innerHTML)
		//elements[i].parentNode.removeChild(elements[i])
		elements[i].setAttribute("style", "border: solid red 1px;")
	}
})