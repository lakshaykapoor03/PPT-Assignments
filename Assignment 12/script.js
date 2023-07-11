// Answer 1

function deleteMiddleNode(head) {
    "use strict";
  
    if (head === null || head.next === null) {
      return null;
    }
  
    let slow = head;
    let fast = head;
    while (fast.next !== null && fast.next.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
    }
  
    // If the linked list has even number of nodes, then the middle node is slow.next.
    // Otherwise, the middle node is slow.
  
    const middleNode = slow.next;
    slow.next = middleNode.next;
    middleNode.next = null;
    return head;
  }
  
  if (require.main === module) {
    head = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = new ListNode(3);
    head.next.next.next = new ListNode(4);
    head.next.next.next.next = new ListNode(5);
    console.log(deleteMiddleNode(head)); // 1->2->4->5
  }



  //Answer 2

  function hasLoop(head) {
    "use strict";
  
    if (head === null || head.next === null) {
      return false;
    }
  
    let slow = head;
    let fast = head;
    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
  
      // If slow and fast meet, then there exists a loop.
      if (slow === fast) {
        return true;
      }
    }
  
    return false;
  }
  
  if (require.main === module) {
    head = new ListNode(1);
    head.next = new ListNode(3);
    head.next.next = new ListNode(4);
    head.next.next.next = head.next;
    console.log(hasLoop(head)); // true
  }
  



  //Answer 3

  function findNthNodeFromEnd(head, n) {
    "use strict";
  
    if (head === null || head.next === null) {
      return null;
    }
  
    // Create two pointers, one that will traverse the linked list
    // normally and the other that will traverse the linked list at
    // a speed of 2 nodes per iteration.
  
    let slow = head;
    let fast = head;
  
    // Move the fast pointer N nodes ahead.
  
    for (let i = 0; i < n; i++) {
      if (fast === null) {
        return null;
      }
      fast = fast.next;
    }
  
    // Now, move both pointers together until the fast pointer
    // reaches the end of the linked list.
  
    while (fast !== null) {
      slow = slow.next;
      fast = fast.next;
    }
  
    // The slow pointer is now pointing to the Nth node from the end.
  
    return slow;
  }
  
  if (require.main === module) {
    head = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = new ListNode(3);
    head.next.next.next = new ListNode(4);
    head.next.next.next.next = new ListNode(5);
    head.next.next.next.next.next = new ListNode(6);
    head.next.next.next.next.next.next = new ListNode(7);
    head.next.next.next.next.next.next.next = new ListNode(8);
    head.next.next.next.next.next.next.next.next = new ListNode(9);
    console.log(findNthNodeFromEnd(head, 2)); // 8
  }

  


// Answer 4

function isPalindrome(head) {
    "use strict";
  
    if (head === null || head.next === null) {
      return true;
    }
  
    // Create two pointers, one that will traverse the linked list
    // normally and the other that will traverse the linked list in
    // reverse.
  
    let slow = head;
    let fast = head;
  
    // While the fast pointer is not null, move the slow pointer one node
    // at a time and the fast pointer two nodes at a time.
  
    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
    }
  
    // The slow pointer is now pointing to the middle of the linked list.
  
    // Reverse the second half of the linked list.
  
    let prev = null;
    let curr = slow;
    let next = curr.next;
  
    while (curr !== null) {
      curr.next = prev;
      prev = curr;
      curr = next;
      next = curr.next;
    }
  
    // Compare the first half of the linked list with the reversed
    // second half of the linked list.
  
    let isPalindrome = true;
    while (slow !== null) {
      if (slow.value !== prev.value) {
        isPalindrome = false;
        break;
      }
      slow = slow.next;
      prev = prev.next;
    }
  
    return isPalindrome;
  }
  
  if (require.main === module) {
    head = new ListNode('R');
    head.next = new ListNode('A');
    head.next.next = new ListNode('D');
    head.next.next.next = new ListNode('A');
    head.next.next.next.next = new ListNode('R');
    console.log(isPalindrome(head)); // true
  }

  
  //Answer 5

  function removeLoop(head, x) {
    "use strict";
  
    // If the linked list does not have a loop, then return.
  
    if (x === 0) {
      return;
    }
  
    // Create two pointers, one that will traverse the linked list
    // normally and the other that will traverse the linked list
    // in a loop.
  
    let slow = head;
    let fast = head;
  
    // While the fast pointer is not null and the fast pointer is not
    // equal to the slow pointer, move the slow pointer one node
    // at a time and the fast pointer two nodes at a time.
  
    while (fast !== null && fast.next !== null && fast !== slow) {
      slow = slow.next;
      fast = fast.next.next;
    }
  
    // If the fast pointer is equal to the slow pointer, then the
    // linked list has a loop.
  
    if (fast === slow) {
      // Find the entry point of the loop.
  
      let entry = slow;
      let count = 1;
      while (entry !== fast.next) {
        entry = entry.next;
        fast = fast.next;
        count++;
      }
  
      // Break the loop by making the next pointer of the entry
      // point to null.
  
      fast.next = null;
  
      // Return the number of nodes in the loop.
  
      return count;
    }
  
    // If the linked list does not have a loop, then return 0.
  
    return 0;
  }
  
  if (require.main === module) {
    head = new ListNode(1);
    head.next = new ListNode(3);
    head.next.next = new ListNode(4);
    head.next.next.next = head.next;
    console.log(removeLoop(head, 2)); // 1
  }

  
  //Answer 6

  function traverseLinkedList(head, m, n) {
    "use strict";
  
    // Create a pointer to the current node.
  
    let current = head;
  
    // Create a pointer to the next node.
  
    let next = current.next;
  
    // While the current node is not null, do the following.
  
    while (current !== null) {
      // Retain the first M nodes.
  
      for (let i = 0; i < m; i++) {
        if (current === null) {
          break;
        }
        console.log(current.value);
        current = current.next;
      }
  
      // Delete the next N nodes.
  
      for (let i = 0; i < n; i++) {
        if (current === null) {
          break;
        }
        current.next = current.next.next;
      }
    }
  }
  
  if (require.main === module) {
    head = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = new ListNode(3);
    head.next.next.next = new ListNode(4);
    head.next.next.next.next = new ListNode(5);
    head.next.next.next.next.next = new ListNode(6);
    head.next.next.next.next.next.next = new ListNode(7);
    head.next.next.next.next.next.next.next = new ListNode(8);
    traverseLinkedList(head, 2, 2);
  }

  
  //Answer 7

  function insertNodes(head1, head2) {
    "use strict";
  
    // Create pointers to the current nodes of the first and second linked lists.
  
    let current1 = head1;
    let current2 = head2;
  
    // While both the current nodes are not null, do the following.
  
    while (current1 !== null && current2 !== null) {
      // Insert the current node of the second linked list after the current node of the first linked list.
  
      const next1 = current1.next;
      current1.next = current2;
      current2.next = next1;
  
      // Move the current nodes forward.
  
      current1 = next1;
      current2 = current2.next;
    }
  
    // Set the next pointer of the current node of the first linked list to the current node of the second linked list.
  
    if (current1 !== null) {
      current1.next = current2;
    }
  
    // Set the next pointer of the current node of the second linked list to null.
  
    if (current2 !== null) {
      current2.next = null;
    }
  }
  
  if (require.main === module) {
    head1 = new ListNode(5);
    head1.next = new ListNode(7);
    head1.next.next = new ListNode(17);
    head1.next.next.next = new ListNode(13);
    head1.next.next.next.next = new ListNode(11);
    head2 = new ListNode(12);
    head2.next = new ListNode(10);
    head2.next.next = new ListNode(2);
    head2.next.next.next = new ListNode(4);
    head2.next.next.next.next = new ListNode(6);
    insertNodes(head1, head2);
    console.log(head1.value); // 5
    console.log(head1.next.value); // 12
    console.log(head1.next.next.value); // 7
    console.log(head1.next.next.next.value); // 10
    console.log(head1.next.next.next.next.value); // 17
    console.log(head1.next.next.next.next.next.value); // 2
    console.log(head1.next.next.next.next.next.next.value); // 13
    console.log(head1.next.next.next.next.next.next.next.value); // 4
    console.log(head1.next.next.next.next.next.next.next.next.value); // 6
  }

  
  //Answer 8

  function isCircular(head) {
    "use strict";
  
    // Create a pointer to the current node.
  
    let current = head;
  
    // While the current node is not null, do the following.
  
    while (current !== null) {
      // If the current node is pointing to itself, then the linked list is circular.
  
      if (current.next === current) {
        return true;
      }
  
      // Move the current node forward.
  
      current = current.next;
    }
  
    // If the current node is null, then the linked list is not circular.
  
    return false;
  }
  
  if (require.main === module) {
    head = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = new ListNode(3);
    head.next.next.next = head;
    console.log(isCircular(head)); // true
  }
  

