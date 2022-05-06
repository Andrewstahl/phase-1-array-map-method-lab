const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(function(sentence) {
    let sentenceBreakout = sentence.split(" ");
    let newSentence = [];
    for (const word of sentenceBreakout) {
      newSentence.push(word.charAt(0).toUpperCase() + word.slice(1));
    }
    return newSentence.join(' ');
    // return sentence.map(function(word) {
    //   return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    // })
  })
}

console.log(titleCased());