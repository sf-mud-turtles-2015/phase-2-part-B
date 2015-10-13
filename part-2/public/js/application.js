$(document).ready(function(){

    $('body').on('click','.button_anchor',function(hello){
      hello.preventDefault();
      var url = $(this).attr('href')
      $('.button_anchor').hide()

      $.ajax({
        url: url,
        dataType: 'html'
      })
      .done(function(response){
        $('main').append(response)
      })

    });

    $('body').on('submit', '#post_form', function(hello1){
      hello1.preventDefault();
      // data = $("input[name='post[title]']").serialize()
      data = $('#post_form').serialize()
      // data = $("input[name='post[title]']").serialize()
      console.log(data)
      $('#post_form_container').remove()
      $.ajax({
        data: data,
        type: 'post',
        url: '/posts',
        dataType: 'html'
      })
      .done(function(response){
        $('main').prepend(response)
      });
      $('.button_anchor').show()

    });

});
