// Answer 1

function convertBinaryTreeToBinarySearchTree(root) {
    if (root === null) {
      return;
    }
  
    const leftSubtree = convertBinaryTreeToBinarySearchTree(root.left);
    const rightSubtree = convertBinaryTreeToBinarySearchTree(root.right);
  
    if (leftSubtree !== null && leftSubtree.val > root.val) {
      swap(leftSubtree, root);
    }
  
    if (rightSubtree !== null && rightSubtree.val < root.val) {
      swap(rightSubtree, root);
    }
  
    return root;
  }
  
  function swap(node1, node2) {
    const temp = node1.val;
    node1.val = node2.val;
    node2.val = temp;
  }

  
  const root = {
    val: 10,
    left: {
      val: 2,
      left: {
        val: 8,
      },
      right: {
        val: 4,
      },
    },
    right: {
      val: 7,
    },
  };
  
  const convertedTree = convertBinaryTreeToBinarySearchTree(root);
  
  console.log(convertedTree.val); // 8
  console.log(convertedTree.left.val); // 4
  console.log(convertedTree.right.val); // 10
  console.log(convertedTree.left.left.val); // 2
  console.log(convertedTree.right.right.val); // 7

  // Answer 2

  function findDistanceBetweenTwoNodesInBST(root, key1, key2) {
    const path1 = findPath(root, key1);
    const path2 = findPath(root, key2);
  
    let distance = 0;
    let i = 0;
    let j = 0;
  
    while (i < path1.length && j < path2.length) {
      if (path1[i] !== path2[j]) {
        distance += Math.abs(i - j);
      }
  
      i++;
      j++;
    }
  
    return distance;
  }
  
  function findPath(root, key) {
    if (root === null) {
      return [];
    }
  
    if (root.val === key) {
      return [root];
    }
  
    const leftPath = findPath(root.left, key);
    const rightPath = findPath(root.right, key);
  
    if (leftPath.length > 0) {
      return leftPath.concat([root]);
    } else {
      return rightPath.concat([root]);
    }
  }
  
  function findDistanceBetweenTwoNodesInBST(root, key1, key2) {
    const path1 = findPath(root, key1);
    const path2 = findPath(root, key2);
  
    let distance = 0;
    let i = 0;
    let j = 0;
  
    while (i < path1.length && j < path2.length) {
      if (path1[i] !== path2[j]) {
        distance += Math.abs(i - j);
      }
  
      i++;
      j++;
    }
  
    return distance;
  }
  
  function findPath(root, key) {
    if (root === null) {
      return [];
    }
  
    if (root.val === key) {
      return [root];
    }
  
    const leftPath = findPath(root.left, key);
    const rightPath = findPath(root.right, key);
  
    if (leftPath.length > 0) {
      return leftPath.concat([root]);
    } else {
      return rightPath.concat([root]);
    }
  }

  
  // Answer 3

  function convertBinaryTreeToDoublyLinkedList(root) {
    const head = new Node(root.val);
    const prev = head;
  
    const convertHelper = (node) => {
      if (node === null) {
        return;
      }
  
      const nextNode = new Node(node.val);
      prev.next = nextNode;
      nextNode.prev = prev;
  
      convertHelper(node.left);
      convertHelper(node.right);
    };
  
    convertHelper(root);
  
    return head;
  }
  
  class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
      this.prev = null;
    }
  }
  
  const root = {
    val: 10,
    left: {
      val: 5,
    },
    right: {
      val: 20,
      right: {
        val: 35,
      },
      left: {
        val: 30,
      },
    },
  };
  
  const head = convertBinaryTreeToDoublyLinkedList(root);
  
  console.log(head.val); // 5
  console.log(head.next.val); // 10
  console.log(head.next.next.val); // 20
  console.log(head.next.next.right.val); // 30
  console.log(head.next.next.right.next.val); // 35



    // Answer 4

    function connectNodesAtTheSameLevel(root) {
        const queue = [root];
        let currentLevel = 0;
        let nextLevel = [];
      
        while (queue.length > 0) {
          const node = queue.shift();
      
          if (node === null) {
            continue;
          }
      
          node.next = nextLevel[0] || null;
      
          if (currentLevel === 0) {
            nextLevel[0] = node;
          } else {
            nextLevel.unshift(node);
          }
      
          if (node.left !== null) {
            queue.push(node.left);
          }
      
          if (node.right !== null) {
            queue.push(node.right);
          }
      
          currentLevel++;
        }
      
        return root;
      }
      

      const root = {
        val: 1,
        left: {
          val: 2,
        },
        right: {
          val: 3,
          left: {
            val: 4,
          },
          right: {
            val: 5,
          },
        },
      };
      
      const connectedTree = connectNodesAtTheSameLevel(root);
      
      console.log(connectedTree.next); // 3
      console.log(connectedTree.left.next); // 2
      console.log(connectedTree.right.next); // 5
      console.log(connectedTree.left.left.next); // 4
      console.log(connectedTree.right.right.next); // null
      
  
  