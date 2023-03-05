var close=document.getElementsByClassName("close");

function newElement() {
	//console.log("click");
	var li=document.createElement("li");
	var myInput=document.getElementById("myInput");
	var val=myInput.value;
	//console.log(val);
	var valNode=document.createTextNode(val);
	li.appendChild(valNode);
	//<li>val</li>

	if (val==='') {
		return;
	} 	

	var span=document.createElement("SPAN");
	var spanTxt=document.createTextNode("\u00D7");
	span.className="close";
	span.appendChild(spanTxt);
	//<span class='close'>X</span>
	li.appendChild(span);
	//<li>val<span class='close'>x</span></li>

	document.getElementById("myUL").appendChild(li);
	myInput.value="";

	for (var i=0;i<close.length;i++) {
		close[i].onclick=function() {
			var div=this.parentElement;
			div.style.display = 'none';
		}
	}
}