$(document).ready(function() {
  $('#tweet-form').on('submit', function(event) {
    event.preventDefault()
    $target = $(event.target)
    $.ajax({
      url: $target.attr('action'),
      type: 'POST',
      data: $target.serialize()
    }).done(function(response) {
      console.log(response)
      $response = JSON.parse(response)
      $('#tweet-list').append('<li id=\'single-tweet\'>'+$response.author+'<br>'+$response.tweet.created_at+'<br>'+$response.tweet.content+'<br></li>')
    })
  })
});
