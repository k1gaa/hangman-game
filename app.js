const form = document.querySelector("form");
const textInput = form.querySelector("input");
const result = document.querySelector("h2");

const word = "myself";

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (textInput.value != "") {
    checkWord();
  }
});

const checkWord = () => {
  const wordArray = word.split("");

  for (let i = 0; i < wordArray.length; i++) {
    const element = wordArray[i];

    if (element == textInput.value) {
      result.textContent = "letter was found";
      break;
    } else {
      result.textContent = "letter was not found";
    }
  }
};
