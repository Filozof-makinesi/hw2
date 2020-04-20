
 
function divYap_Test() {
  var node = document.createElement("LI");
  var textnode = document.createTextNode("Water");
  node.appendChild(textnode);
  document.getElementById("myList").appendChild(node);
}

function myFunction() {
  var list = document.getElementById("myList");
  list.removeChild(list.childNodes[0]);
}

