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
const completeCheckpoint = document.getElementById("complete-checkpoint");
const completeSuggestion = document.getElementById("complete-suggestion");
const tryCheckpointButton = document.getElementById("try-checkpoint");
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
const continueButton = document.getElementById("continue-button");
const continueText = document.getElementById("continue-text");
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

// How a score is written. Confused-word levels are scored on accuracy; typing levels on
// points out of 100, where anything over 100 is a bonus: "100/100 + 12 bonus".
function formatScore(level, score) {
  score = Number(score);  // saved scores come back as text
  if (level.type === "confused") {
    return score + "% accuracy";
  }
  if (score > 100) {
    return "100/100 + " + (score - 100) + " bonus";
  }
  return score + "/100";
}

// A typing level's score: your speed, multiplied by your accuracy twice.
// 100 WPM with perfect accuracy scores 100/100, and faster typists earn bonus points.
// Squaring the accuracy makes mistakes cost more than slowness:
// 50 WPM at 100% scores 50, but 50 WPM at 90% scores only 41 (50 × 0.9 × 0.9).
function combinedScore(wpm, accuracy) {
  const fraction = accuracy / 100;
  return Math.round(wpm * fraction * fraction);
}

function levelTitle() {
  return "Level " + (levelIndex + 1) + " of " + currentLevels.length + ": " + currentLevels[levelIndex].name;
}

// Looks up a starting point by its id, or null if there isn't one.
function findCategory(id) {
  for (let i = 0; i < categories.length; i++) {
    if (categories[i].id === id) {
      return categories[i];
    }
  }
  return null;
}

// Which path ("typing" or "english") a level belongs to, looked up from its category.
function pathOf(level) {
  const category = findCategory(level.category);
  if (category === null) {
    return null;
  }
  return category.path;
}

// Looks up a lesson by its id, or null if there isn't one.
function findLesson(id) {
  for (let i = 0; i < lessons.length; i++) {
    if (lessons[i].id === id) {
      return lessons[i];
    }
  }
  return null;
}

// The lessons in one starting point, in order.
function lessonsIn(category) {
  const found = [];
  for (let i = 0; i < lessons.length; i++) {
    if (lessons[i].category === category.id) {
      found.push(lessons[i]);
    }
  }
  return found;
}

// Whether you've passed a lesson's checkpoint.
function hasPassed(lesson) {
  return loadScore("passed-" + lesson.id) !== null;
}

// The first lesson in a starting point is always open. Any other lesson opens once you pass
// the checkpoint before it, or any checkpoint after it (that's "just how good you are").
function isUnlocked(lesson) {
  const inCategory = lessonsIn(findCategory(lesson.category));
  const index = inCategory.indexOf(lesson);
  if (index === 0) {
    return true;
  }
  for (let i = index - 1; i < inCategory.length; i++) {
    if (hasPassed(inCategory[i])) {
      return true;
    }
  }
  return false;
}

// You can play a level if it isn't in a lesson (English levels), if its lesson is unlocked,
// or if it's a checkpoint: you can always challenge a checkpoint to skip ahead.
function isPlayable(level) {
  if (level.lesson === undefined || level.checkpoint) {
    return true;
  }
  return isUnlocked(findLesson(level.lesson));
}

// A level counts as done once you've scored on it. A checkpoint only counts once you've passed it.
function isDone(level) {
  if (level.checkpoint) {
    return hasPassed(findLesson(level.lesson));
  }
  return loadScore("best-" + level.id) !== null;
}

// How many of your most recent results in a lesson count towards a checkpoint suggestion,
// and how many you need before the game makes one.
const SUGGESTION_RESULTS = 5;
const SUGGESTION_MINIMUM = 3;

// Your average points over your most recent results on a lesson's normal levels
// (not the checkpoint), or null if you haven't played enough yet.
function lessonAverage(lesson) {
  const results = [];
  for (let i = 0; i < levels.length; i++) {
    const level = levels[i];
    if (level.lesson !== lesson.id || level.checkpoint) {
      continue;
    }
    const history = loadHistory(level);
    for (let j = 0; j < history.length; j++) {
      results.push(history[j]);
    }
  }
  if (results.length < SUGGESTION_MINIMUM) {
    return null;
  }

  // Newest first, then keep only the most recent few.
  results.sort(function (a, b) {
    return b.date - a.date;
  });
  const recent = results.slice(0, SUGGESTION_RESULTS);

  let total = 0;
  for (let i = 0; i < recent.length; i++) {
    total += combinedScore(recent[i].wpm, recent[i].accuracy);
  }
  return total / recent.length;
}

// Suggest the checkpoint after a normal lesson level when your recent average
// would already pass it. It's only a suggestion: you can keep practicing.
function shouldSuggestCheckpoint(level) {
  if (level.lesson === undefined || level.checkpoint) {
    return false;
  }
  const lesson = findLesson(level.lesson);
  if (hasPassed(lesson)) {
    return false;
  }
  const average = lessonAverage(lesson);
  return average !== null && average >= findCategory(level.category).passMark;
}

// Where a lesson's checkpoint is in the levels you're playing, or -1.
function checkpointIndex(lessonId) {
  for (let i = 0; i < currentLevels.length; i++) {
    if (currentLevels[i].lesson === lessonId && currentLevels[i].checkpoint) {
      return i;
    }
  }
  return -1;
}

// The level the menu marks "Up next": the first one you can play and haven't done yet.
// Returns -1 if there isn't one (you've done everything).
function upNextIndex() {
  for (let i = 0; i < currentLevels.length; i++) {
    if (isPlayable(currentLevels[i]) && !isDone(currentLevels[i])) {
      return i;
    }
  }
  return -1;
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

// The heading above a lesson's levels in the menu, like "Lesson 1: Home row  Passed".
function lessonHeading(lesson) {
  const heading = document.createElement("h3");
  heading.className = "lesson-heading";
  const number = lessonsIn(findCategory(lesson.category)).indexOf(lesson) + 1;
  heading.textContent = "Lesson " + number + ": " + lesson.name;

  const status = document.createElement("span");
  status.className = "lesson-status";
  if (hasPassed(lesson)) {
    status.textContent = "Passed ✓";
    status.classList.add("passed");
  } else if (!isUnlocked(lesson)) {
    status.textContent = "Locked";
  }
  heading.appendChild(status);
  return heading;
}

function buildMenu() {
  levelList.innerHTML = "";
  const upNext = upNextIndex();
  let lastLesson = null;

  for (let i = 0; i < currentLevels.length; i++) {
    const level = currentLevels[i];

    // Start each new lesson with its heading.
    if (level.lesson !== undefined && level.lesson !== lastLesson) {
      lastLesson = level.lesson;
      levelList.appendChild(lessonHeading(findLesson(level.lesson)));
    }

    const button = document.createElement("button");
    button.className = "level-button";

    const best = loadScore("best-" + level.id);

    button.textContent = "Level " + (i + 1) + ": " + level.name;
    if (best !== null) {
      button.textContent += "\n" + "Best: " + formatScore(level, best);
    }
    if (isDone(level)) {
      button.classList.add("completed");
    }
    if (level.checkpoint) {
      button.classList.add("checkpoint");
      if (!isDone(level)) {
        button.textContent += "\n" + "Score " + findCategory(level.category).passMark + "/100 to pass";
      }
    }
    if (!isPlayable(level)) {
      button.disabled = true;
      button.textContent += "\n" + "Locked: pass a checkpoint to open";
    }
    if (i === upNext) {
      button.classList.add("up-next");
      const badge = document.createElement("span");
      badge.className = "up-next-badge";
      badge.textContent = "Up next";
      button.prepend(badge);
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
  updateContinueButton();
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
    bestDisplay.textContent = "Best: " + formatScore(currentLevels[levelIndex], saved);
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

// On a checkpoint, says whether you passed. Passing saves it, which unlocks the next lesson
// (and every lesson before this one). Other levels leave this part of the panel empty.
function showCheckpointResult(level, score) {
  completeCheckpoint.textContent = "";
  completeCheckpoint.classList.remove("passed");
  if (!level.checkpoint) {
    return;
  }

  const passMark = findCategory(level.category).passMark;
  if (score < passMark) {
    completeTitle.textContent = "Not passed yet";
    completeCheckpoint.textContent = "You need " + passMark + "/100 to pass this checkpoint. Keep practicing, then try again!";
    return;
  }

  saveScore("passed-" + level.lesson, "yes");
  completeTitle.textContent = "Checkpoint passed!";
  completeCheckpoint.classList.add("passed");
  const inCategory = lessonsIn(findCategory(level.category));
  const lesson = findLesson(level.lesson);
  if (inCategory.indexOf(lesson) === inCategory.length - 1) {
    completeCheckpoint.textContent = "That was the last lesson in this starting point.";
  } else {
    completeCheckpoint.textContent = "The next lesson is unlocked.";
  }
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
    // The big number stops at 100; anything over that is shown as bonus points beside it.
    completeScore.textContent = Math.min(score, 100);
    completeUnit.textContent = "/100";
    if (score > 100) {
      completeUnit.textContent += "  + " + (score - 100) + " bonus";
    }
    completeDetail.textContent = wpm + " WPM  ·  " + accuracy + "% accuracy";
  }
  saveToHistory(level, { wpm: wpm, accuracy: accuracy, date: Date.now() });
  savePlace(level, true);

  if (levelIndex === currentLevels.length - 1) {
    completeTitle.textContent = finishedAllMessage();
    completeHint.textContent = "Press Enter to start again from Level 1.";
  } else {
    completeTitle.textContent = "Level complete!";
    completeHint.textContent = "Press Enter or click Next level.";
  }

  showCheckpointResult(level, score);
  completeSuggestion.hidden = !shouldSuggestCheckpoint(level);

  // Compare with the best score saved before this attempt.
  const saved = loadScore("best-" + level.id);
  completeBest.classList.remove("new-best");
  if (saved === null) {
    completeBest.textContent = "Your first score on this level.";
  } else if (score > Number(saved)) {
    completeBest.textContent = "New best! Your old best was " + formatScore(level, saved) + ".";
    completeBest.classList.add("new-best");
  } else if (score === Number(saved)) {
    completeBest.textContent = "You matched your best.";
  } else {
    completeBest.textContent = "Your best is " + formatScore(level, saved) + ".";
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
  savePlace(level, false);

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

// The next level in a list after this one that you're allowed to play, skipping
// locked ones, and going back to Level 1 after the last one.
function nextPlayableIndex(list, index) {
  do {
    index = index + 1;
    if (index >= list.length) {
      index = 0;
    }
  } while (!isPlayable(list[index]));
  return index;
}

function goToNextLevel() {
  levelIndex = nextPlayableIndex(currentLevels, levelIndex);
  loadLevel();
}

// ===== Continue where you left off =====

// Remembers the level you're on, and whether you finished it, for the Continue card.
function savePlace(level, finished) {
  saveScore("last-played", JSON.stringify({ level: level.id, finished: finished }));
}

// Looks up a level by its id, or null if there isn't one.
function findLevel(id) {
  for (let i = 0; i < levels.length; i++) {
    if (levels[i].id === id) {
      return levels[i];
    }
  }
  return null;
}

// Works out where Continue should take you: { category, list, index }, where list is
// that starting point's levels and index is the level to play (the next one if you'd
// finished it). Returns null if there's no saved place, or its level no longer exists.
function continuePlace() {
  const saved = loadScore("last-played");
  if (saved === null) {
    return null;
  }
  let place;
  try {
    place = JSON.parse(saved);
  } catch (error) {
    return null;  // the saved place was damaged
  }
  const level = findLevel(place.level);
  if (level === null || pathOf(level) === null) {
    return null;
  }

  const category = findCategory(level.category);
  const list = levelsIn(category);
  let index = list.indexOf(level);
  if (place.finished || !isPlayable(level)) {
    index = nextPlayableIndex(list, index);
  }
  return { category: category, list: list, index: index };
}

// Shows the Continue card on the start screen, naming the level it will take you to.
// It stays hidden until you've played something.
function updateContinueButton() {
  const place = continuePlace();
  if (place === null) {
    continueButton.hidden = true;
    return;
  }
  const level = place.list[place.index];
  continueText.textContent = place.category.title + "  ·  Level " + (place.index + 1) + ": " + level.name;
  continueButton.hidden = false;
}

// Takes you straight back into the level, with your path and starting point set as if
// you'd chosen them yourself (so the Levels button works as usual).
function continuePlaying() {
  const place = continuePlace();
  if (place === null) {
    return;
  }
  currentCategory = place.category;
  currentPath = place.category.path;
  currentLevels = place.list;
  levelIndex = place.index;
  showGame();
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

// Jumps straight to the checkpoint of the lesson you're in.
tryCheckpointButton.addEventListener("click", function () {
  tryCheckpointButton.blur();
  const index = checkpointIndex(currentLevels[levelIndex].lesson);
  if (index !== -1) {
    levelIndex = index;
    loadLevel();
  }
});

menuButton.addEventListener("click", function () {
  menuButton.blur();
  showMenu();
});

continueButton.addEventListener("click", function () {
  continueButton.blur();
  continuePlaying();
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
    if (level.lesson !== undefined) {
      const lesson = findLesson(level.lesson);
      if (lesson === null) {
        console.warn("Level \"" + level.id + "\" has an unknown lesson \"" + level.lesson + "\".");
      } else if (lesson.category !== level.category) {
        console.warn("Level \"" + level.id + "\" is in lesson \"" + lesson.id + "\", but that lesson belongs to a different category.");
      }
    }
  }

  // Every lesson needs a checkpoint, or the lessons after it could never be unlocked.
  for (let i = 0; i < lessons.length; i++) {
    let hasCheckpoint = false;
    for (let j = 0; j < levels.length; j++) {
      if (levels[j].lesson === lessons[i].id && levels[j].checkpoint) {
        hasCheckpoint = true;
      }
    }
    if (!hasCheckpoint) {
      console.warn("Lesson \"" + lessons[i].id + "\" has no checkpoint level, so the lessons after it can't be unlocked.");
    }
  }
}

checkLevelData();
updateContinueButton();  // the start screen is the first thing you see
