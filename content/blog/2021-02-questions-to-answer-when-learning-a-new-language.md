---
templateKey: blog-post
title: Questions to answer when learning a new language
description: So, I've been teaching a friend JavaScript. During that I've been
  quizing him and it struck me that many of these questions are rather broad and
  could be applied to multiple languages. Having learned JavaScript, Switft, and
  PHP to, what I would consider, a proficient level I think I'm capable of
  making that determination.
tags:
  - learning
thumbnail: /img/questions-to-answer-when-learning-a-new-language.png
date: 2021-02-19T22:53:23.054Z
---
So, I've been teaching a friend JavaScript. During that I've been quizzing him and it struck me that many of these questions are rather broad and could be applied to multiple languages. Having learned JavaScript, Swift, and PHP to, what I would consider, a proficient level I think I'm capable of making that determination.

I played around a little with Rust but I have been planing on getting a lot better with it so that I could do some more Object Oriented programming. so here is the list of questions for JavaScript and I'll return to extend this to have the answers for other languages where applicable. I'll note JS specific questions and as I find other language specific questions I'll add those with a note.

I hope you find this useful. Give me a shout on twitter if you do. @kalm42

1. What are the primitive types?
   a. string, boolean, number, null, undefined, object, symbol
2. What is a string?
   // I know this might seem stupid, but it's best to say the obvious to avoid overlooking potential knowledge gaps.
3. What is a boolean?
4. What is a number?
   // This might be better for the other languages where there's a difference between signed and unsigned, 32 bit or 64 bit, floats or ints, but still important to state the obvious.
5. What is null?
6. What is undefined?
7. What is an object?
8. What is a symbol?
9. How do you define a string?
   a. '', or "", or 
10. How do you escape a character?
    a. `\`
11. How do you concatenate two strings?
12. How do you do string interpolation?
13. How do you define an object?
14. How do you make a code block?
15. How do you write an if statement?
16. Can var or let be mutated? 
    // Maybe change this to be basic variable mutation vs constants
17. When do you declare a variable? 
    // So because of JS hoisting this is a valid question to ask with JavaScript I wonder if it's valid to ask if there are considerations in other languages as to when it is best to define/declare variables.
18. When do you use var? 
    // JS specific, idk if that's at all relevant to other languages.
19. What is the variable naming convention?
20. What is the function naming convention?
21. What is the class naming convention?
22. What are invalid names?
23. What is the modulo operator?
24. Can you do math with strings?
    a. Yes, but no. // insert that gif
25. Why make an object? 
    // maybe extend that to similar things in other languages like the hash map etc.
26. Can you sort object keys?
27. How can you access object properties?
28. What are the various equality operator's syntax.
    a. `<` Less than
    b. `>` greater than
    c. `<=` Less than or equal to
    d. `>=` Greater than or equal to
    e. `==` equal to with type coercion
    f. `!=` not equal to, with type coercion
    g. `===` equal to without type coercion
    h. `!==` not equal to, without type coercion
    i. [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)
29. What is type coercion?
30. Why make a function?
31. How do you define a function?
    a. `function functionName() {}` standard, `function() {}` anonymous, `const functionName = function() {}` anonymous in a variable, `const functionName = function functionName() {}` named in a variable, `const functionName = () => {}` arrow
32. How do you call a function?
33. How do you pass information into a function?
34. What is a parameter?
    // Not in the Jeopardy sense, but in a vocab sense.
35. What is an argument?
    // again for vocab
36. What is the difference between a parameter and an argument?
    a. A parameter is the variable in the function context. An argument is the variable passed to the called function. Argument at calling, parameter in the function.
37. How do you get information out of a function?
38. What is the Unix epoch?
39. How does JS track time?
    a. Milliseconds
40. What's the best resource for built in JS functions.
    a. MDN
41. What is function scope?
42. Are arguments passed by value or by reference?
43. What does "passed by reference" mean?
44. How do you set a default value for a parameter?
45. What is hoisting?
46. Are arrow function anonymous?
47. What is an implicit return?
48. What is an immediately invoked function expression?
49. What is a method?
50. What is a callback function?
51. What is scope?
52. What is a global variable?
53. Should you make global variables?
54. Can a function access a variable in the parent scope?
55. What is block scope?
56. When a function looks outside it's scope does it look where it is called or where it is defined?
57. What is a closure?
    a. A function that returns another function. The returned function must access a variable defined in the parent function's scope.
58. What are the order of operations?
    a. Parentheses, exponents, multiplication, division, addition, and subtraction. The same as in mathematics.
59. What is the operator for each of those?
    a. `()` parentheses
    b. `**` exponents
    c. `*` multiplication
    d. `/` division
    e. `+` addition
    f. `-` subtraction
    g. [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)
60. What is an if statement?
    a. Conditionally executes a block of code.
61. What is an else statement?
    a. Must be paired with an if statement, it is the alternate block of code to execute if the condition is false.
62. Show the syntax for `if`, `if/else`, and `if/elseif/else`

```javascript
if(condition){
  // if condition is true run this.
}
if(condition) {
  // if condition is true run this
} else {
  // if condition is false run this
}
if(condition) {
  // if condition is true run this
} else if (second condition) {
  // if condition is false and second condition is true run this
} else {
  // if both condition and second condition are false then run this
}
```

65. What is the logical and?
    a. Like mathematics, the logical and will return true if both the left hand side of the operator and the right hand side of the operator evaluate to true. If either side evaluates to false then the logical and will return false.
    b. Pro-tip! The logical and will not evaluate the right hand side if the left hand side evaluates to false.
66. What is the logical or?
    a. Also like mathematics, the logical or will return true if either the left hand side or the right hand side of the operator evaluates to true. If both evaluate to false then the logical or will return false.
67. What is truthy?
    a. Truthy is a short hand description for all things that can be coerced to true.
    b. Here are all truthy values:
      I. All defined variables except an empty string `''`, 0, null, and NaN.
68. What is falsey?
    a. Falsey is a short hand description for all values that can be coerced to false.
    b. Here are all falsy values:
      I. All undefined variables, 0, null, NaN, and an empty string.
69. What expressions can be used for the conditional in an if statement?
    a. Anything that evaluates to a truthy or falsey value.
70. What is coercion?
    a. Changing the primitive type from one to another.
71. What is a ternary?
    a. Short hand if else. *This must be used as an expression and not a statement. In other words it must be returning a value either from the key word `return`, or into a variable through assignment `=`, or interpolation, or as a conditional.
72. What is the `&&` short cut?
    a. The logical and will return the right hand side if the left is truthy. 

```javascript
true && someFunction(); // some function will run.
const variableName = true && someGetter(); 
// the return value of someGetter will be assigned to variableName.
```

73. What is a switch statement?
    a. I only know how to describe when you would want to use it. If you have a lot (read 3 or more) `if` & `else if` blocks and/or one or more of those conditions would require the same code to be executed AND the conditionals can be evaluated with `===` then you should use a switch statement.
74. What is the syntax for a switch statement?

```javascript
switch(variableToCheck) {
  case possibleValue:
    doSomething();
    break; // If you don't break the next lines WILL be run.
  case anotherPossibleValue:
  case yetAnotherPossibleValue:
    doAnotherThing(); // both of the above cases will run this code
    break;
  default:
    doDefaultThing(); // if none of the cases match this is run
}
```

75. How do you delay code execution for a set amount of time?
  a. With the build in function `setTimeout` 
76. How do you repeatedly execute a block of code on an interval?
  a. With the built in function `setInterval` 
77. What is the syntax for setTimeout?
  a. There's a lot more than the snippet below so I highly suggest going to the MDN docs. [MDN](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout)

```javascript
setTimeout(function () {}, delayTimeInMiliseconds);
```

78. What is the syntax for setInterval?
  a. There's more than the snippet below shows so I highly suggest going to the MDN docs. [MDN](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval)

```javascript
setInterval(function () {}, delayTimeInMiliseconds);
```

79. Can you control the order of properties in an object?
  a. No.
80. What kind of values can be stored in an object? *The value of a key, value pair.
  a. Anything.
81. What kind of values can be used as a propperty in an object. *The key in a key value pair.
  a. String, number, or any JS valid naming convention.
82. How do you prevent object mutation?
  a. `Object.freeze(objectVariable);`
83. How can you access properties in an object?

```javascript
const variable = {
  prop: true,
}
variable.prop;
variable['prop'];
const p = 'prop';
variable[p];
function get() {
  return 'prop';
}
variable[get()];
```

84. How do you access a deeply nested property?
  a. The same way just repeadetly and possibly interchangeably.

```javascript
const variable = {
  prop: {
    anotherProp: {
      'a-third-prop': true
    }
  },
}
variable.prop.anotherProp['a-third-prop'];
variable['prop']['anotherProp']['a-third-prop'];
const p = 'prop';
variable[p].anotherProp['a-third-prop'];
function get() {
  return 'prop';
}
function what() {
  return 'third'
}
variable[get()].anotherProp[`a-${what()}-prop`];
```

85. How do you remove a property from an object?
  a. With the `delete` keyword.

```javascript
const variable = {
  prop: 'something'
}
delete variable.prop
```

86. How do you add a property to an object?
  a. You assign it a value.

```javascript
const variable = {}

variable.prop = null;
variable['another prop'] = null;
// so on an so forth
```

87. What is a method?
  a. In JS it's a function in an object. In all other languages it's a function in a class.

```javascript
const variable = {
  method: function () {
    return `I'm a method.`
  }
}
```

88. What is this?
  a. `this` is a reference to the context a method is called in. There are many, many caveots. In the snippet below `this` refers to the instance of the variable calling the method.

```javascript
const variable = {
  prop: true,
  method: function () {
    return this.prop ? 'Hi' : 'Bye'
  }
}
variable.method() // 'Hi'
variable.prop = false;
variable.meothd() // 'Bye'
```

89. Do arrow function scope this?
  a. No. In the snippet below because an arrow function does not scope `this` the `this` is inherrieted from the parent.

```javascript
const parentVariable = {
  name: 'Kyle',
  prop: {
    name: 'Tyler',
    method: () => {
      return `Hi ${this.name}`
    }
  }
}
parentVariable.prop.method() // 'Hi Kyle', because this is inherrited
```

90. What is assignment by value?
  a. When assigning a variable a value by value a chunk of memory gets assigned to the variable and that chunck of memory is populated with whatever the value is.

91. What is assignment by referrence?
  a. When assigning a variable a value by referrence the variable does not get a chunck of memory allocated for it. Instead it gets a reference to an existing chunk of memory. Modifications to that chunck of memory affect all variables referencing that chunk of memory.
