let startingMinutes = 2;
let startingMinutesRest = 0.25;
let time = startingMinutes * 60;
let restTime = startingMinutesRest * 60;
let rest = false;
let isRunning = true

let buttonPause = document.getElementById("button-pause");
let buttonStart = document.getElementById("button-start");
let buttonReset = document.getElementById("button-reset");
let setMinutesInput = document.getElementById("minutes-input");
let setSecondsInput = document.getElementById("seconds-input");

buttonStart.disabled = true;

buttonStart.addEventListener("click", function () {
	if(!isRunning){
	buttonStart.disabled = true;
	buttonPause.disabled = false;
	prueba = setInterval(updateCountdown, 1000);
	}
});

buttonPause.addEventListener("click", function () {
	isRunning = false;
	buttonStart.disabled = false;
	buttonPause.disabled = true;
	clearInterval(prueba);
});

buttonReset.addEventListener("click", function () {
	time = startingMinutes * 60;
	restTime = startingMinutesRest * 60;
	countdownEl.innerText = "00:00";
});

const background = document.querySelector("body");
const countdownEl = document.querySelector("#countdown");
const timeoutAudio = document.getElementById("timeout_audio");

timeoutAudio.src = "./src/assets/sounds/timeout.mp3";
timeoutAudio.load();

let prueba = setInterval(updateCountdown, 1000);

function updateCountdown() {
	if (!rest) {
		background.style.backgroundColor = "blue";
		const minutes = Math.floor(time / 60);
		let seconds = time % 60;

		seconds = seconds < 10 ? "0" + seconds : seconds;

		countdownEl.innerHTML = `${minutes}:${seconds}`;
		time--;
	} else {
		background.style.backgroundColor = "rgb(243, 194, 151)";
		const minutes = Math.floor(restTime / 60);
		let seconds = restTime % 60;

		seconds = seconds < 10 ? "0" + seconds : seconds;

		countdownEl.innerHTML = `${minutes}:${seconds}`;
		restTime--;
	}

	if (time < 0 || restTime < 0) {
		rest = !rest;
		time = startingMinutes * 60;
		restTime = startingMinutesRest * 60;
	}

	if (countdownEl.innerText === "0:03") {
		timeoutAudio.play();
	}
}

function setMinutes(minutes) {
	newValue = parseInt(setMinutesInput.value) + minutes;

	if (newValue < 0) {
		setMinutes.value = 0;
	} else {
		setMinutesInput.value = newValue;
	}
}

function setSeconds(seconds) {
	newValue = parseInt(setSecondsInput.value) + seconds;

	if (newValue < 0) {
		setSecondsInput.value = 55;
	} else if (newValue > 59) {
		setSecondsInput.value = 0;
	} else {
		setSecondsInput.value = newValue;
	}
}

function setSession() {
	startingMinutes = parseInt(setMinutesInput.value) + parseInt(setSecondsInput.value) / 60;
	buttonReset.click();
}
