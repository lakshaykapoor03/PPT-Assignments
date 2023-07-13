// Answer 1

function findMaximumSubtreeSum(root) {
    if (root === null) {
      return 0;
    }
  
    const leftSum = findMaximumSubtreeSum(root.left);
    const rightSum = findMaximumSubtreeSum(root.right);
  
    const currentSum = root.val + leftSum + rightSum;
    const maxSum = Math.max(currentSum, leftSum, rightSum);
  
    return maxSum;
  }
 
  const root = {
    val: 1,
    left: {
      val: 2,
      left: {
        val: 4,
      },
      right: {
        val: 5,
      },
    },
    right: {
      val: 3,
      left: {
        val: -6,
      },
      right: {
        val: 2,
      },
    },
  };
  
  const maxSum = findMaximumSubtreeSum(root);
  
  console.log(maxSum); // 7

  // Answer 2

  function constructBSTFromLevelOrderTraversal(arr) {
    const root = new Node(arr[0]);
    const queue = [root];
  
    for (let i = 1; i < arr.length; i++) {
      const node = queue.shift();
  
      if (arr[i] < node.val) {
        node.left = new Node(arr[i]);
        queue.push(node.left);
      } else {
        node.right = new Node(arr[i]);
        queue.push(node.right);
      }
    }
  
    return root;
  }
  
  class Node {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }

  const arr = [7, 4, 12, 3, 6, 8, 1, 5, 10];

const root = constructBSTFromLevelOrderTraversal(arr);

console.log(root.val); // 7
console.log(root.left.val); // 4
console.log(root.right.val); // 12
console.log(root.left.left.val); // 3
console.log(root.left.right.val); // 6
console.log(root.right.left.val); // 8
console.log(root.right.right.val); // 10


//Answer 3

function checkIfArrayRepresentsLevelOrderTraversalOfBST(arr) {
    const n = arr.length;
  
    for (let i = 1; i < n; i++) {
      if (arr[i - 1] > arr[i]) {
        return false;
      }
    }
  
    for (let i = 0; i < n; i++) {
      const leftIndex = 2 * i + 1;
      const rightIndex = 2 * i + 2;
  
      if (leftIndex < n && arr[i] > arr[leftIndex]) {
        return false;
      }
  
      if (rightIndex < n && arr[i] > arr[rightIndex]) {
        return false;
      }
    }
  
    return true;
  }

  const arr = [7, 4, 12, 3, 6, 8, 1, 5, 10];

const result = checkIfArrayRepresentsLevelOrderTraversalOfBST(arr);

console.log(result); // true



  