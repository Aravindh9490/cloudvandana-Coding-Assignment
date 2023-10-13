// 1. Take a sentence as an input and reverse every word in that sentence.
// Example - This is a sunny day > shiT si a ynnus yad.

function reverseWordsInSentence(sentence) {
    
    const words = sentence.split(' ');
  
   
    const reversedWords = words.map(word => {
   
      return word.split('').reverse().join('');
    });
  
    const reversedSentence = reversedWords.join(' ');
  
    return reversedSentence;
  }
  
  const inputSentence = "This is a sunny day";
  const reversedSentence = reverseWordsInSentence(inputSentence);
  console.log(reversedSentence);
  

// 2. Perform sorting of an array in descending order

let myArray1 =[1,2,3,4,5,6,7];


myArray1.sort(function(a, b) {
  
  if (a > b) {
    return -1;
  } else if (a < b) {
    return 1;
  } else {
    return 0;
  }
});

console.log(myArray1);


