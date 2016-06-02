function bringPageForward(slide) {
  if($(slide).attr('data-background-iframe')) {
    $('.reveal > .backgrounds').css('z-index', 1);
  } else {
    $('.reveal > .backgrounds').css('z-index', 0);
  }
}

Reveal.addEventListener('ready', function(event) {
  bringPageForward(event.currentSlide);
});

Reveal.addEventListener('slidechanged', function(event) {
  bringPageForward(event.currentSlide);
});
