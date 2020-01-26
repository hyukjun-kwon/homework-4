// Constants
const DIV_CLASS = "col-md-8 col-sm-12 mx-auto";
const CARD_CLASS = "card text-left p-auto";
const CORRECT_BUTTON_CLASS = "btn btn-success btn-md btn-block text-left";
const WRONG_BUTTON_CLASS = "btn btn-danger btn-md btn-block text-left";

// How many problem in a quiz?
const NUM_PROBLEM = testBank.length;
const TOTAL_SEC = 300; // User has 300 seconds for the quiz

/**************************************************** Main Function ****************************************************/
let score = {
  attempt: 0,
  solved: 0,
  solvedLast: false
};

document.getElementById("num-problem").innerHTML = NUM_PROBLEM;
document.getElementById("total-seconds").innerHTML = TOTAL_SEC;
const TOTAL_TIME = TOTAL_SEC * 5; // Timer will refresh every 200ms
let timeRemain = TOTAL_TIME;
let min = Math.floor(timeRemain / 300);
let sec = Math.floor(timeRemain / 5) % 60;
if (sec < 10) {
  sec = "0" + sec;
}

function startButton() {
  document.getElementById("intro-wrapper").setAttribute("class", "d-none");
  document.getElementById("timer-wrapper").setAttribute("class", "row mt-5");

  document.getElementById("timer-time").innerHTML = `${min}:${sec}`;

  // Start Timer function
  let mainTimer = setInterval(function() {
    timeRemain--;
    min = Math.floor(timeRemain / 300);
    sec = Math.floor(timeRemain / 5) % 60;
    if (sec < 10) {
      sec = "0" + sec;
    }

    document.getElementById("timer-time").innerHTML = `${min}:${sec}`;

    if (timeRemain === 0 || timeRemain < 0) {
      clearInterval(mainTimer);
      displayResult();
    }
  }, 200);

  takeQuiz();
}

function startQuiz() {
  // Shuffle the Test Bank
  shuffleTestBank();

  // Begin Quiz
  takeQuiz();
}

function takeQuiz() {
  if (score.attempt < NUM_PROBLEM) {
    buildProblem(score.attempt);
  } else {
    displayResult();
  }
}

/**************************************************** Problem Building ****************************************************/

function buildProblem(problemIndex) {
  /************************** PROBLEM **************************/
  // create div
  let div1 = makeClassedElement("div", DIV_CLASS);
  div1.setAttribute("id", "problem");

  // append div
  document.getElementById("problem-wrapper").appendChild(div1);

  // create problem statement
  let problemStatement = document.createElement("h5");
  problemStatement.innerHTML = testBank[problemIndex].problemStatement;

  // append problem statement
  document.getElementById("problem").appendChild(problemStatement);

  /************************** CODE **************************/
  // Create code card if there is some code to output
  if (testBank[problemIndex].code.length !== 0) {
    // create card
    let card = makeClassedElement("div", CARD_CLASS);
    let cardBody = makeClassedElement("div", "card-body");

    // attach the codes
    testBank[problemIndex].code.forEach(str => {
      cardBody.appendChild(makeCodeLine(str));
    });

    // attach the card-body to the card
    card.appendChild(cardBody);

    // append the card to the document
    document.getElementById("problem").appendChild(card);
  }

  /**************************************************** Choices Building ****************************************************/
  // create div
  let div2 = makeClassedElement("div", DIV_CLASS);
  div2.setAttribute("id", "choices");

  // append div
  document.getElementById("choice-wrapper").appendChild(div2);

  let multipleChoice = testBank[problemIndex].choices.length;

  for (let i = 0; i < multipleChoice; i++)
    switch (i) {
      case 0:
        let btnA = makeButton("A", testBank[problemIndex].choices[0]);
        btnA.setAttribute("id", "button-A");
        document.getElementById("choices").appendChild(btnA);
        break;
      case 1:
        let btnB = makeButton("B", testBank[problemIndex].choices[1]);
        btnB.setAttribute("id", "button-B");
        document.getElementById("choices").appendChild(btnB);
        break;
      case 2:
        let btnC = makeButton("C", testBank[problemIndex].choices[2]);
        btnC.setAttribute("id", "button-C");
        document.getElementById("choices").appendChild(btnC);
        break;
      case 3:
        let btnD = makeButton("D", testBank[problemIndex].choices[3]);
        btnD.setAttribute("id", "button-D");
        document.getElementById("choices").appendChild(btnD);
        break;
    }
}

/**************************************************** Explanation Building ****************************************************/
function displayExplanation() {
  // create div
  let div = makeClassedElement("div", DIV_CLASS);
  div.setAttribute("id", "explanation");

  // append div
  document.getElementById("explanation-wrapper").appendChild(div);

  // CORRECT OR WRONG
  let correctOrWrong = document.createElement("h5");
  correctOrWrong.innerHTML = score.solvedLast ? "You're Correct!" : "Wrong.";
  document.getElementById("explanation").appendChild(correctOrWrong);

  // create explanation
  let explanation = document.createElement("h5");
  explanation.innerHTML = testBank[score.attempt].explanation;

  // append explanation
  document.getElementById("explanation").appendChild(explanation);

  // create [Next Problem] button
  let nextBtn = document.createElement("button");
  nextBtn.setAttribute("class", "btn btn-outline-primary");
  nextBtn.setAttribute("onclick", "nextBtn()");
  nextBtn.innerHTML = "Next Problem";
  document.getElementById("explanation").appendChild(nextBtn);

  // disable the button functions
  document.getElementById("button-A").removeAttribute("onclick");
  document.getElementById("button-B").removeAttribute("onclick");
  document.getElementById("button-C").removeAttribute("onclick");
  document.getElementById("button-D").removeAttribute("onclick");
}

/**************************************************** Result Building ****************************************************/
function displayResult() {
  document.getElementById("timer-wrapper").setAttribute("class", "d-none");
  document.getElementById("problem-wrapper").setAttribute("class", "d-none");
  document.getElementById("choice-wrapper").setAttribute("class", "d-none");
  document
    .getElementById("explanation-wrapper")
    .setAttribute("class", "d-none");

  document.getElementById(
    "problem-attempted"
  ).innerHTML = `Problems Attempted : ${score.attempt}`;
  document.getElementById(
    "problem-solved"
  ).innerHTML = `Problems Solved: ${score.solved}`;
  document.getElementById("result-wrapper").setAttribute("class", "row");
}

/**************************************************** Button Functions ****************************************************/
function buttonA() {
  let btnA = document.getElementById("choices").children[0];
  let correctAnswer = testBank[score.attempt].answer;
  // CORRECT
  if (correctAnswer === 0) {
    btnA.setAttribute("class", CORRECT_BUTTON_CLASS);
    score.solved++;
    score.solvedLast = true;
  }
  // WRONG
  else {
    timeRemain -= 15 * 5;
    btnA.setAttribute("class", WRONG_BUTTON_CLASS);
    document
      .getElementById("choices")
      .children[correctAnswer].setAttribute("class", CORRECT_BUTTON_CLASS);
    score.solvedLast = false;
  }

  displayExplanation();
}

function buttonB() {
  let btnB = document.getElementById("choices").children[1];
  let correctAnswer = testBank[score.attempt].answer;
  // CORRECT
  if (correctAnswer === 1) {
    btnB.setAttribute("class", CORRECT_BUTTON_CLASS);
    score.solved++;
    score.solvedLast = true;
  }
  // WRONG
  else {
    timeRemain -= 15 * 5;
    btnB.setAttribute("class", WRONG_BUTTON_CLASS);
    document
      .getElementById("choices")
      .children[correctAnswer].setAttribute("class", CORRECT_BUTTON_CLASS);
    score.solvedLast = false;
  }

  displayExplanation();
}

function buttonC() {
  let btnC = document.getElementById("choices").children[2];
  let correctAnswer = testBank[score.attempt].answer;
  // CORRECT
  if (correctAnswer === 2) {
    btnC.setAttribute("class", CORRECT_BUTTON_CLASS);
    score.solved++;
    score.solvedLast = true;
  }
  // WRONG
  else {
    timeRemain -= 15 * 5;
    btnC.setAttribute("class", WRONG_BUTTON_CLASS);
    document
      .getElementById("choices")
      .children[correctAnswer].setAttribute("class", CORRECT_BUTTON_CLASS);
    score.solvedLast = false;
  }

  displayExplanation();
}

function buttonD() {
  let btnD = document.getElementById("choices").children[3];
  let correctAnswer = testBank[score.attempt].answer;
  // CORRECT
  if (correctAnswer === 3) {
    btnD.setAttribute("class", CORRECT_BUTTON_CLASS);
    score.solved++;
    score.solvedLast = true;
  }
  // WRONG
  else {
    timeRemain -= 15 * 5;
    btnD.setAttribute("class", WRONG_BUTTON_CLASS);
    document
      .getElementById("choices")
      .children[correctAnswer].setAttribute("class", CORRECT_BUTTON_CLASS);
    score.solvedLast = false;
  }

  displayExplanation();
}

function nextBtn() {
  score.attempt++;

  // Remove Current Problem
  removeElement("problem");
  removeElement("choices");
  removeElement("explanation");

  // Build next problem
  takeQuiz();
}

/**************************************************** Utility Functions ****************************************************/

// Example: let star = makeClassedElement("div", "container");
// star = <div class="container"></div>
function makeClassedElement(elementString, classString) {
  let rtnElem = document.createElement(elementString);
  rtnElem.setAttribute("class", classString);

  return rtnElem;
}

// Example: makeCodeLine("abcdefg") returns <pre>abcdefg</pre>
function makeCodeLine(codeString) {
  let rtnElem = document.createElement("p");
  rtnElem.innerHTML = codeString;

  return rtnElem;
}

function makeButton(ch, answerString) {
  let rtnElem = document.createElement("button");
  rtnElem.setAttribute("onclick", `button${ch}()`);
  rtnElem.setAttribute("class", "btn btn-secondary btn-md btn-block text-left");

  rtnElem.innerHTML = `<span class="text-center bg-light text-dark rounded px-1 mr-2">${ch}</span>${answerString}`;

  return rtnElem;
}

function removeElement(elementId) {
  // Removes an element from the document
  let element = document.getElementById(elementId);
  element.parentNode.removeChild(element);
}

function shuffleTestBank() {
  let current = testBank.length;
  let temp, random;

  while (0 != current) {
    random = Math.floor(Math.random() * current);
    current -= 1;

    temp = testBank[current];
    testBank[current] = testBank[random];
    testBank[random] = temp;
  }
}
