const startingMinutes = 2;
const startingMinutesRest = 0.25;
let time = startingMinutes * 60;
let restTime = startingMinutesRest * 60;

rest = false

const background = document.querySelector('.timer');
const countdownEl = document.querySelector('#countdown');
const timeoutAudio = document.getElementById("timeout_audio");

timeoutAudio.src = "./src/assets/sounds/timeout.mp3";
timeoutAudio.load();

setInterval(updateCountdown, 1000);

function updateCountdown(){
	if(!rest){
	background.style.backgroundColor = 'blue';
	const minutes = Math.floor(time / 60);
	let seconds = time % 60;

	seconds = seconds < 10 ? '0' + seconds : seconds;

	countdownEl.innerHTML = `${minutes}:${seconds}`;
	time--
	} else {
		background.style.backgroundColor = 'rgb(243, 194, 151)';
		const minutes = Math.floor(restTime / 60);
	let seconds = restTime % 60;

	seconds = seconds < 10 ? '0' + seconds : seconds;

	countdownEl.innerHTML = `${minutes}:${seconds}`;
	restTime--
	}

	if(time < 0 || restTime < 0){
		rest = !rest
		time = startingMinutes * 60
		restTime = startingMinutesRest
		* 60;
	}

	if (countdownEl.innerText === '0:00'){
		timeoutAudio.play();
	}
}