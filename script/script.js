// $(document).ready(function(){

// })

$('ul.tabs li').click(function () {
	var tab_id = $(this).attr('data-tab');

	$('ul.tabs li').removeClass('current');
	$('.tab-content').removeClass('current');

	$(this).addClass('current');
	$("#" + tab_id).addClass('current');
})

$('.item').bind('touchstart mousedown', function () {
	var item_id = $(this).attr('id');
	$("#" + item_id).addClass('active');
})

$('.item').bind('touchend mouseup', function () {
	var item_id = $(this).attr('id');
	$("#" + item_id).removeClass('active');
})