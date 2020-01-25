let testBank = [
    {
        "problemStatement": "What is the HTML tag under which one can write the JavaScript code?",
        "code": [],
        "choices": [
            "&lt;javascript&gt;",
            "&lt;scripted&gt;",
            "&lt;script&gt;",
            "&lt;js&gt;"
        ],
        "answer": 2,
        "explanation": `If we want to write a JavaScript code under HTML tag, you will have to use the “script” tag.`
    },
    {
        "problemStatement": "Choose the correct JavaScript syntax to change the content of the following HTML code.",
        "code": [
            `&lt;p id="geek"&gt;GeeksforGeeks&lt;/p&gt;`
        ],
        "choices": [
            `document.getElement(“geek”).innerHTML=”I am a Geek”;`,
            `document.getElementById(“geek”).innerHTML=”I am a Geek”;`,
            `document.getId(“geek”)=”I am a Geek”;`,
            `document.getElementById(“geek”).innerHTML=I am a Geek;`
        ],
        "answer": 1,
        "explanation": `The correct syntax to access the element is document.getElementById(“geek”). Here we want to access the content written under that id, so we used .innerHTML to specify that and finally we replaced the content with whatever is written inside the quotes.`
    },
    {
        "problemStatement": `Which of the following is the correct syntax to display “GeeksforGeeks” in an alert box using JavaScript?`,
        "code": [],
        "choices": [
            `alertbox(“GeeksforGeeks”);`,
            `msg(“GeeksforGeeks”);`,
            `msgbox(“GeeksforGeeks”);`,
            `alert(“GeeksforGeeks”);`
        ],
        "answer": 3,
        "explanation": `To display any text in the alert box, you need to write it as alert(“GeeksforGeeks”);.`
    },
    {
        "problemStatement": `What is the correct syntax for referring to an external script called “geek.js”?`,
        "code": [],
        "choices": [
            `<script src=”geek.js”>`,
            `<script href=”geek.js”>`,
            `<script ref=”geek.js”>`,
            `<script name=”geek.js”>`
        ],
        "answer": 0,
        "explanation": `The “src” term is used to refer to any JavaScript file.`
    },
    {
        "problemStatement": `The external JavaScript file must contain <script> tag. True or False?`,
        "code": [],
        "choices": [
            `True`,
            `False`
        ],
        "answer": 1,
        "explanation": `It is not necessary for any external javascript file to have <script> tag.`
    },
    {
        "problemStatement": `Predict the output of the following JavaScript code.`,
        "code": [
            `<script type="text/javascript">`,
            `a = 8 + "8";`,
            `document.write(a);`,
            `</script>`
        ],
        "choices": [
            `16`,
            `Complilation Error`,
            `88`,
            `Run Time Error`
        ],
        "answer": 2,
        "explanation": `In the above given code, 8+”8″ have first integer and second string data types. Rather than adding the two numbers, it concatenated the two.`
    },
    {
        "problemStatement": `Predict the output of the following JavaScript code.`,
        "code": [
            `<script type="text/javascript">`,
            `var a="GeeksforGeeks";`,
            `var x=a.lastIndexOf("G");`,
            `document.write(x);`,
            `</script>`
        ],
        "choices": [
            `8`,
            `0`,
            `9`,
            `Error`
        ],
        "answer": 0,
        "explanation": `The index starts with 0 in JavaScript. Here, x searches for the last occurance of “G” in the text.`
    },
    {
        "problemStatement": `Which of the following is not a reserved word in JavaScript?`,
        "code": [],
        "choices": [
            `interface`,
            `throws`,
            `program`,
            `short`
        ],
        "answer": 2,
        "explanation": `In JavaScript, interface, throws and short are reserved keywords.`
    },
    {
        "problemStatement": `Predict the output of the following JavaScript code.`,
        "code": [
            `<script type="text/javascript" language="javascript">`,
            ` `,
            `var a = "GeeksforGeeks";`,
            `var result = a.substring(4, 5);`,
            `document.write(result); `,
            ` `,
            `</script>`
        ],
        "choices": [
            `sf`,
            `ks`,
            `s`,
            `k`
        ],
        "answer": 2,
        "explanation": `The substring command selects the substring starting from 4 to 5, excluding the 5th index. The indexing starts from 0. So, the output here is just “s” rather than sf.`
    },
    {
        "problemStatement": `Predict the output of the following JavaScript code.`,
        "code": [
            `<script type="text/javascript" language="javascript">`,
            ` `,
            `var x=5;`,
            `var y=6;`,
            `var res=eval("x*y");`,
            `document.write(res);`,
            ` `,
            `</script>`
        ],
        "choices": [
            `"30"`,
            `30`,
            `5*6`,
            `"5*6"`
        ],
        "answer": 1,
        "explanation": `eval command will evaluate the operation. Here it is 5*6=30.`
    },
    {
        "problemStatement": `Which of the following is not a reserved word in JavaScript?`,
        "code": [],
        "choices": [
            `interface`,
            `throws`,
            `program`,
            `short`
        ],
        "answer": 2,
        "explanation": `In JavaScript, interface, throws and short are reserved keywords.`
    },
    {
        "problemStatement": `Which of the following is not a reserved word in JavaScript?`,
        "code": [],
        "choices": [
            `interface`,
            `throws`,
            `program`,
            `short`
        ],
        "answer": 2,
        "explanation": `In JavaScript, interface, throws and short are reserved keywords.`
    },
    {
        "problemStatement": `Which of the following is not a reserved word in JavaScript?`,
        "code": [],
        "choices": [
            `interface`,
            `throws`,
            `program`,
            `short`
        ],
        "answer": 2,
        "explanation": `In JavaScript, interface, throws and short are reserved keywords.`
    },
    {
        "problemStatement": `Which of the following is not a reserved word in JavaScript?`,
        "code": [],
        "choices": [
            `interface`,
            `throws`,
            `program`,
            `short`
        ],
        "answer": 2,
        "explanation": `In JavaScript, interface, throws and short are reserved keywords.`
    },
    {
        "problemStatement": `What is the syntax for creating a function in JavaScript named as Geekfunc?`,
        "code": [],
        "choices": [
            `function = Geekfunc()`,
            `function Geekfunc()`,
            `function := Geekfunc()`,
            `function : Geekfunc()`
        ],
        "answer": 1,
        "explanation": `In JavaScript, function is defined as ‘function x()’.`
    },
    {
        "problemStatement": `How is the function called in JavaScript?`,
        "code": [],
        "choices": [
            `call Geekfunc();`,
            `call function GeekFunc();`,
            `Geekfunc();`,
            `function Geekfunc();`
        ],
        "answer": 2,
        "explanation": `In JavaScript, functions are called directly like x().`
    },
    {
        "problemStatement": `Which of the following is not a reserved word in JavaScript?`,
        "code": [],
        "choices": [
            `interface`,
            `throws`,
            `program`,
            `short`
        ],
        "answer": 2,
        "explanation": `In JavaScript, interface, throws and short are reserved keywords.`
    },
    {
        "problemStatement": `Which of the following is not a reserved word in JavaScript?`,
        "code": [],
        "choices": [
            `interface`,
            `throws`,
            `program`,
            `short`
        ],
        "answer": 2,
        "explanation": `In JavaScript, interface, throws and short are reserved keywords.`
    },
    {
        "problemStatement": `Which of the following is not a reserved word in JavaScript?`,
        "code": [],
        "choices": [
            `interface`,
            `throws`,
            `program`,
            `short`
        ],
        "answer": 2,
        "explanation": `In JavaScript, interface, throws and short are reserved keywords.`
    },

];
