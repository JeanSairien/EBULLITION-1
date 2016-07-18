$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('#myCarousel');
   var offset = startchange.offset();
    if (startchange.length){
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $('.navbar-brand').css('visibility','visible');
       } else {
          $('.navbar-brand').css('visibility','hidden');
       }
   	});
    }
});

function toggle_div(i, id) { 
  var div = document.getElementById(id); 
  if(div.style.display=="none") { 
    div.style.display = "block";  
  } else { 
    div.style.display = "none"; 
  }
}
