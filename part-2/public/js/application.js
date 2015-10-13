$(document).ready(function(){

  //click even on share your thoughts
  $("#new_post_link").on("click", function(e){
    e.preventDefault();
    // $(this).hide() // hide the link
    var url = $(this).attr("href")
    $.get(url ,function(data){
      $("#sidebar").append(data)
    })

    // never done a click event inside a click event...
    // alternative way is to bring the html form in the view on this page
    // then all you did is hide and show, this will be faster...

    $("#sidebar").on("submit", "#post_form", function(e){
      e.preventDefault()

      // this is referring to the #post_form because I am using even delegation..
      // I dont think i need event delegation but yeah here is an example....
      console.log($(this))

      var url = $(this).attr("action")
      var data = $(this).serialize()

      $.post(url, data, function(response){
        //response will be the partial
        $("#posts").append(response)
        $("#post_form").remove()

        //$(this).show() //show the link later on...
      })
    })
  })


}) //end of ready function
