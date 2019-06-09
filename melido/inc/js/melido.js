//move the target click higher than anchor tag
var links =["home","music","videos","photos","bio","press","contact"];
for(i=0;i<links.length;i++){
	var target='a[href="#'+links[i]+'"]';
	$(target).on('click',function(e){
  // prevent normal scrolling action
  e.preventDefault();
  // grab the target url from the anchor's ``href``
  var target = $(this.hash);
  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
     if (target.length) {
           window.scrollTo(0, target.offset().top - 50); // <-- our offset in px adjust as necessary
      return false;
  }
});	
}

// toggle active state on navigation
$(".nav-item .nav-link").on("click", function(){
   $(".nav-item").find(".active").removeClass("active");
   $(this).addClass("active");
});




