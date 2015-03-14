var url = 'http://api.flickr.com/services/feeds/photos_public.gne?tags=';
var endUrl = '&format=json&jsoncallback=?';
//url components

//event listener
$.ajax({
    url : encodeURI(url + 'upside down dog' + endUrl),
    dataType: 'jsonp',
    type: 'GET'
}).done(function(response){
	var results = response.items;
    console.log(response.items);
    $('.results').empty();
// ajax call to return results and empty when delete key is hit


    $.each(results, function(i, value){
        console.log(value.media);
        $("<img/>").attr("src", value.media.m).appendTo(".results");

  });  
});
