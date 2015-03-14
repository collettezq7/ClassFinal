$("#localSave").click(function(event) {
  var inputValue = $("#fname").val();
  var inputValue2 = $("#lname").val();
  var inputValue3 = $("#className").val();
  localStorage.setItem("fname", inputValue);
  localStorage.setItem("lname", inputValue2);
  localStorage.setItem("className", inputValue3);
});

var fname = localStorage.getItem("fname");
var lname = localStorage.getItem("lname");
var className = localStorage.getItem("className");

$("#nameAndClass").append("<p>" + fname + "</p>" + "<p>" + lname  + "</p>" + "<p>" + className + "</p>");

// Ajax Post -> Object > form > inputValue: "Colleen", inputValue2: "Smith", inputValue3: "Advanced Web Design and Development"


  // $.ajax({
  //         url : "http://httpbin.org/post",
  //         type: "POST",
  //         data: {'inputValue': fname, 'inputValue2': lname, 'inputValue3': className},
  //     }).done(function(response){
  //         console.log(response);
  // });