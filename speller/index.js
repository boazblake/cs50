const fs = require('fs');
const struct = require('./trie.js')
const dict = new struct.Trie()

const wordFile = require.resolve('./speller/dictionaries/large.txt')
 const textFile = require.resolve('./speller/texts/witch.txt')


const words = fs.readFileSync(wordFile, 'utf8').split('\n')
const text = fs.readFileSync(textFile, 'utf8').split(' ')

const parse = str =>
  str.toLowerCase().replace(/[&\/\\#,+()$~%.":*?<>{}!1234567890-]/g,'');

const result = {
  totalWords : 0,
  good : 0,
  misspelled: [],
  bad : 0
}

const report = function(type ,word, obj) {
  console.log(type, word)
  if(type === 'bad') {
    obj.misspelled.push(word)
  }
  obj[type]++ && obj.totalWords ++
  console.log('end!');
  return obj.misspelled
}

const load = _ =>{
  for (var i = 0; i <=words.length -1; i++) {
    dict.add(parse(words[i]))
  }}


//check :: Str -> Obj
const check  = book => obj => cb => {
  //contains :: word -> Obj
  // book.map( word =>{
  //   dict.contains(parse(word))
  //   ? cb('good', parse(word))
  //   : cb('bad', parse(word))})
  //
  //   return result
  for (var i = 0; i <= book.length -1; i++){
    let word = parse(book[i])
    dict.contains(word)
     ? cb('good', parse(word), obj)
     : cb('bad', parse(word), obj)
  }
}


console.log('about to load dictionary.....');
console.time('large')
load()
console.timeEnd('large')

console.time('text')
console.log(check(text)(result)(report))
console.timeEnd('text')

// console.log(
//   console.time('large'),
//   text.map( word => dict.contains(word)),
//   console.timeEnd('large')
// )
