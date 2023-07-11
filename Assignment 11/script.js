//Answer 1

function squareRoot(x) {
    "use strict";
  
    if (x < 0) {
      throw new Error("x must be non-negative");
    }
  
    let low = 0;
    let high = x;
    let mid;
    while (low <= high) {
      mid = Math.floor((low + high) / 2);
      if (mid * mid <= x && (mid + 1) * (mid + 1) > x) {
        return mid;
      } else if (mid * mid < x) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    return low - 1;
  }
  
  if (require.main === module) {
    console.log(squareRoot(16)); // 4
    console.log(squareRoot(100)); // 10
  }



  //Answer 2

  function findPeakElement(nums) {
    "use strict";
  
    if (nums.length === 1) {
      return 0;
    }
  
    let low = 0;
    let high = nums.length - 1;
    while (low < high) {
      let mid = Math.floor((low + high) / 2);
      if (nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) {
        return mid;
      } else if (nums[mid] < nums[mid - 1]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    return -1;
  }
  
  if (require.main === module) {
    nums = [1, 2, 3, 1];
    console.log(findPeakElement(nums)); // 2
  }
  

  //Answer 3

  function findMissingNumber(nums) {

  
    let expectedSum = 0;
    for (let i = 0; i <= nums.length; i++) {
      expectedSum += i;
    }
    let actualSum = 0;
    for (let num of nums) {
      actualSum += num;
    }
    return expectedSum - actualSum;
  }
  
  if (require.main === module) {
    nums = [3, 0, 1];
    console.log(findMissingNumber(nums)); // 2
  }

  //Answer 4

  function findRepeatedNumber(nums) {
    "use strict";
  
    let seen = new Set();
    for (let num of nums) {
      if (seen.has(num)) {
        return num;
      } else {
        seen.add(num);
      }
    }
    return -1;
  }
  
  if (require.main === module) {
    nums = [1, 2, 3, 4, 1];
    console.log(findRepeatedNumber(nums)); // 1
  }





//   Answer 5

function intersection(nums1, nums2) {
    "use strict";
  
    const seen = new Set();
    const intersection = [];
    for (const num of nums1) {
      if (!seen.has(num)) {
        seen.add(num);
        if (nums2.includes(num)) {
          intersection.push(num);
        }
      }
    }
    return intersection;
  }
  
  if (require.main === module) {
    nums1 = [1, 2, 2, 1];
    nums2 = [2, 2];
    console.log(intersection(nums1, nums2)); // [2]
  }



  
  //Answer 6
  function findMinimumElement(nums) {
    "use strict";
  
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
  
  if (require.main === module) {
    nums = [3, 4, 5, 1, 2];
    console.log(findMinimumElement(nums)); // 1
  }



  //answer 7

  function searchRange(nums, target) {
    "use strict";
  
    let low = 0;
    let high = nums.length - 1;
    let start = -1;
    let end = -1;
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (nums[mid] < target) {
        low = mid + 1;
      } else if (nums[mid] > target) {
        high = mid - 1;
      } else {
        start = mid;
        while (nums[start] == target) {
          start--;
        }
        end = mid;
        while (nums[end] == target) {
          end++;
        }
        break;
      }
    }
    return [start + 1, end - 1];
  }
  
  if (require.main === module) {
    nums = [5, 7, 7, 7, 8, 9];
    target = 7;
    console.log(searchRange(nums, target)); // [2, 4]
  }

  
  //answer 8

  function intersection(nums1, nums2) {
    "use strict";
  
    const seen = new Set();
    const intersection = [];
    for (const num of nums1) {
      if (seen.has(num)) {
        continue;
      }
      seen.add(num);
      if (nums2.includes(num)) {
        intersection.push(num);
      }
    }
    return intersection;
  }
  
  if (require.main === module) {
    nums1 = [1, 2, 2, 1];
    nums2 = [2, 2];
    console.log(intersection(nums1, nums2)); // [2,2]
  }
