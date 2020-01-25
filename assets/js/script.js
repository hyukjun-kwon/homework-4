// Constants
const DIV_CLASS = "col-md-8 col-sm-12 mx-auto";
const CARD_CLASS = "card text-left p-auto";

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




/**************************************************** Function Testing ****************************************************/
buildProblem(1);