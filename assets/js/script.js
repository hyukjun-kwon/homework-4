// Constants
const DIV_CLASS = "col-md-8 col-sm-12 mx-auto";
const CARD_CLASS = "card text-left p-auto";
const CORRECT_BUTTON_CLASS = "btn btn-success btn-md btn-block text-left";
const WRONG_BUTTON_CLASS = "btn btn-danger btn-md btn-block text-left";

// How many problem in a quiz?
const NUM_PROBLEM = 10;

/**************************************************** Main Function ****************************************************/
let score = {
  attempt: 0,
  solved: 0,
  solvedLast: false
}

// Shuffle the Test Bank
shuffleTestBank();

// Begin Quiz
takeQuiz();

function takeQuiz() {
  if(score.attempt < NUM_PROBLEM) {
    buildProblem(score.attempt);
  }
  else {
    finishQuiz();
  }
}

function finishQuiz() {
  displayResult();
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

  /************************** ANSWERS **************************/
  // create div
  let div2 = makeClassedElement("div", DIV_CLASS);
  div2.setAttribute("id", "choices");

  // append div
  document.getElementById("choice-wrapper").appendChild(div2);

  let multipleChoice = testBank[problemIndex].choices.length;

  for(let i=0; i < multipleChoice; i++)
  switch(i) {
    case 0:
      let btnA = makeButton('A',testBank[problemIndex].choices[0]);
      document.getElementById("choices").appendChild(btnA);
      break;
    case 1:
      let btnB = makeButton('B',testBank[problemIndex].choices[1]);
      document.getElementById("choices").appendChild(btnB);
      break;
    case 2:
      let btnC = makeButton('C',testBank[problemIndex].choices[2]);
      document.getElementById("choices").appendChild(btnC);
      break;
    case 3:
      let btnD = makeButton('D',testBank[problemIndex].choices[3]);
      document.getElementById("choices").appendChild(btnD);
      break;
  }

}

//removeElement("problem");
/**************************************************** Button Functions ****************************************************/
function displayExplanation() {
  // create div
  let div = makeClassedElement("div", DIV_CLASS);
  div.setAttribute("id", "explanation");

  // append div
  document.getElementById("explanation-wrapper").appendChild(div);

  // CORRECT OR WRONG
  let correctOrWrong = document.createElement("h5");
  correctOrWrong.innerHTML = score.solvedLast ? "You're Correct!" : "Wrong."
  document.getElementById("explanation").appendChild(correctOrWrong);

  // create explanation
  let explanation = document.createElement("h5");
  explanation.innerHTML = testBank[score.attempt].explanation;

  // append explanation
  document.getElementById("explanation").appendChild(explanation);

  // SHOW BUTTONS
}


/**************************************************** Button Functions ****************************************************/
function buttonA() {
  let btnA = document.getElementById("choices").children[0];
  let correctAnswer = testBank[score.attempt].answer
  // CORRECT
  if(correctAnswer === 0) {
    btnA.setAttribute("class", CORRECT_BUTTON_CLASS);
    score.solved++;
    score.solvedLast = true;
  }
  // WRONG
  else {
    btnA.setAttribute("class", WRONG_BUTTON_CLASS);
    document.getElementById("choices").children[correctAnswer].setAttribute("class", CORRECT_BUTTON_CLASS);
    score.solvedLast = false;
  }

  displayExplanation();
}

function buttonB() {
  let btnB = document.getElementById("choices").children[1];
  let correctAnswer = testBank[score.attempt].answer
  // CORRECT
  if(correctAnswer === 1) {
    btnB.setAttribute("class", CORRECT_BUTTON_CLASS);
    score.solved++;
    score.solvedLast = true;
  }
  // WRONG
  else {
    btnB.setAttribute("class", WRONG_BUTTON_CLASS);
    document.getElementById("choices").children[correctAnswer].setAttribute("class", CORRECT_BUTTON_CLASS);
    score.solvedLast = false;
  }

  displayExplanation();
}

function buttonC() {
  let btnC = document.getElementById("choices").children[2];
  let correctAnswer = testBank[score.attempt].answer
  // CORRECT
  if(correctAnswer === 2) {
    btnC.setAttribute("class", CORRECT_BUTTON_CLASS);
    score.solved++;
    score.solvedLast = true;
  }
  // WRONG
  else {
    btnC.setAttribute("class", WRONG_BUTTON_CLASS);
    document.getElementById("choices").children[correctAnswer].setAttribute("class", CORRECT_BUTTON_CLASS);
    score.solvedLast = false;
  }

  displayExplanation();
}

function buttonD() {
  let btnD = document.getElementById("choices").children[3];
  let correctAnswer = testBank[score.attempt].answer
  // CORRECT
  if(correctAnswer === 3) {
    btnD.setAttribute("class", CORRECT_BUTTON_CLASS);
    score.solved++;
    score.solvedLast = true;
  }
  // WRONG
  else {
    btnD.setAttribute("class", WRONG_BUTTON_CLASS);
    document.getElementById("choices").children[correctAnswer].setAttribute("class", CORRECT_BUTTON_CLASS);
    score.solvedLast = false;
  }

  displayExplanation();
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
  console.log("run")
  let rtnElem = document.createElement("button");
  rtnElem.setAttribute("onclick", `button${ch}()`);
  rtnElem.setAttribute("class", "btn btn-secondary btn-md btn-block text-left")

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

  while( 0 != current) {
    random = Math.floor(Math.random() * current);
    current -= 1;

    temp = testBank[current];
    testBank[current] = testBank[random];
    testBank[random] = temp;
  }
}


