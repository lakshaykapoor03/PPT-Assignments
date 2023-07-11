//Answer 1

function findPermutation(s) {
    const n = s.length;
    const perm = new Array(n + 1);
    let min = 0;
    let max = n;
  
    for (let i = 0; i < n; i++) {
      if (s[i] === 'I') {
        perm[i] = min++;
      } else {
        perm[i] = max--;
      }
    }
  
    perm[n] = min; // or max, they will be equal at this point
  
    return perm;
  }
  
  // Example usage:
  const s = "IDID";
  const perm = findPermutation(s);
  console.log(perm);



  //Answer 4

  function findMaxLength(nums) {
    const countMap = new Map(); // Map to store count and its corresponding index
    countMap.set(0, -1); // Initialize the map with count 0 at index -1
    let maxLength = 0;
    let count = 0;
  
    for (let i = 0; i < nums.length; i++) {
      // Increment count if the current element is 1, else decrement count
      count += nums[i] === 1 ? 1 : -1;
  
      if (countMap.has(count)) {
        // If count is already present in the map, update the maxLength
        maxLength = Math.max(maxLength, i - countMap.get(count));
      } else {
        // If count is not present in the map, store it with its index
        countMap.set(count, i);
      }
    }
  
    return maxLength;
  }
  
  // Example usage:
  const nums = [0, 1];
  const maxLength = findMaxLength(nums);
  console.log(maxLength);



  //Answer 5

  function minProductSum(nums1, nums2) {
    nums1.sort((a, b) => a - b); // Sort nums1 in ascending order
    nums2.sort((a, b) => b - a); // Sort nums2 in descending order
    let minProductSum = 0;
  
    for (let i = 0; i < nums1.length; i++) {
      minProductSum += nums1[i] * nums2[i];
    }
  
    return minProductSum;
  }
  
  // Example usage:
  const nums1 = [5, 3, 4, 2];
  const nums2 = [4, 2, 2, 5];
  const minimumProductSum = minProductSum(nums1, nums2);
  console.log(minimumProductSum);
  
  

  //Answer 6

  function findOriginalArray(changed) {
    if (changed.length % 2 !== 0) {
      
      return [];
    }
  
    const freqMap = new Map(); 
    const original = [];
  
    // Count the frequency of elements in changed
    for (const num of changed) {
      freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }
  
    // Iterate through changed to reconstruct the original array
    for (const num of changed) {
      if (freqMap.get(num) === 0) {
        // If the current element has already been used to form the original array
        continue;
      }
  
      const doubledNum = num * 2;
  
      if (!freqMap.has(doubledNum) || freqMap.get(doubledNum) === 0) {
        // If the doubledNum is not present in changed or it has already been used
        return [];
      }
  
      // Append num to the original array
      original.push(num);
  
      // Decrement the frequencies of num and doubledNum in freqMap
      freqMap.set(num, freqMap.get(num) - 1);
      freqMap.set(doubledNum, freqMap.get(doubledNum) - 1);
    }
  
    return original;
  }
  
  // Example usage:
  const changed = [1, 3, 4, 2, 6, 8];
  const original = findOriginalArray(changed);
  console.log(original);



  //Answer 7

  function spiralMatrix(n) {
    // Create a 2D array of size n x n.
    const matrix = Array.from({ length: n }, () => Array(n).fill(0));
  
    // Initialize the current row and column.
    let row = 0;
    let col = 0;
  
    // Initialize the direction.
    let direction = 1;
  
    // Iterate from 1 to n * n.
    for (let i = 1; i <= n * n; i++) {
      // Fill in the current cell.
      matrix[row][col] = i;
  
      // Update the current row and column based on the direction.
      if (direction === 1) {
        col++;
      } else if (direction === 2) {
        row++;
      } else if (direction === 3) {
        col--;
      } else {
        row--;
      }
  
      // Change the direction.
      direction = (direction + 1) % 4;
    }
  
    // Return the matrix.
    return matrix;
  }
  
  // Print the spiral matrix.
  const matrix = spiralMatrix(5);
  for (const row of matrix) {
    console.log(row);
  }



  //Answer 8

  function spiralMatrix(n) {
    // Create a 2D array of size n x n.
    const matrix = Array.from({ length: n }, () => Array(n).fill(0));
  
    // Initialize the current row and column.
    let row = 0;
    let col = 0;
  
    // Initialize the direction.
    let direction = 1;
  
    // Iterate from 1 to n * n.
    for (let i = 1; i <= n * n; i++) {
      // Fill in the current cell.
      matrix[row][col] = i;
  
      // Update the current row and column based on the direction.
      if (direction === 1) {
        col++;
      } else if (direction === 2) {
        row++;
      } else if (direction === 3) {
        col--;
      } else {
        row--;
      }
  
      // Change the direction.
      direction = (direction + 1) % 4;
    }
  
    // Return the matrix.
    return matrix;
  }
  
  // Print the spiral matrix.
  const matrix = spiralMatrix(5);
  for (const row of matrix) {
    console.log(row);
  }
  

  

