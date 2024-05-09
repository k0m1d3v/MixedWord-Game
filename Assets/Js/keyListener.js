const wordKeyboardInput = document.getElementById("wordInput");

document.addEventListener("keydown", function (event) {
  const key = event.key;
  console.log(key);

  if (key.length === 1 && key.match(/[a-z]/i)) {
    wordKeyboardInput.value += key.toUpperCase();
  } else {
    event.preventDefault();
  }

  if (key.match("Backspace")) {
    wordKeyboardInput.value = wordKeyboardInput.value.slice(0, -1);
  } else if (key.match("Enter")) {
    checkWord();
    wordKeyboardInput.value = "";
  }
});
