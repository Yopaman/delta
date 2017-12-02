var k = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65],
n = 0;
$(document).keydown(function (e) {
    if (e.keyCode === k[n++]) {
        if (n === k.length) {
            var tetrisMusic = $('<audio></audio>').attr({
              autoplay: 'autoplay',
              src: 'tetris.mp3'
            });
            $('body').append(tetrisMusic);
            $('#accueil').css({
              backgroundImage: 'url(img/giphy.gif)',
              backgroundSize: 'cover',
              color: 'white'
            });
            n = 0;
            return false;
        }
    }
    else {
        n = 0;
    }
});

$('#down-arrow').on('click', function() {
  var page = $(this).attr('href');
  $('html, body').animate( { scrollTop: $(page).offset().top }, 750);
  return false;
});
