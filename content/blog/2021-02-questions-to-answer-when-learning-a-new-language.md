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

## What are the primitive types?

- string
- boolean
- number
- null
- undefined
- object
- symbol

## What is a string?

// I know this might seem stupid, but it's best to say the obvious to avoid overlooking potential knowledge gaps.

## What is a boolean?

## What is a number?

// This might be better for the other languages where there's a difference between signed and unsigned, 32 bit or 64 bit, floats or ints, but still important to state the obvious.

## What is null?

## What is undefined?

## What is an object?

## What is a symbol?

## How do you define a string?

- '', or "", or

## How do you escape a character?

- `\`

## How do you concatenate two strings?

## How do you do string interpolation?

## How do you define an object?

## How do you make a code block?

## How do you write an if statement?

## Can var or let be mutated?

- // Maybe change this to be basic variable mutation vs constants

## When do you declare a variable?

- // So because of JS hoisting this is a valid question to ask with JavaScript I wonder if it's valid to ask if there are considerations in other languages as to when it is best to define/declare variables.

## When do you use var?

- // JS specific, idk if that's at all relevant to other languages.

## What is the variable naming convention?

## What is the function naming convention?

## What is the class naming convention?

## What are invalid names?

## What is the modulo operator?

## Can you do math with strings?

- Yes, but no. // insert that gif

## Why make an object?

- // maybe extend that to similar things in other languages like the hash map etc.

## Can you sort object keys?

## How can you access object properties?

## What are the various equality operator's syntax.

- `<` Less than
- `>` greater than
- `<=` Less than or equal to
- `>=` Greater than or equal to
- `==` equal to with type coercion
- `!=` not equal to, with type coercion
- `===` equal to without type coercion
- `!==` not equal to, without type coercion
- [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)

## What is type coercion?

## Why make a function?

## How do you define a function?

```javascript
function functionName() {} // standard
function() {} // anonymous
const functionName = function functionName() {} // named variable
const functionName = function() {} // anonymous variable
const functionName = () => {} // arrow
```

## How do you call a function?

## How do you pass information into a function?

## What is a parameter?

## What is an argument?

## What is the difference between a parameter and an argument?

A parameter is the variable in the function context. An argument is the variable passed to the called function. Argument at calling, parameter in the function.

## How do you get information out of a function?

## What is the Unix epoch?

## How does JS track time?

Milliseconds

## What's the best resource for built in JS functions.

MDN

## What is function scope?

## Are arguments passed by value or by reference?

## What does "passed by reference" mean?

## How do you set a default value for a parameter?

## What is hoisting?

## Are arrow function anonymous?

## What is an implicit return?

## What is an immediately invoked function expression?

## What is a method?

## What is a callback function?

## What is scope?

## What is a global variable?

## Should you make global variables?

## Can a function access a variable in the parent scope?

## What is block scope?

## When a function looks outside it's scope does it look where it is called or where it is defined?

## What is a closure?

A function that returns another function. The returned function must access a variable defined in the parent function's scope.

## What are the order of operations?

Parentheses, exponents, multiplication, division, addition, and subtraction. The same as in mathematics.

## What is the operator for each of those?

`()` parentheses

`**` exponents
c. `*` multiplication
d. `/` division
e. `+` addition
f. `-` subtraction
g. [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)

## What is an if statement?

Conditionally executes a block of code.

## What is an else statement?

Must be paired with an if statement, it is the alternate block of code to execute if the condition is false.

## Show the syntax for `if`, `if/else`, and `if/elseif/else`

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

## What is the logical and?

- Like mathematics, the logical and will return true if both the left hand side of the operator and the right hand side of the operator evaluate to true. If either side evaluates to false then the logical and will return false.

  Pro-tip! The logical and will not evaluate the right hand side if the left hand side evaluates to false.

## What is the logical or?

Also like mathematics, the logical or will return true if either the left hand side or the right hand side of the operator evaluates to true. If both evaluate to false then the logical or will return false.

## What is truthy?

Truthy is a short hand description for all things that can be coerced to true.

### Here are all truthy values:

All defined variables except an empty string `''`, 0, null, and NaN.

## What is falsey?

Falsey is a short hand description for all values that can be coerced to false.

### Here are all falsy values:

All undefined variables, 0, null, NaN, and an empty string.

## What expressions can be used for the conditional in an if statement?

Anything that evaluates to a truthy or falsey value.

## What is coercion?

Changing the primitive type from one to another.

## What is a ternary?

Short hand if else. \*This must be used as an expression and not a statement. In other words it must be returning a value either from the key word `return`, or into a variable through assignment `=`, or interpolation, or as a conditional.

## What is the `&&` short cut?

The logical and will return the right hand side if the left is truthy.

```javascript
true && someFunction() // some function will run.
const variableName = true && someGetter()
// the return value of someGetter will be assigned to variableName.
```

## What is a switch statement?

I only know how to describe when you would want to use it. If you have a lot (read 3 or more) `if` & `else if` blocks and/or one or more of those conditions would require the same code to be executed AND the conditionals can be evaluated with `===` then you should use a switch statement.

## What is the syntax for a switch statement?

```javascript
switch (variableToCheck) {
  case possibleValue:
    doSomething()
    break // If you don't break the next lines WILL be run.
  case anotherPossibleValue:
  case yetAnotherPossibleValue:
    doAnotherThing() // both of the above cases will run this code
    break
  default:
    doDefaultThing() // if none of the cases match this is run
}
```

## How do you delay code execution for a set amount of time?

With the build in function `setTimeout`

## How do you repeatedly execute a block of code on an interval?

With the built in function `setInterval`

## What is the syntax for setTimeout?

There's a lot more than the snippet below so I highly suggest going to the MDN docs. [MDN](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout)

```javascript
setTimeout(function () {}, delayTimeInMiliseconds)
```

## What is the syntax for setInterval?

There's more than the snippet below shows so I highly suggest going to the MDN docs. [MDN](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval)

```javascript
setInterval(function () {}, delayTimeInMiliseconds)
```

## Can you control the order of properties in an object?

No.

## What kind of values can be stored in an object? \*The value of a key, value pair.

Anything.

## What kind of values can be used as a propperty in an object. \*The key in a key value pair.

String, number, or any JS valid naming convention.

## How do you prevent object mutation?

```javascript
const objectVariable = {
  has: "values",
}
Object.freeze(objectVariable)
```

## How can you access properties in an object?

```javascript
const variable = {
  prop: true,
}
variable.prop
variable["prop"]
const p = "prop"
variable[p]
function get() {
  return "prop"
}
variable[get()]
```

## How do you access a deeply nested property?

The same way just repeadetly and possibly interchangeably.

```javascript
const variable = {
  prop: {
    anotherProp: {
      "a-third-prop": true,
    },
  },
}
variable.prop.anotherProp["a-third-prop"]
variable["prop"]["anotherProp"]["a-third-prop"]
const p = "prop"
variable[p].anotherProp["a-third-prop"]
function get() {
  return "prop"
}
function what() {
  return "third"
}
variable[get()].anotherProp[`a-${what()}-prop`]
```

## How do you remove a property from an object?

With the `delete` keyword.

```javascript
const variable = {
  prop: "something",
}
delete variable.prop
```

## How do you add a property to an object?

You assign it a value.

```javascript
const variable = {}

variable.prop = null
variable["another prop"] = null
// so on an so forth
```

## What is a method?

In JS it's a function in an object. In all other languages it's a function in a class.

```javascript
const variable = {
  method: function () {
    return `I'm a method.`
  },
}
```

## What is this?

`this` is a reference to the context a method is called in. There are many, many caveats. In the snippet below `this` refers to the instance of the variable calling the method.

```javascript
const variable = {
  prop: true,
  method: function () {
    return this.prop ? "Hi" : "Bye"
  },
}
variable.method() // 'Hi'
variable.prop = false
variable.method() // 'Bye'
```

## Do arrow function scope this?

No. In the snippet below because an arrow function does not scope `this` the `this` is inherited from the parent.

```javascript
const parentVariable = {
  name: "Kyle",
  prop: function () {
    return {
      name: "Tyler",
      method: () => {
        return `Hi ${this.name}`
      },
    }
  },
}
parentVariable.prop().method() // 'Hi Kyle', because this is inherited
```

## What is assignment by value?

When assigning a variable a value by value a chunk of memory gets assigned to the variable and that chunk of memory is populated with whatever the value is. 91. What is assignment by reference?

When assigning a variable a value by reference the variable does not get a chunk of memory allocated for it. Instead it gets a reference to an existing chunk of memory. Modifications to that chunk of memory affect all variables referencing that chunk of memory.

## How are objects compared with the `===` opperator?

They are compared by referrence not by value. If you need to compare two basic objects the easiest way is this.

```javascript
const doesMatch = JSON.stringify(object1) === JSON.stringify(object2)
```

This transforms the the objects into strings making it quick and easy to compare the two strings if there are any key or value differences it will return false. The catch is that the object must be string-able. Objects with circular references will not work with this strategy.

## How do you copy an object by reference?

Using the assignment operator.

```javascript
const newObject = oldObject
```

## How do you copy an= object by reference?

There are a couple strategies for this one. They get a little weird.

The first way is the old school [`Object.assign()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign).

```javascript
const someObject = {
  has: "properties",
  and: { also: { has: { deeply: { nested: { values: 1 } } } } },
}
const otherObject = Object.assign({}, someObject)
```

This will copy all enumerable own properties from the second argument onto the first arguement. We make the first arguemnt an empty object to get a straight copy.

The second way is with the spread operator.

```javascript
const someObject = {
  has: "properties",
  and: { also: { has: { deeply: { nested: { values: 1 } } } } },
}
const otherObject = { ...someObject }
```

There's a downside to this approach. Only the first level of properties are copied over by value everything after that is copied by reference. So... watch out.

The third way is kinda silly but works. Stringify and then parse the source object to the target object.

```javascript
const someObject = {
  has: "properties",
  and: { also: { has: { deeply: { nested: { values: 1 } } } } },
}
const otherObject = JSON.parse(JSON.stringify(someObject))
```

This will copy everything stringable from one to the other.

## How are objects passed to functions?

By reference. This is why it's important to never re-assign or mutate a parameter.

## What is a Map?

A Map object holds key value pairs _in order_ stored where keys and values can be any primitive including objects.

## What is JSON?

*J*ava*S*cript *O*bject *N*otation

It is the string representation of a basic JavaScript object. To make JSON we use:

```javascript
const someObject = {
  has: "values",
}
const string = JSON.stringify(someObject) // '{"has":"values"}'
```

## What is an array?

An array is an ordered collection of values.

## How do you access an item in an array?

With the index of the item.

```javascript
const arr = ["💩", "🚰", "😩"]
arr[1] // 🚰
```

## What is the index?

It is the position of an item in an array.

## What is the index of the first item in an array?

0. Arrays start at 0.

## How do you get the length of an array?

With the length property.

```javascript
const arr = ["💩", "🚰", "😩"]
arr.length // 3
```

## What can you put in an array?

Anything. Okay, maybe not your mom.

## How do you make an array.

Like this.

```javascript
// literal
const fruits = ["🍎", "🍌"]
const animals = new Array("🐵", "🐶")
```

## Does an array have keys?

No.

## What primitive type is an array?

Object.

## Where can you go to find the syntax for all the prototypal functions arrays have?

[MDN.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

## Are some prototypal functions destructive? / Do they mutate the variable they're called on?

Yes. Check MDN to see if the method is destructive or not.

## How do you use a destructive method without mutating the original variable?

You first copy the original variable.

```javascript
const fruits = ["🍎", "🍌"]
const newFruits = [...fruits].reverse() // ["🍌", "🍎"]
```

## How do you add an item to an array?

With the `push` method.

```javascript
const fruits = ["🍎", "🍌"]
fruits.push("🥭")
console.log(fruits) // ["🍎", "🍌", "🥭"]
```

## Is push destructive?

Yes.

## How do you add an item to the beginning of an array?

With the `unshift` method. Why unshift? Because `shift` removes the first element.

```javascript
const fruits = ["🍎", "🍌"]
fruits.unshift("🥭")
console.log(fruits) // ["🥭", "🍎", "🍌"]
```

## What does slice do?

Copy a portion of an array.

## What does splice do?

Removes, replaces, or inserts a portion of an array. See [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice).

## How do you add an item in the middle?

With splice or with stragetic copying.

```javascript
const fruits = ["🍎", "🍌"]
fruits.splice(1, 0, "🥭")
console.log(fruits) // ["🍎", "🥭", "🍌"]
// OR
const fruits = ["🍎", "🍌"]
const newFruits = [...fruits.slice(0, 1), "🥭", ...fruits.slice(1)]
```

The first one is destructive, the original variable is mutated. The second is non-destructive.

## How do you remove an item in the middle?

With splice or with stragetic copying.

```javascript
const fruits = ["🍎", "🥭", "🍌"]
fruits.splice(1, 1)
console.log(fruits) // ["🍎", "🍌"]
// OR
const fruits = ["🍎", "🥭", "🍌"]
const newFruits = [...fruits.slice(0, 1), ...fruits.slice(2)]
```

The first one is destructive because the variable is mutated. The second is non-destructive because the variable is not mutated.

## How do you destructure an array?

Like this:

```javascript
const fruits = ["🍎", "🥭", "🍌"]
const [apple, mango, ...other] = fruits
console.log(apple) // "🍎"
console.log(mango) // "🥭"
console.log(banana) // ["🍌"]
```

The last one isn't required just an example of how to collect n number entries.

## How do you destructure an object?

Like this:

```javascript
const fruits = {
  apple: "🍎",
  mango: "🥭",
  banana: "🍌",
  peach: "🍑",
}
const { apple, mango, ...other } = fruits
console.log(apple) // "🍎"
console.log(mango) // "🥭"
console.log(other) // { banana: "🍌", peach: "🍑" }
```

The last one isn't required just an example of how to collect n number entries.

<a name=""></a>

## How do you find the index of an item in an array?

like this:

```javascript
const fruits = ["🍎", "🥭", "🍌", "🍑", "🍆", "🌮", "🌮"]
const isTacoFruit = fruits.includes("🌮") // true, tacos are life
const tacoIndex = fruits.indexOf("🌮") // 5
const lastTaco = fruits.lastIndexOf("🌮") // 6
const tacoIndexHunt = fruits.findIndex(fruit => fruit === "🌮") // 5
const tacoHunt = fruits.find(fruit => fruit === "🌮") // "🌮"
```

Okay, yes some don't return an index but instead return the entry but these are basically every array search method apart from filter, map, every, forEach, reduce, reduceRight, and sort.

## How do you reverse the order of an array?

There are two ways. One destructive and one non-destructive. Okay, that's a lie, there's only one and it's destructive but you can do an extra step to save the og variable.

```javascript
// destructive
const fruits = ["🍎", "🥭", "🍌", "🍑", "🍆"]
fruits.reverse() // ["🍆", "🍑", "🍌", "🥭", "🍎"]

// non-destructive
const fruits = ["🍎", "🥭", "🍌", "🍑", "🍆"]
const newFruits = [...fruits].reverse() // ["🍆", "🍑", "🍌", "🥭", "🍎"]
```

## How do you write a function generator?

It's a function that returns a function.

```javascript
function findByFood(food) {
  return function (foods) {
    return foods.food.includes(food)
  }
}
const food = [{ food: ["🍎", "🥭", "🍌", "🍑", "🍆"] }, { food: ["🍔", "🍿"] }]
const findApple = findByFood("🍎")
const apple = food.find(findApple) // { food: ["🍎", "🥭", "🍌", "🍑", "🍆"] }
```

## How do you loop through all the items in an array?

Oh the options, so many ways. I should probably made this more specific. Oh well, arrays does make it a little more specific.

So with arrays we have _drum roll_:

- map
- forEach
- standard for loop
- [for...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)

```javascript
const fruits = ["🍎", "🥭", "🍌", "🍑", "🍆"]

// map - returns a new array, takes callback function as an argument
const allTurtles = fruits.map(fruit => {
  return fruit + "🐢"
})
console.log(allTurtles) // ["🍎🐢", "🥭🐢", "🍌🐢", "🍑🐢", "🍆🐢"]

// forEach - returns void, takes a callback function as an argument
const allTurtles = []
fruits.forEach(fruit => {
  allTurtles.push(`${fruit}🐢`)
})
console.log(allTurtles) // ["🍎🐢", "🥭🐢", "🍌🐢", "🍑🐢", "🍆🐢"]

// standard for loop
const allTurtles = []
for (let i = 0; i < fruits.length; i++) {
  const fruit = fruits[i]
  allTurtles.push(`${fruit}🐢`)
}
console.log(allTurtles) // ["🍎🐢", "🥭🐢", "🍌🐢", "🍑🐢", "🍆🐢"]

// for...of
for (const fruit of fruits) {
  console.log(fruit) // "🍎"
}
```

## How do you loop through all the items in an object?

First thing you need to do is not work with an object. Generally speaking objects are not iterable. That is you can not iterate over the key:value pairs like you can iterterate over the index:value pairs of an array. So the first they we need to do is get an interable we can work with.

Here are our options.

- [Object.entries](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)
- [Object.keys](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
- [Object.values](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values)
- [for...in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)

```javascript
const fruits = {
  apple: "🍎",
  mango: "🥭",
  banana: "🍌",
  peach: "🍑",
  eggplant: "🍆",
}
// Object.entries
const otherFruits = Object.entries(fruits)
// [["apple", "🍎"], ["mango", "🥭"], ["banana", "🍌"] ...]
// We can shorten this with array destructuring
for (const [key, value] of Object.entries(fruits)) {
  console.log(key) // "apple"
  console.log(value) // "🍎"
}

// Object.keys
const keys = Object.keys(fruits) // ["apple", "mango", ...]
keys.map(key => {
  const fruit = fruits[key]
  console.log(key) // "apple"
  console.log(fruit) // "🍎"
})

// Object.values
const keys = Object.values(fruits) // ["🍎", "🥭", "🍌", "🍑", "🍆"]

// for..in
for (const property in fruits) {
  console.log(property) // "apple"
  const fruit = fruits[property]
  console.log(fruit) // "🍎"
}
```
