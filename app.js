/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores,roundScore,activePlayer,player1FinalScore,player2FinalScore,player1CurrentScore,player2CurrentScore;
init();
// hide the dice before the game starts
var dice = document.querySelector('.dice');
dice.style.display = 'none';
var rollButton = document.querySelector('.btn-roll');
var holdButton = document.querySelector('.btn-hold');
rollButton.addEventListener('click', function() {
	if(playGame)
	{
//generate random number
var diceFace  = Math.floor(Math.random()*6)+1;
//display the dice with correct image
dice.style.display = 'block';
dice.src = 'dice-'+diceFace+'.png';
//update the round score if the rolled numner is not one
if(diceFace !== 1)
{
  roundScore = roundScore + diceFace;
  document.querySelector('#current-' + activePlayer).textContent = roundScore;
}
else
{
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active'); 
}
}
});
holdButton.addEventListener('click',function() {
	if(playGame)
	{
//add current score to global score
scores[activePlayer] = scores[activePlayer]+roundScore;
//sets global player score 
document.querySelector('#score-'+ activePlayer).textContent = scores[activePlayer];
player1CurrentScore.textContent = '0';
player2CurrentScore.textContent = '0';
roundScore = 0;
dice.style.display = 'none';
//check if player won the game
if(scores[activePlayer]>100)
{
	document.querySelector('#name-'+ activePlayer).textContent = "Winner!";
	document.querySelector('.player-' + activePlayer + '-panel').classList.toggle('active');
	playGame = false;
}
}
});

document.querySelector('.btn-new').addEventListener('click', init);

function init()
{
scores = [0,0];
roundScore = 0;
activePlayer = 0;
player1FinalScore = document.getElementById('score-0');
player2FinalScore = document.getElementById('score-1');
player1CurrentScore = document.getElementById('current-0');
player2CurrentScore = document.getElementById('current-1');
player1FinalScore.textContent = '0';
player2FinalScore.textContent = '0';
player1CurrentScore.textContent = '0';
player2CurrentScore.textContent = '0';
playGame=true;
}
























