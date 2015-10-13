$(document).ready(function() {

  $('#new_post_link').on('click',function(event){
    event.preventDefault();

    var link = $(this).attr('href');

    $.ajax({ url: link })
    .done(function(response){

      $('#sidebar').append(response);
      $('#new_post_link').hide();

    });
  });


  $('#sidebar').submit(function(event){
    event.preventDefault();

    var link = $('#post_form').attr('action');
    var form = $('#post_form').serialize()
    console.log(form)
    $.ajax({
      url: link,
      method: 'post',
      data: form,
      dataType: 'json'
    }).done(function(response){
      $('#post_form').hide();
      var responsetemp =('<article class="post"><h1>'+response.title+'</h1><p class="post_details">Written by '+ response.author_name + ' on '+ response.created +'</p><p class="post_body">'+ response.body+'</p></article>')
      $('#posts').append(responsetemp);
      $('#new_post_link').show();

    });

  });

});
