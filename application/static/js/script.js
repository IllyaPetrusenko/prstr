$(document).ready(function() {
  $('.carousel-card:first-of-type').addClass('active');

  setInterval(function() {
    var activeCard = $('.carousel-card.active');
    var nextCard = activeCard.next();

    if (nextCard.length === 0) {
      nextCard = $('.carousel-card:first-of-type');
    }

    activeCard.removeClass('active');
    nextCard.addClass('active');
  }, 3000);
});