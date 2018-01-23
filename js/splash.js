function fadeSplash() {
    setTimeout(function() {
      $('body').fadeOut(1000, function() {
        window.location.href = 'views/pizza-love.html';
      });
    }, 2000);
}
