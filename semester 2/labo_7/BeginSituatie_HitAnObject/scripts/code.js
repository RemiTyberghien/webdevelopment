const global = {
    IMAGE_COUNT: 5,
    IMAGE_SIZE: 48,
    IMAGE_PATH_PREFIX: "images/",
    IMAGE_PATH_SUFFIX: ".png",
    MOVE_DELAY: 1000,
    score: 0,
    timeoutId: null
};

let playField, startBtn, scoreDisplay, target;

const setup = () => {
    playField = document.getElementById("playField");
    startBtn = document.getElementById("startBtn");
    scoreDisplay = document.getElementById("score");
    target = document.createElement("img");
    target.id = "target";
    startBtn.addEventListener("click", StartSpel);
};

const StartSpel = () => {
    global.score = 0;
    scoreDisplay.textContent = 0;
    playField.appendChild(target);
    global.timeoutId = setInterval(verplaatstDoelwit, global.MOVE_DELAY);
    verplaatstDoelwit();
};

const verplaatstDoelwit = () => {
    let x = Math.random() * (playField.clientWidth - global.IMAGE_SIZE);
    let y = Math.random() * (playField.clientHeight - global.IMAGE_SIZE);
    target.style.left = x + "px";
    target.style.top = y + "px";

    let randomImg = Math.floor(Math.random() * global.IMAGE_COUNT);
    target.src = global.IMAGE_PATH_PREFIX + randomImg + global.IMAGE_PATH_SUFFIX;

    if (randomImg === 0) {
        target.onclick = gameOver;
    } else {
        target.onclick = verhoogScore;
    }
};


const verhoogScore = () => {
    scoreDisplay.textContent = ++global.score;
    verplaatstDoelwit();
};

const gameOver = () => {
    alert(`Je bent af: ${global.score}`);
    clearInterval(global.timeoutId);
    playField.removeChild(target);
};

window.addEventListener("load", setup);
