// You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order, and each of their nodes contains a single digit.
// Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example 1:

//Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

// Constraints:

// The number of nodes in each linked list is in the range [1, 100].
// 0 <= Node.val <= 9
// It is guaranteed that the list represents a number that does not have leading zeros.

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

//converting array to linked list
function arrayToLinkedList(array) {
  if(!array || !array.length === 0){
    return null;
  }
  
  const head = new ListNode(array[0]);
  let current = head;

  for (let i = 1; i < array.length; i++) {
    current.next = new ListNode(array[i]);
    current = current.next;
  }
  return head;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let result = new ListNode(0);
  let current = result;
  let carryOver = 0;

  while (l1 || l2) {
    let x = 0;
    if (l1) {
      x = l1.val;
      l1 = l1.next;
    }
    let y = 0;
    if (l2) {
      y = l2.val;
      l2 = l2.next;
    }
    const sum = x + y + carryOver;
    carryOver = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;
  }
  if (carryOver > 0) {
    current.next = new ListNode(carryOver);
  }

  return result.next;
};

// const l1 = [2,4,3];
// const l2 = [5,6,4];

// const l1 = [0];
// const l2 = [0];

const l1 = [9,9,9,9,9,9,9];
const l2 = [9,9,9,9];

const l1LinkedList = arrayToLinkedList(l1);
const l2LinkedList = arrayToLinkedList(l2);

const resultLinkedList = addTwoNumbers(l1LinkedList, l2LinkedList);

// Function to convert the result linked list to an array
function linkedListToArray(head) {
  const result = [];
  let current = head;
  while (current) {
    result.push(current.val);
    current = current.next;
  }
  return result;
}

const resultArray = linkedListToArray(resultLinkedList);
console.log(resultArray);
