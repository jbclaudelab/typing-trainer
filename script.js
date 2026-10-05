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
  { id: "final", name: "Final challenge", text: "On March 3, 2026, Sam asked, \"Who's ready?\" Everyone cheered; the race had begun!" },

  // Stage 5: commonly confused words (type the word that fills the gap)
  {
    id: "confused-there", type: "confused", name: "Confused words: their, there, they're",
    questions: [
      { sentence: "___ coat is still on the chair.", answer: "Their", choices: ["Their", "There", "They're"], tip: "Their = belonging to them." },
      { sentence: "We parked over ___ by the gate.", answer: "there", choices: ["their", "there", "they're"], tip: "There = a place. It contains the word \"here\"." },
      { sentence: "___ hoping to finish by Friday.", answer: "They're", choices: ["Their", "There", "They're"], tip: "They're = they are." },
      { sentence: "Is ___ any coffee left?", answer: "there", choices: ["their", "there", "they're"], tip: "There is / there are: something exists." },
      { sentence: "The neighbours sold ___ car last week.", answer: "their", choices: ["their", "there", "they're"], tip: "Their = belonging to them." }
    ]
  },
  {
    id: "confused-your", type: "confused", name: "Confused words: your, you're",
    questions: [
      { sentence: "___ report was really clear.", answer: "Your", choices: ["Your", "You're"], tip: "Your = belonging to you." },
      { sentence: "Let me know when ___ ready.", answer: "you're", choices: ["your", "you're"], tip: "You're = you are." },
      { sentence: "Thanks for ___ patience.", answer: "your", choices: ["your", "you're"], tip: "Your = belonging to you." },
      { sentence: "___ welcome to join us.", answer: "You're", choices: ["Your", "You're"], tip: "You're = you are." },
      { sentence: "Is this ___ umbrella?", answer: "your", choices: ["your", "you're"], tip: "Your = belonging to you." }
    ]
  },
  {
    id: "confused-its", type: "confused", name: "Confused words: its, it's",
    questions: [
      { sentence: "___ going to rain later.", answer: "It's", choices: ["Its", "It's"], tip: "It's = it is." },
      { sentence: "The company changed ___ logo.", answer: "its", choices: ["its", "it's"], tip: "Its = belonging to it. No apostrophe, just like \"his\" and \"hers\"." },
      { sentence: "___ been a long week.", answer: "It's", choices: ["Its", "It's"], tip: "It's can also mean \"it has\"." },
      { sentence: "The dog wagged ___ tail.", answer: "its", choices: ["its", "it's"], tip: "Its = belonging to it." },
      { sentence: "I think ___ worth a try.", answer: "it's", choices: ["its", "it's"], tip: "It's = it is." }
    ]
  },
  {
    id: "confused-then", type: "confused", name: "Confused words: then, than",
    questions: [
      { sentence: "She types faster ___ I do.", answer: "than", choices: ["then", "than"], tip: "Than compares two things." },
      { sentence: "Finish the report, ___ send it to me.", answer: "then", choices: ["then", "than"], tip: "Then is about time or order: first this, then that." },
      { sentence: "This route is shorter ___ the motorway.", answer: "than", choices: ["then", "than"], tip: "Than compares two things." },
      { sentence: "We had dinner and ___ watched a film.", answer: "then", choices: ["then", "than"], tip: "Then = next, after that." },
      { sentence: "I'd rather walk ___ wait for the bus.", answer: "than", choices: ["then", "than"], tip: "\"Rather ... than\" is a comparison too." }
    ]
  }
];

let levelIndex = 0;
let practiceText = "";
let position = 0;
let startTime = null;
let totalKeys = 0;
let mistakes = 0;
let questionIndex = 0;

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
const instructionsDisplay = document.getElementById("instructions");
const choicesDisplay = document.getElementById("choices");

// Confused-word levels are scored on accuracy; typing levels on speed.
function scoreUnit(level) {
  if (level.type === "confused") {
    return "% accuracy";
  }
  return " WPM";
}

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
      button.textContent += "\n" + "Best: " + best + scoreUnit(levels[i]);
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

function showQuestion() {
  const level = levels[levelIndex];
  const question = level.questions[questionIndex];
  const parts = question.sentence.split("___");

  // Only show what has been typed so far, so the answer isn't given away.
  let gap = '<span class="done">' + practiceText.slice(0, position) + "</span>";
  if (position < practiceText.length) {
    gap += '<span class="current gap"> </span>';
  }
  display.innerHTML = parts[0] + gap + parts[1];

  levelDisplay.textContent =
    "Level " + (levelIndex + 1) + " of " + levels.length + ": " + level.name +
    " (question " + (questionIndex + 1) + " of " + level.questions.length + ")";
  choicesDisplay.textContent = "Options: " + question.choices.join("  ·  ");
}

function showText() {
  if (levels[levelIndex].type === "confused") {
    showQuestion();
    return;
  }
  choicesDisplay.textContent = "";
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
    bestDisplay.textContent = "Best: " + saved + scoreUnit(levels[levelIndex]);
  }
}

function showResults() {
  const accuracy = Math.round(((totalKeys - mistakes) / totalKeys) * 100);
  let score;
  if (levels[levelIndex].type === "confused") {
    score = accuracy;
    results.textContent = "Accuracy: " + accuracy + "%";
  } else {
    const minutes = (Date.now() - startTime) / 60000;
    score = Math.round(practiceText.length / 5 / minutes);
    results.textContent = "Speed: " + score + " WPM | Accuracy: " + accuracy + "%";
  }

  const saved = localStorage.getItem("best-" + levels[levelIndex].id);
  if (saved === null || score > Number(saved)) {
    localStorage.setItem("best-" + levels[levelIndex].id, score);
  }
  showBest();
}

function loadLevel() {
  const level = levels[levelIndex];
  questionIndex = 0;
  if (level.type === "confused") {
    practiceText = level.questions[0].answer;
    instructionsDisplay.textContent = "Type the word that correctly fills the gap.";
  } else {
    practiceText = level.text;
    instructionsDisplay.textContent = "Type the letters below without looking at your keyboard.";
  }
  levelDisplay.textContent =
    "Level " + (levelIndex + 1) + " of " + levels.length + ": " + level.name;

  position = 0;
  startTime = null;
  totalKeys = 0;
  mistakes = 0;
  feedback.textContent = "";
  results.textContent = "";
  showText();
  showBest();
}

function isLastQuestion() {
  return questionIndex === levels[levelIndex].questions.length - 1;
}

function finishQuestion() {
  const question = levels[levelIndex].questions[questionIndex];
  if (isLastQuestion()) {
    feedback.textContent = question.tip + " Level complete! Click Next level.";
    showResults();
  } else {
    feedback.textContent = question.tip + " Press Enter for the next one.";
  }
}

function nextQuestion() {
  questionIndex = questionIndex + 1;
  practiceText = levels[levelIndex].questions[questionIndex].answer;
  position = 0;
  feedback.textContent = "";
  showText();
}

document.addEventListener("keydown", function (event) {
  if (gameScreen.hidden) {
    return;
  }
  const isConfused = levels[levelIndex].type === "confused";
  const wordFinished = position === practiceText.length;
  if (event.key === "Enter" && isConfused && wordFinished && !isLastQuestion()) {
    nextQuestion();
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
    if (isConfused) {
           feedback.textContent = "Not quite. Hint: " + levels[levelIndex].questions[questionIndex].tip;
    } else {
      feedback.textContent = "Wrong! Try: " + practiceText[position];
    }
  }

  if (position === practiceText.length && isConfused) {
    finishQuestion();
  } else if (position === practiceText.length) {
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
    if (levels[i].text === undefined) {
      continue;  // confused-word levels are new, so they have no old scores
    }
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