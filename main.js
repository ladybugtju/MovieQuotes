$('document').ready(function(){
  
   $('button').click(function(){
   	  $.ajax( "https://andruxnet-random-famous-quotes.p.mashape.com/cat=movies", {
   	  	method:"post",
   	  	dataType: "json",
   	  	headers:{
   	  		"X-Mashape-Key":"acgrc3bAYJmshmk15YVOZJ1xBjPyp19W73zjsnnUn3OBMotbBQ",
   	        "Content-Type":"application/x-www-form-urlencoded",
   	        "Accept": "application/json"
	   	 },
        success:function(data) {
         $('.quote').text(data.quote);
         $('.author').text(data.author);
         $('.category').text(data.category)
       }
    });
  });
});
