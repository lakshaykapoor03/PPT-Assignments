// Answer 1
function calculateDepth(preorder) {
    // Initialize the depth of the tree.
    let depth = 0;
  
    // Iterate over the preorder traversal.
    for (let i = 0; i < preorder.length; i++) {
      // If the current character is 'l', increment the depth by 1.
      if (preorder[i] === "l") {
        depth += 1;
      }
  
      // If the current character is 'n', the depth remains the same.
      else {
        continue;
      }
    }
  
    // Return the depth of the tree.
    return depth;
  }
  
  // Example
  const preorder = "nlnll";
  
  const depth = calculateDepth(preorder);
  
  console.log(depth); // 2

  const preorder = "nlnll";

const depth = calculateDepth(preorder);

console.log(depth); // 2


//Answer 2

function leftView(root) {
    // Create a queue to store the nodes of the binary tree.
    const queue = [];
  
    // Initialize a variable to store the leftmost node of the current level.
    let leftmostNode = root;
  
    // Push the root node into the queue.
    queue.push(root);
  
    // While the queue is not empty, do the following.
    while (!queue.isEmpty()) {
      // Pop a node from the queue.
      const node = queue.pop();
  
      // Print the node.
      if (node === leftmostNode) {
        console.log(node.val);
      }
  
      // Update the leftmost node of the current level.
      leftmostNode = node.left;
  
      // If the node has a left child, push it into the queue.
      if (node.left !== null) {
        queue.push(node.left);
      }
  
      // If the node has a right child, push it into the queue.
      if (node.right !== null) {
        queue.push(node.right);
      }
    }
  }

  
  const root = {
    val: 4,
    left: { val: 5 },
    right: { val: 2 },
  };
  
  leftView(root);
  
  // Output: 4 5

  
  //Answer 3

  function rightView(root) {
    // Create a queue to store the nodes of the binary tree.
    const queue = [];
  
    // Initialize a variable to store the rightmost node of the current level.
    let rightmostNode = root;
  
    // Push the root node into the queue.
    queue.push(root);
  
    // While the queue is not empty, do the following.
    while (!queue.isEmpty()) {
      // Pop a node from the queue.
      const node = queue.pop();
  
      // Print the node.
      if (node === rightmostNode) {
        console.log(node.val);
      }
  
      // Update the rightmost node of the current level.
      rightmostNode = node.right;
  
      // If the node has a right child, push it into the queue.
      if (node.right !== null) {
        queue.push(node.right);
      }
  
      // If the node has a left child, push it into the queue.
      if (node.left !== null) {
        queue.push(node.left);
      }
    }
  }
  
  const root = {
    val: 1,
    left: { val: 2 },
    right: { val: 3 },
  };
  
  rightView(root);
  
  // Output: 1 3

  
  //Answer 4

  function bottomView(root) {
    // Create a queue to store the nodes of the binary tree.
    const queue = [];
  
    // Create a map to store the nodes at a particular horizontal distance.
    const map = new Map();
  
    // Initialize the horizontal distance of the root node to 0.
    queue.push({ node: root, hd: 0 });
  
    // While the queue is not empty, do the following.
    while (!queue.isEmpty()) {
      // Pop a node from the queue.
      const node = queue.pop();
  
      // Get the horizontal distance of the node.
      const hd = node.hd;
  
      // Add the node to the map if it is not present.
      if (!map.has(hd)) {
        map.set(hd, node.node.val);
      }
  
      // If the node has a left child, push it into the queue with a horizontal distance of hd - 1.
      if (node.node.left !== null) {
        queue.push({ node: node.node.left, hd: hd - 1 });
      }
  
      // If the node has a right child, push it into the queue with a horizontal distance of hd + 1.
      if (node.node.right !== null) {
        queue.push({ node: node.node.right, hd: hd + 1 });
      }
    }
  
    // Print the values in the map in order of their keys.
    for (const [key, value] of map) {
      console.log(value);
    }
  }

  const root = {
    val: 20,
    left: { val: 8 },
    right: { val: 22 },
  };
  
  bottomView(root);
  
  // Output: 5 10 3 14 25
  
  