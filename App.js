

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
