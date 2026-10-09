let currentPath = null;      // "typing" or "english" once you've chosen on the start screen
let currentCategory = null;  // the starting point you chose (one of the categories in levels.js)
let currentLevels = levels;  // the levels in that starting point
let levelIndex = 0;          // which of currentLevels you're playing
let practiceText = "";
let position = 0;
let startTime = null;
let lastKeyTime = null;
let totalKeys = 0;
let mistakes = 0;
let questionIndex = 0;
let lastKeyWrong = false;
let typedTimes = [];  // when each letter was typed correctly, so its green fade can carry on

const display = document.querySelector(".practice-text");
const feedback = document.getElementById("feedback");
const completePanel = document.getElementById("complete-panel");
const completeTitle = document.getElementById("complete-title");
const completeScore = document.getElementById("complete-score");
const completeUnit = document.getElementById("complete-unit");
const completeDetail = document.getElementById("complete-detail");
const completeBest = document.getElementById("complete-best");
const completeHint = document.getElementById("complete-hint");
const bestDisplay = document.getElementById("best");
const levelDisplay = document.getElementById("level");
const retryButton = document.getElementById("retry");
const nextButton = document.getElementById("next");
const menuScreen = document.getElementById("menu");
const menuTitle = document.getElementById("menu-title");
const changeStartButton = document.getElementById("change-start-button");
const startingPointsScreen = document.getElementById("starting-points");
const categoryList = document.getElementById("category-list");
const gameScreen = document.getElementById("game");
const levelList = document.getElementById("level-list");
const menuButton = document.getElementById("menu-button");
const startScreen = document.getElementById("start");
const typingPathButton = document.getElementById("typing-path-button");
const englishPathButton = document.getElementById("english-path-button");
const capsWarning = document.getElementById("caps-warning");
const instructionsDisplay = document.getElementById("instructions");
const choicesDisplay = document.getElementById("choices");
const homeButton = document.getElementById("home-button");
const levelsNavButton = document.getElementById("levels-nav-button");
const homeNavButton = document.getElementById("home-nav-button");
const speedStat = document.getElementById("speed-stat");
const questionStat = document.getElementById("question-stat");
const speedValue = document.getElementById("speed-value");
const questionValue = document.getElementById("question-value");
const accuracyValue = document.getElementById("accuracy-value");
const mistakesValue = document.getElementById("mistakes-value");

// Some browsers block saved data (for example, if all cookies are blocked).
// These functions keep the game working even then; scores just won't be saved.
function loadScore(name) {
  try {
    return localStorage.getItem(name);
  } catch (error) {
    return null;
  }
}

function saveScore(name, value) {
  try {
    localStorage.setItem(name, value);
  } catch (error) {
    // Saving isn't possible in this browser, so carry on without it.
  }
}

// Each level also keeps your most recent results (not just your best), so the game
// can later work out averages, suggest checkpoints and count streaks.
const HISTORY_LENGTH = 5;

// Your recent results for a level, oldest first. Each one looks like
// { wpm: 42, accuracy: 96, date: 1791240598655 } (wpm is null on English levels).
function loadHistory(level) {
  const saved = loadScore("history-" + level.id);
  if (saved === null) {
    return [];
  }
  try {
    const history = JSON.parse(saved);
    if (Array.isArray(history)) {
      return history;
    }
  } catch (error) {
    // The saved history was damaged, so start a fresh one.
  }
  return [];
}

// Adds one result to a level's history, keeping only the most recent few.
function saveToHistory(level, result) {
  const history = loadHistory(level);
  history.push(result);
  while (history.length > HISTORY_LENGTH) {
    history.shift();  // remove the oldest
  }
  saveScore("history-" + level.id, JSON.stringify(history));
}

function deleteScore(name) {
  try {
    localStorage.removeItem(name);
  } catch (error) {
    // Saved data is blocked, so there's nothing to delete.
  }
}

// Turns characters that mean something special in HTML into safe versions,
// so a level containing < or & shows those characters instead of breaking.
function escapeHtml(text) {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// Confused-word levels are scored on accuracy; typing levels on points (speed and accuracy combined).
function scoreUnit(level) {
  if (level.type === "confused") {
    return "% accuracy";
  }
  return " points";
}

// A typing level's score: your speed, multiplied by your accuracy twice.
// Squaring the accuracy makes mistakes cost more than slowness:
// 50 WPM at 100% scores 50, but 50 WPM at 90% scores only 41 (50 × 0.9 × 0.9).
function combinedScore(wpm, accuracy) {
  const fraction = accuracy / 100;
  return Math.round(wpm * fraction * fraction);
}

function levelTitle() {
  return "Level " + (levelIndex + 1) + " of " + currentLevels.length + ": " + currentLevels[levelIndex].name;
}

// Which path ("typing" or "english") a level belongs to, looked up from its category.
function pathOf(level) {
  for (let i = 0; i < categories.length; i++) {
    if (categories[i].id === level.category) {
      return categories[i].path;
    }
  }
  return null;
}

// The levels in one starting point, in the order they're listed in levels.js.
function levelsIn(category) {
  const found = [];
  for (let i = 0; i < levels.length; i++) {
    if (levels[i].category === category.id) {
      found.push(levels[i]);
    }
  }
  return found;
}

// Shows the starting points for the chosen path ("typing" or "english") as cards.
// Starting points with no levels yet are left out until they get some.
function choosePath(path) {
  currentPath = path;
  currentCategory = null;
  categoryList.innerHTML = "";

  for (let i = 0; i < categories.length; i++) {
    const category = categories[i];
    const levelCount = levelsIn(category).length;
    if (category.path !== path || levelCount === 0) {
      continue;
    }

    const button = document.createElement("button");
    button.className = "path-card";

    const title = document.createElement("span");
    title.className = "path-card-title";
    title.textContent = category.title;

    const description = document.createElement("span");
    description.className = "path-card-text";
    description.textContent = category.description;

    const count = document.createElement("span");
    count.className = "path-card-count";
    count.textContent = levelCount + " levels";
    if (levelCount === 1) {
      count.textContent = "1 level";
    }

    button.appendChild(title);
    button.appendChild(description);
    button.appendChild(count);
    button.addEventListener("click", function () {
      button.blur();
      chooseCategory(category);
    });
    categoryList.appendChild(button);
  }

  showScreen(startingPointsScreen);
}

// Plays the levels in one starting point, and shows them in the menu.
function chooseCategory(category) {
  currentCategory = category;
  currentLevels = levelsIn(category);
  levelIndex = 0;
  showMenu();
}

// What the level-complete panel says when you finish the last level in your starting point.
function finishedAllMessage() {
  if (currentLevels.length === 1) {
    return "You finished the level!";
  }
  return "You finished all " + currentLevels.length + " levels!";
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
  for (let i = 0; i < currentLevels.length; i++) {
    const button = document.createElement("button");
    button.className = "level-button";

    const best = loadScore("best-" + currentLevels[i].id);

    button.textContent = "Level " + (i + 1) + ": " + currentLevels[i].name;
    if (best !== null) {
      button.textContent += "\n" + "Best: " + best + scoreUnit(currentLevels[i]);
      button.classList.add("completed");
    }

    button.addEventListener("click", function () {
      levelIndex = i;
      button.blur();
      showGame();
    });
    levelList.appendChild(button);
  }
}

// Shows one screen and hides all the others.
function showScreen(screen) {
  startScreen.hidden = true;
  startingPointsScreen.hidden = true;
  menuScreen.hidden = true;
  gameScreen.hidden = true;
  screen.hidden = false;
  window.scrollTo(0, 0);  // start each screen at the top, even if you'd scrolled down the last one
}

function showMenu() {
  buildMenu();
  if (currentCategory !== null) {
    menuTitle.textContent = currentCategory.title;
  }
  showScreen(menuScreen);
}

function showStart() {
  showScreen(startScreen);
}

function showGame() {
  showScreen(gameScreen);
  loadLevel();
}

// The class for the letter you're on: "current", plus "wrong" straight after a mistake.
function currentClass() {
  if (lastKeyWrong) {
    return "current wrong";
  }
  return "current";
}

// One letter you've typed correctly. It flashes green, then fades to white.
// The letters are redrawn on every key press, so the negative delay makes the fade
// carry on from where it was instead of starting again.
function typedLetter(i) {
  const age = Math.round(performance.now() - typedTimes[i]);
  return '<span class="done" style="animation-delay: -' + age + 'ms">' + escapeHtml(practiceText[i]) + "</span>";
}

function showQuestion() {
  const level = currentLevels[levelIndex];
  const question = level.questions[questionIndex];
  const parts = question.sentence.split("___");

  // The blank is as wide as the longest option, so the sentence doesn't shift as you type.
  let longest = 0;
  for (let i = 0; i < question.choices.length; i++) {
    if (question.choices[i].length > longest) {
      longest = question.choices[i].length;
    }
  }

  // Only show what has been typed so far, so the answer isn't given away.
  let gap = '<span class="answer-box" style="--answer-length: ' + longest + '">';
  for (let i = 0; i < position; i++) {
    gap += typedLetter(i);
  }
  if (position < practiceText.length) {
    gap += '<span class="' + currentClass() + '"> </span>';
  }
  gap += "</span>";
  display.innerHTML = escapeHtml(parts[0]) + gap + escapeHtml(parts[1]);
  choicesDisplay.textContent = "Options: " + question.choices.join("  ·  ");
}

function showText() {
  if (currentLevels[levelIndex].type === "confused") {
    showQuestion();
    return;
  }
  choicesDisplay.textContent = "";
  let html = "";
  for (let i = 0; i < practiceText.length; i++) {
    const letter = escapeHtml(practiceText[i]);
    if (i < position) {
      html += typedLetter(i);
    } else if (i === position) {
      html += '<span class="' + currentClass() + '">' + letter + "</span>";
    } else {
      html += "<span>" + letter + "</span>";
    }
  }
  display.innerHTML = html;
}

function showBest() {
  const saved = loadScore("best-" + currentLevels[levelIndex].id);
  if (saved === null) {
    bestDisplay.textContent = "Best: none yet";
  } else {
    bestDisplay.textContent = "Best: " + saved + scoreUnit(currentLevels[levelIndex]);
  }
}

// Speed in words per minute. Every 5 characters count as one word.
// The clock runs from your first key press to your latest one.
function calculateWpm() {
  const minutes = (lastKeyTime - startTime) / 60000;
  return Math.round(position / 5 / minutes);
}

// The percentage of key presses that were correct.
function calculateAccuracy() {
  return Math.round(((totalKeys - mistakes) / totalKeys) * 100);
}

// Refreshes the live numbers in the stats bar above the practice text.
function updateStats() {
  const level = currentLevels[levelIndex];
  const isConfused = level.type === "confused";

  // English levels are scored on accuracy, so they show the question number instead of speed.
  speedStat.hidden = isConfused;
  questionStat.hidden = !isConfused;

  if (isConfused) {
    questionValue.textContent = (questionIndex + 1) + " / " + level.questions.length;
  } else if (position < 5) {
    speedValue.textContent = "–";  // wait for one word (5 characters) so the speed is fair
  } else {
    speedValue.textContent = calculateWpm();
  }

  if (totalKeys === 0) {
    accuracyValue.textContent = "–";
  } else {
    accuracyValue.textContent = calculateAccuracy();
  }
  mistakesValue.textContent = mistakes;
}

// Shows the level-complete panel, adds the result to the level's history,
// and saves the score if it's a new best.
function showResults() {
  const level = currentLevels[levelIndex];
  // The big number, with its unit in smaller text beside it.
  const accuracy = calculateAccuracy();
  let wpm = null;
  let score;
  if (level.type === "confused") {
    score = accuracy;
    completeScore.textContent = score + "%";
    completeUnit.textContent = "accuracy";
    completeDetail.textContent = "";
  } else {
    wpm = calculateWpm();
    score = combinedScore(wpm, accuracy);
    completeScore.textContent = score;
    completeUnit.textContent = "points";
    completeDetail.textContent = wpm + " WPM  ·  " + accuracy + "% accuracy";
  }
  saveToHistory(level, { wpm: wpm, accuracy: accuracy, date: Date.now() });

  if (levelIndex === currentLevels.length - 1) {
    completeTitle.textContent = finishedAllMessage();
    completeHint.textContent = "Press Enter to start again from Level 1.";
  } else {
    completeTitle.textContent = "Level complete!";
    completeHint.textContent = "Press Enter or click Next level.";
  }

  // Compare with the best score saved before this attempt.
  const saved = loadScore("best-" + level.id);
  completeBest.classList.remove("new-best");
  if (saved === null) {
    completeBest.textContent = "Your first score on this level.";
  } else if (score > Number(saved)) {
    completeBest.textContent = "New best! Your old best was " + saved + scoreUnit(level) + ".";
    completeBest.classList.add("new-best");
  } else if (score === Number(saved)) {
    completeBest.textContent = "You matched your best.";
  } else {
    completeBest.textContent = "Your best is " + saved + scoreUnit(level) + ".";
  }

  if (saved === null || score > Number(saved)) {
    saveScore("best-" + level.id, score);
  }

  completePanel.hidden = false;
  bestDisplay.hidden = true;  // the panel already shows how you did against your best
}

function loadLevel() {
  const level = currentLevels[levelIndex];
  questionIndex = 0;
  if (level.type === "confused") {
    practiceText = level.questions[0].answer;
    instructionsDisplay.textContent = "Type the word that correctly fills the gap.";
  } else {
    practiceText = level.text;
    instructionsDisplay.textContent = "Type the letters below without looking at your keyboard.";
  }
  levelDisplay.textContent = levelTitle();

  position = 0;
  startTime = null;
  lastKeyTime = null;
  totalKeys = 0;
  mistakes = 0;
  lastKeyWrong = false;
  typedTimes = [];
  feedback.textContent = "";
  feedback.classList.remove("error");
  completePanel.hidden = true;
  bestDisplay.hidden = false;
  showText();
  showBest();
  updateStats();
}

function isLastQuestion() {
  return questionIndex === currentLevels[levelIndex].questions.length - 1;
}

function finishQuestion() {
  const question = currentLevels[levelIndex].questions[questionIndex];
  if (isLastQuestion()) {
    feedback.textContent = question.tip;
    showResults();
  } else {
    feedback.textContent = question.tip + " Press Enter for the next one.";
  }
}

function nextQuestion() {
  questionIndex = questionIndex + 1;
  practiceText = currentLevels[levelIndex].questions[questionIndex].answer;
  position = 0;
  lastKeyWrong = false;
  typedTimes = [];
  feedback.textContent = "";
  feedback.classList.remove("error");
  showText();
  updateStats();
}

function goToNextLevel() {
  levelIndex = levelIndex + 1;
  if (levelIndex >= currentLevels.length) {
    levelIndex = 0;
  }
  loadLevel();
}

// Works out which character a key press means.
function typedCharacter(event) {
  // On some keyboard layouts (like US-International), ' and " are "dead keys":
  // the browser reports "Dead" instead of the character, so work it out here.
  if (event.key === "Dead" && event.code === "Quote") {
    if (event.shiftKey) {
      return '"';
    }
    return "'";
  }
  return event.key;
}

document.addEventListener("keydown", function (event) {
  if (gameScreen.hidden) {
    return;
  }
  const isConfused = currentLevels[levelIndex].type === "confused";

  if (event.key === "Enter") {
    event.preventDefault();  // stop Enter from also pressing a button on the page
    const wordFinished = position === practiceText.length;
    if (!wordFinished) {
      return;
    }
    if (isConfused && !isLastQuestion()) {
      nextQuestion();
    } else {
      goToNextLevel();
    }
    return;
  }

  const key = typedCharacter(event);
  if (key.length > 1) {
    return;
  }
  if (event.ctrlKey || event.metaKey || event.altKey) {
    return;
  }
  event.preventDefault();

  if (position >= practiceText.length) {
    return;
  }

  // performance.now() is a stopwatch: unlike the computer's clock, it can't be changed mid-level.
  if (startTime === null) {
    startTime = performance.now();
  }
  lastKeyTime = performance.now();
  totalKeys = totalKeys + 1;

  if (key === practiceText[position]) {
    typedTimes[position] = performance.now();
    position = position + 1;
    lastKeyWrong = false;
    feedback.classList.remove("error");
    feedback.textContent = "Correct!";
  } else {
    mistakes = mistakes + 1;
    lastKeyWrong = true;
    feedback.classList.add("error");
    if (isConfused) {
      feedback.textContent = "Not quite. Hint: " + currentLevels[levelIndex].questions[questionIndex].tip;
    } else {
      let expected = practiceText[position];
      if (expected === " ") {
        expected = "space";
      }
      feedback.textContent = "Wrong! Try: " + expected;
    }
  }

  if (position === practiceText.length && isConfused) {
    finishQuestion();
  } else if (position === practiceText.length) {
    feedback.textContent = "";  // the panel says the level is complete
    showResults();
  }
  showText();
  updateStats();
});

retryButton.addEventListener("click", function () {
  loadLevel();
  retryButton.blur();
});

nextButton.addEventListener("click", function () {
  goToNextLevel();
  nextButton.blur();
});

menuButton.addEventListener("click", function () {
  menuButton.blur();
  showMenu();
});

typingPathButton.addEventListener("click", function () {
  typingPathButton.blur();
  choosePath("typing");
});

englishPathButton.addEventListener("click", function () {
  englishPathButton.blur();
  choosePath("english");
});

// The logo and the Home button both go back to the start screen.
function goHome(event) {
  event.currentTarget.blur();  // whichever of the two was clicked
  showStart();
}

homeButton.addEventListener("click", goHome);
homeNavButton.addEventListener("click", goHome);

levelsNavButton.addEventListener("click", function () {
  levelsNavButton.blur();
  // Go as far as you've chosen: your levels, your path's starting points, or the start.
  if (currentCategory !== null) {
    showMenu();
  } else if (currentPath !== null) {
    choosePath(currentPath);
  } else {
    showStart();
  }
});

changeStartButton.addEventListener("click", function () {
  changeStartButton.blur();
  choosePath(currentPath);
});

// Scores used to be saved under each level's sentence.
// Copy any old ones across to the new id-based names. This only needs
// to happen once, so a "scores-migrated" note is saved afterwards.
function moveOldScores() {
  if (loadScore("scores-migrated") !== null) {
    return;
  }
  for (let i = 0; i < levels.length; i++) {
    if (levels[i].text === undefined) {
      continue;  // confused-word levels are new, so they have no old scores
    }
    const oldKey = "best-" + levels[i].text;
    const newKey = "best-" + levels[i].id;
    const oldScore = loadScore(oldKey);
    if (oldScore !== null && loadScore(newKey) === null) {
      saveScore(newKey, oldScore);
    }
    deleteScore(oldKey);
  }
  saveScore("scores-migrated", "yes");
}

moveOldScores();

// Typing levels used to save your best WPM. Now they save your best combined score,
// and an old WPM can't be turned into one (we don't know its accuracy).
// So each typing level's best is rebuilt from its recent results, once.
function switchToCombinedScores() {
  if (loadScore("combined-scores") !== null) {
    return;
  }
  for (let i = 0; i < levels.length; i++) {
    const level = levels[i];
    if (level.type === "confused") {
      continue;  // English levels are still scored on accuracy
    }
    deleteScore("best-" + level.id);
    const history = loadHistory(level);
    let best = null;
    for (let j = 0; j < history.length; j++) {
      const score = combinedScore(history[j].wpm, history[j].accuracy);
      if (best === null || score > best) {
        best = score;
      }
    }
    if (best !== null) {
      saveScore("best-" + level.id, best);
    }
  }
  saveScore("combined-scores", "yes");
}

switchToCombinedScores();

// With lots of levels it's easy to make a typo in levels.js. This checks the list
// once when the page loads, and writes a warning in the browser's developer console
// (F12) if something would go wrong.
function checkLevelData() {
  const seenIds = {};
  for (let i = 0; i < levels.length; i++) {
    const level = levels[i];
    if (seenIds[level.id]) {
      console.warn("Two levels share the id \"" + level.id + "\", so they would share one best score.");
    }
    seenIds[level.id] = true;
    if (pathOf(level) === null) {
      console.warn("Level \"" + level.id + "\" has an unknown category \"" + level.category + "\", so it won't appear anywhere.");
    }
  }
}

checkLevelData();
