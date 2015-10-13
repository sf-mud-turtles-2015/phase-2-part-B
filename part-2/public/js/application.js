$(document).ready(function(){

  //click even on share your thoughts
  $("#new_post_link").on("click", function(e){
    e.preventDefault();

    var url = $(this).attr("href")
    $.get(url ,function(data){
      $("#sidebar").append(data)
    })

    // never done a click event inside a click event...
    $("#sidebar").on("submit", "#post_form", function(e){
      e.preventDefault()

      var url = $("#post_form").attr("action")
      //need to double check why the grabbing the form doesnt work here...
      var data = $(this).serialize()
      console.log(url)
      console.log(data)

      $.post(url, data, function(response){
        console.log(response)
        $("#posts").append(response)
        $("#post_form").remove()

      })
    })



  })





}) //end of ready function
