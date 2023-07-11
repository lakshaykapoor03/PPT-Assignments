// Answer 1

function arrayPairSum(nums) {
    // Sort the array 
    nums.sort((a, b) => a - b);
    
    let sum = 0;
    
    // Iterate through the sorted array and add the minimum value from each pair
    for (let i = 0; i < nums.length; i += 2) {
      sum += nums[i];
    }
    
    return sum;
  }
  
  // Test case
  const nums = [1, 4, 3, 2];
  const maxSum = arrayPairSum(nums);
  console.log(maxSum); // Output: 4



  // Answer 2
  function distributeCandies(candyType) {
    // Calculate the maximum number of candies Alice can eat
    const maxCandies = candyType.length / 2;
    
    // Count the number of unique candy types
    const uniqueCandies = new Set(candyType).size;
    
    // Return the minimum of maxCandies and uniqueCandies
    return Math.min(maxCandies, uniqueCandies);
  }
  
  // Test case
  const candyType = [1, 1, 2, 2, 3, 3];
  const maxTypes = distributeCandies(candyType);
  console.log(maxTypes); // Output: 3

   
  
  // Answer 3

    function findLHS(nums) {
        const numCount = new Map();
        
        // Count the frequency of each number
        for (let num of nums) {
          numCount.set(num, (numCount.get(num) || 0) + 1);
        }
        
        let maxLen = 0;
        
        // Iterate through the unique numbers in the array
        for (let [num, count] of numCount) {
          // Check if the array contains both num and num + 1
          if (numCount.has(num + 1)) {
            // Calculate the length of the harmonious subsequence
            const subsequenceLen = count + numCount.get(num + 1);
            
            // Update the maximum length if necessary
            maxLen = Math.max(maxLen, subsequenceLen);
          }
        }
        
        return maxLen;
      }
      
      // Test case
      const numbers = [1, 3, 2, 2, 5, 2, 3, 7];
      const longestLength = findLHS(numbers);
      console.log(longestLength); // Output: 5



        // Answer 4

        function canPlaceFlowers(flowerbed, n) {
            let count = 0;
            let i = 0;
          
            while (i < flowerbed.length) {
              if (flowerbed[i] === 0 && (i === 0 || flowerbed[i - 1] === 0) && (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)) {
                flowerbed[i] = 1;
                count++;
              }
              if (count >= n) {
                return true;
              }
              i++;
            }
          
            return false;
          }
          
          // Test case
          const flowerbed = [1, 0, 0, 0, 1];
          const n = 1;
          const canPlace = canPlaceFlowers(flowerbed, n);
          console.log(canPlace); // Output: true



          //Answer 5
          function maximumProduct(nums) {
            nums.sort((a, b) => a - b);
            
            const n = nums.length;
            
            // Consider two cases:
            // 1. The three largest positive numbers
            // 2. The two smallest negative numbers multiplied by the largest positive number
            
            const option1 = nums[n - 1] * nums[n - 2] * nums[n - 3];
            const option2 = nums[0] * nums[1] * nums[n - 1];
            
            // Return the maximum of the two options
            return Math.max(option1, option2);
          }
          
          // Test case
          const nums = [1, 2, 3];
          const maxProduct = maximumProduct(nums);
          console.log(maxProduct); // Output: 6




          //Answer 6

          function search(nums, target) {
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
          
            return -1; // Target not found
          }
          
          // Test case
          const nums = [-1, 0, 3, 5, 9, 12];
          const target = 9;
          const index = search(nums, target);
          console.log(index); // Output: 4



          //Answer 7
          function isMonotonic(nums) {
            const n = nums.length;
            let increasing = true;
            let decreasing = true;
          
            for (let i = 1; i < n; i++) {
              if (nums[i] < nums[i - 1]) {
                increasing = false;
              }
              if (nums[i] > nums[i - 1]) {
                decreasing = false;
              }
            }
          
            return increasing || decreasing;
          }
          
          // Test case
          const nums = [1, 2, 2, 3];
          const isMonotonicArray = isMonotonic(nums);
          console.log(isMonotonicArray); // Output: true



          //Answer 8
          function minimumScore(nums, k) {
            const n = nums.length;
            
            // Sort the array in ascending order
            nums.sort((a, b) => a - b);
            
            // Calculate the minimum and maximum possible values
            const minVal = nums[0] + k;
            const maxVal = nums[n - 1] - k;
            
            // Calculate the initial score
            let initialScore = nums[n - 1] - nums[0];
            
            // Calculate the potential minimum score after applying the operation
            let potentialMinScore = Math.min(initialScore, maxVal - minVal);
            
            return potentialMinScore < 0 ? 0 : potentialMinScore;
          }
          
          // Test case
          const nums = [1];
          const k = 0;
          const minScore = minimumScore(nums, k);
          console.log(minScore); // Output: 0