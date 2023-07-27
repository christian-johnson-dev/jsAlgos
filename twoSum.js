//? Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

//*You may assume that each input would have exactly one solution, and you may not use the same element twice.
//*You can return the answer in any order.

//==== Inputs ====//
const array1 = [1, 5, 7, 10];
const num1 = 15;

const array2 = [4, 10, 0, 12, 15];
const num2 = 12;

const array3 = [16, 22, 78, -35];
const num3 = 43;

//brute force method
const twoSumLinear = (arr, target) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        result.push(arr[i], arr[j]);
      }
    }
  }
  return result;
};

console.log(twoSumLinear(array1, num1));
console.log(twoSumLinear(array2, num2));
console.log(twoSumLinear(array3, num3));

//object method

// const twoSumObjecct = (arr, target) => {
//   const map = {};

//   for (let i = 0; i < arr.length; i++) {
//     const complement = target - arr[i];
//     console.log(complement);

//     if (map[arr[i]] !== undefined) {
//       return [map[arr[i]], i];
//     } else {
//       map[complement] = i;
//     }
//   }
//   return null;
// };

// console.log(twoSumObject(array1, num1));
// console.log(twoSumObject(array2, num2));
// console.log(twoSumObject(array3, num3));
