// q1 there is no bug
for (var i = 0; i < 5; i++) {
    console.log(i);
  }

// Q2 numbers is stored in an array(this contains more than 1 value). exact elements in the array will be printed since its a const value
  const nuMbers = [1, 2, 3, 4, 5];
  for (let i = 0; i < nuMbers.length; i++) {
    console.log(nuMbers[i]);
  }

// Q3 array iteration operates on every array item 
// for(in) iterates the indices of an array so will print 012
let fruits = ["apple", "banana", "cherry"];
for (let fruit in fruits) {
  console.log(fruit);
}

// to fix the issue use for(of) to print the exact string
let Fruits = ["apple", "banana", "cherry"];
for (let fruit of Fruits) {
  console.log(fruit);
}

// Q4 issue; there is no incrementation happening within the loop so it will never stop running
let i = 0;
while (i < 5) {
  console.log(i);
}

// you will have to put the incrementation within the loop
let i = 0;
while (i < 5) {
  console.log(i); i++
}

// Q5 there are no issues
// it will print out 0 to 4 with an increment of 1
for (let i = 0; i < 5; i++) {
    console.log(i);
  }

// Q6 numbers is an array and is const, so its going to print out the exact value
const Numbers = [1, 2, 3, 4, 5];
for (let i in Numbers) {
  console.log(Numbers[i]);
}

// Q7 names is an array and is const so it'll print the exact string
const names = ["Alice", "Bob", "Charlie"];
for (const name of names) {
  console.log(name);
}

// Q8 bug is the count--, the condition already has an increment 
let count = 10;
for (let i = 0; i < count; i++) {
  console.log("Iteration: " + i);
  count--;
}

// so you should remove the count--
let Count = 10;
for (let i = 0; i < Count; i++) {
  console.log("Iteration: " + i);
}

// Q9 colors is an array and const so will print the exact string
const colors = ["red", "green", "blue"];
for (let color of colors) {
  console.log(color);
}

// Q10 pop() removes the last value
// its going to start by printing 1, but will remove the last value which is 5
// itll start again and increase to 2, but remove the last value now which is 4
// itll start again and increase to 3, and there wont be any last value so itll stop there
// let numbers = [1, 2, 3, 4, 5];
// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
//   numbers.pop();
// }

// to solve this remove the pop()
let numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}