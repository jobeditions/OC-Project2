//Declaring the variables for the function typeEffect
    var speed = 125;
    var delay = $('h1.name').text().length * speed + speed;
    var $newdiv1 = $( "<div class='profile'></div>");

//Declaring the the function typeEffect

function typeEffect(element, speed) {
	var text = $(element).text();
	$(element).html('');

	var i = 0;
	var timer = setInterval(function() {
					if (i < text.length) {
						$(element).append(text.charAt(i));
						//writing charecters one after another
						i++;
					} else {
						clearInterval(timer);
					}
				}, speed);
}

/*function typeBold(element, speed) {
  var text = $(element).text();
  $(element).html(text);

  var i = 0;
  var timer = setInterval(function() {
          if (i < text.length) {

            text.charAt(i).css('font-weight','bold !important');
           // changing charecters to bold one after another
            i++;
          } else {
            clearInterval(timer);
          }
        }, speed);
}
*/

// Contact -Section - Toggling the CSS classes conditionally

$('.selected li').on('click', function () {

        if ($(this).hasClass('contact-new')){
            $(this).removeClass('contact-new');
            $(this).addClass('contact-reverse');
        } else {
        	$(this).removeClass('contact-reverse');
            $(this).addClass('contact-new');
        }
    });

// Hobbies -Section - Toggling the CSS classes conditionally

$('.selector').on('click', function () {

        if ($(this).hasClass('hobbies-new')){
            $(this).removeClass('hobbies-new');
            $(this).addClass('hobbies-reverse');
            if(!$(".swim").hasClass('hobbies-new') && !$(".cycling").hasClass('hobbies-new') && !$(".table-tennis").hasClass('hobbies-new')){
            $('.block-hobbies').removeClass('hobbies-footer').css('transition', '.5s');
          }
        } else {
        	  $(this).removeClass('hobbies-reverse');
            $(this).addClass('hobbies-new');
            $('.block-hobbies').addClass('hobbies-footer');
        }
    });



// Profile -Section

 $('.header').on('click', function () {
   $('.photo').toggleClass('nodisplay-photo');
 });

// Self -Section
  $('h1.name').css('display','inline-block');
  typeEffect($('h1.name'), speed);
  setTimeout(function(){
    $('h2.name-1').css('display','inline-block');
    typeEffect($('h2.name-1'), speed);
  }, delay);
  setTimeout(function(){
    $('p.name-2').css('display', 'inline-block');
    typeEffect($('p.name-2'), speed);
  }, delay);


  window.addEventListener('load',function () {
      var content = '';
      $("header").prepend('<div class="profile"></div>');
      for (var i = 0; i < 270; i++) {
       content += "<span></span>" ;
       }
      $(".profile").wrapInner(content);
      });


$('.avatar').on('click', function () {
  $(this).toggleClass('avtoggle');
});

$('.left-banner').on('click', function () {
  $('.display-nav').toggleClass('display-navbar');
});
