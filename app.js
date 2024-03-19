const form = document.querySelector("form");
const textInput = form.querySelector("input");
const result = document.querySelector("h2");
const wordParagraph = document.querySelector('p')

const word = ['m', 'y', 's', 'e', 'l', 'f'];
let wordHidden = ["_", "_", "_", "_", "_", "_"];

const displayWord = () => {
  wordParagraph.textContent = "";

  wordHidden.forEach((e) => {
    wordParagraph.textContent += e;
  })
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (textInput.value != "") {
    checkWord();
  }
});

const checkWord = () => {

  for (let i = 0; i < word.length; i++) {
    const element = word[i];

    if (element == textInput.value) {
      result.textContent = "letter was found";
      wordHidden[i] = element;
      displayWord();
      break;
    } else {
      result.textContent = "letter was not found";
    }
  }
};
