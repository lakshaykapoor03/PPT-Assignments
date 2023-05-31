// Answer 1
function twoSum(nums, target) {
  const complementMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    
    if (complementMap.has(nums[i])) {
      return [complementMap.get(nums[i]), i];
    }
    complementMap.set(complement, i);
  }

  // If no solution is found, return an empty array
  return [];
}

const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
console.log(result);





//Answer 2
function removeElement(nums, val) {
  let k = 0; // Number of elements not equal to val

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i]; // Move the element to the left side of the array
      k++;
    }
  }

  return k;
}

// Example usage
const numbers = [3, 2, 2, 3];
const val = 3;
const finalResult = removeElement(nums, val);
console.log(finalResult);
console.log(nums.slice(0, finalResult)); 





//Answer 3

function searchInsert(nums, target) {
    let left = 0;
    let right = nums.length - 1;
  
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
  
      if (nums[mid] === target) {
        return mid;
      } else if (nums[mid] < target) {
        left = mid + 1; 
        right = mid - 1; 
      }
    }
  
    return left; // Target value not found, return the insertion position
  }
  
  // Example usage
  const nums = [1, 3, 5, 6];
  const target = 5;
  const result = searchInsert(nums, target);
  console.log(result);





//   Answer 4

function plusOne(digits) {
    const n = digits.length;
    
    for (let i = n - 1; i >= 0; i--) {
      if (digits[i] === 9) {
        digits[i] = 0; // Set the digit to 0 if it is 9
      } else {
        digits[i]++;
        return digits; 
      }
    }
    
   
    digits.unshift(1); // Add a new most significant digit
    return digits;
  }
  
  // Example usage
  const digits = [1, 2, 3];
  const result = plusOne(digits);
  console.log(result);

  //Answer 5

  function merge(nums1, m, nums2, n) {
    let i = m - 1; // Pointer for nums1
    let j = n - 1; // Pointer for nums2
    let k = m + n - 1; // Pointer for the merged array
  
    while (i >= 0 && j >= 0) {
      if (nums1[i] > nums2[j]) {
        nums1[k] = nums1[i];
        i--;
      } else {
        nums1[k] = nums2[j];
        j--;
      }
      k--;
    }
  
    // Copy any remaining elements from nums2 to nums1
    while (j >= 0) {
      nums1[k] = nums2[j];
      j--;
      k--;
    }
  }
  
  // Example usage
  const nums1 = [1, 2, 3, 0, 0, 0];
  const m = 3;
  const nums2 = [2, 5, 6];
  const n = 3;
  merge(nums1, m, nums2, n);
  console.log(nums1);



    //Answer 6

    function containsDuplicate(nums) {
        nums.sort();
      
        for (let i = 1; i < nums.length; i++) {
          if (nums[i] === nums[i - 1]) {
            return true; // Duplicate elements found
          }
        }
      
        return false; // No duplicate elements found
      }
      
      // Example usage
      const nums = [1, 2, 3, 1];
      const result = containsDuplicate(nums);
      console.log(result); 



      //Answer 7

      function moveZeroes(nums) {
        let i = 0; // Pointer for placing non-zero elements
        let j = 0; // Pointer for iterating through the array
      
        while (j < nums.length) {
          if (nums[j] !== 0) {
            nums[i] = nums[j];
            i++;
          }
          j++;
        }
      
        // Fill the remaining positions with zeros
        while (i < nums.length) {
          nums[i] = 0;
          i++;
        }
      }
      
      // Example usage
      const nums = [0, 1, 0, 3, 12];
      moveZeroes(nums);
      console.log(nums);



      
      //Answer 8

      function findErrorNums(nums) {
        const numSet = new Set();
        let duplicate, missing;
      
        for (const num of nums) {
          if (!numSet.has(num)) {
            numSet.add(num);
          } else {
            duplicate = num;
          }
        }
      
        for (let i = 1; i <= nums.length; i++) {
          if (!numSet.has(i)) {
            missing = i;
            break;
          }
        }
      
        return [duplicate, missing];
      }
      
      // Example usage
      const nums = [1, 2, 2, 4];
      const result = findErrorNums(nums);
      console.log(result);