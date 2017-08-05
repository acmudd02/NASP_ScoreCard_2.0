console.log("All Systems Nominal");


$(document).ready(function(){
$(('#archer_name')).mouseover(function() {
  $.get("/archer_and_score", function( data ){
    console.log( "Data Loaded: " + data );
  });
});
});
