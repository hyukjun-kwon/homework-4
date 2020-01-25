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
        "problemStatement": `How to write an ‘if’ statement for executing some code.
        If “i” is NOT equal to 5?`,
        "code": [],
        "choices": [
            `if(i<>5)`,
            `if i<>5`,
            `if(i!=5)`,
            `if i!=5`
        ],
        "answer": 2,
        "explanation": `JavaScript do not accept <> operator as not equal to.`
    },
    {
        "problemStatement": `What is the correct syntax for adding comments in JavaScript?`,
        "code": [],
        "choices": [
            `<!–This is a comment–&gt;`,
            `//This is a comment`,
            `–This is a comment`,
            `**This is a comment**`
        ],
        "answer": 1,
        "explanation": `Correct Syntax for comments in JavaScript is //comment.`
    },
    {
        "problemStatement": `How to insert a multi-line comment in JavaScript?`,
        "code": [],
        "choices": [
            `<!–This is comment line 1
            This is comment line 2–&gt;`,
            `//This is comment line 1
            This is comment line 2//`,
            `/*This is comment line 1
            This is comment line 2*/`,
            `**This is comment line 1
            This is comment line 2**`
        ],
        "answer": 2,
        "explanation": `Correct Syntax for multi-line comments in JavaScript is /*comment*/.`
    },
    {
        "problemStatement": `What is the JavaScript syntax for printing values in Console?`,
        "code": [],
        "choices": [
            `print(5)`,
            `console.log(5);`,
            `console.print(5);`,
            `print.console(5);`
        ],
        "answer": 1,
        "explanation": `The action which is built into the console object is the .log() method. Whenever we write console.log() in the JavaScript code, what we put inside the parentheses will get printed, or logged, to the console.`
    },
    {
        "problemStatement": `How to initialize an array in JavaScript?`,
        "code": [],
        "choices": [
            `var Geeks= “Geek1”, “Geek2”, “Geek3”`,
            `var Geeks=(1:Geek1, 2:Geek2, 3:Geek3)`,
            `var Geeks=(1=Geek1, 2=Geek2, 3=Geek3)`,
            `var Geeks=[“Geek1”, “Geek2”, “Geek3”]`
        ],
        "answer": 3,
        "explanation": `In JavaScript, functions are called directly like x().`
    },
    {
        "problemStatement": `What will be the output of the following code?`,
        "code": [
            `<script>`,
            `document.write(typeof(24.49));`,
            `</script>`
        ],
        "choices": [
            `float`,
            `number`,
            `integer`,
            `double`
        ],
        "answer": 1,
        "explanation": `There are seven fundamental data types in JavaScript. They are number, string, boolean, null, undefined, symbol and object. We do not have data types like float, integer and double in JavaScript.`
    },
    {
        "problemStatement": `What will be the command to print the number of characters in the string “GeeksforGeeks”?`,
        "code": [],
        "choices": [
            `document.write(“GeeksforGeeks”.len);`,
            `document.write(sizeof(“GeeksforGeeks”));`,
            `document.write(“GeeksforGeeks”.length);`,
            `document.write(lenof(“GeeksforGeeks”));`
        ],
        "answer": 2,
        "explanation": `The .length property of JavaScript is used to evaluate the number of characters in any string.`
    },
    {
        "problemStatement": `What is the method in JavaScript used to remove the whitespace at the beginning and end of any string ?`,
        "code": [],
        "choices": [
            `strip()`,
            `trim()`,
            `stripped()`,
            `trimmed()`
        ],
        "answer": 1,
        "explanation": `The trim() method in JavaScript is used to remove the whitespaces at the beginning and end of the string.`
    },
    {
        "problemStatement": `In JavaScript, we do not have datatypes like integer and float. What is the function that can be used to check if the number is an integer or not?`,
        "code": [],
        "choices": [
            `Integer(value)`,
            `ifInteger(value)`,
            `isInteger(value)`,
            `ifinteger(value)`
        ],
        "answer": 2,
        "explanation": `isInteger() function is used to check whether a number is integer or not. The function is used as: document.write(number.isInteger(2018)) will result as true.`
    },
    {
        "problemStatement": `Which of the following is an advantage of using JavaScript?`,
        "code": [],
        "choices": [
            `Increased interactivity.`,
            `Less server interaction.`,
            `Immediate feedback from the users.`,
            `All of the above.`
        ],
        "answer": 3,
        "explanation": `JavaScript ensures increased interactivity, less server interation and immediate feedback from the users.`
    },
    {
        "problemStatement": `Which function of an Array object calls a function for each element in the array?`,
        "code": [],
        "choices": [
            `forEach()`,
            `every()`,
            `forEvery()`,
            `each()`
        ],
        "answer": 0,
        "explanation": `forEach() – Calls a function for each element in the array.`
    },
    {
        "problemStatement": `JavaScript is a ________ Side Scripting Language.`,
        "code": [],
        "choices": [
            `Server`,
            `Browser`,
            `ISP`,
            `None of the above`
        ],
        "answer": 1,
        "explanation": `JavaScript is a Browser Side Scripting Language. ASP, PHP, Perl are Server Side Scripting Language.`
    },
    {
        "problemStatement": `JavaScript is ________ language.`,
        "code": [],
        "choices": [
            `an interpreted`,
            `a compiled`
        ],
        "answer": 0,
        "explanation": `JavaScript is an interpreted language, not a compiled language. C++ or Java codes needs to be compiled before it is run. The source code is passed through a program called a compiler, which translates it into bytecode that the machine understands and can execute. There is no such need in case of JavaScript.`
    },
    {
        "problemStatement": `Which was the first browser to support JavaScript?`,
        "code": [],
        "choices": [
            `Mozilla Firefox`,
            `Netscape`,
            `Google Chrome`,
            `IE`
        ],
        "answer": 1,
        "explanation": `Netscape was the first web browser to support JavaScript.`
    },

];
