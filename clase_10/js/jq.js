
$(document).ready(function() {
   
    $("#btn1").on('click', function(){
        $( "#caja1" ).animate({
            
            left: "+=50"
            // height: "toggle"
          }, 50, function() {
            
            $( "#caja1" ).animate({
            
                top: "+=50"
                // height: "toggle"
              }, 50, function() {
                
    
    
                
            });


        });
    });


});