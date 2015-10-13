$(document).ready(function() {

  formHandler();

  $('#new_post_link').on('click', function(event) {
    event.preventDefault();
    var path = $(this).attr('href')
    $(this).hide();

    showForm(path);
  })

  function showForm(path) {
    $.get(path, function(responseData) {
      if ($('#post_form').length == 0) {
        $('main').append(responseData);
        $('#errors').remove();
      }
    });

    // $.ajax({
    //   method: 'GET',
    //   url: path,
    //   dataType: 'HTML'
    // }).done(function(data) {
    //   $('main').append(data);
    // });
  };

  function addPost(path, formData) {
    // $('#errors').remove()
    // $.post(path, formData, function(responseData) {
    //   $('#posts').append(responseData);
    // });

    $.ajax({
      beforeSend: function() { $('#errors').remove() },
      method: 'POST',
      data: formData,
      url: path,
      dataType: 'HTML'
    }).done(function(responseData) {
      $('#posts').append(responseData);
    });
  };

  function formHandler() {
    $('body').on('submit', '#post_form', function(event) {
      event.preventDefault();

      // get data from form and pass to function which will add the post to our page
      var path = $('#post_form').attr('action');
      var formData = $('#post_form').serialize();
      hideForm(); // form should go away at this point

      addPost(path, formData);

      // make the link to add a post reappear
      $('#new_post_link').show();
    });
  }

  function hideForm() {
    $('#post_form_container').remove();
  };
});
