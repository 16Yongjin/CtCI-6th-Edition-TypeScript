import Node from './node'

console.log('Palindrome Test\n')

const node = new Node(1)
  .appendToTail(2)
  .appendToTail(3)
  .appendToTail(4)
  .appendToTail(3)
  .appendToTail(2)
  .appendToTail(1)

console.log('1234321 is Palindrome', node.isPalindrome())
