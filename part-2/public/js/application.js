$(document).ready(function() {
  // Show form on click, hide "share your thoughts" link
  $('#new_post_link').click(function(event) {
    event.preventDefault();
    $(this).hide();
    $.ajax({
      method: 'get',
      url: '/posts/new'
    })
    .done(function(response) {
      var the_form = response;
      $('section#sidebar').append(the_form);
    })
  });
  // On form submit, hide form and show post content; reveal 'share your thoughts' link
  $('body').on('submit', '#post_form', function(event) {
    event.preventDefault();
    $.ajax({
      method: 'post',
      url: '/posts',
      data: $(this).serialize()
    })
    .done(function(response) {
      console.log(response)
      $('#post_form_container').remove();
      $('section#posts.left.content').prepend(response);
      $('#new_post_link').show();
    })
  })
})
