$(document).ready(function(){

  $("#new_post_link").on("click", function(e){
    e.preventDefault();
    var path = $(this).attr("href");

    $.ajax({
      url: path,
      method: "get"
    })

    .done(function(response){
      $("#sidebar a").hide();
      $("#sidebar").append(response);
    })

  });

  $("section").on("click", "input[type=submit]", function(e){
    e.preventDefault();

    var path = $("#post_form").attr("action");
    var postData = $("#post_form").serialize();

    $.ajax({
      url: path,
      method: "post",
      data: postData,
      dataType: "html"
    }).done(function(response){
      console.log(response);
      $("#post_form").remove();
      $("#posts").prepend(response);
      $("#sidebar a").show();
    })

  });


});
