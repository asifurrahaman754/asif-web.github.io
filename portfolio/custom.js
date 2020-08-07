//greetings
/*var date = new Date();
var Hours = date.getHours();
var greeting;

if(Hours > 18){
	greeting = "Good evening!";
}else if(Hours > 12){
	greeting = "Good afternoon!";
}else if(Hours > 0){
	greeting = "Good morning!";
}else{
	greeting = "Welcome!";
}*/
//document.querySelector(".greetings").textContent = greeting;

	//responsie nav
function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}

//img modal

	function openModal() {
	  document.getElementById('myModal').style.display = "block";
	}

	function closeModal() {
	  document.getElementById('myModal').style.display = "none";
	}

	var slideIndex = 1;
	showDivs(slideIndex);

	function plusModal(n) {
	  showDivs(slideIndex += n);
	}

	function currentDiv(n) {
	  showDivs(slideIndex = n);
	}

	function showDivs(n) {
	  var i;
	  var x = document.getElementsByClassName("myModalImg");
	  var dots = document.getElementsByClassName("demo");
	  var captionText = document.getElementById("caption");
	  if (n > x.length) {slideIndex = 1}
	  if (n < 1) {slideIndex = x.length}
	  for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	  }
	  for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
	  }
	  x[slideIndex-1].style.display = "block";
	  dots[slideIndex-1].className += " w3-opacity-off";
	  captionText.innerHTML = dots[slideIndex-1].alt;
	}	
	
	//carousel 1
	$(function(){
    $("#customer-testimonial").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        look:true,
        autoPlayHoverPause: true
    });
});

//carousel 2
	$(function(){
    $("#services-block").owlCarousel({
       
		responsive : {
    0 : {
        items : 1,
    },
    480 : {
        items : 1,
    },
    800 : {
        items : 2,
    },
	860 : {
        items : 3,
		dots:false,
		
    }
	
}
    });
});

//loader

	$(window).on('load',function(){
		
		$(".loader-wrapper").fadeOut("slow");
	});

