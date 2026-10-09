// Turns each group of new words in levels.js (the levels with type "words") into a small
// unit of levels, so the content stays easy to write: one group, several levels.
//
//   Meet the words   a card for each word (meaning and example); type the word once
//   Type the words   type each word a few times, to remember how it's spelled
//   Sentences        type the right word into the gaps, 8 questions per level
//
// Loaded after levels.js and before script.js, like letter-lessons.js.

// How many times you type each word in a "Type the words" level.
const WORD_REPEATS = 3;

// How many questions make one sentence level. A group with 16 questions gets 2 sentence levels.
const QUESTIONS_PER_LEVEL = 8;

// The units shown as headings in the level menu, one for each group of words.
// Each is { id, category, name, section }. The section ("First words") is an optional
// label shown above the first unit that has it.
const units = [];

// The levels made from one group. Each level keeps the group's id at the start of its own
// id (where its best score is saved), so these ids never change as long as the group's doesn't.
function levelsForWordGroup(group) {
  const made = [];
  const shared = { category: group.category, unit: group.id, type: "words" };

  made.push(Object.assign({}, shared, {
    id: group.id + "-meet",
    name: group.name + ": meet the words",
    shortName: "Meet the words",
    mode: "meet",
    words: group.words || []
  }));

  made.push(Object.assign({}, shared, {
    id: group.id + "-type",
    name: group.name + ": type the words",
    shortName: "Type the words",
    mode: "repeat",
    words: group.words || []
  }));

  const questions = group.questions || [];  // script.js warns if a group has none
  const sentenceLevels = Math.ceil(questions.length / QUESTIONS_PER_LEVEL);
  for (let i = 0; i < sentenceLevels; i++) {
    let name = "Sentences";
    if (sentenceLevels > 1) {
      name += " " + (i + 1);  // "Sentences 1", "Sentences 2"...
    }
    made.push(Object.assign({}, shared, {
      id: group.id + "-sentences-" + (i + 1),
      name: group.name + ": " + name.toLowerCase(),
      shortName: name,
      questions: questions.slice(i * QUESTIONS_PER_LEVEL, (i + 1) * QUESTIONS_PER_LEVEL)
    }));
  }
  return made;
}

// Goes through the levels list and swaps each group of words for its levels, in the same place.
function addWordLevels() {
  for (let i = levels.length - 1; i >= 0; i--) {
    const group = levels[i];
    if (group.type !== "words") {
      continue;
    }
    units.unshift({ id: group.id, category: group.category, name: group.name, section: group.section });
    const made = levelsForWordGroup(group);
    levels.splice(i, 1, ...made);  // remove the group, and put its levels where it was
  }
}

addWordLevels();
