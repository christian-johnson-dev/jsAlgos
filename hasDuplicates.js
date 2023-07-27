// ? Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

const array1 = [14, 5, 22, 6, 88, 91];
const array2 = [0, 5, 6, 88, 91, 91];
const array3 = [1, 8, 3, 4, 9, 6, 7, 2, 5];

// * Brute Force Solution
const bruteForce = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }
  return false;
};

// console.log(bruteForce(array1)); // true
// console.log(bruteForce(array2)); // true
// console.log(bruteForce(array3)); // false

// * Sort Solution

const sortDuplicates = (nums) => {
  nums.sort();
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      return true;
    }
  }
  return false;
};

// console.log(sortDuplicates(array1));
// console.log(sortDuplicates(array2));
// console.log(sortDuplicates(array3));

// * Hashmap solution

const hashDuplicates = (nums) => {
  const hashMap = {};
  for (let i = 0; i < nums.length; i++) {
    if (hashMap[nums[i]]) {
      return true;
    } else {
      hashMap[nums[i]] = 1;
    }
  }
  return false;
};
console.log(hashDuplicates(array1));
console.log(hashDuplicates(array2));
console.log(hashDuplicates(array3));

// * New Set Solution
const newSetDuplicates = (nums) => {
  const newNums = new Set(nums);
  console.log(newNums);
  return newNums.size !== nums.length;
};

// console.log(newSetDuplicates(array1));
// console.log(newSetDuplicates(array2));
// console.log(newSetDuplicates(array3));
