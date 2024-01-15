const keyDisplay = document.getElementById("key-display");
const keyCodeDisplay = document.getElementById("key-code-display");
const keyHistoryDisplay = document.getElementById('key-history');
let keyHistory = [];

keyDisplay.textContent = "Press any keyboard key";
keyCodeDisplay.style.display = 'none';
keyHistoryDisplay.textContent = "History";

document.addEventListener("keydown", (event) => {
  const pressedKey = event.key;
  const keyCode = event.keyCode;
  const keyCombination = event.ctrlKey ? "Ctrl + " + pressedKey : pressedKey;

  keyCodeDisplay.style.display = 'block';

  keyDisplay.innerHTML =
    'You Pressed <span style="color: #00ffd1;">' + keyCombination + "</span>";
  keyCodeDisplay.textContent = keyCode;

  keyHistory.push(keyCombination);
  if (keyHistory.length > 5) {
    keyHistory.shift();
  }
  keyHistoryDisplay.textContent = keyHistory.join(', ');
});
