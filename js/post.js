$(function() {
  $( "#datepicker" ).datepicker();
});

$("form").submit(function(event) {
  var name = $("#fullname").val();
  var email = $("#email").val();
  var dogType = $('input:radio:checked').val();
  var toy = $("#favoriteToy").val();
  var text = $("#textArea").val();

  var data = $(".contactResults").append("<p>" + name + "</p><p>" + email  + "</p><p>" + dogType + "</p><p>" + toy + "</p><p>" + text + "</p>");

  $.ajax({
    url : "http://httpbin.org/post",
    type: "POST",
    data: {'name': name, 'email': email, 'dogType': dogType, 'toy': toy, 'text': text}
      }).done(function(response){
          console.log(response);
  });
  return false;
});