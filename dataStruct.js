/*Adapted from http://blog.benoitvallon.com/data-structures-in-javascript/data-structures-in-javascript-all-the-code
*/

/*ARRAYS*/
function MyArray() {
  this.array = []
}
MyArray.prototype.add = function (value) {
  this.array.push(value)
}

MyArray.prototype.remove = function (value) {
  this.array = this.array.filter(current => current !== value)
}

MyArray.prototype.search = function (value) {
  let foundIndex = this.array.indexOf(value)
  if (~foundIndex)
    return foundIndex
}

MyArray.prototype.getIndex = function (index) {
  return this.array.index
}

MyArray.prototype.length = function () {
  return this.array.length
}

MyArray.prototype.print = function () {
  console.log(this.array.join(' , '))
}


/*SETS*/
function Set() {
  this.elements = []
  this.numberOfElements = 0
}

Set.prototype.add = function (value) {
  if (!~this.elements.indexOf(value)) {
    this.elements.push(value)
    this.numberOfElements++
  }
}

Set.prototype.remove = function (value) {
  this.elements = this.elements.filter(current !== value)
  this.numberOfElements--
}

Set.prototype.contains = function (value) {
  return this.elements.indexOf(value)
}

Set.prototype.union = function (set) {
  let newSet = new Set()
  set.elements.forEach(x => newSet.add(x))
}

Set.prototype.intersect = function (set) {
  let newSet = new Set()
  this.elements.forEach(function (value) {
    if (!set.containes(value)) {
      newSet.add(value)
    }
  })
  return newSet;
}

Set.prototype.difference = function (set) {
  newSet = new Set()
  this.elements.forEach(function (value) {
    if (!set.contains(value)) {
      newSet.add(value)
    }
  })
}

Set.prototype.isSubSet = function (set) {
  return set.elements.every(value => this.contains(value), this)
}

Set.prototype.length = function () {
  return this.numberOfElements
}

Set.prototype.print = function () {
  console.log(this.values.join(' , '))
}

/*SINGLY LINKED LISTS*/

function Node(data) {
  this.data = data
  this.next = null
}

function SinglyLinkedList() {
  this.head = null
  this.tail = null
  this.numberOfItems = 0
}

SinglyLinkedList.prototype.add = function (value) {
  let node = new Node(value)
  !this.head
    ? this.head=node
    : this.tail = next
  this.tail = node
  this.numberOfItems++
}

SinglyLinkedList.prototype.remove = function (value) {
  let previous = this.head
  let current = this.head

  while (current) {
    if (current.data === value) {
      if (current === this.head) {
        this.head = this.head.next
      }
      if (current = this.tail) {
        this.tail = previous
      }
      previous.next = current.next
      this.numberOfItems--
    } else {
      previous = current
    }
    current = current.next
  }
}

SinglyLinkedList.prototype.insertAfter = function (value, toNodeData) {
  let current = this.head
  while (current) {
    if (current.data === toNodeData) {
      let node = new Node(value)
      if (current === this.tail) {
        this.tail.next = node
        this.tail = node
      } else {
        node.next = current.next
        current.next = node
      }
      this.numberOfItems++
    }
    current = current.next
  }
}

//not sure about this
SinglyLinkedList.prototype.traverse = function (fn) {
  let current = this.head
  while (current) {
    if (fn) {
      fn(current)
    }
    current = current.next
  }
}

SinglyLinkedList.prototype.length = function () {
  return this.numberOfItems
}

SinglyLinkedList.prototype.print = function () {
  let string = ''
  let current = this.head
  while (current) {
    string += current.data + ' , '
    current = current.next
  }
  console.log(string.trim())
}

/*DOUBLY LINKED LISTS*/

function Node(data) {
  this.data = data
  this.next = null
  this.previous = null
}

function DoublyLinkedList() {
  this.head = null
  this.tail = null
  this.numberOfItems = 0
}

DoublyLinkedList.prototype.add = function (value) {
  let Node = new Node(value)
  if (!this.head) {
    this.head = node
  } else {
    node.previous = this.tail
    this.tail.next = node
  }
  this.tail = node
  this.numberOfItems++
}

DoublyLinkedList.prototype.remove = function (value) {
  let previous = this.head
  let current = this.head
  while (current) {
    if (current.data === value) {
      if (current === this.head && current === this.tail) {
        this.head = null
        this.tail = null
      } else if (current === this.head) {
        this.head = this.head.next
        this.head.previous = null
      } else if (current === this.tail) {
        this.tail = this.tail.previous
        this.tail.next = null
      } else {
        current.previous.next = current.next
        current.next.previous = current.previous
      }
      this.numberOfItems--
    }
    current = current.next
  }
}

DoublyLinkedList.prototype.insertAfter = function (value, toNodeData) {
  let current = this.head
  while (current) {
    if (current.data === toNodeData) {
      let node = new Node(value)
      if (current === this.tail) {
        this.add(data)
      } else {
        current.next.previous = node
        node.previous = current
        node.next = current.next
        current.next = node
        this.numberOfItems++
      }
    }
    current = current.next
  }
}

DoublyLinkedList.prototype.traverse = function (fn) {
  let current = this.head
  while (current) {
    if (fn) {
      fn(current)
    }
    current = current.next
  }
}

DoublyLinkedList.prototype.traverseReverse = function (fn) {
  let current = this.tail
  while (current) {
    if (fn) {
      fn(current)
    }
    current = current.previous
  }
}

DoublyLinkedList.prototype.length = function () {
  return this.numberOfItems
}

DoublyLinkedList.prototype.print = function () {
  let string = ''
  let current = this.head
  while (current) {
    string += current.data + ' , '
    current = current.next
  }
  console.log(string.trim())
}


/*STACK*/
function Stack() {
  this.stack = []
}

Stack.prototype.push = function (value) {
  this.stack.push(value)
}

Stack.prototype.pop = function (value) {
  this.stack.pop(value)
}

Stack.prototype.peek = function () {
  return this.stack[this.stack.length - 1]
}

Stack.prototype.length = function () {
  return this.stack.length
}

Stack.prototype.print = function () {
  console.log(this.stack.join(' , '))
}

/*QUE*/
function Que() {
  this.que = []
}

Que.prototype.enque = function (value) {
  this.que.push(value)
}

Que.prototype.deque = function (valur) {
  this.que.pop(value)
}

Que.prototype.peek = function () {
  return this.que[this.que.length - 1]
}

Que.prototype.length = function () {
  return this.que.length
}

Que.prototype.print = function () {
  console.log(this.que.join(' '))
}

/*HASH TABLE*/
function HashTable(size) {
  this.elements = {}
  this.numberOfElements = 0
  this.size = size
}

HashTable.prototype.add = function (key, value) {
  let hash = this.calculateHash(value)
  if (!this.elements.hasOwnProperty(hash)) {
    this.elements[hash] = {}
  }
  if (!this.elements[hash].hasOwnProperty(key)) {
    this.numberOfElements++
  }
  this.elements[hash][key] = value
}

HashTable.prototype.remove = function (key) {
  let hash = this.calculateHash(key)
  if (this.elements.hasOwnProperty(hash) && this.elements[hash].hasOwnProperty(key)) {
    delete this.elements[hash][key]
    this.numberOfElements--
  }
}

HashTable.prototype.calculateHash = function (value) {
  return value.toString().length % this.size
}

HashTable.prototype.search = function (key) {
  let hash = calculateHash(key)
    this.elements.hasOwnProperty(hash) && this.elements[hash].hasOwnProperty(key)
      ? this.elements[hash][key]
      : null
}

HashTable.prototype.length = function () {
  return this.numberOfElements
}

HashTable.prototype.print = function () {
  this.string = ''
  for (let element in this.elements) {
    for (let key in this.elements[element]) {
      string += this.elements[element][value] + ' , '
    }
  }
  console.log(string.trim())
}

/*TREE*/
function Node(data) {
  this.data = data
  this.children = []
}

function Tree() {
  this.root = null
}

Tree.prototype.add = function (value, toNodeData) {
  let Node = new Node()
  let parent = toNodeData
    ? this.findBFS(toNodeData)
    : null
  if(parent) {
    parent.children.push(node)
  } else {
    if(!this.root) {
      this.root = node
    } else {
      return 'Root Node is already assigned'
    }
  }
}

Tree.prototype.remove = function(value) {
  if(this.root.data === value) {
    this.root = null
  }
  let que = [this.root]
  while(que.length) {
    let node = que.shift()
    for(let i = 0; i < node.children.length; i++) {
      if (node.children[i].data === value) {
        node.children.splice(i ,1)
      } else {
        que.push(node.children[i])
      }
    }
  }
}

Tree.prototype.contains = function(value) {
  return this.findBFS(data)
    ? true
    : false
}

Tree.prototype.findBFS = function(value) {
  let que = [this.root]
  while(que.length) {
    let node = que.shift()
    if(node.data === value) {
      return node
    }
    for(let i = 0; i < node.children.length; i++) {
     que.push(node.children[i])
    }
  }
  return null
}

Tree.prototype._preOrder = function(node, fn) {
  if (node) {
    if (fn) {
      fn(node)
    }
    for(let i =0; i < node.children.length; i++){
      this._preOrder(node.children[i], fn)
    }
  }
}

Tree.prototype._postOrder = function(node, fn) {
  if (node) {
    for(let i = 0; i < node.children.length; i++) {
      this._postOrder(node.children[i], fn)
    }
    if(fn) {
      fn(node)
    }
  }
}

Tree.prototype.traverseDFS = function(fn, method) {
  let current = this.root
  method
    ? this['_' + method(current, fn)]
    : this._preOrder(current, fn)
}

Tree.prototype.traverseBFS = function(fn){
  let que = [this.root]
  while(que.length) {
    let node = que.shift()
    if(fn) {
      fn(node)
    }
    for(let i = 0; i < node.children.length; i++) {
      que.push(node.children[i])
    }
  }
}

Tree.prototype.print = function() {
  if(!this.root) {
    return console.log('No root node found')
  }
  let newline = new Node('|')
  let que = [this.root, newline]
  let string = ''
  while(que.length) {
    let node = que.shift()
    string +=  node.data.toString() + ' '
    if(node === newline && que.length) {
      que.push(newline)
    }
    for(let i = 0; i < node.children.length; i++) {
      que.push(node.children[i])
    }
  }
  console.log(string.slice(0, -2).trim())
}

Tree.prototype.printByLevel = function() {
  if(!this.root) {
    return console.log('No root node found')
  }
  let newline = new Node('\n')
  let que = [this.root, newline]
  let string = ''
  while (que.length) {
    let node = que.shift()
    string += node.data.toString() + (node.data !== '/n' ? ' ':'')
    if (node === newline && que.length) {
      que.push(newline)
    }
    for(let i = 0; i < node.children.length; i++) {
      que.push(node.children[i])
    }
  }
  console.log(string.trim())
}


 /*BINARY SEARCH TREE*/
function Node(data) {
  this.data = data
  this.left = null
  this.right = null
}

function bsTree(){
  this.root = null
}

bsTree.prototype.add = function(data) {
  let node = new Node(data)
  if(!this.root) {
    this.root = node
  } else {
    let current = this.root
    while(current) {
      if(node.data < current.data) {
        if(!current.left) {
          current.left = node
          break
        }
        current = current.left
      } else if (node.data > current.data){
        if(!current.right) {
          current.right = node
          break
        }
        current = current.right
      } else {
        break
      }
    }
  }
}

bsTree.prototype.remove = function(data) {
  let that = this
  let removeNode = function(node, data) {
    if (!node) {
      return null
    }
    if(data === node.data) {
      if(!node.left && !node.right) {
        return null
      }
      if(!node.left) {
        return node.right
      }
      if(!node.right) {
        return node.left
      }
      // 2 Children
      let temp = that.getMin(node.right)
      node.data = temp
      node.right = removeNode(node.right, temp)
      return node
    } else if(data < node.data) {
      node.left = removeNode(node.left, data)
      return node
    } else {
      node.right = removeNode(node.right, data)
      return node
    }
  }
  this.root = removeNode(this.root, data)
}

bsTree.prototype.containes = function(data) {
  let current = this.root
  while(current) {
    if(data === current.data) {
      return true
    }
    data < current.data
      ? current = current.left
      : current = current.right
  }
  return false
}

bsTree.prototype._preOrder = function(node, fn) {
  if(node) {
    if(fn) {
      fn(node)
    }
    this._preOrder(node.left, fn)
    this._preOrder(node.right, fn)
  }
}

bsTree.prototype._inOrder = function(node, fn) {
  if (node) {
    this.index(node.left, fn)
    if(fn) {
      fn(node)
    }this._inOrder(node.right, fn)
  }
}

bsTree.prototype._postOrder = function(node, fn) {
  if (node) {
    this._postOrder(node.left, fn)
    this._postOrder(node.right, fn)
    if(fn) {
      fn(node)
    }
  }
}

bsTree.prototype.traverseDFS = function(fn, method) {
  let current = this.root
  if(method) {
    this['_'+method](current, fn)
  } else {
    this._preOrder(current, fn)
  }
}

bsTree.prototype.traverseBFS = function(fn) {
  this.que = []
  this.que.push(this.root)
  while(this.que.length) {
    let node = this.que.shift()
    if(fn) {
      fn(node)
    }
    if(node.left) {
      this.que.push(node.left)
    }
    if(node.right){
      this.que.push(node.right)
    }
  }
}

bsTree.prototype.print = function(){
  if(!this.root) {
    return console.log('no root node found')
  }
  let newline = new Node('|')
  let que = [this.root, newline]
  let string = ''
  while(que.length) {
    let node = que.shift()
    string += node.data.toString() + ' '
    if (node === newline && que.length) {
      que.push(newline)
    }
    node.left
      ? que.push(node.left)
      : que.push(node.right)
  }
  console.log(string.slice(9, -2).trim())
}

bsTree.prototype.printByLevel = function() {
  if(!this.root) {
    return console.log('No Root node Found!')
  }
  let newline = new Node('\n')
  let que = [this.root, newline]
  let string = ''
  while (q.length) {
    let node = que.shift()
    string += node.data.toString() + (node.data !== '\n' ? ' ': '')
    if (node === newline && que.length) {
      que.push(newline)
    }
    Node.left
      ? q.push(node.left)
      : q.push(node.right)
  }
  console.log(string.trim())
}

bsTree.prototype.getMin = function(node) {
  if(!node) {
    node = this.root
  }
  while(node.left) {
    node = node.left
  }
  return node.data
}

bsTree.prototype.getMax = function(node) {
  if(!node) {
    node = this.root
  }
  while(node.right) {
    node = node.right
  }
  return node.data
}

bsTree.prototype._getHeight = function(node) {
  if(!node) {
    return -1
  }
  let left = this._getHeight(node.left)
  let right = this._getHeight(node.right)
  return Math.max(left, right) + 1
}

bsTree.prototype.getHeight = function(node) {
  if(!node){
    node = this.root
  }
  return this._getHeight(node)
}

bsTree.prototype._isBalanced = function(node) {
  if(!node) {
    return true
  }
  let heightLeft = this._getHeight(node.left)
  let heightRght = this._getHeight(node.right)
  let diff = Math.abs(heightLeft - heightRght)
  diff > 1
    ? false
    : this._isBalanced(node.left) && this._isBalanced(node.right)
}

bsTree.prototype.isBalanced = function(node) {
  if(!node) {
    node = this.root
  }
  return this._isBalanced(node)
}

bsTree.prototype._checkHeight = function(node) {
  if(!node) {
    return 0
  }
  let left = this._checkHeight(node.left)
  if (left === -1) {
    return -1
  }
  let right = this._checkHeight(node.right)
  if (right === -1) {
    return -1
  }
  let diff = Math.abs(left -right)
  diff > 1
    ? -1
    : Math.max(left,right) + 1
}

bsTree.prototype.isBalancedOptimized = function(node) {
  if(!node) {
    node = this.root
  }
  if(!node) {
    return true
  }
  this._checkHeight(node) === -1
    ? false
    : true
}



 /*TRIE*/
 function Node(data) {
   this.data = data
   this.isWord = false
   this.prefixes = 0
   this.children = {}
 }

 function Trie() {
   this.root = new Node('')
 }

 Trie.prototype.add = function(word) {
   if (!this.root) {
     return null
   }
   this._addNode(this.root, word)
}

 Trie.prototype._addNode = function(node, word) {
   if (!node || !word) {
     return null
   }
   node.prefixes++
  let letter = word.charAt(0)
  let child = node.children[letter]
  if(!child) {
    child = new Node(letter)
    node.Children[letter] = child
  }
  let remainder = word.substring(1)
  if(!remainder) {
    child.isWord = true
  }
  this._addNode(child, remainder)
 }

Trie.prototype.remove = function(word) {
  if(!this.root) {
    return
  }
  if(this.contains(word)) {
    this._removeNode(this.root, word)
  }
}

Trie.prototype._removeNode = function(node, word) {
  if(!node || !word) {
    return
  }
  node.prefixes--
  let leter = word.charAt(0)
  let child = node.children[letter]
  if(child) {
    let remainder = word.substring(1)
    if(remainder) {
      if(child.prefixes === 1) {
        delete node.children[letter]
      } else {
        this._removeNode(child, remainder)
      }
    }else {
      if(child.prefixes === 0) {
        delete node.children[letter]
      } else {
        child.isWord = false
      }
    }
  }
}

Trie.prototype.contains = fucntion(word) {
  if(!this.root) {
    return false
  }
  return this._contains(this.root, word)
}

Trie.prototype._contains = function(node, word) {
  if(!node || !word) {
    return false
  }
  let letter = word.charAt(0)
  let child = node.children[letter]
  if(child) {
    let remainder = word.substring(1)
    if(!remainder && child.isWord) {
      return true
    } else {
      return this._contains(child, remainder)
    }
  } else {
    return false
  }
}

Trie.prototype.countWords = function() {
  if(!this.root) {
    return console.log('no root node found');
  }
  let que = [this.root]
  let counter = 0
  while(que.length) {
    let node = que.shift()
    if(node.isWord) {
      counter ++
    }
    for(let child in node.children) {
      if(node.children.hasOwnProperty(child)) {
        que.push(node.children[child])
      }
    }
  }
  return counter
}
Trie.prototype.getWords = function() {
  let words = []
  let word = ''
  this._getWords(this.root, words, word)
  return words
}
Trie.prototype._getWords = function(node, words, word) {
  for(let child in node.children) {
    if(node.children.hasOwnProperty(child)) {
      word += child
      if (node.children[child].isWord) {
        words.push(word)
      }
      this._getWords(node.children[child], words, word)
      word = word.substring(0, word.length -1)
    }
  }
}

Trie.prototype.print = function() {
  if(!this.root) {
    return console.log('no root node founds');
  }
  let newline = new Node('|')
  let que = [this.root, newline]
  let string = ''
  while(que.length) {
    let node = que.shift()
    string+=node.data.toString() + ' ';
    if (node === newline && que.length) {
      que.push(newline)
    }
    for(let child in node.children) {
      if(node.children.hasOwnProperty(child)) {
        que.push(node.children[child])
      }
    }
  }
  console.log(string.slice(0, -2).trim())
}

Trie.prototype.printByLevel = function() {
  if(!this.root) {
    return console.log('no root found')
  }
  let newline = new Node('\n')
  let que = [this.root, newline]
  let string = ''
  while(que.length) {
    let node = que.shift()
    string += node.data.toString() + (node.data !== '\n' ? ' ' : '')
    if(node === newline && que.length) {
      que.push(newline)
    }
    for(let child in node.children) {
      if(node.children.hasOwnProperty(child)) {
        que.push(node.child[child])
      }
    }
  }
  console.log(string.trim());
}
