$(document).ready(function(){
  $('Body').on('click','.sidebar',function(e){
      e.preventDefault()
      var url = $('#new_post_link').attr('href')
      $.ajax({
        url: url,
        type: "GET",
        dataType:"HTML"
      }).done(function(response){
        // realized I could have just hidden this in the form on the erb page
        $('body').append(response)
        $('#new_post_link').hide()
      })
  })
  $('Body').on('submit','#post_form',function(e){
    e.preventDefault()
    var url = $('#post_form').attr("action")
    var data = $('#post_form').serialize()
    // alert(data)
      $.ajax({
        url:url,
        type: "POST",
        dataType:"HTML",
        data: data
    }).done(function(response){
          $("#posts").append(response)
          $('#post_form_container').remove()
          $('#new_post_link').show()
    })

  })
})
