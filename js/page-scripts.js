
var headerInfo = $("<h1><a href='index.html'>" + "STOP - PLAY - PAWS!" + "</a></h1><h4>" + "Sit. Stay. Shake. Rollover. Treats!" + "</h4>");
    $("header").append(headerInfo);

var navigation = $("<ul><li><a href='index.html'>" + "Home" + "</a></li><li><a href='about.html'>" + "About" + "</a></li><li><a href='image-gallery.html'>" + "Image Gallery" + "</a></li><li><a href='contact.html'>" + "Contact" + "</a></li></ul>");
    $("header").append(navigation);

//Footer Code
$.ajax({
    url : "http://httpbin.org/get",
    type: "GET"
}).done(function(response){
  	var results = response.origin;
    console.log(response.origin);

 	 var IPAddress = $("<p>" + response.origin + "</p>");
    $("footer").append(IPAddress);
});