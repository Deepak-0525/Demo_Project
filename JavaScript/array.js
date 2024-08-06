// Creating an array
let fruits = ["apple", "banana", "cherry","Orange"];

// Accessing elements
console.log(fruits[0]); // Outputs: apple
console.log(fruits[1]); // Outputs: banana
console.log(fruits[2]); // Outputs: cherry
console.log(fruits[3])

// Adding an element
fruits.push("date");    // Adds "date" to the end of the array
console.log(fruits);    // Outputs: ["apple", "banana", "cherry", "date"]

// Removing an element
fruits.pop();           // Removes the last element ("date")
console.log(fruits);    // Outputs: ["apple", "banana", "cherry"]

// Looping through an array
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);  // Outputs each fruit in the array
}
