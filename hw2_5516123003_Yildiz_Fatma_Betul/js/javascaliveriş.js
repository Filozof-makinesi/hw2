function divYap_Test() {
  var node = document.createElement("LI");
  var textnode = document.createTextNode(text);
  node.appendChild(textnode);
  document.getElementById("myList").appendChild(node);
}

function myFunction() {
  var list = document.getElementById("myList");
  list.removeChild(list.childNodes[0]);
}
function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}

function konuEkle()
{
	var yeniH3 = document.createElement("H3");
	var yeniP = document.createElement("P");
	
	yeniH3.innerHTML = document.getElementById("ornekBaslik").value;
	yeniP.innerHTML = document.getElementById("ornekIcerik").value;
	
	yeniH3.style.borderBottom = "solid 2px black";
	yeniP.style.wordSpacing = "5px";
	
	var konuCerc = document.getElementById("ornekDiv");
	
	konuCerc.appendChild(yeniH3);	
	konuCerc.appendChild(yeniP);
}

function konuSil()
{
   var el = document.getElementById("ornek").value;
   el.ignoreCase
   el.parentNode.removeChild(el);

}