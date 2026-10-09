// Builds the "I'm new to typing" lessons that teach one new letter at a time.
// Each lesson only uses the home row letters plus the letters taught before it,
// so you never meet a key you haven't learned yet. The levels are made from the
// word list below, so adding words here gives every lesson more variety.
// This file runs after levels.js and adds its lessons straight after Home row.

// The letters you start with, and the order the rest are taught in.
const HOME_ROW_LETTERS = "asdfjkl";
const LETTER_ORDER = "eirutonhgcmpwybvxqz";

// Which home row key each letter is typed from, so the first level of a lesson
// can practice the reach: "eee ded" (E is typed by the finger that rests on D).
const HOME_KEYS = {
  q: "a", a: "a", z: "a",
  w: "s", s: "s", x: "s",
  e: "d", d: "d", c: "d",
  r: "f", t: "f", f: "f", g: "f", v: "f", b: "f",
  y: "j", u: "j", h: "j", j: "j", n: "j", m: "j",
  i: "k", k: "k",
  o: "l", l: "l", p: "l"
};

// Lowercase US English words, a to z only. A word is used in a lesson once
// you've learned every letter in it.
const WORDS = `
  a add ads all alas ask asks dad fad fall falls flask lad lads sad salad salsa
  deal deals desk dead deed fed fee feed feel fees else elf fade faded fake faked
  flake flea fleas jade keel lake lakes leaf leak leaked lease led less sake safe
  sale sea seal sealed see seed seek self sled sleek asked eased leafs
  aid aide did die dies dial disk fail failed field file files fill fills idea ideal
  idle if is kid kids kiss lid lied life like liked sail sailed said side sides
  silk skies skill ski slid slide slides
  air aired are arise dark dear deer drier ear ears fair far fear fears fire fired
  freed fries jar raid raise raised rare read real rear red ride rider rides rid
  rise safer skier dress laser
  dues due duel dull dusk fluid full fur fuel fused issue juries lure rude rule
  ruled sue suede sulk sure skull us use used user users usual
  diet east eat edit fast its last later list rest sat set sister sit star start
  street taste task tea test tie tide tired tissue treat tree true trust trait
  fist suite faster artist tutor
  door doors dot fold folder food fool foot floor lost lot old odd road roast root
  rose so sofa soft solid stood studio to toe too tool total radio loose
  and an dinner done end final in inside island kitten lesson lion listen nature
  need nine no none noon nose not note notes nut often on one onion rain run sun
  sunset ten tennis tin train under unless until fun stone
  fish half hand handle has hat he health hear here hike hill his horse hot house
  north other rush shed she shirt shoe short south than thank that the then these
  thin think this those three dish
  age ago big dog egg finger garden gate gift girl glad glass go going gold good
  grass green light log long night right ring sing song strong sugar tiger get goat
  cake call can car cards cat catch chair check chess circle clean clock cloud
  coach coat cold cook cool cut dance face ice nice once race rice school since
  arm hammer made make man me milk mind minute moon more most mouse much music
  smart smile small summer mom
  apple cup happen help jump keep map open page pan paper park pear pen pencil
  people pet pin pink place planet plan pop pot purple put ship shop simple sport
  spoon step stop top
  how new now show slow snow sweet swim town twelve walk wall warm was wash water
  we west wet wide win wind window winter wish wonder wood word work flower
  always any day easy eye family funny happy key many money monkey my only party
  play say stay story sunny toy way yard year yellow yes yet you yummy
  about bad bag basket bat be bed bee best big bird black blue boat book born both
  boy bread brown bubble bus but by job number rabbit table
  clever eleven every five give have live love never over river save seven travel
  van vase very vet video visit voice
  box boxes excuse exit extra fix fox mix mixed next relax six sixty tax taxi wax
  aqua equal liquid quad quay queen quick quiet quilt quip quit quite quote request
  square
  breeze buzz dozen fizz frozen lazy maze prize puzzle quiz size wizard zebra zero
  zip zone zoo
`.trim().split(/\s+/);

// Whether a word uses only these letters.
function usesOnly(word, letters) {
  for (let i = 0; i < word.length; i++) {
    if (letters.indexOf(word[i]) === -1) {
      return false;
    }
  }
  return true;
}

// Puts words in a jumbled order that's the same every time for the same lesson,
// so a level's text never changes and your best score stays fair. Each word gets
// a number worked out from its letters (a "hash"), and the words are sorted by it.
function jumbleFor(words, lessonLetter) {
  function hash(word) {
    const text = lessonLetter + word;
    let number = 7;
    for (let i = 0; i < text.length; i++) {
      number = (number * 31 + text.charCodeAt(i)) % 100003;
    }
    return number;
  }
  return words.slice().sort(function (a, b) {
    return hash(a) - hash(b);
  });
}

// Takes turns between two lists of words: one from the first, one from the second...
function alternate(first, second, count) {
  const result = [];
  for (let i = 0; i < count; i++) {
    const list = i % 2 === 0 ? first : second;
    const word = list[Math.floor(i / 2)];
    if (word !== undefined) {
      result.push(word);
    }
  }
  return result;
}

// The five levels of one lesson: find the key, short words, longer words,
// mixed review, then the checkpoint. "known" is every letter you can use so far.
function letterLessonLevels(letter, known) {
  const lessonId = "letter-" + letter;
  const name = letter.toUpperCase();
  const home = HOME_KEYS[letter];

  const allowed = [];
  for (let i = 0; i < WORDS.length; i++) {
    if (usesOnly(WORDS[i], known)) {
      allowed.push(WORDS[i]);
    }
  }
  const withNew = jumbleFor(allowed.filter(function (word) { return word.includes(letter); }), letter);
  const review = jumbleFor(allowed.filter(function (word) { return !word.includes(letter); }), letter);

  let short = withNew.filter(function (word) { return word.length <= 4; });
  if (short.length < 4) {
    short = withNew.filter(function (word) { return word.length <= 5; });  // letters like Q have few short words
  }
  let long = withNew.filter(function (word) { return word.length >= 5; });
  if (long.length < 4) {
    long = withNew.filter(function (word) { return word.length >= 4; });  // early lessons have few long words
  }

  const l = letter;
  const drill = [l + l + l, home + l + home, l + l + l, home + l + home, home + l, l + home].join(" ");

  const base = { category: "typing-new", lesson: lessonId };
  return [
    Object.assign({ id: lessonId + "-key", name: name + ": find the key", text: drill }, base),
    Object.assign({ id: lessonId + "-short", name: name + ": short words", text: short.slice(0, 6).join(" ") }, base),
    Object.assign({ id: lessonId + "-long", name: name + ": longer words", text: long.slice(0, 5).join(" ") }, base),
    Object.assign({ id: lessonId + "-mixed", name: name + ": mixed review", text: alternate(withNew.slice(3), review, 6).join(" ") }, base),
    Object.assign({ id: "checkpoint-" + lessonId, checkpoint: true, name: "Checkpoint: " + name,
      text: alternate(withNew.slice().reverse(), review.slice().reverse(), 8).join(" ") }, base)
  ];
}

// Builds every letter lesson and slots them in straight after the Home row lesson.
function addLetterLessons() {
  let known = HOME_ROW_LETTERS;
  let lessonAt = lessons.indexOf(findLessonById("home-row")) + 1;
  let levelAt = levels.indexOf(findLevelById("checkpoint-home-row")) + 1;

  for (let i = 0; i < LETTER_ORDER.length; i++) {
    const letter = LETTER_ORDER[i];
    known += letter;
    lessons.splice(lessonAt, 0, { id: "letter-" + letter, category: "typing-new", name: "New letter: " + letter.toUpperCase() });
    lessonAt = lessonAt + 1;

    const newLevels = letterLessonLevels(letter, known);
    for (let j = 0; j < newLevels.length; j++) {
      if (newLevels[j].text.split(" ").length < 3) {
        console.warn("Level \"" + newLevels[j].id + "\" has very few words. Add more words with \"" + letter + "\" to letter-lessons.js.");
      }
      levels.splice(levelAt, 0, newLevels[j]);
      levelAt = levelAt + 1;
    }
  }
}

// Small lookups for this file (script.js has its own, but it loads after this one).
function findLessonById(id) {
  for (let i = 0; i < lessons.length; i++) {
    if (lessons[i].id === id) {
      return lessons[i];
    }
  }
  return null;
}

function findLevelById(id) {
  for (let i = 0; i < levels.length; i++) {
    if (levels[i].id === id) {
      return levels[i];
    }
  }
  return null;
}

addLetterLessons();
