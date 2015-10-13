$(document).ready(function(){
  $('.button_anchor').on('click', function(event){
      event.preventDefault();
      $('#new_post_link').css('display', 'none');
      $('.sidebar.right').append('<form id="post_form"></form>');
        $('#post_form')
          .attr("action", "/posts")
          .attr("method", "post")
          .append('<label for="title">Title:</label><br>')
          .append('<input type="text" class="post_title" name="post[title]"><br>')
          .append('<label for="author_name">Author Name:</label><br>')
          .append('<input type="text" class="post_author_name" name="post[author_name]"><br>')
          .append('<label for="body">Body:</label><br>')
          .append('<textarea class="textarea_body" name="post[body]"></textarea><br>')
          .append('<input type="submit" class="submit_button" name="submit" value="Submit Post"><br>')
  });

  $('body').on('submit', '#post_form', function(event) {
    event.preventDefault();
    var title = $('.post_title').val();
    var author_name = $('.post_author_name').val();
    var body = $('.textarea_body').val();
    var t_url = '/posts';

    $.ajax({
      url: t_url,
      type: 'POST',
      data: { title, author_name, body },
      dataType: "html"
    }).done(function(response){
      html = $.parseHTML(response)
      $("#posts").prepend(html);
    });

    $("#post_form").remove();
    $('#new_post_link').css('display', 'block');
  });
});
