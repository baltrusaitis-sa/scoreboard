// Scoreboard object

let homeScoreEl = document.getElementById("homeScore")
let guestScoreEl = document.getElementById("guestScore")
let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")

let homeBoard = 0
let guestBoard = 0

// Timer object and variable declaration

let timerEl = document.getElementById("timer-el")

let timer;

// Point buttons object

let pointButtonsEl = document.querySelectorAll("article.point-buttons button")

// Start game and New game button objects

let startGameEl = document.getElementById("start-game-btn")
let newGameEl = document.getElementById("new-game-btn")

// Div elements object

let divsEl = document.querySelectorAll("div")

// h3 elements object

let h3El = document.querySelectorAll("h3")

// Adder functions

function addOnePointHome() {
    homeBoard += 1
    homeScoreEl.textContent = homeBoard
}

function addTwoPointsHome() {
    homeBoard += 2
    homeScoreEl.textContent = homeBoard
}

function addThreePointsHome() {
    homeBoard += 3
    homeScoreEl.textContent = homeBoard
}

function addOnePointGuest() {
    guestBoard += 1
    guestScoreEl.textContent = guestBoard
}

function addTwoPointsGuest() {
    guestBoard += 2
    guestScoreEl.textContent = guestBoard
}

function addThreePointsGuest() {
    guestBoard += 3
    guestScoreEl.textContent = guestBoard
}

// New game function

function newGame() {

    // Timer reset

    stopTimer()

    // Enableing START GAME button 

    startGameEl.disabled = false

    // Disableing points buttons

    pointButtonsEl.forEach(pointButtonsEl => {
        pointButtonsEl.disabled = true;
        pointButtonsEl.style.borderColor = "gray"
        pointButtonsEl.style.color = "gray"
    });

    // Score reset 

    homeBoard = 0
    guestBoard = 0

    homeScoreEl.textContent = homeBoard
    guestScoreEl.textContent = guestBoard

    // Turning gray

    divsEl.forEach(divsEl => {
        divsEl.style.color = "gray";
        divsEl.style.textShadow = "none";
    });

    h3El.forEach(h3El => {
        h3El.style.color = "gray";
    });

    newGameEl.style.color = "gray"
    newGameEl.style.borderColor = "gray"

    // Turning START GAME into colors

    startGameEl.style.color = "#F94F6D"
    startGameEl.style.borderColor = "#F94F6D"

    // Anouncement change

    document.querySelector("p").textContent = "PRESS \"START GAME\" TO START"

}

function condition() {
    if (homeBoard > guestBoard) {
        guestScoreEl.style.textShadow = "none"
        homeScoreEl.style.textShadow = "0 0 5px #FFFFFF"
    } else if (homeBoard < guestBoard) {
        guestScoreEl.style.textShadow = "0 0 5px #FFFFFF"
    } else {
        homeScoreEl.style.textShadow = "none"
        guestScoreEl.style.textShadow = "none"
    }
}

function gameTime(count, minutes) {

    startGameEl.disabled = true

    timer = setInterval(function () {
        count--;

        if (minutes < 10 && count < 10) {
            timerEl.textContent = "0" + minutes + ":" + "0" + count
        } else if (count < 10) {
            timerEl.textContent = minutes + ":" + "0" + count
        } else if (minutes < 10) {
            timerEl.textContent = "0" + minutes + ":" + count
        } else {
            timerEl.textContent = minutes + ":" + count
        }

        if (minutes === 0 && count === 0) {
            clearInterval(timer);
            timerEl.textContent = "Baigęsi nx";
        }

        if (count == 0) {
            minutes = minutes - 1
            count = 59
        }
    }, 1000);

}

function stopTimer() {
    clearInterval(timer);
    timer = null
    timerEl.textContent = "00:00";
}

function startGame() {

    // Enable buttons and turning into colors

    pointButtonsEl.forEach(pointButtonsEl => {
        pointButtonsEl.disabled = false;
        pointButtonsEl.style.borderColor = "#9AABD8"
        pointButtonsEl.style.color = "#9AABD8"
    });

    startGameEl.style.borderColor = "#9AABD8"
    startGameEl.style.color = "#9AABD8"
    timerEl.style.color = "#F94F6D"
    homeScoreEl.style.color = "#F94F6D"
    guestScoreEl.style.color = "#F94F6D"

    // Turning into colors

    divsEl.forEach(divsEl => {
        divsEl.style.color = "#F94F6D";
    });

    h3El.forEach(h3El => {
        h3El.style.color = "#EEEEEE";
    });

    // Turning NEW GAME into colors

    newGameEl.style.color = "#F94F6D"
    newGameEl.style.borderColor = "#F94F6D"

    // Anouncement change

    document.querySelector("p").textContent = "PRESS \"NEW GAME\" TO RESET GAME"

    gameTime(60, 11)


}