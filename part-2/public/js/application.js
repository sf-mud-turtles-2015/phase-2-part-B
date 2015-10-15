$( document ).ready(function() {
  $('.button_anchor').on('click', function(event) {
    event.preventDefault();
    $(this).css("display", "none")
    console.log( "I got clicked!" );
    $.ajax ({
      url: '/posts/new',
      type: 'GET'
    }).done(function(response) {
      // $('.float_wrapper').append($(data).find('#post_form_container').css("display", "inline")
    });
  });

  $('#post_form').on('submit', function(event) {
    event.preventDefault();
    var data = $(this).serialize();
    $.ajax ({
      url: $(this).attr('action'),
      type: 'post',
      data: data
    }).done(function(response) {
      $('.float_wrapper').append(response)
      // $('#the_list_of_posts').append(response)

    });
  });

  //$('#post_form_container').css("display", "none")
  //$('#sidebar').css("display", "inline")
});
