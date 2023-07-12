// Answer 1

function mergeIntervals(intervals) {
    // Sort the intervals by start time.
    intervals.sort((a, b) => a[0] - b[0]);
  
    // Initialize the merged intervals array.
    const mergedIntervals = [];
  
    // Iterate over the intervals.
    for (let i = 0; i < intervals.length; i++) {
      // Initialize the current interval.
      const currentInterval = intervals[i];
  
      // If the current interval does not overlap with the previous interval,
      // add it to the merged intervals array.
      if (mergedIntervals.length === 0 || mergedIntervals[mergedIntervals.length - 1][1] < currentInterval[0]) {
        mergedIntervals.push(currentInterval);
      } else {
        // Otherwise, merge the current interval with the previous interval.
        mergedIntervals[mergedIntervals.length - 1][1] = Math.max(mergedIntervals[mergedIntervals.length - 1][1], currentInterval[1]);
      }
    }
  
    return mergedIntervals;
  }
  

  //Answer 2

  function sortColors(nums) {
    // Initialize the pointers for the three colors.
    let red_ptr = 0;
    let white_ptr = 0;
    let blue_ptr = nums.length - 1;
  
    // Iterate over the array.
    while (red_ptr <= blue_ptr) {
      // If the current element is red, swap it with the element at the red pointer.
      if (nums[red_ptr] === 0) {
        [nums[red_ptr], nums[white_ptr]] = [nums[white_ptr], nums[red_ptr]];
        red_ptr += 1;
        white_ptr += 1;
      }
      // If the current element is white, do nothing.
      else if (nums[red_ptr] === 1) {
        red_ptr += 1;
      }
      // If the current element is blue, swap it with the element at the blue pointer.
      else {
        [nums[red_ptr], nums[blue_ptr]] = [nums[blue_ptr], nums[red_ptr]];
        blue_ptr -= 1;
      }
    }
  
    return nums;
  }

  
  //answer 3
  function firstBadVersion(n) {
    // Initialize the low and high pointers.
    let low = 1;
    let high = n;
  
    // Iterate until the low and high pointers meet.
    while (low <= high) {
      // Calculate the mid pointer.
      let mid = Math.floor((low + high) / 2);
  
      // If the mid pointer is bad, return it.
      if (isBadVersion(mid)) {
        return mid;
      }
      // Otherwise, move the high pointer to the mid pointer - 1.
      else {
        high = mid - 1;
      }
    }
  
    // If the loop terminates, the low pointer is the first bad version.
    return low;
  }
  
//Test Case
  const n = 5;
const bad = 4;
const firstBadVersion = firstBadVersion(n);
console.log(firstBadVersion); // 4

///Answer 4
function maxGap(nums) {
    // Initialize the maximum difference.
    let max_diff = 0;
  
    // Initialize the previous element.
    let prev = nums[0];
  
    // Iterate over the array.
    for (let i = 1; i < nums.length; i++) {
      // Calculate the difference between the current element and the previous element.
      const diff = nums[i] - prev;
  
      // Update the maximum difference if necessary.
      max_diff = Math.max(max_diff, diff);
  
      // Update the previous element.
      prev = nums[i];
    }
  
    // Return the maximum difference.
    return max_diff;
  }

  const nums = [3, 6, 9, 1];
const max_diff = maxGap(nums);
console.log(max_diff); // 3


  //Answer 5
  function containsDuplicate(nums) {
    // Initialize a set to store the elements of the array.
    const seen = new Set();
  
    // Iterate over the array.
    for (const num of nums) {
      // If the element is already in the set, return true.
      if (seen.has(num)) {
        return true;
      }
  
      // Otherwise, add the element to the set.
      seen.add(num);
    }
  
    // If the loop terminates, the array does not contain duplicates.
    return false;
  }
  
//  Test case
const numbers = [1, 2, 3, 1];
const containsDuplicate = containsDuplicate(numbers);
console.log(containsDuplicate); // true



  //Answer 6

  function minimumArrows(points) {
    // Initialize the arrows array.
    const arrows = [];
  
    // Iterate over the balloons.
    for (const balloon of points) {
      // Check if the balloon is not already burst by an arrow.
      if (balloon not in arrows) {
        // Add the balloon to the arrows array.
        arrows.push(balloon);
      }
    }
  
    // Sort the arrows array by the x-coordinate.
    arrows.sort((a, b) => a[0] - b[0]);
  
    // Initialize the minimum number of arrows.
    let min_arrows = len(arrows);
  
    // Iterate over the arrows.
    for (let i = 0; i < len(arrows); i++) {
      // Check if the current arrow bursts any of the remaining balloons.
      for (let j = i + 1; j < len(arrows); j++) {
        if (arrows[i][1] >= arrows[j][0]) {
          // The current arrow bursts the balloon at index j.
          arrows[j] = None;
        }
      }
  
      // Update the minimum number of arrows.
      min_arrows = min(min_arrows, len(list(filter(None, arrows))));
    }
  
    // Return the minimum number of arrows.
    return min_arrows;
  }
  
  const points = [[1, 2], [3, 4], [5, 6], [7, 8]];
const min_arrows = minimumArrows(points);
console.log(min_arrows); // 4




//Answer 7
function longestIncreasingSubsequence(nums) {
    // Initialize the dp array.
    const dp = [1] * len(nums);
  
    // Iterate over the array.
    for (let i = 1; i < len(nums); i++) {
      for (let j = 0; j < i; j++) {
        // If the current element is strictly greater than the previous element,
        // update the dp array.
        if (nums[i] > nums[j]) {
          dp[i] = max(dp[i], dp[j] + 1);
        }
      }
    }
  
    // Return the maximum value in the dp array.
    return max(dp);
  }
  
  const nums = [10, 9, 2, 5, 3, 7, 101, 18];
const lis = longestIncreasingSubsequence(nums);
console.log(lis); // 4




//Answer 8
function find132pattern(nums) {
    // Initialize the min_element and stack.
    let min_element = Infinity;
    const stack = [];
  
    // Iterate over the array.
    for (let i = 0; i < len(nums); i++) {
      // If the current element is smaller than the minimum element, update the minimum element.
      if (nums[i] < min_element) {
        min_element = nums[i];
      }
  
      // Otherwise, check if the current element is greater than the top element of the stack and the top element is less than the minimum element.
      else if (nums[i] > stack[-1] && nums[i] < min_element) {
        // There is a 132 pattern.
        return true;
      }
  
      // Push the current element to the stack.
      else {
        stack.push(nums[i]);
      }
    }
  
    // There is no 132 pattern.
    return false;
  }

  const nums = [1, 2, 3, 4];
const has_132_pattern = find132pattern(nums);
console.log(has_132_pattern); // false




