$( document ).ready(function() {
  $('.button_anchor').on('click', function(event) {
    event.preventDefault();
    $(this).css("display", "none")
        console.log( "I got clicked!" );
      $.ajax ({
        url: '/posts/new',
        type: 'GET'
      }).done(function(data) {
        $('.float_wrapper').append($(data).find('#post_form_container').css "display", "inline")
      });
  })


$('#post_form_container').on('submit', function(event) {
    event.preventDefault();
      $.ajax ({
        url: '/posts',
        type: 'post'
      }).done(function(data) {
        $('.float_wrapper').append(data)
      });
  });
    $('#post_form_container').css("display", "none")
    $('#sidebar').css("display", "inline")
});
