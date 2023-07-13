//  Answer 1

function convert1DArrayTo2DArray(original, m, n) {
    if (original.length !== m * n) {
      return [];
    }
  
    const array = [];
    for (let i = 0; i < m; i++) {
      const row = original.slice(i * n, (i + 1) * n);
      array.push(row);
    }
  
    return array;
  }
  
  const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const m = 3;
const n = 3;

const array = convert1DArrayTo2DArray(original, m, n);

console.log(array);

//  Answer 2
function arrangeCoins(n) {
    let sum = 0;
    let count = 0;
  
    while (sum < n) {
      count += 1;
      sum += count;
    }
  
    return sum === n ? count : count - 1;
  }
  
  const n = 5;

const result = arrangeCoins(n);

console.log(result); // 2

//Answer 3


function squaresOfSortedArray(nums) {
    const squares = [];
    for (let i = 0; i < nums.length; i++) {
      squares.push(nums[i] * nums[i]);
    }
  
    squares.sort((a, b) => a - b);
  
    return squares;
  }
  

  const nums = [-4, -1, 0, 3, 10];

const squares = squaresOfSortedArray(nums);

console.log(squares); // [0, 1, 9, 16, 100]

//Answer 4

function findNumbersNotPresentInTwoArrays(nums1, nums2) {
    const answer = [[], []];
  
    const set1 = new Set();
    const set2 = new Set();
  
    for (const num of nums1) {
      set1.add(num);
    }
  
    for (const num of nums2) {
      set2.add(num);
    }
  
    for (const num of set1) {
      if (!set2.has(num)) {
        answer[0].push(num);
      }
    }
  
    for (const num of set2) {
      if (!set1.has(num)) {
        answer[1].push(num);
      }
    }
  
    return answer;
  }
  
  const nums1 = [1, 2, 3];
const nums2 = [2, 4, 6];

const answer = findNumbersNotPresentInTwoArrays(nums1, nums2);

console.log(answer); // [[1, 3], [4, 6]]

// Answer 5

function distanceBetweenTwoArrays(arr1, arr2, d) {
    const count = 0;
  
    for (const num of arr1) {
      const found = false;
  
      for (const otherNum of arr2) {
        if (Math.abs(num - otherNum) <= d) {
          found = true;
          break;
        }
      }
  
      if (!found) {
        count++;
      }
    }
  
    return count;
  }
  
  const arr1 = [4, 5, 8];
const arr2 = [10, 9, 1, 8];
const d = 2;

const count = distanceBetweenTwoArrays(arr1, arr2, d);

console.log(count); // 2

// Answer 6

function findDuplicates(nums) {
    const seen = new Set();
    const duplicates = [];
  
    for (const num of nums) {
      if (seen.has(num)) {
        duplicates.push(num);
      } else {
        seen.add(num);
      }
    }
  
    return duplicates;
  }

  
  const nums = [4, 3, 2, 7, 8, 2, 3, 1];

const duplicates = findDuplicates(nums);

console.log(duplicates); // [2,3]

// Answer 7

function findMinimumInRotatedSortedArray(nums) {
    let low = 0;
    let high = nums.length - 1;
  
    while (low < high) {
      let mid = Math.floor((low + high) / 2);
  
      if (nums[mid] < nums[high]) {
        // The minimum element is in the left half.
        high = mid;
      } else {
        // The minimum element is in the right half.
        low = mid + 1;
      }
    }
  
    return nums[low];
  }
  
  const nums = [3, 4, 5, 1, 2];

const minimum = findMinimumInRotatedSortedArray(nums);

console.log(minimum); // 1

// Answer 8

function findOriginalArrayFromDoubledArray(changed) {
    const seen = new Set();
    const original = [];
  
    for (const num of changed) {
      if (seen.has(num * 2)) {
        original.push(num);
      } else {
        seen.add(num);
      }
    }
  
    return original.length === 0 ? [] : original;
  }

  const changed = [1, 3, 4, 2, 6, 8];

const original = findOriginalArrayFromDoubledArray(changed);

console.log(original); // [1,3,4]

  








