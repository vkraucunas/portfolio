$(document).ready(function() {
  $('.excessive').each(function(){
    $(this).hide();
    $(this).removeClass('hidden');
  })

  $('h3').on('click', function() {
      $(this).closest('div').find('.excessive').slideToggle('slow');
  })
})