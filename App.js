

$('.selected li').on('click', function () {
       
        if ($(this).hasClass('new')){
            $(this).removeClass('new');
            $(this).addClass('reverse');
        } else {
        	$(this).removeClass('reverse');
            $(this).addClass('new');
        }
    });

$('.selector').on('click', function () {
       
        if ($(this).hasClass('new-hobbies')){
            $(this).removeClass('new-hobbies');
            $(this).addClass('reverse-hobbies');
        } else {
        	$(this).removeClass('reverse-hobbies');
            $(this).addClass('new-hobbies');
        }
    });

$('.photo').on('click', function () {
$(this).toggleClass('nodisplay-photo');
});

function typeEffect(element, speed) {
	var text = $(element).text();
	$(element).html('');
	
	var i = 0;
	var timer = setInterval(function() {
					if (i < text.length) {
						$(element).append(text.charAt(i));
						i++;
					} else {
						clearInterval(timer);
					}
				}, speed);
}


$( document ).ready(function() {
  var speed = 75;
  var delay = $('h1.name').text().length * speed + speed;
  
  typeEffect($('h1.name'), speed);
  setTimeout(function(){
    $('h2.name-1').css('display','inline-block');
    typeEffect($('h2.name-1'), speed);
  }, delay);
  setTimeout(function(){
    $('p.name-2').css('display', 'inline-block');
    typeEffect($('p.name-2'), speed);
  }, delay);
});

