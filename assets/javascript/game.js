
$(document).ready(function(){
//declare starting variables	
	var goal; 
	var winTotal = 0;
	var lossTotal = 0;
	var scoreCounter = 0;

	//create an alert to -- I did this to test to make sure my js file was linked properly
	// alert('Match the total with the values of the gems');


//create an array of all gems to use in random math loop for values
	var redGemValue;
	var blueGemValue;
	var yellowGemValue;
	var greenGemValue;
	var allGems = [redGemValue, blueGemValue, yellowGemValue, greenGemValue]

//create function to designate random gem values
function gemGenerator(min, max) {
		min = Math.ceil(min);
  		max = Math.floor(max);
  		return Math.floor(Math.random() * (max - min)) + min;
	}
//create function to call gemGenerator function to each gemValue variable
	function allGemValues() 
	{
		redGemValue= $('#redGem').data('value', gemGenerator(1, 12));
		blueGemValue = $('#blueGem').data('value', gemGenerator(1, 12));
		yellowGemValue = $('#yellowGem').data('value', gemGenerator(1, 12));
		greenGemValue = $('#greenGem').data('value', gemGenerator(1, 12));
	};

	allGemValues();

//use mathfloor & mathceil to generate random goal to gain 19-120
	function goalGenerator(min, max) {
		min = Math.ceil(min);
  		max = Math.floor(max);
  		return Math.floor(Math.random() * (max - min)) + min;
	}
//print randomly generated goal to html
	goal=goalGenerator(19, 120);
	
	$('.goal').html('Goal to reach: ' + goal);

	//log wins 
	$('#winTotal').html('Total wins: ' + winTotal);
	//log losses 
	$('#lossTotal').html('Total losses: ' + lossTotal);

//create a function to set terms of win/loss, update the win/loss html and reset the game 
	function result() 
		{
			if (scoreCounter == goal) {
				alert('YOU WIN!');
				winTotal++;
				$('#winTotal').html('Total wins: ' + winTotal);
				resetGame();
				}
			else if (scoreCounter > goal) {
				alert('Bust! You lose :(')
				lossTotal++;
				$('#lossTotal').html('Total losses: ' + lossTotal);
				resetGame();
				};
		};

//create onclick events for gems - push the current assigned value of gem into array for scoreCounter
	$('.gem').on('click', function() 
	{
		// console.log($(this).data('value'));
		scoreCounter = scoreCounter+$(this).data('value');
		console.log(scoreCounter)
		$('.scoreCounter').html(scoreCounter);
		result();
	});

//dynamically update the scorecounter in HTML
	$('.scoreCounter').html(scoreCounter);

//create a function to reset the score to 0, create a new goal and values for gems and update dynamically in html
function resetGame()
	{
		//reset current score
		scoreCounter=0;
		$('.scoreCounter').html(scoreCounter);
		//create new goal
		goal=goalGenerator(19, 120);
		$('.goal').html('Goal to reach: ' + goal);
		//reset new gem values
		allGemValues();
		//reset score to zero
		scoreCounter=0;};
});