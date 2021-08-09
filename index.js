/* eslint-disable require-jsdoc */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(value) {
    const node = new Node(value);
    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      const temp = this.first;
      this.first = node;
      this.first.next = temp;
    }
    return ++this.size;
  }
  pop() {
    if (!this.first) return null;
    const temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
  empty() {
    return this.size === 0 ? true : false;
  }
}

const map = {'(': ')', '{': '}', '[': ']'};
const isValid = (s) => {
  if (s.length % 2 !== 0) return false;
  const stack = new Stack();
  for (const i of s) {
    if (i === '(' || i === '{' || i == '[') {
      stack.push(map[i]);
    } else if (stack.pop() !== i) {
      return false;
    }
  }
  return stack.empty();
};
// Expected Output: true
console.log(isValid(''));
// Expected Output: true
console.log(isValid('([{}])'));
// Expected output: true
console.log(isValid('()'));
// Expected output: false
console.log(isValid('([{])'));
// Expected output: false
console.log(isValid('(])'));
// Expected output: false
console.log(isValid('('));
// Expected output: false
console.log(isValid(')'));
