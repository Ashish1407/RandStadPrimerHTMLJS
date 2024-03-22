//Find number 2 in the array.
const arr = [1, 2, 3, 4, 5, 6];
const index = arr.indexOf(2);
console.log(index);

// Remove "apple" from the array:
const fruits = ["banana", "mango", "apple", "kiwi"];
fruits.splice(2, 1);

//Reverse the order of elements in the array:
const numbers = [23, 45, 12, 67, 89, 34];
numbers.reverse();
console.log("Reversed array:", numbers);

// Find the maximum value in the array
// const numbers = [23, 45, 12, 67, 89, 34];
const max = Math.max(...numbers);
console.log("Maximum value:", max);

// Function to find the second-largest number in the array:
const nums = [10, 5, 8, 20, 15, 12];
function secondLargest(arr) {
  const sortedArray = arr.slice().sort((a, b) => b - a);
  console.log(sortedArray[1]);
}
secondLargest(nums);

// Function to return the sum of all even numbers in the array:
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function evenSum(arr) {
  return arr.reduce((sum, num) => (num % 2 === 0 ? sum + num : sum), 0);
}
console.log("Sum of even numbers in the array is:" + evenSum(array));

//Create a students array containing objects of students:
const students = [
  { name: "Ashish", age: 21 },
  { name: "Raj", age: 22 },
  { name: "Amlan", age: 22 },
];
console.log("Students array:", students);
