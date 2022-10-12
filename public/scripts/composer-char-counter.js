$(document).ready(function() {
  let max = 140;

    $('.new-tweet textarea').on('keydown', function() {
      const remainingChars = max - $(this).val().length;
      const chars = $(this).siblings('.counter');

      chars.text(remainingChars);

      if (remainingChars < 0 ) {
        chars.css("color", "red");
      } else {
        chars.css("color", "black");
      }

    })

});