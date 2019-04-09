$(window).on("load", function(){
$(".loader .inner").fadeOut(760,function(){
$(".loader").fadeOut(820);
});

$(".items").isotope({
	filter: '*',
	animationOptions:{
		duration:1500,
		easing:'linear',
		queue:false
	}
});

})

$(document).ready(function() {

	$('#slides').superslides({
		animation: 'fade',
		play: 5000,
		pagination: false
	});

	var typed = new Typed(".typed", {
		strings: ["Front end Web Dev.", "Designer.", "Creator."],
		typeSpeed: 70,
		loop: true,
		startDelay: 1000,
		showCursor: false
	});

	$('.owl-carousel').owlCarousel({
	    loop:true,
	    items: 4,
	    responsive:{
	        0:{
	            items:1
	        },
	        480:{
	            items:2
	        },
	        768:{
	            items:3
	        },
	        938:{
	            items:4
	        }
	    }
	});



//Letting the animation flow when rotated on

	var skillsTopOffset = $(".skillSection").offset().top;
	var statsTopOffset = $(".statsSection").offset().top;
    var countUpFinished = false;
	$(window).scroll(function() {

		if(window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
  
			// Pie chart animation and customization
			$('.chart').easyPieChart({
		        easing: 'easeInOut',
		        barColor: '#fff',
		        trackColor: false,
		        scaleColor: false,
		        lineWidth: 4,
		        size: 152,
		        onStep: function(from, to, percent) {
		        	$(this.el).find('.percent').text(Math.round(percent));
		        }
		    });

		}
		//WHen loaded to let the numbers count from 0 to the number that is set on the page
		if(!countUpFinished && window.pageYOffset > statsTopOffset - $(window).height() + 200) {
			$(".counter").each(function() {
				var element = $(this);
				var endVal = parseInt(element.text());

				element.countup(endVal);
			})

			countUpFinished = true;

		}
	
	
		});
	
		//Fancy box plug-in and customization
		
		$("[data-fancybox]").fancybox();
	
	$("#filters a").click(function(){
		//Toggling between the navbar and moving the classes
		$("#filters .current").removeClass("current");
		$(this).addClass("current");

		var selector = $(this).attr("data-filter");

		$(".items").isotope({
			filter: selector,
			animationOptions:{
				duration:1500,
				easing:'linear',
				queue:false
				}
			});
		return false;
	  	})
	  
		  // Smooth slide when clicked on the navbar items
		  $("#navigation a").click(function(e) {
			e.preventDefault();
	
			var targetElement = $(this).attr("href");
			var targetPosition = $(targetElement).offset().top;
			$("html, body").animate({ scrollTop: targetPosition - 50 }, "slow");
	
		});
		
		//Customization of the nav, and making it smooth when it's fixed
		  const nav = $("#navigation");
		  const navTop = nav.offset().top;

		  $(window).on("scroll", stickyNavigation);

		  function stickyNavigation(){
			  var body = $("body");

			  if($(window).scrollTop() >= navTop){
				  body.css("padding-top", nav.outerHeight() + "px");
				  body.addClass("fixedNav");
			  }
			  else{
				body.css("padding-top", 0);
				  body.removeClass("fixedNav");
			  }
		  }

	});
	
















