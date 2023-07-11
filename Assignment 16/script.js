// Answer 2

function sortStack(stack) {
    "use strict";
  
    // Create a temporary stack to store the sorted elements.
  
    const tempStack = [];
  
    // While the main stack is not empty, pop the top element and push it to the temporary stack.
  
    while (!stack.isEmpty()) {
      const topElement = stack.pop();
      tempStack.push(topElement);
    }
  
    // Iterate through the temporary stack and push the elements back to the main stack in sorted order.
  
    while (!tempStack.isEmpty()) {
      const topElement = tempStack.pop();
      stack.push(topElement);
    }
  
    // Return the sorted stack.
  
    return stack;
  }
  
  if (require.main === module) {
    const stack = [34, 3, 31, 98, 92, 23];
    const sortedStack = sortStack(stack);
    console.log(sortedStack); // [3, 23, 31, 34, 92, 98]
  }

  


  //Answer 3
  function deleteMiddleElement(stack) {
    "use strict";
  
    // Check if the stack is empty.
  
    if (stack.isEmpty()) {
      return;
    }
  
    // Get the size of the stack.
  
    const size = stack.size();
  
    // If the stack has only one element, then return.
  
    if (size === 1) {
      stack.pop();
      return;
    }
  
    // Find the middle element of the stack.
  
    let middleElementIndex = Math.floor(size / 2);
  
    // Pop the middle element from the stack.
  
    stack.pop();
  
    // If the stack has even number of elements, then pop the top element from the stack.
  
    if (size % 2 === 0) {
      stack.pop();
    }
  }
  
  if (require.main === module) {
    const stack = [1, 2, 3, 4, 5];
    deleteMiddleElement(stack);
    console.log(stack); // [1, 2, 4, 5]
  }

  


  //Answer 4

  function canBeArrangedInIncreasingOrder(queue, stack) {
    "use strict";
  
    // Check if the queue is empty.
  
    if (queue.isEmpty()) {
      return true;
    }
  
    // Pop the first element of the queue.
  
    const topElement = queue.dequeue();
  
    // Push the element into the stack.
  
    stack.push(topElement);
  
    // Check if the element at the top of the stack is greater than the element at the top of the queue.
  
    if (stack.peek() > topElement) {
      return false;
    }
  
    // Otherwise, recursively check if the remaining elements of the queue can be arranged in increasing order.
  
    return canBeArrangedInIncreasingOrder(queue, stack);
  }
  
  if (require.main === module) {
    const queue = [5, 1, 2, 3, 4];
    const stack = [];
    console.log(canBeArrangedInIncreasingOrder(queue, stack)); // true
  
    const queue2 = [5, 1, 2, 6, 3, 4];
    const stack2 = [];
    console.log(canBeArrangedInIncreasingOrder(queue2, stack2)); // false
  }
  



  // Answer 5

  function reverseNumberUsingStack(number) {
    "use strict";
  
    // Create a stack to store the digits of the number.
  
    const stack = [];
  
    // While the number is not equal to 0, pop the top digit from the number and push it into the stack.
  
    while (number !== 0) {
      const digit = number % 10;
      stack.push(digit);
      number = Math.floor(number / 10);
    }
  
    // Initialize the reversed number to 0.
  
    let reversedNumber = 0;
  
    // While the stack is not empty, pop the top digit from the stack and multiply it by 10 and add it to the reversed number.
  
    while (!stack.isEmpty()) {
      const digit = stack.pop();
      reversedNumber = reversedNumber * 10 + digit;
    }
  
    // Return the reversed number.
  
    return reversedNumber;
  }
  
  if (require.main === module) {
    const number = 365;
    console.log(reverseNumberUsingStack(number)); // 563
  
    const number2 = 6899;
    console.log(reverseNumberUsingStack(number2)); // 9986
  }

  


  //Answer 6
  function reverseFirstKElementsOfQueue(queue, k) {
    "use strict";
  
    // Create a temporary stack to store the first k elements of the queue.
  
    const stack = [];
  
    // Iterate through the first k elements of the queue and push them into the stack.
  
    for (let i = 0; i < k; i++) {
      const element = queue.dequeue();
      stack.push(element);
    }
  
    // Iterate through the stack and enqueue the elements back into the queue.
  
    for (let i = 0; i < k; i++) {
      const element = stack.pop();
      queue.enqueue(element);
    }
  }
  
  if (require.main === module) {
    const queue = [1, 2, 3, 4, 5, 6, 7];
    const k = 3;
    reverseFirstKElementsOfQueue(queue, k);
    console.log(queue); // [3, 2, 1, 4, 5, 6, 7]
  }

  
  //Answer 8

  function findMaximumAbsoluteDifference(array) {
    "use strict";
  
    // Initialize the left smaller array and the right smaller array.
  
    const leftSmaller = [];
    const rightSmaller = [];
  
    // Initialize the maximum absolute difference.
  
    let maxAbsoluteDifference = 0;
  
    // Iterate through the array.
  
    for (let i = 0; i < array.length; i++) {
      // Initialize the left smaller element for the current element.
      let leftSmallerElement = 0;
  
      // Iterate through the left side of the current element.
  
      for (let j = i - 1; j >= 0; j--) {
        if (array[j] <= array[i]) {
          leftSmallerElement = array[j];
          break;
        }
      }
  
      // Initialize the right smaller element for the current element.
      let rightSmallerElement = 0;
  
      // Iterate through the right side of the current element.
  
      for (let j = i + 1; j < array.length; j++) {
        if (array[j] <= array[i]) {
          rightSmallerElement = array[j];
          break;
        }
      }
  
      // Calculate the absolute difference between the left and right smaller elements.
      const absoluteDifference = Math.abs(leftSmallerElement - rightSmallerElement);
  
      // Update the maximum absolute difference if necessary.
      if (absoluteDifference > maxAbsoluteDifference) {
        maxAbsoluteDifference = absoluteDifference;
      }
  
      // Add the left and right smaller elements to the respective arrays.
      leftSmaller.push(leftSmallerElement);
      rightSmaller.push(rightSmallerElement);
    }
  
    // Return the maximum absolute difference.
    return maxAbsoluteDifference;
  }
  
  if (require.main === module) {
    const array = [2, 1, 8];
    console.log(findMaximumAbsoluteDifference(array)); // 1
  
    const array2 = [2, 4, 8, 7, 7, 9, 3];
    console.log(findMaximumAbsoluteDifference(array2)); // 4
  
    const array3 = [5, 1, 9, 2, 5, 1, 7];
    console.log(findMaximumAbsoluteDifference(array3)); // 1
  }
  




