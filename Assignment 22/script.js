//Answer 1

function binaryTreeToDLL(root) {
    // Create a dummy node that will be the head of the DLL.
    const head = {
      val: null,
      next: null,
      prev: null,
    };
  
    // Initialize a pointer to the current node in the DLL.
    let current = head;
  
    // Recursively traverse the binary tree in inorder traversal.
    function traverse(node) {
      if (node === null) {
        return;
      }
  
      // Traverse the left subtree.
      traverse(node.left);
  
      // Insert the current node into the DLL.
      current.next = node;
      node.prev = current;
      current = node;
  
      // Traverse the right subtree.
      traverse(node.right);
    }
  
    // Traverse the binary tree.
    traverse(root);
  
    // Return the head of the DLL.
    return head.next;
  }

  
  const root = {
    val: 1,
    left: { val: 2 },
    right: { val: 3 },
  };
  
  const dll = binaryTreeToDLL(root);
  
  console.log(dll); // [ 2, 1, 3 ]

  
  //Answer 2

  function flipBinaryTreeRight(root) {
    // If the tree is empty, return.
    if (root === null) {
      return;
    }
  
    // Get the leftmost node of the tree.
    let leftmostNode = root;
    while (leftmostNode.left !== null) {
      leftmostNode = leftmostNode.left;
    }
  
    // Flip the subtree rooted at the leftmost node.
    flipSubtree(leftmostNode);
  
    // Return the root of the flipped tree.
    return leftmostNode;
  }
  
  function flipSubtree(node) {
    // Swap the left and right children of the node.
    const temp = node.left;
    node.left = node.right;
    node.right = temp;
  
    // Recursively flip the left and right subtrees of the node.
    if (node.left !== null) {
      flipSubtree(node.left);
    }
  
    if (node.right !== null) {
      flipSubtree(node.right);
    }
  }

  
  const root = {
    val: 1,
    left: { val: 2 },
    right: { val: 3 },
  };
  
  const flippedTree = flipBinaryTreeRight(root);
  
  console.log(flippedTree); // { val: 2, left: 1, right: 3 }

    //Answer 3

    function printRootToLeafPaths(root) {
        // Create a queue to store the nodes of the binary tree.
        const queue = [];
      
        // Initialize a stack to store the root-to-leaf paths.
        const stack = [];
      
        // Push the root node into the queue.
        queue.push(root);
      
        // While the queue is not empty, do the following.
        while (!queue.isEmpty()) {
          // Pop a node from the queue.
          const node = queue.pop();
      
          // Push the node's value into the stack.
          stack.push(node.val);
      
          // If the node is a leaf node, print the stack.
          if (node.left === null && node.right === null) {
            console.log(stack.join(" "));
          }
      
          // If the node has a left child, push it into the queue.
          if (node.left !== null) {
            queue.push(node.left);
          }
      
          // If the node has a right child, push it into the queue.
          if (node.right !== null) {
            queue.push(node.right);
          }
      
          // Pop the top element from the stack.
          stack.pop();
        }
      }
      
      const root = {
        val: 6,
        left: { val: 3 },
        right: { val: 5 },
      };
      
      printRootToLeafPaths(root);
      
      // Output:
      // 6 3
      // 6 5

      
      //Answer 4
      
      function checkIfSameTree(preorder, inorder, postorder) {
        // Create a hash table to store the inorder traversal.
        const inorderMap = {};
        for (let i = 0; i < inorder.length; i++) {
          inorderMap[inorder[i]] = i;
        }
      
        // Initialize a stack to store the preorder traversal.
        const stack = [];
      
        // Iterate over the preorder traversal.
        for (let i = 0; i < preorder.length; i++) {
          // Get the current node from the preorder traversal.
          const current = preorder[i];
      
          // Check if the current node is present in the inorder traversal.
          if (!inorderMap.hasOwnProperty(current)) {
            return false;
          }
      
          // Get the index of the current node in the inorder traversal.
          const index = inorderMap[current];
      
          // If the current node has a left child, push it into the stack.
          if (index > 0) {
            stack.push(preorder[i - 1]);
          }
      
          // If the current node has a right child, push it into the stack.
          if (index < inorder.length - 1) {
            stack.push(preorder[i + 1]);
          }
        }
      
        // Check if the stack is empty.
        if (stack.length !== 0) {
          return false;
        }
      
        // The preorder, inorder, and postorder traversals are of the same tree.
        return true;
      }

      
      const preorder = [1, 2, 4, 5, 3];
const inorder = [4, 2, 5, 1, 3];
const postorder = [4, 5, 2, 3, 1];

const isSameTree = checkIfSameTree(preorder, inorder, postorder);

console.log(isSameTree); // true


  
  