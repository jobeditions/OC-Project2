
$('.selected li').on('click', function () {
       
        if ($(this).hasClass('new')){
            $(this).removeClass('new');
            $(this).addClass('reverse');
        } else {
            $(this).addClass('new');
        }
    });

$('.selector').on('click', function () {
       
        if ($(this).hasClass('new-hobbies')){
            $(this).removeClass('new-hobbies');
            $(this).addClass('reverse-hobbies');
        } else {
            $(this).addClass('new-hobbies');
        }
    });

//$('.selector').on('click',function(){
//$(this).toggleClass('new-hobbies');
	//$('footer').addClass('new-footer');
	//if($(this).hasClass('new-hobbies')){
	//$(this).addClass('reverse-footer')	
	
	//}
	
//});


