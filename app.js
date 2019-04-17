function wordCounter(e) {
  e.preventDefault();
  let textArea = document.getElementById('sentence').value;
  let howManyWords = document.getElementById('how-many-words');
  const wordArray = textArea.trim().split(' ').length;

  if (wordArray === 1) {
    howManyWords.innerHTML = `Their is ${wordArray} word!`;
  } else {
    howManyWords.innerHTML = `Their are ${wordArray} words!`;
  }
}
