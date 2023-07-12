// Answer 1

function mergeSortedLinkedLists(lists) {
    // Initialize the merged linked list.
    const merged_list = new ListNode();
    let current_node = merged_list;
  
    // Iterate over the linked lists.
    for (const list of lists) {
      // Iterate over the current linked list.
      while (list) {
        // If the current node is null, add the current element to the merged linked list.
        if (current_node === null) {
          current_node = new ListNode(list.val);
        }
        // Otherwise, compare the current element of the current linked list with the current node of the merged linked list.
        else if (list.val < current_node.val) {
          // If the current element is smaller than the current node, add the current element to the merged linked list before the current node.
          const new_node = new ListNode(list.val);
          new_node.next = current_node;
          current_node = new_node;
        }
        // Otherwise, move the current node to the next element.
        else {
          current_node = current_node.next;
        }
  
        list = list.next;
      }
    }
  
    // Return the merged linked list.
    return merged_list;
  }
  
  const lists = [[1, 4, 5], [1, 3, 4], [2, 6]];
const merged_list = mergeSortedLinkedLists(lists);
console.log(merged_list.toString()); // [1,1,2,3,4,4,5,6]


//Answer 2

function countSmallerNumbersAfterSelf(nums) {
    // Initialize the counts array.
    const counts = new Array(len(nums));
  
    // Iterate over the array in reverse order.
    for (let i = len(nums) - 1; i >= 0; i--) {
      // Initialize the count.
      let count = 0;
  
      // Iterate over the elements after the current element.
      for (let j = i + 1; j < len(nums); j++) {
        // If the current element is greater than the element at index j, increment the count.
        if (nums[i] > nums[j]) {
          count++;
        }
      }
  
      // Store the count in the counts array.
      counts[i] = count;
    }
  
    // Return the counts array.
    return counts;
  }
  

  const nums = [5, 2, 6, 1];
const counts = countSmallerNumbersAfterSelf(nums);
console.log(counts); // [2, 1, 1, 0]


//Answer 3

function mergeSort(nums) {
    // Base case.
    if (len(nums) <= 1) {
      return nums;
    }
  
    // Recursive case.
    const mid = len(nums) >> 1;
    const left = mergeSort(nums.slice(0, mid));
    const right = mergeSort(nums.slice(mid));
  
    // Merge the two sorted arrays.
    return merge(left, right);
  }
  
  function merge(left, right) {
    const merged = [];
    let i = 0, j = 0;
  
    // Iterate over the two sorted arrays.
    while (i < len(left) && j < len(right)) {
      // If the current element of the left array is smaller than the current element of the right array, add the current element of the left array to the merged array.
      if (left[i] < right[j]) {
        merged.push(left[i]);
        i++;
      }
      // Otherwise, add the current element of the right array to the merged array.
      else {
        merged.push(right[j]);
        j++;
      }
    }
  
    // Add the remaining elements of the left array to the merged array.
    merged.push(...left.slice(i));
  
    // Add the remaining elements of the right array to the merged array.
    merged.push(...right.slice(j));
  
    // Return the merged array.
    return merged;
  }
  
  const nums = [5, 2, 3, 1];
const sorted_nums = mergeSort(nums);
console.log(sorted_nums); // [1,2,3,5]


// Answer 4

function moveZeroes(nums) {
    // Initialize the current index and the zero count.
    let current_index = 0;
    let zero_count = 0;
  
    // Iterate over the array.
    for (let i = 0; i < len(nums); i++) {
      // If the current element is not zero, swap the current element with the element at index `current_index`.
      if (nums[i] !== 0) {
        nums[current_index] = nums[i];
        current_index++;
      }
      // Otherwise, increment the zero count.
      else {
        zero_count++;
      }
    }
  
    // Fill the remaining elements with zeroes.
    for (let i = current_index; i < len(nums); i++) {
      nums[i] = 0;
    }
  }
  
  const nums = [1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0];
const moved_zeroes = moveZeroes(nums);
console.log(moved_zeroes); // [1, 9, 8, 4, 2, 7, 6, 0, 0, 0, 0]


//Answer 5

function rearrange(nums) {
    // Initialize the current index and the flag.
    let current_index = 0;
    let flag = true;
  
    // Iterate over the array.
    for (let i = 0; i < len(nums); i++) {
      // If the current element is positive and the flag is true, swap the current element with the element at index `current_index`.
      if (nums[i] > 0 && flag) {
        nums[current_index] = nums[i];
        nums[i] = -1;
        current_index++;
        flag = false;
      }
      // Otherwise, if the current element is negative and the flag is false, swap the current element with the element at index `current_index`.
      else if (nums[i] < 0 && !flag) {
        nums[current_index] = nums[i];
        nums[i] = 1;
        current_index++;
        flag = true;
      }
    }
  }
  

  const nums = [1, 2, 3, -4, -1, 4];
const rearranged = rearrange(nums);
console.log(rearranged); // [-4, 1, -1, 2, 3, 4]


//Answer 6
function mergeSortedArrays(arr1, arr2) {
    // Initialize the merged array.
    const merged_array = [];
  
    // Iterate over the two arrays.
    let i = 0, j = 0;
    while (i < len(arr1) && j < len(arr2)) {
      // If the current element of arr1 is smaller than the current element of arr2, add the current element of arr1 to the merged array.
      if (arr1[i] < arr2[j]) {
        merged_array.push(arr1[i]);
        i++;
      }
      // Otherwise, add the current element of arr2 to the merged array.
      else {
        merged_array.push(arr2[j]);
        j++;
      }
    }
  
    // Add the remaining elements of arr1 to the merged array.
    merged_array.push(...arr1.slice(i));
  
    // Add the remaining elements of arr2 to the merged array.
    merged_array.push(...arr2.slice(j));
  
    // Return the merged array.
    return merged_array;
  }

  const arr1 = [1, 3, 4, 5];
const arr2 = [2, 4, 6, 8];
const merged_array = mergeSortedArrays(arr1, arr2);
console.log(merged_array); // [1, 2, 3, 4, 4, 5, 6, 8]


//Answer 7
function intersection(nums1, nums2) {
    // Initialize the intersection array.
    const intersection = [];
  
    // Create a set to store the elements of nums1.
    const set1 = new Set(nums1);
  
    // Iterate over nums2.
    for (const num of nums2) {
      // If the current element is in the set, add it to the intersection array.
      if (set1.has(num)) {
        intersection.push(num);
        set1.delete(num);
      }
    }
  
    // Return the intersection array.
    return intersection;
  }
  

  const nums1 = [1, 2, 2, 1];
const nums2 = [2, 2];
const intersection = intersection(nums1, nums2);
console.log(intersection); // [2]


// Answer 8
function intersectionWithFrequency(nums1, nums2) {
    // Initialize the intersection array.
    const intersection = [];
  
    // Create a map to store the elements of nums1 and their frequencies.
    const map = new Map();
    for (const num of nums1) {
      const frequency = map.get(num);
      if (frequency === undefined) {
        map.set(num, 1);
      } else {
        map.set(num, frequency + 1);
      }
    }
  
    // Iterate over nums2.
    for (const num of nums2) {
      // If the current element is in the map, add it to the intersection array with the corresponding frequency.
      const frequency = map.get(num);
      if (frequency !== undefined) {
        for (let i = 0; i < frequency; i++) {
          intersection.push(num);
        }
      }
    }
  
    // Return the intersection array.
    return intersection;
  }
  
  const nums1 = [1, 2, 2, 1];
const nums2 = [2, 2];
const intersection = intersectionWithFrequency(nums1, nums2);
console.log(intersection); // [2,2]

  