// Generated by CoffeeScript 1.6.3
(function() {
  console.log('\'Allo \'Allo!');

  $(function() {
    var addOne, animation;
    animation = function() {
      var count, oldCards;
      $('.last .card').addClass('tada');
      setTimeout(function() {
        return $('.last .card').removeClass('tada');
      }, 2000);
      oldCards = $('.card-list-container .card');
      count = oldCards.length;
      return $('.card-list-container .card').each(function(index, item) {
        if (count - index > 10) {
          return;
        }
        return setTimeout(function() {
          $(item).addClass('animated flipInX');
          return setTimeout(function() {
            return $(item).removeClass('animated flipInX');
          }, 1000);
        }, (count - index) * 150 + 500);
      });
    };
    addOne = function() {
      var count, oldCards;
      oldCards = $('.card-list-container .card');
      count = oldCards.length;
      $('.card-list-container .card').each(function(index, item) {
        if (count - index > 10) {
          return;
        }
        return setTimeout(function() {
          $(item).addClass('animated flipInX');
          return setTimeout(function() {
            return $(item).removeClass('animated flipInX');
          }, 1000);
        }, (count - index) * 150 + 500);
      });
      $('.last .card').addClass('animated lightSpeedIn');
      return setTimeout(function() {
        return $('.last .card').removeClass('animated lightSpeedIn');
      }, 2000);
    };
    return setInterval(function() {
      return addOne();
    }, 3000);
  });

}).call(this);
