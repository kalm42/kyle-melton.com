---
templateKey: blog-post
title: Questions to answer when learning a new language
description: "WIP: So, I've been teaching a friend JavaScript. During that I've
  been quizing him and it struck me that many of these questions are rather
  broad and could be applied to multiple languages. Having learned JavaScript,
  Switft, and PHP to, what I would consider, a proficient level I think I'm
  capable of making that determination."
thumbnail: /img/questions-to-answer-when-learning-a-new-language.png
date: 2021-02-19T22:53:23.054Z
---
So, I've been teaching a friend JavaScript. During that I've been quizing him and it struck me that many of these questions are rather broad and could be applied to multiple languages. Having learned JavaScript, Switft, and PHP to, what I would consider, a proficient level I think I'm capable of making that determination.

I played around a little with Rust but I have been planing on getting a lot better with it so that I could do some more Object Oriented programming.

Here are the questions I've been writing. I'll be updating this as he gets further and I write more questions. I hope you find these useful.

1. What are the primitive types?
   a. string, bool, number, null, undefined, object, symbol
2. What is a string?
  // I know this might seem stupid, but it's best to say the obvious to avoid overlooking potential knowledge gaps.
3. What is a bool?
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
17. When do you decalre a variable? 
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
  a. `<=` Less than or equal to, `<` Less than, `>=` Greater than or equal to, `>` greater than, `==` equal to with type coercion, `===` equal to without type coercion
29. What is type coercion?
30. Why make a function?
31. How do you define a function?
  a. `function functionName() {}` standard, `function() {}` anonymous, `const functionName = function() {}` anonymous in a variable, `const functionName = function functionName() {}` named in a variable, `const functionName = () => {}` arrow
32. How do you call a function?
33. How do you pass information into a function?
34. What is a parameter?
  // Not in the Jeopardy sense, but in a vocab sense.
35. What is an arguement?
  // again for vocab
36. What is the difference between a parameter and an arguement?
  a. A parameter is the variable in the function context. An argument is the variable passed to the called function. Argument at calling, parameter in the function.
37. How do you get information out of a function?
38. What is the unix epoch?
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
48. What is an imediatley invoked function expression?
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
