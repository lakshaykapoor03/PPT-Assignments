//Answer 1

function arraysIntersection(arr1, arr2, arr3) {
    let i = 0;
    let j = 0;
    let k = 0;
    const result = [];
  
    while (i < arr1.length && j < arr2.length && k < arr3.length) {
      if (arr1[i] === arr2[j] && arr2[j] === arr3[k]) {
        result.push(arr1[i]);
        i++;
        j++;
        k++;
      } else {
        if (arr1[i] < arr2[j]) {
          i++;
        } else if (arr2[j] < arr3[k]) {
          j++;
        } else {
          k++;
        }
      }
    }
  
    return result;
  }
  
  // Test case
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = [1, 2, 5, 7, 9];
  const arr3 = [1, 3, 4, 5, 8];
  const intersection = arraysIntersection(arr1, arr2, arr3);
  console.log(intersection); // Output: [1, 5]



  //Answer 2
  function findDisjoint(nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    const result = [[], []];
  
    for (let num of set1) {
      if (!set2.has(num)) {
        result[0].push(num);
      }
    }
  
    for (let num of set2) {
      if (!set1.has(num)) {
        result[1].push(num);
      }
    }
  
    return result;
  }
  
  // Test case
  const nums1 = [1, 2, 3];
  const nums2 = [2, 4, 6];
  const answer = findDisjoint(nums1, nums2);
  console.log(answer); // Output: [[1, 3], [4, 6]]

  
  //Answer 3

  function transpose(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const transposed = [];
  
    for (let j = 0; j < cols; j++) {
      const newRow = [];
      for (let i = 0; i < rows; i++) {
        newRow.push(matrix[i][j]);
      }
      transposed.push(newRow);
    }
  
    return transposed;
  }
  
  // Test case
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  const transposedMatrix = transpose(matrix);
  console.log(transposedMatrix);
  // Output: [[1, 4, 7], [2, 5, 8], [3, 6, 9]]

  
  //Answer 4

  function arrayPairSum(nums) {
    nums.sort((a, b) => a - b);
    let sum = 0;
  
    for (let i = 0; i < nums.length; i += 2) {
      sum += nums[i];
    }
  
    return sum;
  }
  
  // Test case
  const nums = [1, 4, 3, 2];
  const maxSum = arrayPairSum(nums);
  console.log(maxSum); // Output: 4

  //Answer 5

  
  function arrangeCoins(n) {
    let rows = 0;
  
    while (n >= rows + 1) {
      n -= rows + 1;
      rows++;
    }
  
    return rows;
  }
  
  // Test case
  const n = 5;
  const completeRows = arrangeCoins(n);
  console.log(completeRows); // Output: 2



  //Answer 6

  function sortedSquares(nums) {
    const result = [];
  
    let left = 0;
    let right = nums.length - 1;
    let index = right;
  
    while (left <= right) {
      const leftSquare = nums[left] * nums[left];
      const rightSquare = nums[right] * nums[right];
  
      if (leftSquare > rightSquare) {
        result[index] = leftSquare;
        left++;
      } else {
        result[index] = rightSquare;
        right--;
      }
  
      index--;
    }
  
    return result;
  }
  
  // Test case
  const nums = [-4, -1, 0, 3, 10];
  const squares = sortedSquares(nums);
  console.log(squares); // Output: [0, 1, 9, 16, 100]

  
  //Answer 7

  function maxCount(m, n, ops) {
    let minRow = m;
    let minCol = n;
  
    for (let op of ops) {
      minRow = Math.min(minRow, op[0]);
      minCol = Math.min(minCol, op[1]);
    }
  
    return minRow * minCol;
  }
  
  // Test case
  const m = 3;
  const n = 3;
  const ops = [[2, 2], [3, 3]];
  const count = maxCount(m, n, ops);
  console.log(count); // Output: 4

  
  //Answer 8

  function shuffle(nums, n) {
    const result = [];
  
    for (let i = 0; i < n; i++) {
      result.push(nums[i]);
      result.push(nums[i + n]);
    }
  
    return result;
  }
  
  // Test case
  const nums = [2, 5, 1, 3, 4, 7];
  const n = 3;
  const rearranged = shuffle(nums, n);
  console.log(rearranged); // Output: [2, 3, 5, 4, 1, 7]
  
  
