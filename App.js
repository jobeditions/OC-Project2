
$('.selected li').on('click',function(){
	$(this).toggleClass('new');
});

$('.selector').on('click',function(){
	$(this).toggleClass('new-hobbies');
	$('footer').addClass('new-footer');
	//$( ".new-footer" ).fadeOut( "slow", function() {
    // Animation complete.
  //});
});


