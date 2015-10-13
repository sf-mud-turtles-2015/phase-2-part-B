$(document).ready(function() {
  $('#post_form').hide();
  $('#new_post_link').on('click', function(event) {
    event.preventDefault();
    $('#post_form').toggle();
    $('.button_anchor').hide();
    // $.ajax({
    //   url: '/posts/new',
    //   method: 'get'
    // })
    // .done(function(response) {
    //   console.log(response);
    //   $('body').append(response);
    // })
  })
  $('form').on('submit', function(event) {
    event.preventDefault();
    var data = $(this).serialize();
    $('#post_form').hide()
    $.ajax({
      method: "post",
      url: "/posts",
      data: data
    })
    .done(function(response) {
      var post = JSON.parse(response);
      console.log(post)
      var new_post = '<article class="post">'
      new_post += '<h1>' + post.title + '</h1>'
      new_post += '<p class="post_details">Written by ' + post.author_name + ' on ' + post.time + '</p>'
      new_post += '<p class="post_body">' + post.body + '</p>'
      new_post += '</article>'
      // $('.post').first().prepend(new_post)
      if ($('.post').length === 0) {
        $('#posts').append(new_post)
      } else {
        $('#posts').first().prepend(new_post);
      }
    })
    $('.button_anchor').show()
  })
})
