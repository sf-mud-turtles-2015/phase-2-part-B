$(document).ready(function() {

  $('.button_anchor').on('click', function(event){
    event.preventDefault();
    $(this).hide();
    $.ajax({
      method: "get",
      url: '/posts/new'
    })
    .done(function(response){
      console.log(response);
      $('#sidebar').append(response)
    })
  });

  $('#display').on('submit', '#post_form', function(event){
    event.preventDefault();
    var formdata = $(this).serialize();
    $.ajax({
      method: "post",
      url: '/posts',
      // dataType: "json",
      data: formdata
    })
    .done(function(response){
      console.log(response);
      debugger
      $('#post_form_container').remove();  #test is failing - no time to debug
      $('#posts').append(response);
      $('.button_anchor').show();
    });
  });
});
