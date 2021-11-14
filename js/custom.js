$(function () {

    $('.intro_txt').hide();

    $( ".intro_txt" ).delay( 2000 ).slideDown( 1500 );

    setTimeout(function () {
        $('.intro_1').fadeOut();
    }, 2000);

    $('.toggle_icon').on('click', function() {
        $('.side_menu').toggleClass('toggle_menu');
    });

    $('.close_icon').on('click', function() {
        $(this).parent().removeClass('toggle_menu');
    });

});

