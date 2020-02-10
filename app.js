// below are my gloabal variables
var acc = document.getElementsByClassName("accordion");
var i;
const userScore =0;
const computerScore=0;
//the below are DOM variables - not the same as normal variables because they are referencing tags in our HTML
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreboard_div = document.querySelector(".scoreboard");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices= ["r", "p", "s"];
    const randomNumber = (Math.floor(Math.random()*3));
    //the below allows us to randomize the "choices" variable using the random Number variable 
    return choices [randomNumber];
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    console.log("user choice ==>" + userChoice);
    console.log("computer choice ==>" + computerChoice);
}
game();

function main() {
    rock_div.addEventListener('click', function() {
        game("r")
    })
    paper_div.addEventListener('click', function() {
        game("p")
    })
    scissors_div.addEventListener('click', function() {
        game("s")
    })  
}

main();


//function for accordian
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
