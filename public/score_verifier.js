//My test to make certain my js file is correctly linked
console.log("All Systems Nominal");

//Double check that something has been entered into the fields before allowing a submission
$(document).ready(function(){

$(('#submit_button')).click(function() {
    $.post("/archer_and_score",
    {
      name: $("#archer_name").val() ,
      score: totalScore
    });
  });
});
