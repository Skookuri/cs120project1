function myFunction() {
	var x = document.getElementById("myNav");
    if (x.className === "navbar") {
		x.className += " responsive";
	} else {
		x.className = "navbar";
	}
}

$("i").click(function(){
	$(".logo").toggle();
});
