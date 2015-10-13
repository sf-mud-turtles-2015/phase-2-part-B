$(document).ready(function() {
  Form();
  Submit();
});

var Form = function(){
  $('.button_anchor').on('click',function(event){
    event.preventDefault();
    $('.button_anchor').toggle();
    $.ajax({
      url: "/posts/new",
      success: function (data) { $('#sidebar').append(data); },
      dataType: 'html'
    });
  });
}


var Submit = function(){
  $('#sidebar').on('submit', "form" ,function(event){
    event.preventDefault();
    var data = $( this ).serialize();
    $.ajax({
      url: '/posts',
      method: 'post',
      data: data
    })
    .done(function(response){
      $.ajax({
      url: "/posts",
      success: function (data) { $('#posts').html(data); },
      dataType: 'html'
      })
      // Need to figure out how to re render the posts
      $('#sidebar').html("");
      $('.button_anchor').toggle();
    });

  });
}



