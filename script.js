let currentPath = null;      // "typing" or "english" once you've chosen on the start screen
let currentTopic = null;     // on the English path, the topic you chose (one of the topics in levels.js)
let currentCategory = null;  // the starting point you chose (one of the categories in levels.js)
let currentLevels = levels;  // the levels in that starting point
let levelIndex = 0;          // which of currentLevels you're playing
let dailyLevel = null;       // today's daily challenge while you're playing it, otherwise null
let practiceText = "";
let position = 0;
let startTime = null;
let lastKeyTime = null;
let totalKeys = 0;
let mistakes = 0;
let steps = [];       // on English levels, the things to type one at a time: new word cards, then questions
let questionIndex = 0;  // which of the steps you're on
let lastKeyWrong = false;
let typedTimes = [];  // when each letter was typed correctly, so its green fade can carry on
let openUnits = {};   // units you've opened (true) or closed (false) in the level menu, by unit id

const display = document.querySelector(".practice-text");
const feedback = document.getElementById("feedback");
const completePanel = document.getElementById("complete-panel");
const completeTitle = document.getElementById("complete-title");
const completeScore = document.getElementById("complete-score");
const completeUnit = document.getElementById("complete-unit");
const completeDetail = document.getElementById("complete-detail");
const completeStreak = document.getElementById("complete-streak");
const streakBadge = document.getElementById("streak-badge");
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
const topicsScreen = document.getElementById("topics");
const topicList = document.getElementById("topic-list");
const startingPointsScreen = document.getElementById("starting-points");
const startingPointsTitle = document.getElementById("starting-points-title");
const changeTopicButton = document.getElementById("change-topic-button");
const categoryList = document.getElementById("category-list");
const gameScreen = document.getElementById("game");
const levelList = document.getElementById("level-list");
const menuStats = document.getElementById("menu-stats");
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
const questionLabel = document.getElementById("question-label");
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

// Whether a level is an English one (fill-the-gap questions, or new words to learn and
// type) rather than a typing one (a sentence to copy). English levels are scored on accuracy.
function isEnglishLevel(level) {
  return level.type === "confused" || level.type === "words";
}

// How a score is written. English levels are scored on accuracy; typing levels on
// points out of 100, where anything over 100 is a bonus: "100/100 + 12 bonus".
function formatScore(level, score) {
  score = Number(score);  // saved scores come back as text
  if (isEnglishLevel(level)) {
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

// The level you're playing: the daily challenge if you're on it, otherwise one of currentLevels.
function currentLevel() {
  if (dailyLevel !== null) {
    return dailyLevel;
  }
  return currentLevels[levelIndex];
}

function levelTitle() {
  if (dailyLevel !== null) {
    return "Daily challenge: " + todayLabel();
  }
  return "Level " + (levelIndex + 1) + " of " + currentLevels.length + ": " + currentLevel().name;
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

// Looks up an English topic by its id, or null if there isn't one (typing has no topics).
function findTopic(id) {
  for (let i = 0; i < topics.length; i++) {
    if (topics[i].id === id) {
      return topics[i];
    }
  }
  return null;
}

// A starting point's name, with its topic in front when it has one, like
// "New words: I'm new to English". (Both English topics have an "I'm new to English".)
function categoryLabel(category) {
  const topic = findTopic(category.topic);
  if (topic === null) {
    return category.title;
  }
  return topic.name + ": " + category.title;
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
  return index === 0 || isLessonComplete(inCategory[index - 1]);
}

// You can play a level if it isn't in a lesson (English levels), if its lesson is unlocked,
// or if it's a checkpoint: you can always challenge a checkpoint to skip ahead.
function isPlayable(level) {
  if (level.lesson === undefined || level.checkpoint) {
    return true;
  }
  return isUnlocked(findLesson(level.lesson));
}

// A lesson is complete once you've passed its checkpoint or any later one:
// testing out of a lesson counts the same as working through it.
function isLessonComplete(lesson) {
  const inCategory = lessonsIn(findCategory(lesson.category));
  for (let i = inCategory.indexOf(lesson); i < inCategory.length; i++) {
    if (hasPassed(inCategory[i])) {
      return true;
    }
  }
  return false;
}

// A level counts as done once you've scored on it, or once its whole lesson is complete.
// A checkpoint only counts once its lesson is complete (just scoring isn't enough).
function isDone(level) {
  if (level.lesson !== undefined && isLessonComplete(findLesson(level.lesson))) {
    return true;
  }
  if (level.checkpoint) {
    return false;
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

// ===== Counting words =====

// How many new words a list of levels teaches. Each group's words are counted once,
// from its "Meet the words" level (its "Type the words" level has the same words).
function wordCount(levelList) {
  let count = 0;
  for (let i = 0; i < levelList.length; i++) {
    if (levelList[i].mode === "meet") {
      count += levelList[i].words.length;
    }
  }
  return count;
}

// How many of those words you've learned: a group's words count once you've finished
// every level in its unit (meeting them, typing them, and using them in sentences).
function learnedWordCount(levelList) {
  let count = 0;
  for (let i = 0; i < levelList.length; i++) {
    const level = levelList[i];
    if (level.mode !== "meet") {
      continue;
    }
    let allDone = true;
    for (let j = 0; j < levelList.length; j++) {
      if (levelList[j].unit === level.unit && !isDone(levelList[j])) {
        allDone = false;
      }
    }
    if (allDone) {
      count += level.words.length;
    }
  }
  return count;
}

// How many practice sentences a list of levels has.
function sentenceCount(levelList) {
  let count = 0;
  for (let i = 0; i < levelList.length; i++) {
    if (levelList[i].questions !== undefined) {
      count += levelList[i].questions.length;
    }
  }
  return count;
}

// The small text on a topic or starting point card: "67 words · 13 levels", or just
// "13 levels" when there are no new words to learn.
function cardCountText(levelList) {
  let text = levelList.length + " levels";
  if (levelList.length === 1) {
    text = "1 level";
  }
  const words = wordCount(levelList);
  if (words > 0) {
    text = words + " words  ·  " + text;
  }
  return text;
}

// ===== Units =====

// Looks up a unit by its id, or null if there isn't one.
function findUnit(id) {
  for (let i = 0; i < units.length; i++) {
    if (units[i].id === id) {
      return units[i];
    }
  }
  return null;
}

// The levels you're playing that are in one unit.
function levelsInUnit(unitId) {
  const found = [];
  for (let i = 0; i < currentLevels.length; i++) {
    if (currentLevels[i].unit === unitId) {
      found.push(currentLevels[i]);
    }
  }
  return found;
}

// Whether a unit is open in the menu. Until you open or close one yourself, only the unit
// with your Up next level is open (or the first unit, once you've done everything).
function isUnitOpen(unitId, upNextUnit) {
  if (openUnits[unitId] !== undefined) {
    return openUnits[unitId];
  }
  return unitId === upNextUnit;
}

// A unit's heading in the menu: click it to open or close the unit. It shows how many
// levels you've done, how many words are inside, and a progress bar.
function unitHeading(unit, isOpen) {
  const inUnit = levelsInUnit(unit.id);
  let done = 0;
  for (let i = 0; i < inUnit.length; i++) {
    if (isDone(inUnit[i])) {
      done++;
    }
  }

  const heading = document.createElement("button");
  heading.className = "unit-heading";
  heading.setAttribute("aria-expanded", isOpen);

  const arrow = document.createElement("span");
  arrow.className = "unit-arrow";
  arrow.textContent = isOpen ? "▾" : "▸";

  const name = document.createElement("span");
  name.className = "unit-name";
  name.textContent = unit.name;

  const status = document.createElement("span");
  status.className = "unit-status";
  status.textContent = done + " of " + inUnit.length + " done";
  const words = wordCount(inUnit);
  if (words > 0) {
    status.textContent += "  ·  " + words + " words";
  }

  // The bar is a track with a fill inside it, as wide as the share of levels you've done.
  const bar = document.createElement("span");
  bar.className = "unit-bar";
  const fill = document.createElement("span");
  fill.className = "unit-bar-fill";
  fill.style.width = Math.round((done / inUnit.length) * 100) + "%";
  bar.appendChild(fill);

  heading.appendChild(arrow);
  heading.appendChild(name);
  heading.appendChild(status);
  heading.appendChild(bar);
  heading.addEventListener("click", function () {
    openUnits[unit.id] = !isOpen;
    buildMenu();
  });
  return heading;
}

// The counters above the level list when a starting point teaches new words:
// how many words there are, how many you've learned, and how many practice sentences.
function updateMenuStats() {
  const words = wordCount(currentLevels);
  if (words === 0) {
    menuStats.hidden = true;
    return;
  }
  menuStats.innerHTML = "";
  const stats = [
    ["Words", words],
    ["Learned", learnedWordCount(currentLevels)],
    ["Practice sentences", sentenceCount(currentLevels)]
  ];
  for (let i = 0; i < stats.length; i++) {
    const stat = document.createElement("div");
    stat.className = "menu-stat";
    const label = document.createElement("span");
    label.className = "stat-label";
    label.textContent = stats[i][0];
    const value = document.createElement("span");
    value.className = "menu-stat-value";
    value.textContent = stats[i][1];
    stat.appendChild(label);
    stat.appendChild(value);
    menuStats.appendChild(stat);
  }
  menuStats.hidden = false;
}

// The starting points in one path and topic (topic is null on the typing path).
// Starting points with no levels yet are left out until they get some.
function categoriesIn(path, topic) {
  const topicId = topic === null ? undefined : topic.id;
  const found = [];
  for (let i = 0; i < categories.length; i++) {
    const category = categories[i];
    if (category.path === path && category.topic === topicId && levelsIn(category).length > 0) {
      found.push(category);
    }
  }
  return found;
}

// The English topics that have at least one level.
function topicsIn(path) {
  const found = [];
  for (let i = 0; i < topics.length; i++) {
    if (topics[i].path === path && categoriesIn(path, topics[i]).length > 0) {
      found.push(topics[i]);
    }
  }
  return found;
}

// One big clickable card, used for topics and starting points: a title, a description,
// and how many words and levels are inside (levelList is the levels inside).
function pathCard(titleText, descriptionText, levelList, onClick) {
  const button = document.createElement("button");
  button.className = "path-card";

  const title = document.createElement("span");
  title.className = "path-card-title";
  title.textContent = titleText;

  const description = document.createElement("span");
  description.className = "path-card-text";
  description.textContent = descriptionText;

  const count = document.createElement("span");
  count.className = "path-card-count";
  count.textContent = cardCountText(levelList);

  button.appendChild(title);
  button.appendChild(description);
  button.appendChild(count);
  button.addEventListener("click", function () {
    button.blur();
    onClick();
  });
  return button;
}

// After choosing typing or English on the start screen. A path with topics (English)
// asks which topic first; a path without them (typing) goes straight to its starting points.
function choosePath(path) {
  currentPath = path;
  currentTopic = null;
  currentCategory = null;

  const pathTopics = topicsIn(path);
  if (pathTopics.length === 0) {
    showStartingPoints();
    return;
  }

  topicList.innerHTML = "";
  for (let i = 0; i < pathTopics.length; i++) {
    const topic = pathTopics[i];
    let inTopic = [];
    const topicCategories = categoriesIn(path, topic);
    for (let j = 0; j < topicCategories.length; j++) {
      inTopic = inTopic.concat(levelsIn(topicCategories[j]));
    }
    topicList.appendChild(pathCard(topic.title, topic.description, inTopic, function () {
      chooseTopic(topic);
    }));
  }
  showScreen(topicsScreen);
}

function chooseTopic(topic) {
  currentTopic = topic;
  currentCategory = null;
  showStartingPoints();
}

// Shows the starting points for the path (and topic) you've chosen, as cards.
function showStartingPoints() {
  categoryList.innerHTML = "";
  const found = categoriesIn(currentPath, currentTopic);
  for (let i = 0; i < found.length; i++) {
    const category = found[i];
    categoryList.appendChild(pathCard(category.title, category.description, levelsIn(category), function () {
      chooseCategory(category);
    }));
  }

  if (currentTopic === null) {
    startingPointsTitle.textContent = "Where would you like to start?";
    changeTopicButton.hidden = true;
  } else {
    startingPointsTitle.textContent = currentTopic.title + ": where would you like to start?";
    changeTopicButton.hidden = false;
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
// It only says you finished them all when you really have: you might have jumped straight
// to the last level. (The level you just finished counts as done, though its score isn't
// saved yet.)
function finishedAllMessage(justFinished) {
  if (currentLevels.length === 1) {
    return "You finished the level!";
  }
  for (let i = 0; i < currentLevels.length; i++) {
    if (currentLevels[i] !== justFinished && !isDone(currentLevels[i])) {
      return "You reached the last level!";
    }
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
  if (currentCategory !== null) {
    const challenge = dailyChallengeFor(currentCategory);
    if (challenge !== null) {
      levelList.appendChild(dailyButton(challenge));
    }
  }
  updateMenuStats();
  const upNext = upNextIndex();
  let upNextUnit = null;
  if (upNext !== -1) {
    upNextUnit = currentLevels[upNext].unit;
  } else if (currentLevels.length > 0) {
    upNextUnit = currentLevels[0].unit;  // you've done everything, so open the first unit
  }
  let lastLesson = null;
  let lastUnit = null;
  let lastSection = null;

  for (let i = 0; i < currentLevels.length; i++) {
    const level = currentLevels[i];

    // Start each new lesson with its heading.
    if (level.lesson !== undefined && level.lesson !== lastLesson) {
      lastLesson = level.lesson;
      levelList.appendChild(lessonHeading(findLesson(level.lesson)));
    }

    // Start each new unit with its heading (and a section label, like "First words",
    // above the first unit in each section). Levels in a closed unit aren't shown.
    let isOpen = true;
    const unit = findUnit(level.unit);  // null if the level isn't in a unit
    if (unit !== null) {
      isOpen = isUnitOpen(unit.id, upNextUnit);
      if (unit.id !== lastUnit) {
        lastUnit = unit.id;
        if (unit.section !== undefined && unit.section !== lastSection) {
          lastSection = unit.section;
          const label = document.createElement("h3");
          label.className = "lesson-heading";
          label.textContent = unit.section;
          levelList.appendChild(label);
        }
        levelList.appendChild(unitHeading(unit, isOpen));
      }
    }
    if (!isOpen) {
      continue;
    }

    const button = document.createElement("button");
    button.className = "level-button";

    const best = loadScore("best-" + level.id);

    // Inside a unit the heading already names the group, so a level uses its short name
    // if it has one (word levels do: "Meet the words").
    if (unit !== null) {
      button.textContent = level.shortName || level.name;
      button.classList.add("in-unit");
    } else {
      button.textContent = "Level " + (i + 1) + ": " + level.name;
    }
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
  topicsScreen.hidden = true;
  startingPointsScreen.hidden = true;
  menuScreen.hidden = true;
  gameScreen.hidden = true;
  screen.hidden = false;
  window.scrollTo(0, 0);  // start each screen at the top, even if you'd scrolled down the last one
}

function showMenu() {
  dailyLevel = null;  // leaving the daily challenge, if you were on it
  buildMenu();
  if (currentCategory !== null) {
    menuTitle.textContent = categoryLabel(currentCategory);
  }
  showScreen(menuScreen);
}

function showStart() {
  dailyLevel = null;
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

// The step of an English level you're on: a new word card or a question.
function currentStep() {
  return steps[questionIndex];
}

// The steps in an English level, in order, made from what kind of level it is:
//   "Meet the words" (mode "meet"): a card for each word; you type the word once.
//   "Type the words" (mode "repeat"): you type each word 3 times, like "cat cat cat".
//   Anything else: its fill-the-gap questions.
function levelSteps(level) {
  if (level.mode === "meet" || level.mode === "repeat") {
    const found = [];
    for (let i = 0; i < level.words.length; i++) {
      const word = level.words[i];
      let answer = word.word;
      if (level.mode === "repeat") {
        answer = Array(WORD_REPEATS).fill(word.word).join(" ");
      }
      found.push({ card: level.mode, answer: answer, word: word });
    }
    return found;
  }
  return level.questions;
}

function stepInstructions() {
  const step = currentStep();
  if (step.card === "meet") {
    return "New word: read it, then type it.";
  }
  if (step.card === "repeat") {
    return "Type the word " + WORD_REPEATS + " times, with a space between.";
  }
  return "Type the answer that correctly fills the gap.";
}

// A word card: the letters you type (the word, or the word 3 times), what kind of word
// it is, what it means, and an example sentence.
function showWordCard(step) {
  display.innerHTML =
    '<span class="word-card">' +
      '<span class="word-card-word">' + lettersHtml() + "</span>" +
      '<span class="word-card-kind">' + escapeHtml(step.word.kind) + "</span>" +
      '<span class="word-card-meaning">' + escapeHtml(step.word.meaning) + "</span>" +
      '<span class="word-card-example">' + escapeHtml(step.word.example) + "</span>" +
    "</span>";
  choicesDisplay.textContent = "";
}

function showQuestion() {
  const question = currentStep();
  if (question.card !== undefined) {
    showWordCard(question);
    return;
  }
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

// Every letter of the practice text: the ones you've typed, the one you're on, and the rest.
function lettersHtml() {
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
  return html;
}

function showText() {
  if (isEnglishLevel(currentLevel())) {
    showQuestion();
    return;
  }
  choicesDisplay.textContent = "";
  display.innerHTML = lettersHtml();
}

function showBest() {
  const saved = loadScore("best-" + currentLevel().id);
  if (saved === null) {
    bestDisplay.textContent = "Best: none yet";
  } else {
    bestDisplay.textContent = "Best: " + formatScore(currentLevel(), saved);
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
  const isEnglish = isEnglishLevel(currentLevel());

  // English levels are scored on accuracy, so they show the question number instead of speed.
  speedStat.hidden = isEnglish;
  questionStat.hidden = !isEnglish;

  if (isEnglish) {
    // "Word 2 / 5" on word cards, "Question 3 / 8" on questions.
    questionLabel.textContent = currentStep().card !== undefined ? "Word" : "Question";
    questionValue.textContent = (questionIndex + 1) + " / " + steps.length;
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
  const level = currentLevel();
  // The big number, with its unit in smaller text beside it.
  const accuracy = calculateAccuracy();
  let wpm = null;
  let score;
  if (isEnglishLevel(level)) {
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
  completeStreak.textContent = recordPractice();
  updateStreakBadge();
  if (dailyLevel === null) {
    savePlace(level, true);
  }

  if (dailyLevel !== null) {
    completeTitle.textContent = "Daily challenge complete!";
    completeHint.textContent = "Press Enter to go back to the levels. A new challenge arrives tomorrow.";
  } else if (levelIndex === currentLevels.length - 1) {
    completeTitle.textContent = finishedAllMessage(level);
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
  if (saved === null && dailyLevel !== null) {
    completeBest.textContent = "Your first score today.";
  } else if (saved === null) {
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
  const level = currentLevel();
  questionIndex = 0;
  if (isEnglishLevel(level)) {
    steps = levelSteps(level);
    practiceText = currentStep().answer;
    instructionsDisplay.textContent = stepInstructions();
  } else {
    practiceText = level.text;
    instructionsDisplay.textContent = "Type the letters below without looking at your keyboard.";
  }
  levelDisplay.textContent = levelTitle();
  if (dailyLevel === null) {
    savePlace(level, false);  // Continue doesn't take you back to a daily challenge
    nextButton.textContent = "Next level";
  } else {
    nextButton.textContent = "Back to levels";
  }

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
  return questionIndex === steps.length - 1;
}

function finishQuestion() {
  const question = currentStep();
  if (question.card !== undefined) {
    if (isLastQuestion()) {
      feedback.textContent = "Got it!";
      showResults();
    } else {
      feedback.textContent = "Got it! Press Enter for the next word.";
    }
  } else if (isLastQuestion()) {
    feedback.textContent = question.tip;
    showResults();
  } else {
    feedback.textContent = question.tip + " Press Enter for the next one.";
  }
}

function nextQuestion() {
  questionIndex = questionIndex + 1;
  practiceText = currentStep().answer;
  instructionsDisplay.textContent = stepInstructions();
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
  if (dailyLevel !== null) {
    showMenu();  // after the daily challenge, go back to the levels
    return;
  }
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
  continueText.textContent = categoryLabel(place.category) + "  ·  Level " + (place.index + 1) + ": " + level.name;
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
  currentTopic = findTopic(place.category.topic);
  currentLevels = place.list;
  levelIndex = place.index;
  showGame();
}

// ===== Day streaks =====

// Finishing any level counts as practicing for the day. Every 7 days in a row earns a
// streak saver (you can hold 2), and a missed day uses one up automatically. Miss one day
// with no saver left, and finishing 3 levels the next day repairs the streak instead.
const SAVER_EVERY = 7;
const MAX_SAVERS = 2;
const REPAIR_LEVELS = 3;

// Today as a whole number of days (day 0 was January 1, 1970), so "yesterday" is just
// today - 1. It uses your own calendar date, so a new day starts at your midnight.
function todayNumber() {
  const now = new Date();
  return Math.floor(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()) / 86400000);
}

// Today's date in words, like "Thursday, October 8".
function todayLabel() {
  return new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });
}

function daysText(count) {
  if (count === 1) {
    return "1 day";
  }
  return count + " days";
}

// Your streak as saved: { count, lastDay, savers, repairDay, repairDone }.
// lastDay is the day number you last practiced; repairDay and repairDone track a repair.
function loadStreak() {
  const empty = { count: 0, lastDay: null, savers: 0, repairDay: null, repairDone: 0 };
  const saved = loadScore("streak");
  if (saved === null) {
    return empty;
  }
  try {
    return Object.assign(empty, JSON.parse(saved));
  } catch (error) {
    return empty;  // the saved streak was damaged
  }
}

function saveStreak(streak) {
  saveScore("streak", JSON.stringify(streak));
}

// Where your streak stands right now, without changing anything:
// "none", "today" (you've practiced today), "waiting" (practice today to keep it),
// "saver" (a saver will cover a missed day), "repair" (finish levels today to save it)
// or "lost" (it will start again from 1).
function streakStatus() {
  const streak = loadStreak();
  if (streak.lastDay === null || streak.count === 0) {
    return { state: "none", count: 0, savers: streak.savers };
  }
  const missed = todayNumber() - streak.lastDay - 1;
  let state = "lost";
  if (missed < 0) {
    state = "today";
  } else if (missed === 0) {
    state = "waiting";
  } else if (missed <= streak.savers) {
    state = "saver";
  } else if (missed === 1) {
    state = "repair";
  }
  let repairLeft = REPAIR_LEVELS;
  if (streak.repairDay === todayNumber()) {
    repairLeft = REPAIR_LEVELS - streak.repairDone;
  }
  return { state: state, count: state === "lost" ? 0 : streak.count, savers: streak.savers, repairLeft: repairLeft };
}

// Call this when you finish a level. Updates your streak and returns a message about it
// for the level-complete panel.
function recordPractice() {
  const streak = loadStreak();
  const today = todayNumber();

  if (streak.lastDay === today) {
    return "🔥 " + daysText(streak.count) + " in a row";  // already counted today
  }

  let before = "";
  const missed = streak.lastDay === null ? 0 : today - streak.lastDay - 1;
  if (streak.lastDay === null || streak.count === 0) {
    streak.count = 0;
    before = "Streak started! ";
  } else if (missed > 0 && missed <= streak.savers) {
    streak.savers = streak.savers - missed;
    before = "🛡 A streak saver covered the day you missed. ";
  } else if (missed === 1) {
    if (streak.repairDay !== today) {
      streak.repairDay = today;
      streak.repairDone = 0;
    }
    streak.repairDone = streak.repairDone + 1;
    const left = REPAIR_LEVELS - streak.repairDone;
    if (left > 0) {
      saveStreak(streak);
      return "You missed yesterday. Finish " + left + " more level" + (left === 1 ? "" : "s") +
        " today to save your " + streak.count + "-day streak.";
    }
    before = "Streak repaired! ";
  } else if (missed > 1) {
    streak.count = 0;
    before = "New streak started! ";
  }

  streak.count = streak.count + 1;
  streak.lastDay = today;
  streak.repairDay = null;
  streak.repairDone = 0;
  let after = "";
  if (streak.count % SAVER_EVERY === 0 && streak.savers < MAX_SAVERS) {
    streak.savers = streak.savers + 1;
    after = " You earned a streak saver 🛡";
  }
  saveStreak(streak);
  return before + "🔥 Streak: " + daysText(streak.count) + "!" + after;
}

// The "🔥 12" badge beside the title. Hover it to see what it means.
function updateStreakBadge() {
  const status = streakStatus();
  if (status.count === 0) {
    streakBadge.hidden = true;
    return;
  }
  streakBadge.textContent = "🔥 " + status.count;
  if (status.savers > 0) {
    streakBadge.textContent += "  🛡 " + status.savers;
  }

  let details = daysText(status.count) + " in a row. ";
  if (status.state === "today") {
    details += "You've practiced today.";
  } else if (status.state === "waiting") {
    details += "Finish a level today to keep it going.";
  } else if (status.state === "saver") {
    details += "A streak saver will cover the day you missed when you finish a level today.";
  } else if (status.state === "repair") {
    details += "You missed yesterday: finish " + status.repairLeft + " more level" + (status.repairLeft === 1 ? "" : "s") + " today to save it.";
  }
  if (status.savers > 0) {
    details += " Streak savers: " + status.savers + ".";
  }
  streakBadge.title = details;
  streakBadge.setAttribute("aria-label", "Day streak: " + details);
  streakBadge.classList.toggle("at-risk", status.state === "repair");
  streakBadge.hidden = false;
}

// ===== Daily challenge =====

// Today's daily challenge for a starting point, or null if it doesn't have one.
// Everyone gets the same one on the same day, because it's picked from the date.
// Typing starting points use a sentence from dailyTexts in levels.js; English ones
// get 5 questions from their own levels (on New words levels, the practice questions).
function dailyChallengeFor(category) {
  const day = todayNumber();
  const challenge = { id: "daily-" + category.id, category: category.id, name: "Daily challenge", daily: true };

  if (category.path === "typing") {
    const texts = dailyTexts[category.id];
    if (texts === undefined || texts.length === 0) {
      return null;
    }
    challenge.text = texts[day % texts.length];
    return challenge;
  }

  const questions = [];
  const inCategory = levelsIn(category);
  for (let i = 0; i < inCategory.length; i++) {
    if (inCategory[i].questions !== undefined) {
      for (let j = 0; j < inCategory[i].questions.length; j++) {
        questions.push(inCategory[i].questions[j]);
      }
    }
  }
  if (questions.length === 0) {
    return null;
  }
  challenge.type = "confused";
  challenge.questions = [];
  const count = Math.min(5, questions.length);
  for (let i = 0; i < count; i++) {
    challenge.questions.push(questions[(day * count + i) % questions.length]);
  }
  return challenge;
}

// The daily challenge's best score is only for today, so it's cleared when a new day starts.
function resetDailyIfNewDay(challenge) {
  const dayKey = "daily-day-" + challenge.category;
  if (loadScore(dayKey) !== String(todayNumber())) {
    deleteScore("best-" + challenge.id);
    saveScore(dayKey, todayNumber());
  }
}

function playDaily(challenge) {
  resetDailyIfNewDay(challenge);
  dailyLevel = challenge;
  showGame();
}

// The daily challenge button at the top of the level menu.
function dailyButton(challenge) {
  resetDailyIfNewDay(challenge);
  const button = document.createElement("button");
  button.className = "level-button daily-button";
  button.textContent = "Daily challenge: " + todayLabel();
  const best = loadScore("best-" + challenge.id);
  if (best === null) {
    button.textContent += "\n" + "A new one every day, the same for everyone";
  } else {
    button.textContent += "\n" + "Best today: " + formatScore(challenge, best);
    button.classList.add("completed");
  }
  button.addEventListener("click", function () {
    button.blur();
    playDaily(challenge);
  });
  return button;
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
  const isConfused = isEnglishLevel(currentLevel());

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
  const onWordCard = isConfused && currentStep().card !== undefined;

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
    if (onWordCard) {
      let expected = practiceText[position];
      if (expected === " ") {
        expected = "space";
      }
      feedback.textContent = "Not quite. The next letter is: " + expected;
    } else if (isConfused) {
      feedback.textContent = "Not quite. Hint: " + currentStep().tip;
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
  const index = checkpointIndex(currentLevel().lesson);
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
  // Go as far as you've chosen: your levels, your starting points, your path's topics, or the start.
  if (currentCategory !== null) {
    showMenu();
  } else if (currentTopic !== null) {
    showStartingPoints();
  } else if (currentPath !== null) {
    choosePath(currentPath);
  } else {
    showStart();
  }
});

changeStartButton.addEventListener("click", function () {
  changeStartButton.blur();
  showStartingPoints();  // stays in the same topic
});

changeTopicButton.addEventListener("click", function () {
  changeTopicButton.blur();
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
    if (isEnglishLevel(level)) {
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
    if (level.unit !== undefined && findUnit(level.unit) === null) {
      console.warn("Level \"" + level.id + "\" has an unknown unit \"" + level.unit + "\", so it's shown without a heading.");
    }
  }

  // A starting point with a misspelled topic would never show up on the topic screen.
  for (let i = 0; i < categories.length; i++) {
    if (categories[i].topic !== undefined && findTopic(categories[i].topic) === null) {
      console.warn("Starting point \"" + categories[i].id + "\" has an unknown topic \"" + categories[i].topic + "\".");
    }
  }

  // Every group of new words in levels.js needs words to learn and questions to practice
  // them with. (word-levels.js has already turned each group into a unit of levels.)
  for (let i = 0; i < units.length; i++) {
    const inUnit = levels.filter(function (level) { return level.unit === units[i].id; });
    if (!inUnit.some(function (level) { return level.type === "words"; })) {
      continue;  // a grammar unit, not a group of words
    }
    const hasWords = inUnit.some(function (level) { return level.mode === "meet" && level.words.length > 0; });
    const hasSentences = inUnit.some(function (level) { return level.questions !== undefined; });
    if (!hasWords || !hasSentences) {
      console.warn("Word group \"" + units[i].id + "\" needs both a \"words\" list and a \"questions\" list.");
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
updateStreakBadge();
