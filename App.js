//Declaring the variables for the function typeEffect
    var speed = 125;
    var delay = $('h1.name').text().length * speed + speed;

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


// Contact -Section - Toggling the CSS classes conditionally

$('.selected li').on('click', function () {
       
        if ($(this).hasClass('new')){
            $(this).removeClass('new');
            $(this).addClass('reverse');
        } else {
        	$(this).removeClass('reverse');
            $(this).addClass('new');
        }
    });

// Hobbies -Section - Toggling the CSS classes conditionally

$('.selector').on('click', function () {
       
        if ($(this).hasClass('new-hobbies')){
            $(this).removeClass('new-hobbies');
            $(this).addClass('reverse-hobbies');
        } else {
        	$(this).removeClass('reverse-hobbies');
            $(this).addClass('new-hobbies');
        }
    });

// Profile -Section 

 $('.header').on('click', function () {
   $('.photo').toggleClass('nodisplay-photo');
 });

// Self -Section 

  typeEffect($('h1.name'), speed);
  setTimeout(function(){
    $('h2.name-1').css('display','inline-block');
    typeEffect($('h2.name-1'), speed);
  }, delay);
  setTimeout(function(){
    $('p.name-2').css('display', 'inline-block');
    typeEffect($('p.name-2'), speed);
  }, delay);

  $('.photo').on('click', function () {
$(this).toggleClass('nodisplay-photo');
});

