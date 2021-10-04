// Tasks:
// - write the JS so that the word count appears on the screen
// - update the count as the user types
const textBoxEl = document.getElementById('txtid');
textBoxEl.value = '';
textBoxEl.focus();

function handleTextInput() {
  const text = textBoxEl.value;
  characterCount(text);
  wordCounter(text);
  longestWord(text);
}

function longestWord(text) {    
    let words = text.split(' ');
    words.sort(function(a,b) {
        return b.length - a.length  
    })

    if (words.length>1) {
        updateLongestWordEl(words[0])
    }
}

function wordCounter(text) {
  let wordCount = 0;

  text = text.split(' ');
  
  for (let i=0; i< text.length; i++) {
    if(text[i] !== ' ' && isAlpha(text[i])) {
          wordCount++;
      }
  }
  
  updateWordCountEl(wordCount);
}

function isAlpha(str) {
  var alphaNumericFound = false;

  for (var i = 0; i < str.length; i++) {
    var code = str.charCodeAt(i);
    if (
      (code > 47 && code < 58) || // numeric (0-9)
      (code > 64 && code < 91) || // upper alpha (A-Z)
      (code > 96 && code < 123)
    ) {
      // lower alpha (a-z)
      alphaNumericFound = true;
      return alphaNumericFound;
    }
  }
  return alphaNumericFound;
}

function characterCount(text) {
  charCount = text.length;
  updateCharacterCountEl(charCount);
}

function updateWordCountEl(wordCount) {
  const wordCountEl = document.getElementById('count');
  wordCountEl.innerText = wordCount;
}

function updateCharacterCountEl(charCount) {
  const charCountEl = document.getElementById('charCount');
  charCountEl.innerText = charCount;
}

function updateLongestWordEl(longWord) {
    const longestWordEl = document.getElementById('longWord');
    longestWordEl.innerText = longWord;
}

textBoxEl.addEventListener('keyup', handleTextInput);
