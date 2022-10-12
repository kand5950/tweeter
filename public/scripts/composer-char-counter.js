$(document).ready(function() {
 
    $('.new-tweet textarea').on('keyup', function() {
      console.log($(this).val());
    })

});