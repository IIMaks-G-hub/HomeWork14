let main_picture = 0;
$('.main_picture').slick({
    slidesToScroll: 1,
    autoplaySpeed: 1000,
    slidesToShow: 3,
    arrows: true,
}

);
$(function() {
    function log( text ) {
    $('#log').text( $('#log').text() + "\n" + text )  
  }
  function evLeft() {
    console.log('event left')
  }
  function evRight() {
    console.log('event right')  
  }
    $(window).on('keydown' , function( e ) {
    switch( e.keyCode ) {
        case 37:
        evLeft();
        break;
      case 39:
        evRight();
        break;
    }
  })
  $('.left').on('click' , evLeft )
  $('.right').on('click' , evRight )
})