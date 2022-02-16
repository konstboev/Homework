'use strict';

const icon = document.querySelector('#icon');
const mandarinsAmountElement = document.querySelector('#mandarinsAmount');
const startButton = document.querySelector('#startButton');
const gameTime = document.querySelector('#gameTime');
const mandarin = document.querySelector('#mandarin');
const grinch = document.querySelector('#grinch');
const canvas = document.querySelector('.game-canvas');
const restartButton = document.querySelector('#restartButton');
const gameDifficultyLevel = document.querySelector('.game-difficulty');



let noviceDifficulty = 1000;
let standardDifficulty = 750;
let expertDifficulty = 500;
let gameIntervalTime;
let gameInterval;
let mandarinsAmount = 0;
let gameDuration = 30;
let mandarinInterval;
let grinchIntervalDelay;
let canvasWidth;
let canvasHeight;
let mandarinWidth;
let mandarinHeight;

mandarin.addEventListener('click', event => {
	mandarinsAmount++;
	mandarinsAmountElement.textContent = `You caught ${mandarinsAmount} mandarins`;
	setMandarinPosition();
	clearInterval(mandarinInterval);
	mandarinInterval = setInterval(setMandarinPosition, 1000);
});

grinch.addEventListener('click', () => {
	gameDuration = 30;
	gameTime.textContent = `Game over!`;
	icon.style.display = 'none';
	clearInterval(mandarinInterval);
	clearInterval(gameInterval);
	mandarinsAmount--;
	mandarinsAmountElement.textContent = `You caught ${mandarinsAmount} mandarins`;
	startButton.removeAttribute('disabled');
});

function resetGame() {
	gameDuration = 30;
	mandarinsAmount = 0;
	mandarinsAmountElement.textContent = `You caught ${mandarinsAmount} mandarins`;
	gameTime.textContent = `${gameDuration} seconds left`
}

function setMandarinPosition() {
	canvasWidth = canvas.offsetWidth;
	mandarinWidth = mandarin.width;
	canvasHeight = canvas.offsetHeight;
	mandarinHeight = mandarin.height;
	icon.style.left = Math.round(Math.random() * (100 - mandarinWidth / canvasWidth * 100)) + '%';
	icon.style.top = Math.round(Math.random() * (100 - mandarinHeight / canvasHeight * 100)) + '%';

	if (gameDuration === grinchIntervalDelay) {
		mandarin.style.display = 'none';
		grinch.style.display = 'block';
		grinchIntervalDelay = Math.round(Math.random() * gameDuration);
	} else {
		mandarin.style.display = 'block';
		grinch.style.display = 'none';
	}
}

function gameCount() {
	if (gameDuration === 1) {
		icon.style.display = 'none';
		gameTime.textContent = `Game over!`;
		clearInterval(gameInterval);
		clearInterval(mandarinInterval);
		startButton.removeAttribute('disabled');
		return;
	}
	gameDuration -= 1;
	gameTime.textContent = `${gameDuration} seconds left`;
}

function startGame() {
	startButton.setAttribute('disabled', 'disabled');
	setMandarinPosition();
	icon.style.display = 'block';
	resetGame();
	grinchIntervalDelay = Math.round(Math.random() * gameDuration);
	mandarinInterval = setInterval(setMandarinPosition, gameIntervalTime);
	gameInterval = setInterval(gameCount, 1000);
}

gameDifficultyLevel.addEventListener('click', event => {
	let easyButton = document.querySelector('#easyButton');
	let normalButton = document.querySelector('#normalButton');
	let hardButton = document.querySelector('#hardButton');
	if (event.currentTarget === gameDifficultyLevel) {
		startButton.style.display = 'block';
		gameDifficultyLevel.style.display = 'none';
		if (event.target === easyButton) {
			gameIntervalTime = noviceDifficulty;
		} else if (event.target === normalButton) {
			gameIntervalTime = standardDifficulty;
		} else if (event.target === hardButton) {
			gameIntervalTime = expertDifficulty;
		}
	}
})

restartButton.addEventListener('click', event => {
	resetGame();
	icon.style.display = 'none';
	gameDifficultyLevel.style.display = 'block';
	startButton.style.display = 'block';
	startButton.removeAttribute('disabled', 'disabled');
	clearInterval(mandarinInterval);
	clearInterval(gameInterval);
});

startButton.addEventListener('click', event => {
	startGame()
});