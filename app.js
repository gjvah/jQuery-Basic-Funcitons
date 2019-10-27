$(document).ready(function() {
	$('button.click').click(function() {
		alert('You have clicked a button!');
	});
	$('button.hide').click(function() {
		$('#hide p').hide('slow');
	});
	$('button.show').click(function() {
		$('#show .hiddenShow').show('slow');
	});
	$('button.toggle').click(function() {
		$('#toggle p').toggle('slow');
	});
	$('button.slideDown').click(function() {
		if ($('.slideDownHidden').first().is(':hidden')) {
			$('.slideDownHidden').slideDown('slow');
		} else {
			$('.slideDownHidden').hide();
		}
	});
	$('button.slideUp').click(function() {
		if ($('#slideUp p').first().is(':hidden')) {
			$('#slideUp p').show('slow');
		} else {
			$('#slideUp p').slideUp();
		}
	});
	$('button.slideToggle').click(function() {
		$('#slideToggle p').slideToggle('slow');
	});
	$('button.fadeIn').click(function() {
		$('#fadeIn .hiddenFadeIn').fadeIn(1000);

		return false;
	});
	$('button.fadeOut').click(function() {
		$('#fadeOut p').fadeOut('slow');
	});
	$('button.addClass').click(function() {
		$('#addClass p').addClass('bg-new-color');
	});
	$('button.before').click(function() {
		$('#before').before(document.createTextNode('Hello'));
	});
	$('button.after').click(function() {
		$('#after p').after(document.createTextNode('Hello'));
	});
	$('button.append').click(function() {
		$('#append p').append(document.createTextNode('Hello'));
	});
	$('button.html').click(function() {
		$('#html p').html("<span class='red'>Hello <b>Again</b></span>");
	});
	$('button.val').click(function() {
		var text = $(this).text();
		$('input').val(text);
	});
	$('button.text').click(function() {
		$('#text p').text('Changed Text');
	});
	$('button').before('<button class="reload"></button>');
	$('button.reload').click(function() {
		location.reload();
	});
});
