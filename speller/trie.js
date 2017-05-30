
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
    node.children[letter] = child
  }
  let remainder = word.substring(1)
  if(!remainder) {
    child.isWord = true
  }
  this._addNode(child, remainder)
 }

Trie.prototype.remove = function(word) {
  if(!this.root) {
    return null
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

Trie.prototype.contains = function(word) {
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
        que.push(node.children[child])
      }
    }
  }
  console.log(string.trim());
}


module.exports ={
  Node, Trie
}
