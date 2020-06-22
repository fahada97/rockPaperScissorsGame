var user = 0;
var comp = 0;

var userScore = document.querySelector("#user-score");
var compScore = document.querySelector("#comp-score");

var result = document.querySelector(".message");

var rock = document.querySelector(".rock");
var paper = document.querySelector(".paper");
var scissors = document.querySelector(".scissors");

rock.addEventListener('click', function() {
  game(0);
});

paper.addEventListener('click', function() {
  game(1);
});

scissors.addEventListener('click', function() {
  game(2);
});

function game(num) {
  var choice = num;
  var compChoice = Math.floor(Math.random() * 3);

  //0 = r, 1 = p, 2 =s

  if (choice === 0 && compChoice === 1) {
    comp++;
    compScore.innerText = comp;
    result.innerText = "PAPER beats ROCK, you Lost!"
    rock.classList.add("incorrect");
    setTimeout(function(){
      rock.classList.remove("incorrect");
    }, 500);
  } else if (choice === 0 && compChoice === 2) {
    user++;
    userScore.innerText = user;
    result.innerText = "ROCK beats SCISSORS, you Win!"
    rock.classList.add("correct");
    setTimeout(function(){
      rock.classList.remove("correct");
    }, 500);
  } else if (choice === 1 && compChoice === 0) {
    user++;
    userScore.innerText = user;
    result.innerText = "PAPER beats ROCK, you Win!"
    paper.classList.add("correct");
    setTimeout(function(){
      paper.classList.remove("correct");
    }, 500);
  } else if (choice === 1 && compChoice === 2) {
    comp++;
    compScore.innerText = comp;
    result.innerText = "SCISSORS beats PAPER, you Lost!"
    paper.classList.add("incorrect");
    setTimeout(function(){
      paper.classList.remove("incorrect");
    }, 500);
  } else if (choice === 2 && compChoice === 0) {
    comp++;
    compScore.innerText = comp;
    result.innerText = "ROCK beats SCISSORS, you Lost!"
    scissors.classList.add("incorrect");
    setTimeout(function(){
      scissors.classList.remove("incorrect");
    }, 500);
  } else if (choice === 2 && compChoice === 1) {
    user++;
    userScore.innerText = user;
    result.innerText = "SCISSORS beats PAPER, you Win!"
    scissors.classList.add("correct");
    setTimeout(function(){
      scissors.classList.remove("correct");
    }, 500);
  } else {
    result.innerText = "Draw";
  }

}
