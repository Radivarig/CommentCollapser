var elements = document.getElementsByClassName("UFIComment")
for (var i = 0; i < elements.length; i++) {
	//self.port.emit("gotElement", elements[i])
	//console.log(elements[i].innerHTML)
	//elements[i].parentNode.removeChild(elements[i])
	elements[i].setAttribute("style", "border: solid red 1px;")
}

var elements = document.getElementsByClassName("profileLink")
for (var i = 0; i < elements.length; i++) {
	//self.port.emit("gotElement", elements[i])
	//console.log(elements[i].innerHTML)
	//elements[i].parentNode.removeChild(elements[i])
	elements[i].setAttribute("style", "border: solid blue 3px;")
}
