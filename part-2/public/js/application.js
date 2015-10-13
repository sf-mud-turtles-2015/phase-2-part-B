$(document).ready(function() {

  $("#new_post_link").on('click', function(event){
      event.preventDefault();

      var url =$(this).attr('href')

      $.ajax({
        url: url

      }).done(function(response){
        $("#new_post_link").css('display', 'none')
        // $("#posts").css('display', 'none')
        $('#sidebar').append(response)
      })
  });

  $('body').on('submit', 'form', function(event){
    event.preventDefault();

    var url = $(this).attr("action")
    var data = $("form").serialize('article')

    $.ajax({
      url: url,
      data: data,
      type: 'post'

    }).done(function(response){
      // $("#posts").css('display', 'block')
      $("#posts").prepend(response)
      $("#new_post_link").css('display', 'block')
      $("#post_form").remove()
    })
  })

















})
