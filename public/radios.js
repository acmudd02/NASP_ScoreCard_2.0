//Setting up our variables
let endOneScore = 0;
let endTwoScore = 0;
let endThreeScore = 0;
let endFourScore = 0;
let endFiveScore = 0;
let endSixScore = 0;
let totalScore = 0;

   $(document).ready( () => {
       $('input[type=radio]').change( () => {
         //Reset Scores to 0
         endOneScore = 0;
         endTwoScore = 0;
         endThreeScore = 0;
         endFourScore = 0;
         endFiveScore = 0;
         endSixScore = 0;
         totalScore = 0;

         //Retrieve all of the data from Checked Radio Buttons
        endOneScore += parseInt($('input[name=arrow_one_e1]:radio:checked').val()) + parseInt($('input[name=arrow_two_e1]:radio:checked').val()) + parseInt($('input[name=arrow_three_e1]:radio:checked').val()) + parseInt($('input[name=arrow_four_e1]:radio:checked').val()) + parseInt($('input[name=arrow_five_e1]:radio:checked').val());

        endTwoScore += parseInt($('input[name=arrow_one_e2]:radio:checked').val()) + parseInt($('input[name=arrow_two_e2]:radio:checked').val()) + parseInt($('input[name=arrow_three_e2]:radio:checked').val()) + parseInt($('input[name=arrow_four_e2]:radio:checked').val()) + parseInt($('input[name=arrow_five_e2]:radio:checked').val());

        endThreeScore += parseInt($('input[name=arrow_one_e3]:radio:checked').val()) + parseInt($('input[name=arrow_two_e3]:radio:checked').val()) + parseInt($('input[name=arrow_three_e3]:radio:checked').val()) + parseInt($('input[name=arrow_four_e3]:radio:checked').val()) + parseInt($('input[name=arrow_five_e3]:radio:checked').val());

        endFourScore += parseInt($('input[name=arrow_one_e4]:radio:checked').val()) + parseInt($('input[name=arrow_two_e4]:radio:checked').val()) + parseInt($('input[name=arrow_three_e4]:radio:checked').val()) + parseInt($('input[name=arrow_four_e4]:radio:checked').val()) + parseInt($('input[name=arrow_five_e4]:radio:checked').val());

        endFiveScore += parseInt($('input[name=arrow_one_e5]:radio:checked').val()) + parseInt($('input[name=arrow_two_e5]:radio:checked').val()) + parseInt($('input[name=arrow_three_e5]:radio:checked').val()) + parseInt($('input[name=arrow_four_e5]:radio:checked').val()) + parseInt($('input[name=arrow_five_e5]:radio:checked').val());

        endSixScore += parseInt($('input[name=arrow_one_e6]:radio:checked').val()) + parseInt($('input[name=arrow_two_e6]:radio:checked').val()) + parseInt($('input[name=arrow_three_e6]:radio:checked').val()) + parseInt($('input[name=arrow_four_e6]:radio:checked').val()) + parseInt($('input[name=arrow_five_e6]:radio:checked').val());

        totalScore += parseInt(endOneScore) + parseInt(endTwoScore) + parseInt(endThreeScore) + parseInt(endFourScore) + parseInt(endFiveScore) + parseInt(endSixScore);

        //This block of code appends the value of the scores to the DOM
        document.getElementById("endOne").innerHTML = "Score:" + endOneScore;
        document.getElementById("endTwo").innerHTML = "Score:" + endTwoScore;
        document.getElementById("endThree").innerHTML = "Score:" + endThreeScore;
        document.getElementById("endFour").innerHTML = "Score:" + endFourScore;
        document.getElementById("endFive").innerHTML = "Score:" + endFiveScore;
        document.getElementById("endSix").innerHTML = "Score:" + endSixScore;
        document.getElementById("total").innerHTML = "Total Score:" + totalScore;
       });
   });
