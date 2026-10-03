const levels = [
  // Stage 1: home row, lowercase, no punctuation
  { id: "home-left", name: "Home row: left hand", text: "asdf fdsa asdf fdsa" },
  { id: "home-right", name: "Home row: right hand", text: "jkl lkj jkl lkj" },
  { id: "home-both", name: "Home row: both hands", text: "asdf jkl fdsa lkj" },
  { id: "home-words", name: "Home row words", text: "a sad lad asks dad" },
  { id: "home-words-2", name: "More home row words", text: "dad has a glass flask" },

  // Stage 2: reaching to the top and bottom rows
  { id: "top-e-i", name: "Top row: E and I", text: "he hides his keys" },
  { id: "top-r-t-o-u", name: "Top row: R, T, O, and U", text: "our tour starts at the old fort" },
  { id: "bottom-n-m-c-v", name: "Bottom row: N, M, C, and V", text: "my mom can move the van" },
  { id: "every-letter", name: "Every letter", text: "the quick brown fox jumps over the lazy dog" },
  { id: "longer-words", name: "Longer words", text: "practice makes progress every single day" },

  // Stage 3: capital letters
  { id: "capitals", name: "Capital letters", text: "Maria and Jake live in Boston" },
  { id: "capitals-start", name: "Capitals to start", text: "The sun rose over the quiet town" },

  // Stage 4: punctuation
  { id: "periods", name: "Periods", text: "I like to type. It gets easier each day." },
  { id: "commas", name: "Commas", text: "We packed apples, bread, cheese, and water." },
  { id: "question-marks", name: "Question marks", text: "Where are you going? Can I come too?" },
  { id: "apostrophes", name: "Apostrophes", text: "It's late, but we're almost done. Don't stop now!" },
  { id: "quotes", name: "Quotation marks", text: "\"Keep going,\" she said. \"You're doing great!\"" },
  { id: "numbers", name: "Numbers", text: "We left at 7:30 and drove 125 miles." },
  { id: "colons", name: "Colons and semicolons", text: "Bring three things: a pen, a notebook, and a snack; we'll provide the rest." },
  { id: "final", name: "Final challenge", text: "On March 3, 2026, Sam asked, \"Who's ready?\" Everyone cheered; the race had begun!" }
];

let levelIndex = 0;
let practiceText = "";
let position = 0;
let startTime = null;
let totalKeys = 0;
let mistakes = 0;

const display = document.querySelector(".practice-text");
const feedback = document.getElementById("feedback");
const results = document.getElementById("results");
const bestDisplay = document.getElementById("best");
const levelDisplay = document.getElementById("level");
const retryButton = document.getElementById("retry");
const nextButton = document.getElementById("next");
const menuScreen = document.getElementById("menu");
const gameScreen = document.getElementById("game");
const levelList = document.getElementById("level-list");
const menuButton = document.getElementById("menu-button");
const startScreen = document.getElementById("start");
const startButton = document.getElementById("start-button");
const capsWarning = document.getElementById("caps-warning");

function updateCapsWarning(event) {
  if (event.getModifierState("CapsLock")) {
    capsWarning.textContent = "Caps Lock is on";
  } else {
    capsWarning.textContent = "";
  }
}

document.addEventListener("keydown", updateCapsWarning);
document.addEventListener("keyup", updateCapsWarning);

function buildMenu() {
  levelList.innerHTML = "";
  for (let i = 0; i < levels.length; i++) {
    const button = document.createElement("button");
    button.className = "level-button";

    const best = localStorage.getItem("best-" + levels[i].id);


button.textContent = "Level " + (i + 1) + ": " + levels[i].name;
    if (best !== null) {
      button.textContent += "\n" + "Best: " + best + " WPM";
      button.classList.add("completed");
    }    

    button.addEventListener("click", function () {
      levelIndex = i;
      showGame();
    });
    levelList.appendChild(button);
  }
}

function showMenu() {
  buildMenu();
  startScreen.hidden = true;
  gameScreen.hidden = true;
  menuScreen.hidden = false;
}

function showGame() {
  menuScreen.hidden = true;
  gameScreen.hidden = false;
  loadLevel();
}

function showText() {
  let html = "";
  for (let i = 0; i < practiceText.length; i++) {
    if (i < position) {
      html += '<span class="done">' + practiceText[i] + "</span>";
    } else if (i === position) {
      html += '<span class="current">' + practiceText[i] + "</span>";
    } else {
      html += "<span>" + practiceText[i] + "</span>";
    }
  }
  display.innerHTML = html;
}

function showBest() {
  const saved = localStorage.getItem("best-" + levels[levelIndex].id);
  if (saved === null) {
    bestDisplay.textContent = "Best: none yet";
  } else {
    bestDisplay.textContent = "Best: " + saved + " WPM";
  }
}

function showResults() {
  const minutes = (Date.now() - startTime) / 60000;
  const wpm = Math.round(practiceText.length / 5 / minutes);
  const accuracy = Math.round(((totalKeys - mistakes) / totalKeys) * 100);
  results.textContent = "Speed: " + wpm + " WPM | Accuracy: " + accuracy + "%";

  const saved = localStorage.getItem("best-" + levels[levelIndex].id);
  if (saved === null || wpm > Number(saved)) {
    localStorage.setItem("best-" + levels[levelIndex].id, wpm);
  }
  showBest();
}

function loadLevel() {
  practiceText = levels[levelIndex].text;
  levelDisplay.textContent =
    "Level " + (levelIndex + 1) + " of " + levels.length + ": " + levels[levelIndex].name;

  position = 0;
  startTime = null;
  totalKeys = 0;
  mistakes = 0;
  feedback.textContent = "";
  results.textContent = "";
  showText();
  showBest();
}

document.addEventListener("keydown", function (event) {
  if (gameScreen.hidden) {
    return;
  }
  if (event.key.length > 1) {
    return;
  }
  if (event.ctrlKey || event.metaKey || event.altKey) {
    return;
  }
  event.preventDefault();

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
    if (levelIndex === levels.length - 1) {
      feedback.textContent = "You finished every level!";
    } else {
      feedback.textContent = "Level complete! Click Next level.";
    }
    showResults();
  }
  showText();
});

retryButton.addEventListener("click", function () {
  loadLevel();
  retryButton.blur();
});

nextButton.addEventListener("click", function () {
  levelIndex = levelIndex + 1;
  if (levelIndex >= levels.length) {
    levelIndex = 0;
  }
  loadLevel();
  nextButton.blur();
});

menuButton.addEventListener("click", function () {
  showMenu();
});

startButton.addEventListener("click", function () {
  showMenu();
});

// Scores used to be saved under each level's sentence.
// Copy any old ones across to the new id-based names.
function moveOldScores() {
  for (let i = 0; i < levels.length; i++) {
    const oldKey = "best-" + levels[i].text;
    const newKey = "best-" + levels[i].id;
    const oldScore = localStorage.getItem(oldKey);
    if (oldScore !== null && localStorage.getItem(newKey) === null) {
      localStorage.setItem(newKey, oldScore);
    }
    localStorage.removeItem(oldKey);
  }
}

moveOldScores();