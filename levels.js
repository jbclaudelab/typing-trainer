// The game's content lives in these files, so adding levels never means touching the
// game code in script.js:
//   levels.js          (this file) topics, starting points, lessons, typing levels, daily texts
//   grammar-levels.js  the grammar levels, sorted into units
//   word-groups.js     the groups of new words
// letter-lessons.js and word-levels.js then build more levels from that content.

// The English path is split into topics. After "Let's work on my English" you pick
// one of these first, then a starting point inside it.
const topics = [
  { id: "words", path: "english", name: "New words", title: "Learn new words", description: "Learn what new words mean, then practice using them in sentences." },
  { id: "grammar", path: "english", name: "Grammar", title: "Learn proper grammar", description: "Get the grammar right, and stop mixing up words like their, there, and they're." }
];

// The starting points a player can choose from. Each level below says which
// one it belongs to with its "category". English starting points also say which topic they're in.
// Typing starting points have a "passMark": the points you need to pass a checkpoint
// (100 points = 100 WPM with perfect accuracy).
const categories = [
  { id: "typing-new", path: "typing", passMark: 10, title: "I'm new to typing", description: "Learn the keyboard one new letter at a time" },
  { id: "typing-quicker", path: "typing", passMark: 25, title: "I can type, but I want to be quicker", description: "Capital letters and punctuation" },
  { id: "typing-fast", path: "typing", passMark: 50, title: "I want to type fast and accurately", description: "Numbers, quotes and full sentences" },
  { id: "words-new", path: "english", topic: "words", title: "I'm new to English", description: "First words like hi, mom, cat, and red, then everyday words" },
  { id: "words-build", path: "english", topic: "words", title: "I know some English, and I want to build on it", description: "Useful words for work and daily life" },
  { id: "words-polish", path: "english", topic: "words", title: "I want to polish my English", description: "Richer, more precise words" },
  { id: "english-new", path: "english", topic: "grammar", title: "I'm new to English", description: "Simple grammar for everyday sentences" },
  { id: "english-build", path: "english", topic: "grammar", title: "I know some English, and I want to build on it", description: "Grammar and commonly confused words" },
  { id: "english-polish", path: "english", topic: "grammar", title: "I want to polish my English", description: "Trickier grammar for confident writing" }
];

// Typing levels are grouped into lessons, in this order. Each lesson ends with a
// checkpoint level: pass it to unlock the next lesson. Passing a later checkpoint
// unlocks every lesson before it too. A lesson's "id" is where its pass is saved,
// so ids must never change.
// The "New letter" lessons between Home row and All the letters are built by letter-lessons.js.
const lessons = [
  { id: "home-row", category: "typing-new", name: "Home row" },
  { id: "all-letters", category: "typing-new", name: "All the letters" },
  { id: "capital-letters", category: "typing-quicker", name: "Capital letters" },
  { id: "punctuation", category: "typing-quicker", name: "Punctuation" },
  { id: "everyday-sentences", category: "typing-quicker", name: "Everyday sentences" },
  { id: "letter-pairs", category: "typing-quicker", name: "Common letter pairs" },
  { id: "questions-exclamations", category: "typing-quicker", name: "Questions and exclamations" },
  { id: "longer-paragraphs", category: "typing-quicker", name: "Longer paragraphs" },
  { id: "symbols", category: "typing-fast", name: "Quotes, numbers, and colons" },
  { id: "numbers-dates", category: "typing-fast", name: "Numbers and dates" },
  { id: "dashes-brackets", category: "typing-fast", name: "Dashes and brackets" },
  { id: "symbols-keys", category: "typing-fast", name: "Symbols: @ # $ % &" },
  { id: "speed-sentences", category: "typing-fast", name: "Speed sentences" }
];

// English levels are grouped into units: headings in the level menu that open and close.
// Each is { id, category, name } plus an optional "section" label shown above it.
// grammar-levels.js adds the grammar units, and word-levels.js adds one for each group of words.
const units = [];

// Every level. Each level's "id" is also where its best score is saved, so ids must never change.
// This file has the typing levels; grammar-levels.js and word-groups.js add the English ones.
// Levels in a lesson must be listed together, with the checkpoint last.
const levels = [
  // I'm new to typing: home row, lowercase, no punctuation
  { id: "home-left", category: "typing-new", lesson: "home-row", name: "Home row: left hand", text: "asdf fdsa asdf fdsa" },
  { id: "home-right", category: "typing-new", lesson: "home-row", name: "Home row: right hand", text: "jkl lkj jkl lkj" },
  { id: "home-both", category: "typing-new", lesson: "home-row", name: "Home row: both hands", text: "asdf jkl fdsa lkj" },
  { id: "home-words", category: "typing-new", lesson: "home-row", name: "Home row words", text: "a sad lad asks dad" },
  { id: "home-words-2", category: "typing-new", lesson: "home-row", name: "More home row words", text: "dad has a glass flask" },
  { id: "checkpoint-home-row", category: "typing-new", lesson: "home-row", checkpoint: true, name: "Checkpoint: Home row", text: "all lads had a glass flask as dad asks" },

  // (letter-lessons.js adds the "New letter" lessons here, one for each letter after the home row)

  // I'm new to typing: all the letters together, to finish
  { id: "every-letter", category: "typing-new", lesson: "all-letters", name: "Every letter", text: "the quick brown fox jumps over the lazy dog" },
  { id: "longer-words", category: "typing-new", lesson: "all-letters", name: "Longer words", text: "practice makes progress every single day" },
  { id: "checkpoint-all-letters", category: "typing-new", lesson: "all-letters", checkpoint: true, name: "Checkpoint: All the letters", text: "the five boxing wizards jump quickly" },

  // I want to be quicker: capital letters
  { id: "capitals", category: "typing-quicker", lesson: "capital-letters", name: "Capital letters", text: "Maria and Jake live in Boston" },
  { id: "capitals-start", category: "typing-quicker", lesson: "capital-letters", name: "Capitals to start", text: "The sun rose over the quiet town" },
  { id: "checkpoint-capital-letters", category: "typing-quicker", lesson: "capital-letters", checkpoint: true, name: "Checkpoint: Capital letters", text: "Leo and Nina met Sam in Denver on Monday" },

  // I want to be quicker: punctuation
  { id: "periods", category: "typing-quicker", lesson: "punctuation", name: "Periods", text: "I like to type. It gets easier each day." },
  { id: "commas", category: "typing-quicker", lesson: "punctuation", name: "Commas", text: "We packed apples, bread, cheese, and water." },
  { id: "question-marks", category: "typing-quicker", lesson: "punctuation", name: "Question marks", text: "Where are you going? Can I come too?" },
  { id: "apostrophes", category: "typing-quicker", lesson: "punctuation", name: "Apostrophes", text: "It's late, but we're almost done. Don't stop now!" },
  { id: "checkpoint-punctuation", category: "typing-quicker", lesson: "punctuation", checkpoint: true, name: "Checkpoint: Punctuation", text: "Is it late? Yes, but we're nearly done. Let's finish, then rest." },

  // I want to type fast and accurately: quotes, numbers and full sentences
  { id: "quotes", category: "typing-fast", lesson: "symbols", name: "Quotation marks", text: "\"Keep going,\" she said. \"You're doing great!\"" },
  { id: "numbers", category: "typing-fast", lesson: "symbols", name: "Numbers", text: "We left at 7:30 and drove 125 miles." },
  { id: "colons", category: "typing-fast", lesson: "symbols", name: "Colons and semicolons", text: "Bring three things: a pen, a notebook, and a snack; we'll provide the rest." },
  { id: "final", category: "typing-fast", lesson: "symbols", checkpoint: true, name: "Checkpoint: Quotes, numbers, and colons", text: "On March 3, 2026, Sam asked, \"Who's ready?\" Everyone cheered; the race had begun!" },

  // I want to be quicker: everyday sentences
  { id: "everyday-1", category: "typing-quicker", lesson: "everyday-sentences", name: "Good morning", text: "Good morning. The coffee is ready." },
  { id: "everyday-2", category: "typing-quicker", lesson: "everyday-sentences", name: "Call me", text: "Please call me when you get home." },
  { id: "everyday-3", category: "typing-quicker", lesson: "everyday-sentences", name: "Shopping list", text: "We need eggs, milk, and bread." },
  { id: "everyday-4", category: "typing-quicker", lesson: "everyday-sentences", name: "After lunch", text: "The meeting starts after lunch today." },
  { id: "checkpoint-everyday-sentences", category: "typing-quicker", lesson: "everyday-sentences", checkpoint: true, name: "Checkpoint: Everyday sentences", text: "Thank you for your help. See you on Friday, Anna." },

  // I want to be quicker: common letter pairs
  { id: "pairs-th", category: "typing-quicker", lesson: "letter-pairs", name: "th", text: "The three brothers think there is another path." },
  { id: "pairs-ing", category: "typing-quicker", lesson: "letter-pairs", name: "ing", text: "We are going hiking and singing this morning." },
  { id: "pairs-tion", category: "typing-quicker", lesson: "letter-pairs", name: "tion", text: "The station gave us information about the vacation." },
  { id: "pairs-er", category: "typing-quicker", lesson: "letter-pairs", name: "er and ed", text: "Her sister ordered a bigger burger and waited." },
  { id: "checkpoint-letter-pairs", category: "typing-quicker", lesson: "letter-pairs", checkpoint: true, name: "Checkpoint: Common letter pairs", text: "Nothing is better than reading the information together in the morning." },

  // I want to be quicker: questions and exclamations
  { id: "ask-time", category: "typing-quicker", lesson: "questions-exclamations", name: "What time is it?", text: "What time is it? Are we late?" },
  { id: "wow", category: "typing-quicker", lesson: "questions-exclamations", name: "Wow!", text: "Wow! That was amazing!" },
  { id: "ask-help", category: "typing-quicker", lesson: "questions-exclamations", name: "Can you help me?", text: "Can you help me? Thank you so much!" },
  { id: "missed-you", category: "typing-quicker", lesson: "questions-exclamations", name: "I missed you!", text: "Where did you go? I missed you!" },
  { id: "checkpoint-questions-exclamations", category: "typing-quicker", lesson: "questions-exclamations", checkpoint: true, name: "Checkpoint: Questions and exclamations", text: "Did you see that? What a great game! Can we play again?" },

  // I want to be quicker: longer paragraphs
  { id: "paragraph-park", category: "typing-quicker", lesson: "longer-paragraphs", name: "A walk in the park", text: "Every morning, I walk to the park. The air is cool, and the birds are singing." },
  { id: "paragraph-garden", category: "typing-quicker", lesson: "longer-paragraphs", name: "The garden", text: "My neighbor grows tomatoes in her garden. She gives some to everyone on our street." },
  { id: "paragraph-practice", category: "typing-quicker", lesson: "longer-paragraphs", name: "Practice", text: "Learning to type takes practice. Keep your eyes on the screen, and trust your fingers." },
  { id: "paragraph-library", category: "typing-quicker", lesson: "longer-paragraphs", name: "The library", text: "The library was quiet. Students read, wrote notes, and whispered to each other." },
  { id: "checkpoint-longer-paragraphs", category: "typing-quicker", lesson: "longer-paragraphs", checkpoint: true, name: "Checkpoint: Longer paragraphs", text: "On weekends, our family cooks a big breakfast together. Dad makes pancakes, Mom makes eggs, and I set the table." },

  // I want to type fast and accurately: numbers and dates
  { id: "dates-birthday", category: "typing-fast", lesson: "numbers-dates", name: "Birthdays", text: "My birthday is on June 14, 1995." },
  { id: "dates-hours", category: "typing-fast", lesson: "numbers-dates", name: "Opening hours", text: "The store is open from 9:00 to 5:30." },
  { id: "dates-amounts", category: "typing-fast", lesson: "numbers-dates", name: "Amounts", text: "We need 12 eggs, 3 apples, and 2 lemons." },
  { id: "dates-phone", category: "typing-fast", lesson: "numbers-dates", name: "Phone numbers", text: "Call 555-0198 or 555-0234 after 6:00." },
  { id: "checkpoint-numbers-dates", category: "typing-fast", lesson: "numbers-dates", checkpoint: true, name: "Checkpoint: Numbers and dates", text: "On April 22, 2025, about 4,500 runners finished the 26.2-mile race." },

  // I want to type fast and accurately: dashes and brackets
  { id: "dashes-hyphens", category: "typing-fast", lesson: "dashes-brackets", name: "Hyphens", text: "My sister-in-law is a well-known chef." },
  { id: "dashes-brackets-1", category: "typing-fast", lesson: "dashes-brackets", name: "Brackets", text: "The test (which was hard) took two hours." },
  { id: "dashes-ranges", category: "typing-fast", lesson: "dashes-brackets", name: "Page ranges", text: "Read pages 10-25 before class on Thursday." },
  { id: "dashes-brackets-2", category: "typing-fast", lesson: "dashes-brackets", name: "Lists in brackets", text: "We visited three cities (Rome, Paris, and Madrid) in one week." },
  { id: "checkpoint-dashes-brackets", category: "typing-fast", lesson: "dashes-brackets", checkpoint: true, name: "Checkpoint: Dashes and brackets", text: "The long-awaited update (version 2.0) arrives on Monday - finally!" },

  // I want to type fast and accurately: symbols
  { id: "symbols-email", category: "typing-fast", lesson: "symbols-keys", name: "Email addresses", text: "Email me at sam@example.com today." },
  { id: "symbols-money", category: "typing-fast", lesson: "symbols-keys", name: "Prices and percents", text: "The shirt costs $25, but it's 20% off." },
  { id: "symbols-and", category: "typing-fast", lesson: "symbols-keys", name: "The & sign", text: "Smith & Sons has sold bread & cakes since 1952." },
  { id: "symbols-hashtag", category: "typing-fast", lesson: "symbols-keys", name: "Hashtags", text: "Use the tag #reading for your book posts." },
  { id: "checkpoint-symbols-keys", category: "typing-fast", lesson: "symbols-keys", checkpoint: true, name: "Checkpoint: Symbols", text: "Send $50 to pay@example.com by Friday & get 10% off with #SAVE10." },

  // I want to type fast and accurately: speed sentences (each one uses every letter of the alphabet)
  { id: "speed-zebras", category: "typing-fast", lesson: "speed-sentences", name: "Zebras", text: "How vexingly quick daft zebras jump!" },
  { id: "speed-sphinx", category: "typing-fast", lesson: "speed-sentences", name: "Sphinx", text: "Sphinx of black quartz, judge my vow." },
  { id: "speed-jackdaws", category: "typing-fast", lesson: "speed-sentences", name: "Jackdaws", text: "Jackdaws love my big sphinx of quartz." },
  { id: "speed-zephyrs", category: "typing-fast", lesson: "speed-sentences", name: "Zephyrs", text: "Quick zephyrs blow, vexing daft Jim." },
  { id: "checkpoint-speed-sentences", category: "typing-fast", lesson: "speed-sentences", checkpoint: true, name: "Checkpoint: Speed sentences", text: "A wizard's job is to vex chumps quickly in fog. The quick brown fox jumps over the lazy dog." }
];

// Daily challenge sentences for each typing starting point. Everyone gets the same one
// on the same day: the game picks it from the date, so the list just repeats in a loop.
// (English starting points build their daily challenge from their own levels' questions.)
const dailyTexts = {
  "typing-new": [
    "the sun is warm and the sky is clear",
    "we walked to the lake after lunch",
    "my friend bakes fresh bread every week",
    "a small cat sleeps on the soft rug",
    "please close the door when you leave",
    "the train leaves at noon from the old station",
    "she plants tomatoes in her garden each spring",
    "good habits grow a little every day",
    "the kids played outside until dark",
    "he keeps his keys in a blue bowl",
    "rain taps gently on the kitchen window",
    "we shared a big pizza with our neighbors",
    "the library is quiet on sunday mornings",
    "read a few pages before you go to sleep",
    "the dog waits by the door for his walk",
    "fresh fruit makes a great snack",
    "they built a sandcastle near the waves",
    "slow and steady typing wins the race",
    "the market sells apples pears and plums",
    "my sister plays the piano after dinner",
    "a cup of tea helps me relax at night"
  ],
  "typing-quicker": [
    "Can you meet me at the park at noon?",
    "We're out of milk, so I'll stop at the store.",
    "Ben and Ava moved to Chicago last May.",
    "Is it too late to call Grandma tonight?",
    "Don't forget your umbrella. It looks like rain.",
    "Our team won the game on Friday!",
    "Where did you park the car, Dad?",
    "I can't find my glasses anywhere.",
    "Lisa loves hiking, biking, and swimming.",
    "The museum opens at ten on Saturdays.",
    "What a beautiful morning it is!",
    "Tom's brother works at a bank in Denver.",
    "Let's try the new cafe on Main Street.",
    "Are you coming to the party on Sunday?",
    "It's never too late to learn something new.",
    "Grace, Omar, and Leo are on the same team.",
    "We visited Paris, Rome, and Madrid in June.",
    "Please turn off the lights when you leave.",
    "How many apples did you buy?",
    "I'm proud of how far you've come!",
    "The bus was late, but we still made it."
  ],
  "typing-fast": [
    "The meeting moved from 9:15 to 10:45 on Tuesday.",
    "\"Ready?\" asked Maya. \"Let's go!\"",
    "Our flight leaves at 6:20; please don't be late.",
    "The recipe needs 2 cups of flour, 3 eggs, and 1 cup of milk.",
    "Call me at 555-0147 before 8:00 tonight.",
    "\"Practice,\" she said, \"is the secret to speed.\"",
    "The store opens at 7:00 a.m. and closes at 9:30 p.m.",
    "We drove 312 miles in 5 hours; that's fast!",
    "Pack these: a map, 2 water bottles, and a flashlight.",
    "In 2024, the town planted 1,500 new trees.",
    "\"Who's next?\" the coach asked. \"Me!\" Jo shouted.",
    "Room 204 is on the 2nd floor; Room 310 is upstairs.",
    "The score was 3 to 2: a close game until the end.",
    "Tickets cost $18 for adults and $9 for kids.",
    "\"Slow down,\" he laughed. \"We have 45 minutes.\"",
    "Our class has 28 students; 15 of them play soccer.",
    "Note: the library closes early on December 24.",
    "She ran 5 kilometers in 27 minutes and 40 seconds.",
    "\"Great job!\" said the teacher. \"That's 100%!\"",
    "Order #4821 will arrive between 2:00 and 4:00.",
    "The bridge is 1,280 feet long; it opened in 1937."
  ]
};
