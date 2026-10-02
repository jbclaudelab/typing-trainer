const practiceText = "Bella bean Aunt becky Loves you So much not the same way I do";
let position = 0;
let startTime = null;
let totalKeys = 0;
let mistakes = 0;

const display = document.querySelector(".practice-text");
const feedback = document.getElementById("feedback");
const results = document.getElementById("results");
const restartButton = document.getElementById("restart");
const bestDisplay = document.getElementById("best");
const bestKey = "best-" + practiceText;

function showBest() {
  const saved = localStorage.getItem(bestKey);
  if (saved === null) {
    bestDisplay.textContent = "Best: none yet";
  } else {
    bestDisplay.textContent = "Best: " + saved + " WPM";
  }
}

function showText() {
  let html = "";
  for (let i = 0; i < practiceText.length; i++) {
    if (i < position) {
      html += '<span class="done">' + practiceText[i] + "</span>";
    } else {
      html += "<span>" + practiceText[i] + "</span>";
    }
  }
  display.innerHTML = html;
}

function showResults() {
  const minutes = (Date.now() - startTime) / 60000;
  const wpm = Math.round(practiceText.length / 5 / minutes);
  const accuracy = Math.round(((totalKeys - mistakes) / totalKeys) * 100);
  results.textContent = "Speed: " + wpm + " WPM | Accuracy: " + accuracy + "%";
  const saved = localStorage.getItem(bestKey);
  if (saved === null || wpm > Number(saved)) {
    localStorage.setItem(bestKey, wpm);
  }
  showBest();}

function restart() {
  position = 0;
  startTime = null;
  totalKeys = 0;
  mistakes = 0;
  feedback.textContent = "";
  results.textContent = "";
  showText();
}

document.addEventListener("keydown", function (event) {
  if (event.key.length > 1) {
    return;
  }
  if (position >= practiceText.length) {
    return;
  }

  if (startTime === null) {
    startTime = Date.now();
  }
  totalKeys = totalKeys + 1;

  if (event.key === practiceText[position]) {
    position = position + 1;
    feedback.textContent = "Correct!";
  } else {
    mistakes = mistakes + 1;
    feedback.textContent = "Wrong! Try: " + practiceText[position];
  }

  if (position === practiceText.length) {
    feedback.textContent = "Finished! Nice work.";
    showResults();
  }
  showText();
});

restartButton.addEventListener("click", function () {
  restart();
  restartButton.blur();
});

showText();
showBest();