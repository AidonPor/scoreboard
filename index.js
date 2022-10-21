let score1El = document.getElementById("score1-el")
let score2El = document.getElementById("score2-el")
let score1 = 0
let score2 = 0

function add1h() {
    score1 += 1
    score1El.textContent = score1
}

function add2h() {
    score1 += 2
    score1El.textContent = score1
}

function add3h() {
    score1 += 3
    score1El.textContent = score1
}

function add1g() {
    score2 += 1
    score2El.textContent = score2
}

function add2g() {
    score2 += 2
    score2El.textContent = score2
}

function add3g() {
    score2 += 3
    score2El.textContent = score2
}

function reset() {
    score1 = 0
    score2 = 0
    score1El.textContent = score1
    score2El.textContent = score2
}