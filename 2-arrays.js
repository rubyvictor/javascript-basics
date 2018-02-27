var assertEquals = require("./test-helper");

/* ---------------------- EXERCISE 1 ---------------------- */
// Write a JavaScript function which accept a number as input and insert dashes (-) between each two even numbers. (Sample input: 025486, Sample output: 0-254-8-6)

// function addDashes(numString) {
//   if (numString.length == 0) {
//     return [];
//   }
//   var result = [];
//   for (var i = 0; i < numString.length; i++) {
//     if ((numString[i] % 2 ==0) && (numString[i + 1] % 2 == 0)) {
//       result.push(numString[i]);
//       result.push("-");
//     } else {
//       result.push(numString[i]);
//     }
//   }
//   var newResult = result.join("")
//   return newResult;
// }

// assertEquals(addDashes("025486"), "0-254-8-6"); // check that your function works as expected
// assertEquals(addDashes('111246777'), '1112-4-6777') // uncomment this and run program. if test passes, uncomment subsequent tests one by one
// assertEquals(addDashes('0021100'), '0-0-2110-0')
// assertEquals(addDashes('800276542'), '8-0-0-27654-2') // uncomment this line and add 2-3 more test cases. Do the same for all remaining functions

/* ---------------------- EXERCISE 2 ---------------------- */
// Write a Javascript function to find the most frequent item of an array. It should return a string denoting the item and the number of times it occurs in the array. (Sample input: [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3], expected output : 'a (5 times)')

// function mostFrequentItem(arr) {

//   var count = {};
//   compare = 0;
//   var mostFrequent;
//   for (var i=0;i<arr.length;i++){
//     var item = arr[i];

//     if (count[item]== undefined) {
//       count[item] = 1;
//     } else {
//       count[item] +=1;
//     }
//     if (count[item]>compare){
//       compare = count[item];
//      mostFrequent = arr[compare];
//     }
//     return mostFrequent;
//   }
// }

// // uncomment the following test to run it
// assertEquals(mostFrequentItem(['a', 'a', 'b']), 'a')
// assertEquals(mostFrequentItem(['a', 'b', 'b', 'b', 'c', 'a', 'b', 'a', 'b']), 'b')
// assertEquals(mostFrequentItem(['yes', 'yes', 'no', 'no', 'yes']), 'yes')

/* ---------------------- EXERCISE 3 ---------------------- */
// Write a Javascript function to remove duplicate items from an array (ignore case sensitivity). (Sample input : [1, 'a', 'A', 'b', 2, 2], expected output: [1, 'a', 'b', 2])
function removeDuplicateItems(arr) {
//   for (var i = 0; i < arr.length; i++) {
//     var upperCase = arr[i].toUpperCase();
//     var lowerCase = arr[i].toUpperCase();
//     let (upperCase === lowerCase) == true;
// }
  var unique = arr.filter(function(item, i, array) {
    return array.indexOf(item) === i;
  });
  return unique;
  // let uniqueArray = [];
  // for (let i = 0; i < arr.length; i++) {
  //   if (uniqueArray.indexOf(arr[i]) == -1) {
  //     uniqueArray.push(arr[i]);
  //   }
  // }
  // return uniqueArray;
}

assertEquals(removeDuplicateItems([1, 1, "a"]), [1, "a"]);
assertEquals(removeDuplicateItems([1, 1, "a", "A"]), [1, "a"]);
assertEquals(removeDuplicateItems([1, "a", "A", "b", "B", 2, 2]), [
  1,
  "a",
  "b",
  2
]);

/* ---------------------- EXERCISE 4 ---------------------- */
// Write a Javascript function to compute the union of two arrays. the returned array should be sorted in ascending order (Sample input: union([1, 2, 3], [100, 2, 1, 10]), expected output: [1, 2, 3, 10, 100])
function union(array1, array2) {
  var a = new Set(array1);
  var b = new Set(array2);
  console.log(a);
  console.log(b);
  let joined = new Set([...a, ...b]);
  console.log(joined);
  var joinedArray = Array.from(joined).sort();
  return joinedArray;
}

assertEquals(union([1, 2], [2, 3]), [1, 2, 3]);
assertEquals(union([1, 2, 3], [100, 2, 1, 10]), [1, 2, 3, 10, 100]);
assertEquals(union([2, 5, 9], [4, 2, 7, 6]), [2, 4, 5, 6, 7, 9]);

// /* ---------------------- EXERCISE 5 ---------------------- */
// // Write a Javascript function to compute sum of a union. (Hint: Reuse the union() function which you wrote!) (Sample input: intersection([1, 2, 3], [1, 2]), expected output: 3)
function unionSum(array1, array2) {
  var unionArray = union(array1, array2);
  var sumUnionArray = unionArray.reduce((prev, curr) => prev + curr);
  return sumUnionArray;
}
assertEquals(unionSum([1, 2, 3], [1, 2]), 6);
assertEquals(unionSum([1, 2, 3, 4], [2, 3, 4]), 10);
assertEquals(unionSum([2000, 50, 551, 550, 23], [551, 50, 23]), 3174);

/* ---------------------- EXERCISE 1 ---------------------- */
// Define a function that returns the sum of an array
// function sum(array) {
// var newArray = array.reduce((prev, curr) => prev + curr);
// return newArray;
// }
// assertEquals(sum([1, 2, 3, 4]), 10);
// assertEquals(sum([10, 10, 10]), 30);

/* ---------------------- EXERCISE 2 ---------------------- */
// Define a function that returns an array of even numbers
// function evenNumbersOnly(array) {
// var even = function(num) {
//   return num % 2 === 0;
// };

// var evenArray = array.filter(even);
// return evenArray;
// }

// assertEquals(evenNumbersOnly([1, 2, 3, 4]), [2, 4]);
// assertEquals(evenNumbersOnly([10, 11, 12]), [10, 12]);

/* ---------------------- EXERCISE 3 ---------------------- */
// Define a function that returns the sum of even numbers in the array
// hint: reuse the 2 functions that you defined earlier!
// function sumEvenNumbers(array) {
// return sum(evenNumbersOnly(array));
// }

// assertEquals(sumEvenNumbers([1, 2, 3, 4]), 6);
// assertEquals(sumEvenNumbers([10, 11, 12]), 22);
// assertEquals(sumEvenNumbers([3,6,9,10]),16);

//write 1-2 additional test cases for each function!
