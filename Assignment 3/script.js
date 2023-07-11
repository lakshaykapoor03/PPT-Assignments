//Answer 1

function threeSumClosest(nums, target) {
    nums.sort((a, b) => a - b);
    const n = nums.length;
    let closestSum = nums[0] + nums[1] + nums[2];
  
    for (let i = 0; i < n - 2; i++) {
      let left = i + 1;
      let right = n - 1;
  
      while (left < right) {
        const sum = nums[i] + nums[left] + nums[right];
  
        if (sum === target) {
          return sum; // Found the target sum
        }
  
        if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
          closestSum = sum; // Update the closest sum
        }
  
        if (sum < target) {
          left++; // Move the left pointer to increase the sum
        } else {
          right--; // Move the right pointer to decrease the sum
        }
      }
    }
  
    return closestSum;
  }
  
  // Test case
  const nums = [-1, 2, 1, -4];
  const target = 1;
  const closestSum = threeSumClosest(nums, target);
  console.log(closestSum); // Output: 2

  //Answer 2

  function fourSum(nums, target) {
    nums.sort((a, b) => a - b);
    const n = nums.length;
    const quadruplets = [];
  
    for (let i = 0; i < n - 3; i++) {
      if (i > 0 && nums[i] === nums[i - 1]) {
        continue; // Skip duplicate values for the first element
      }
  
      for (let j = i + 1; j < n - 2; j++) {
        if (j > i + 1 && nums[j] === nums[j - 1]) {
          continue; // Skip duplicate values for the second element
        }
  
        let left = j + 1;
        let right = n - 1;
  
        while (left < right) {
          const sum = nums[i] + nums[j] + nums[left] + nums[right];
  
          if (sum === target) {
            quadruplets.push([nums[i], nums[j], nums[left], nums[right]]);
            left++;
            right--;
  
            while (left < right && nums[left] === nums[left - 1]) {
              left++; // Skip duplicate values for the third element
            }
            while (left < right && nums[right] === nums[right + 1]) {
              right--; // Skip duplicate values for the fourth element
            }
          } else if (sum < target) {
            left++; // Move the left pointer to increase the sum
          } else {
            right--; // Move the right pointer to decrease the sum
          }
        }
      }
    }
  
    return quadruplets;
  }
  
  // Test case
  const nums = [1, 0, -1, 0, -2, 2];
  const target = 0;
  const result = fourSum(nums, target);
  console.log(result); // Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]



  //Answer 3
  function nextPermutation(nums) {
    const n = nums.length;
    let i = n - 2;
  
    // Find the first decreasing element from right to left
    while (i >= 0 && nums[i] >= nums[i + 1]) {
      i--;
    }
  
    if (i >= 0) {
      let j = n - 1;
  
      // Find the first element greater than nums[i] from right to left
      while (j >= 0 && nums[j] <= nums[i]) {
        j--;
      }
  
      swap(nums, i, j);
    }
  
    reverse(nums, i + 1);
  }
  
  function swap(nums, i, j) {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }
  
  function reverse(nums, start) {
    let left = start;
    let right = nums.length - 1;
  
    while (left < right) {
      swap(nums, left, right);
      left++;
      right--;
    }
  }
  
  // Test case
  const nums = [1, 2, 3];
  nextPermutation(nums);
  console.log(nums); // Output: [1, 3, 2]



//   Answer 4

function searchInsert(nums, target) {
    let left = 0;
    let right = nums.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (nums[mid] === target) {
        return mid; // Found the target
      } else if (nums[mid] < target) {
        left = mid + 1; // Search the right half
      } else {
        right = mid - 1; // Search the left half
      }
    }
  
    return left; // Target not found, return the insertion index
  }
  
  // Test case
  const nums = [1, 3, 5, 6];
  const target = 5;
  const index = searchInsert(nums, target);
  console.log(index); // Output: 2



  //Answer 5
  function plusOne(digits) {
    const n = digits.length;
  
    for (let i = n - 1; i >= 0; i--) {
      if (digits[i] < 9) {
        digits[i]++;
        return digits;
      } else {
        digits[i] = 0;
      }
    }
  
    // If we reach here, it means all digits were 9
    digits.unshift(1);
    return digits;
  }
  
  // Test case
  const digits = [1, 2, 3];
  const result = plusOne(digits);
  console.log(result); // Output: [1, 2, 4]



  //Answer 6
  function singleNumber(nums) {
    let result = 0;
  
    for (let num of nums) {
      result ^= num;
    }
  
    return result;
  }
  
  // Test case
  const nums = [2, 2, 1];
  const single = singleNumber(nums);
  console.log(single); // Output: 1



  //Answer 7

  function findMissingRanges(nums, lower, upper) {
    const result = [];
    
    // Helper function to add ranges to the result
    const addRange = (start, end) => {
      if (start === end) {
        result.push(`${start}`);
      } else {
        result.push(`${start}->${end}`);
      }
    };
    
    // Check if the first element is greater than lower
    if (nums[0] > lower) {
      addRange(lower, nums[0] - 1);
    }
    
    // Check for missing numbers between adjacent elements in nums
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] - nums[i - 1] > 1) {
        addRange(nums[i - 1] + 1, nums[i] - 1);
      }
    }
    
    // Check if the last element is less than upper
    if (nums[nums.length - 1] < upper) {
      addRange(nums[nums.length - 1] + 1, upper);
    }
    
    return result;
  }
  
  // Test case
  const nums = [0, 1, 3, 50, 75];
  const lower = 0;
  const upper = 99;
  const ranges = findMissingRanges(nums, lower, upper);
  console.log(ranges); // Output: [[2,2],[4,49],[51,74],[76,99]]



  //Answer 8

  function canAttendMeetings(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
  
    for (let i = 1; i < intervals.length; i++) {
      if (intervals[i][0] < intervals[i - 1][1]) {
        return false; // Overlapping meetings found
      }
    }
  
    return true; // No overlapping meetings
  }
  
  // Test case
  const intervals = [[0, 30], [5, 10], [15, 20]];
  const canAttend = canAttendMeetings(intervals);
  console.log(canAttend); // Output: false
  
  
  
