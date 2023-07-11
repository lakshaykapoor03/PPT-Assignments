//Answer 1

function createNewLinkedList(head1, head2, m, n) {
    "use strict";
  
    // Create a pointer to the current node of the first linked list.
  
    let current1 = head1;
  
    // Create a pointer to the current node of the second linked list.
  
    let current2 = head2;
  
    // Create a pointer to the head node of the new linked list.
  
    let newHead = null;
  
    // While both the current nodes are not null, do the following.
  
    while (current1 !== null && current2 !== null) {
      // Create a new node with the greater value.
  
      let newNode = new ListNode(Math.max(current1.value, current2.value));
  
      // If the new linked list is empty, then set the new node as the head node.
  
      if (newHead === null) {
        newHead = newNode;
      } else {
        // Add the new node to the new linked list.
        newNode.next = newHead;
        newHead = newNode;
      }
  
      // Move the current nodes forward.
  
      current1 = current1.next;
      current2 = current2.next;
    }
  
    // If the current node of the first linked list is not null, then add it to the new linked list.
  
    if (current1 !== null) {
      newNode.next = current1;
    }
  
    // If the current node of the second linked list is not null, then add it to the new linked list.
  
    if (current2 !== null) {
      newNode.next = current2;
    }
  
    // Return the head node of the new linked list.
  
    return newHead;
  }
  
  if (require.main === module) {
    head1 = new ListNode(1);
    head1.next = new ListNode(2);
    head1.next.next = new ListNode(3);
    head1.next.next.next = new ListNode(4);
    head1.next.next.next.next = new ListNode(5);
    head1.next.next.next.next.next = new ListNode(6);
    head1.next.next.next.next.next.next = new ListNode(7);
    head1.next.next.next.next.next.next.next = new ListNode(8);
    head2 = new ListNode(1);
    head2.next = new ListNode(2);
    head2.next.next = new ListNode(5);
    head2.next.next.next = new ListNode(6);
    console.log(createNewLinkedList(head1, head2, 2, 2).value); // 1
    console.log(createNewLinkedList(head1, head2, 2, 2).next.value); // 2
    console.log(createNewLinkedList(head1, head2, 2, 2).next.next.value); // 5
    console.log(createNewLinkedList(head1, head2, 2, 2).next.next.next.value); // 6
  }

  
  //Answer 2

  function removeDuplicates(head) {
    "use strict";
  
    // Create a pointer to the current node.
  
    let current = head;
  
    // Create a pointer to the next node.
  
    let next = current.next;
  
    // While the next node is not null, do the following.
  
    while (next !== null) {
      // If the current node's value is equal to the next node's value, then remove the next node.
  
      if (current.value === next.value) {
        current.next = next.next;
      } else {
        // Move the current node forward.
        current = next;
      }
  
      // Move the next node forward.
      next = next.next;
    }
  
    // Return the head node of the linked list.
  
    return head;
  }
  
  if (require.main === module) {
    head = new ListNode(11);
    head.next = new ListNode(11);
    head.next.next = new ListNode(11);
    head.next.next.next = new ListNode(21);
    head.next.next.next.next = new ListNode(43);
    head.next.next.next.next.next = new ListNode(43);
    head.next.next.next.next.next.next = new ListNode(60);
    console.log(removeDuplicates(head).value); // 11
    console.log(removeDuplicates(head).next.value); // 21
    console.log(removeDuplicates(head).next.next.value); // 43
    console.log(removeDuplicates(head).next.next.next.value); // 60
  }

  
  //Answer 3

  function reverseKNodes(head, k) {
    "use strict";
  
    // Create a pointer to the current node.
  
    let current = head;
  
    // Create a pointer to the previous node.
  
    let prev = null;
  
    // Create a pointer to the next node.
  
    let next = null;
  
    // Create a counter to keep track of the number of nodes reversed.
  
    let count = 0;
  
    // While the current node is not null and the counter is less than k, do the following.
  
    while (current !== null && count < k) {
      // Reverse the next k nodes.
  
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
  
      // Increment the counter.
      count++;
    }
  
    // If the counter is equal to k, then the next node is the head of the reversed linked list.
  
    if (count === k) {
      head = prev;
    }
  
    // If the current node is not null, then continue reversing the remaining nodes.
  
    if (current !== null) {
      reverseKNodes(current, k);
    }
  
    // Return the head node of the reversed linked list.
  
    return head;
  }
  
  if (require.main === module) {
    head = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = new ListNode(3);
    head.next.next.next = new ListNode(4);
    head.next.next.next.next = new ListNode(5);
    head.next.next.next.next.next = new ListNode(6);
    console.log(reverseKNodes(head, 2).value); // 2
    console.log(reverseKNodes(head, 2).next.value); // 1
    console.log(reverseKNodes(head, 2).next.next.value); // 4
    console.log(reverseKNodes(head, 2).next.next.next.value); // 3
    console.log(reverseKNodes(head, 2).next.next.next.next.value); // 6
  }

  
  //Answer 4

  //Answer 5

  function deleteLastOccurrenceOfKey(head, key) {
    "use strict";
  
    // Create a pointer to the current node.
  
    let current = head;
  
    // Create a pointer to the previous node.
  
    let prev = null;
  
    // While the current node is not null, do the following.
  
    while (current !== null) {
      // If the current node's value is equal to the key, then set the previous node's next node to the current node's next node.
  
      if (current.value === key) {
        prev.next = current.next;
      } else {
        // Move the previous node forward.
        prev = current;
      }
  
      // Move the current node forward.
      current = current.next;
    }
  
    // Return the head node of the linked list.
  
    return head;
  }
  
  if (require.main === module) {
    head = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = new ListNode(3);
    head.next.next.next = new ListNode(5);
    head.next.next.next.next = new ListNode(2);
    head.next.next.next.next.next = new ListNode(10);
    console.log(deleteLastOccurrenceOfKey(head, 2).value); // 1
    console.log(deleteLastOccurrenceOfKey(head, 2).next.value); // 3
    console.log(deleteLastOccurrenceOfKey(head, 2).next.next.value); // 5
    console.log(deleteLastOccurrenceOfKey(head, 2).next.next.next.value); // 10
  }



  //Answer 6
  function mergeSortedLinkedLists(headA, headB) {
    "use strict";
  
    // Create pointers to the current nodes of the two linked lists.
  
    let currentA = headA;
    let currentB = headB;
  
    // Create a pointer to the head of the merged linked list.
  
    let mergedHead = null;
  
    // While both the current nodes are not null, do the following.
  
    while (currentA !== null && currentB !== null) {
      // If the current node of the first linked list's value is less than or equal to the current node of the second linked list's value, then add the current node of the first linked list to the merged linked list.
  
      if (currentA.value <= currentB.value) {
        mergedHead = new ListNode(currentA.value);
        currentA = currentA.next;
      } else {
        mergedHead = new ListNode(currentB.value);
        currentB = currentB.next;
      }
    }
  
    // If the current node of the first linked list is not null, then add the remaining nodes of the first linked list to the merged linked list.
  
    if (currentA !== null) {
      mergedHead.next = currentA;
    }
  
    // If the current node of the second linked list is not null, then add the remaining nodes of the second linked list to the merged linked list.
  
    if (currentB !== null) {
      mergedHead.next = currentB;
    }
  
    // Return the head of the merged linked list.
  
    return mergedHead;
  }
  
  if (require.main === module) {
    headA = new ListNode(5);
    headA.next = new ListNode(10);
    headA.next.next = new ListNode(15);
    headB = new ListNode(2);
    headB.next = new ListNode(3);
    headB.next.next = new ListNode(20);
    console.log(mergeSortedLinkedLists(headA, headB).value); // 2
    console.log(mergeSortedLinkedLists(headA, headB).next.value); // 3
    console.log(mergeSortedLinkedLists(headA, headB).next.next.value); // 5
    console.log(mergeSortedLinkedLists(headA, headB).next.next.next.value); // 10
    console.log(mergeSortedLinkedLists(headA, headB).next.next.next.next.value); // 15
    console.log(mergeSortedLinkedLists(headA, headB).next.next.next.next.next.value); // 20
  }

  
  //Answer 7
  function reverseDoublyLinkedList(head) {
    "use strict";
  
    // Create pointers to the current node and the previous node.
  
    let current = head;
    let previous = null;
  
    // While the current node is not null, do the following.
  
    while (current !== null) {
      // Set the current node's previous node to the current node's next node.
  
      current.previous = current.next;
  
      // Set the current node's next node to the previous node.
  
      current.next = previous;
  
      // Move the previous node forward.
  
      previous = current;
  
      // Move the current node forward.
      current = current.previous;
    }
  
    // Return the previous node, which is now the head of the reversed linked list.
  
    return previous;
  }
  
  if (require.main === module) {
    head = new ListNode(10);
    head.next = new ListNode(8);
    head.next.next = new ListNode(4);
    head.next.next.next = new ListNode(2);
    console.log(reverseDoublyLinkedList(head).value); // 2
    console.log(reverseDoublyLinkedList(head).next.value); // 4
    console.log(reverseDoublyLinkedList(head).next.next.value); // 8
    console.log(reverseDoublyLinkedList(head).next.next.next.value); // 10
  }

  
  //Answer 8

  function deleteNodeFromDoublyLinkedList(head, position) {
    "use strict";
  
    // Create pointers to the current node, the previous node, and the next node.
  
    let current = head;
    let previous = null;
    let next = null;
  
    // Iterate to the node at the given position.
  
    for (let i = 1; i <= position; i++) {
      previous = current;
      current = current.next;
    }
  
    // If the current node is null, then the given position is out of bounds.
  
    if (current === null) {
      return head;
    }
  
    // Set the previous node's next node to the current node's next node.
  
    previous.next = current.next;
  
    // If the current node is not the last node, then set the current node's next node's previous node to the previous node.
  
    if (current.next !== null) {
      current.next.previous = previous;
    }
  
    // Return the head of the linked list.
  
    return head;
  }
  
  if (require.main === module) {
    head = new ListNode(1);
    head.next = new ListNode(3);
    head.next.next = new ListNode(4);
    console.log(deleteNodeFromDoublyLinkedList(head, 3).value); // 1
    console.log(deleteNodeFromDoublyLinkedList(head, 3).next.value); // 4
  }
  