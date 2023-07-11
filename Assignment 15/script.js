// Answer 1

function findNextGreaterElement(arr, n) {
    "use strict";
  
    // Create a stack to store the elements of the array.
  
    let stack = [];
  
    // Create an array to store the next greater element for each element of the array.
  
    let nextGreater = [];
  
    // Initialize the next greater element for each element as -1.
  
    for (let i = 0; i < n; i++) {
      nextGreater[i] = -1;
    }
  
    // Iterate through the array from right to left.
  
    for (let i = n - 1; i >= 0; i--) {
      // While the stack is not empty and the top element of the stack is smaller than the current element, do the following.
  
      while (stack.length !== 0 && arr[stack[stack.length - 1]] <= arr[i]) {
        // Pop the top element from the stack.
        stack.pop();
      }
  
      // If the stack is empty, then the next greater element for the current element is -1.
  
      if (stack.length === 0) {
        nextGreater[i] = -1;
      } else {
        // The next greater element for the current element is the top element of the stack.
        nextGreater[i] = arr[stack[stack.length - 1]];
      }
  
      // Push the current element into the stack.
      stack.push(i);
    }
  
    // Return the array of next greater elements.
  
    return nextGreater;
  }
  
  if (require.main === module) {
    arr = [1, 3, 2, 4];
    n = arr.length;
    console.log(findNextGreaterElement(arr, n)); // [3, 4, 4, -1]
  }



  //Answer 2

  function findNearestSmallerElement(arr, n) {
    "use strict";
  
    // Create a stack to store the elements of the array.
  
    let stack = [];
  
    // Create an array to store the nearest smaller element for each element of the array.
  
    let nearestSmaller = [];
  
    // Initialize the nearest smaller element for each element as -1.
  
    for (let i = 0; i < n; i++) {
      nearestSmaller[i] = -1;
    }
  
    // Iterate through the array from left to right.
  
    for (let i = 0; i < n; i++) {
      // While the stack is not empty and the top element of the stack is greater than or equal to the current element, do the following.
  
      while (stack.length !== 0 && arr[stack[stack.length - 1]] >= arr[i]) {
        // Pop the top element from the stack.
        stack.pop();
      }
  
      // If the stack is empty, then the nearest smaller element for the current element is -1.
  
      if (stack.length === 0) {
        nearestSmaller[i] = -1;
      } else {
        // The nearest smaller element for the current element is the top element of the stack.
        nearestSmaller[i] = arr[stack[stack.length - 1]];
      }
  
      // Push the current element into the stack.
      stack.push(i);
    }
  
    // Return the array of nearest smaller elements.
  
    return nearestSmaller;
  }
  
  if (require.main === module) {
    arr = [1, 6, 2];
    n = arr.length;
    console.log(findNearestSmallerElement(arr, n)); // [-1, 1, 1]
  }

  


  //Answer 3

  function Stack() {
    "use strict";
  
    // Create two queues.
  
    this.q1 = [];
    this.q2 = [];
  }
  
  Stack.prototype.push = function(element) {
    // Push the element into the first queue.
  
    this.q1.push(element);
  }
  
  Stack.prototype.pop = function() {
    // If the second queue is empty, then move all the elements from the first queue to the second queue.
  
    if (this.q2.length === 0) {
      while (this.q1.length !== 0) {
        this.q2.push(this.q1.shift());
      }
    }
  
    // Pop the element from the second queue.
  
    return this.q2.shift();
  }
  
  if (require.main === module) {
    const stack = new Stack();
    stack.push(2);
    stack.push(3);
    console.log(stack.pop()); // 3
    stack.push(4);
    console.log(stack.pop()); // 4
  }

  


  //Answer 4

  function reverseStack(St) {
    "use strict";
  
    // If the stack is empty, then return.
  
    if (St.length === 0) {
      return;
    }
  
    // Pop the top element from the stack.
    const topElement = St.pop();
  
    // Reverse the remaining stack.
    reverseStack(St);
  
    // Push the top element back to the stack.
    St.push(topElement);
  }
  
  if (require.main === module) {
    const St = [3, 2, 1, 7, 6];
    reverseStack(St);
    console.log(St); // [6, 7, 1, 2, 3]
  }

  


  //answer 5

  function reverseStringUsingStack(S) {
    "use strict";
  
    // Create a stack to store the characters of the string.
  
    const stack = [];
  
    // Iterate through the string and push the characters into the stack.
  
    for (const character of S) {
      stack.push(character);
    }
  
    // Iterate through the stack and append the characters to the reversed string.
  
    let reversedString = "";
    while (stack.length !== 0) {
      reversedString += stack.pop();
    }
  
    // Return the reversed string.
  
    return reversedString;
  }
  
  if (require.main === module) {
    const S = "GeeksforGeeks";
    console.log(reverseStringUsingStack(S)); // skeeGrofskeeG
  }

  


  //Answer 6

  function evaluatePostfixExpression(S) {
    "use strict";
  
    // Create a stack to store the operands and operators.
  
    const stack = [];
  
    // Iterate through the string and push the operands and operators into the stack.
  
    for (const character of S) {
      if (character === "+" || character === "-" || character === "*" || character === "/") {
        // Pop the top two operands from the stack.
        const operand1 = stack.pop();
        const operand2 = stack.pop();
  
        // Perform the operation and push the result back to the stack.
        const result = performOperation(character, operand1, operand2);
        stack.push(result);
      } else {
        // The character is an operand, so push it into the stack.
        stack.push(character);
      }
    }
  
    // The final value is the top element of the stack.
  
    return stack.pop();
  }
  
  function performOperation(operator, operand1, operand2) {
    "use strict";
  
    switch (operator) {
      case "+":
        return operand1 + operand2;
      case "-":
        return operand1 - operand2;
      case "*":
        return operand1 * operand2;
      case "/":
        return operand1 / operand2;
      default:
        throw new Error("Invalid operator");
    }
  }
  
  if (require.main === module) {
    const S = "231*+9-";
    console.log(evaluatePostfixExpression(S)); // -4
  }

  
  //Answer 8

  function trapRainWater(height) {
    "use strict";
  
    // Create two arrays to store the left and right maximum heights.
  
    const leftMaxHeight = [];
    const rightMaxHeight = [];
  
    // Initialize the left and right maximum heights.
  
    leftMaxHeight[0] = height[0];
    rightMaxHeight[height.length - 1] = height[height.length - 1];
  
    // Iterate through the array from left to right.
  
    for (let i = 1; i < height.length; i++) {
      leftMaxHeight[i] = Math.max(leftMaxHeight[i - 1], height[i]);
    }
  
    // Iterate through the array from right to left.
  
    for (let i = height.length - 2; i >= 0; i--) {
      rightMaxHeight[i] = Math.max(rightMaxHeight[i + 1], height[i]);
    }
  
    // Calculate the amount of water that can be trapped.
  
    let trappedWater = 0;
    for (let i = 0; i < height.length; i++) {
      const currentHeight = height[i];
      const minHeight = Math.min(leftMaxHeight[i], rightMaxHeight[i]);
      if (currentHeight < minHeight) {
        trappedWater += minHeight - currentHeight;
      }
    }
  
    // Return the amount of water that can be trapped.
  
    return trappedWater;
  }
  
  if (require.main === module) {
    const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
    console.log(trapRainWater(height)); // 6
  }
  

