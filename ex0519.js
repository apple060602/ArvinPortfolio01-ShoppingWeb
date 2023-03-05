
mylist();

function mylist()
{
	var fruits=['Apple','Banana','Orange'];
	var len=fruits.length;
	//console.log('len='+len);
	var mystr="";
	for (var i=0;i<len;i++) {
		mystr += "<li>"+fruits[i]+"</li>";
	}
	//console.log(mystr);
	document.getElementById("list").innerHTML=mystr;

	fruits.push('pear');
	len=fruits.length;
	for (var i=0;i<len;i++) {
		var myli=document.createElement("li");
		myli.textContent=fruits[i];
		document.getElementById("list2").appendChild(myli);
	}
}

mytable();
function mytable()
{
	var books={title:"JavaScript",price:500,stock:3};
	//console.log(books.title);

	books.total=books.price*books.stock;

	var mystr="";
	for (var x in books) {
		//console.log(x + "," + books[x]);
		mystr += "<td>" + books[x] + "</td>";
	}
	//console.log(mystr);
	document.getElementById("mytr").innerHTML=mystr;

	var book2={
		title:"PHP",
		price:600,
		stock:8,
		total: function () {
			return this.price * this.stock;
		}
	}
	//console.log(book2.total());
	mystr="";
	for (var x in book2) {
		if (x != "total") {
			//console.log(x + "," + book2[x]);
			mystr += "<td>" + book2[x] + "</td>";
		} else {
			mystr += "<td>" + book2[x]() + "</td>";
		}		
	}
	//console.log(mystr);
	document.getElementById("mytr2").innerHTML=mystr;
}

var myindex=1;
plusSlides(0);
function plusSlides(n) {
	var i;
	var slides=document.getElementsByClassName("myslides");
	var len=slides.length;
	console.log(slides.length);
	for (i=0;i<len;i++) {
		slides[i].style.display = 'none';
	}
	myindex = myindex + n;
	if (myindex > len) myindex=1;
	if (myindex < 1) myindex=len;
	slides[myindex-1].style.display = 'block';
}

setTimeout(autoSlides, 4000);

function autoSlides() {
	var i;
	var slides=document.getElementsByClassName("myslides");
	var len=slides.length;
	//console.log(slides.length);
	for (i=0;i<len;i++) {
		slides[i].style.display = 'none';
	}
	myindex = myindex + 1;
	if (myindex > len) myindex=1;
	if (myindex < 1) myindex=len;
	slides[myindex-1].style.display = 'block';
	setTimeout(autoSlides, 4000);
}

//recalc();
setInterval(recalc, 1000);

function recalc() {
	var now=new Date();
	//console.log('now=' + now);
	var goal=new Date(2021,5,14,0,0,0);
	//console.log('goal=' + goal);
	var rest=goal.getTime()-now.getTime();
	//console.log('rest='+rest);
	var sec=Math.floor((rest/1000) % 60);
	var min=Math.floor((rest/1000/60) % 60);
	var hour=Math.floor((rest/1000/60/60) % 24);
	var day=Math.floor((rest/1000/60/60/24));
	var count=[day,hour,min,sec];
	//console.log(count);
	var time=count[0]+"天"+count[1]+" 小時 "+count[2]+" 分 "+count[3]+" 秒 ";
	document.getElementById("timer").innerHTML=time;
}

function ftemp()
{	
	document.getElementById("f1").value="";
	temp=document.getElementById("c1").value;
	if (isNaN(temp) || temp=="") {		
		document.getElementById("myalert").style.display = 'block';
		document.getElementById("c1").focus();
		return;
	}
	console.log(temp);
	var f=temp*(9/5)+32;
	console.log(f.toFixed(2));
	temp2=document.querySelector("#f1");
	temp2.value=f.toFixed(2);	
}