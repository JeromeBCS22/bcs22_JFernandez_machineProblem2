let userInput;
var tries = 1;

function check(){
	
	const answer = Math.floor(Math.random() * 100) + 1;
	userInput = parseInt(prompt('Guess the number between 1 and 100: '));
	console.log(answer);

	while (userInput !== answer){
		tries++;
		if (userInput < answer){
			alert('Your answer is too low!');
		} else if (userInput > answer){
			alert('Your answer is too high!');
		}
		userInput = parseInt(prompt('Try again:'));
	}
		if (userInput == answer){
			alert('CORRECT, you got it in ' + tries + ' tries.');
		}

	}

check();
console.log('number of tries ' + tries);