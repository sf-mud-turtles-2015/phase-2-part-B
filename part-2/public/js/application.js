$(document).ready(function(){
  $('#post_form').hide();

  $('#new_post_link').on('click', function(friedChicken){
    friedChicken.preventDefault();
    $(this).hide()
    $('#post_form').show()
  })

  $('#post_form').on('submit', function(a){
    a.preventDefault();
    var data = $('input, textarea').serialize();

    var newTitle = $("input[name='post[title]']").val()
    var newAuthorName = $("input[name='post[author_name]']").val()
    var newBody = $("textarea[name='post[body]']").val()


    $.ajax({
      method: 'post',
      url: '/posts',
      data: data
    })

    .done(function(response){
      if (response.message === 'OK'){
        var writtenBy = 'Written by ' + newAuthorName + ' on ' + response.date
        $('.post:first').clone().insertBefore('#posts')
        $('.post:first h1').text(newTitle)
        $('.post:first .post_details').text(writtenBy)
        $('.post:first .post_body').text(newBody)
      }
    })

    $('#post_form').hide()

  })
})
