// All of the game's content lives in this file, so adding levels never means
// touching the game code in script.js.

// The starting points a player can choose from. Each level below says which
// one it belongs to with its "category".
// Typing starting points have a "passMark": the points you need to pass a checkpoint
// (100 points = 100 WPM with perfect accuracy).
const categories = [
  { id: "typing-new", path: "typing", passMark: 10, title: "I'm new to typing", description: "Learn the keyboard one new letter at a time" },
  { id: "typing-quicker", path: "typing", passMark: 25, title: "I can type, but I want to be quicker", description: "Capital letters and punctuation" },
  { id: "typing-fast", path: "typing", passMark: 50, title: "I want to type fast and accurately", description: "Numbers, quotes and full sentences" },
  { id: "english-new", path: "english", title: "I'm new to English", description: "Everyday words and simple sentences" },
  { id: "english-build", path: "english", title: "I know some English, and I want to build on it", description: "Grammar and commonly confused words" },
  { id: "english-polish", path: "english", title: "I want to polish my English", description: "Trickier grammar and richer vocabulary" }
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
  { id: "symbols", category: "typing-fast", name: "Quotes, numbers, and colons" }
];

// Every level. Each level's "id" is also where its best score is saved, so ids must never change.
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
  { id: "final", category: "typing-fast", lesson: "symbols", checkpoint: true, name: "Checkpoint: Final challenge", text: "On March 3, 2026, Sam asked, \"Who's ready?\" Everyone cheered; the race had begun!" },

  // I want to build on my English: commonly confused words (type the word that fills the gap)
  {
    id: "confused-there", category: "english-build", type: "confused", name: "Confused words: their, there, they're",
    questions: [
      { sentence: "___ coat is still on the chair.", answer: "Their", choices: ["Their", "There", "They're"], tip: "Their = belonging to them." },
      { sentence: "We parked over ___ by the gate.", answer: "there", choices: ["their", "there", "they're"], tip: "There = a place. It contains the word \"here\"." },
      { sentence: "___ hoping to finish by Friday.", answer: "They're", choices: ["Their", "There", "They're"], tip: "They're = they are." },
      { sentence: "Is ___ any coffee left?", answer: "there", choices: ["their", "there", "they're"], tip: "There is / there are: something exists." },
      { sentence: "The neighbors sold ___ car last week.", answer: "their", choices: ["their", "there", "they're"], tip: "Their = belonging to them." },
      { sentence: "___ going to the beach on Saturday.", answer: "They're", choices: ["Their", "There", "They're"], tip: "They're = they are." },
      { sentence: "The children forgot ___ lunch boxes.", answer: "their", choices: ["their", "there", "they're"], tip: "Their = belonging to them." },
      { sentence: "I think ___ are enough chairs for everyone.", answer: "there", choices: ["their", "there", "they're"], tip: "There is / there are: something exists." }
    ]
  },
  {
    id: "confused-your", category: "english-build", type: "confused", name: "Confused words: your, you're",
    questions: [
      { sentence: "___ report was really clear.", answer: "Your", choices: ["Your", "You're"], tip: "Your = belonging to you." },
      { sentence: "Let me know when ___ ready.", answer: "you're", choices: ["your", "you're"], tip: "You're = you are." },
      { sentence: "Thanks for ___ patience.", answer: "your", choices: ["your", "you're"], tip: "Your = belonging to you." },
      { sentence: "___ welcome to join us.", answer: "You're", choices: ["Your", "You're"], tip: "You're = you are." },
      { sentence: "Is this ___ umbrella?", answer: "your", choices: ["your", "you're"], tip: "Your = belonging to you." },
      { sentence: "___ going to love this film.", answer: "You're", choices: ["Your", "You're"], tip: "You're = you are." },
      { sentence: "Don't forget ___ keys.", answer: "your", choices: ["your", "you're"], tip: "Your = belonging to you." },
      { sentence: "I hope ___ feeling better today.", answer: "you're", choices: ["your", "you're"], tip: "You're = you are." }
    ]
  },
  {
    id: "confused-its", category: "english-build", type: "confused", name: "Confused words: its, it's",
    questions: [
      { sentence: "___ going to rain later.", answer: "It's", choices: ["Its", "It's"], tip: "It's = it is." },
      { sentence: "The company changed ___ logo.", answer: "its", choices: ["its", "it's"], tip: "Its = belonging to it. No apostrophe, just like \"his\" and \"hers\"." },
      { sentence: "___ been a long week.", answer: "It's", choices: ["Its", "It's"], tip: "It's can also mean \"it has\"." },
      { sentence: "The dog wagged ___ tail.", answer: "its", choices: ["its", "it's"], tip: "Its = belonging to it." },
      { sentence: "I think ___ worth a try.", answer: "it's", choices: ["its", "it's"], tip: "It's = it is." },
      { sentence: "___ a lovely day for a walk.", answer: "It's", choices: ["Its", "It's"], tip: "It's = it is." },
      { sentence: "The tree lost all ___ leaves.", answer: "its", choices: ["its", "it's"], tip: "Its = belonging to it." },
      { sentence: "Tell me when ___ finished.", answer: "it's", choices: ["its", "it's"], tip: "It's = it is." }
    ]
  },
  {
    id: "confused-then", category: "english-build", type: "confused", name: "Confused words: then, than",
    questions: [
      { sentence: "She types faster ___ I do.", answer: "than", choices: ["then", "than"], tip: "Than compares two things." },
      { sentence: "Finish the report, ___ send it to me.", answer: "then", choices: ["then", "than"], tip: "Then is about time or order: first this, then that." },
      { sentence: "This route is shorter ___ the highway.", answer: "than", choices: ["then", "than"], tip: "Than compares two things." },
      { sentence: "We had dinner and ___ watched a film.", answer: "then", choices: ["then", "than"], tip: "Then = next, after that." },
      { sentence: "I'd rather walk ___ wait for the bus.", answer: "than", choices: ["then", "than"], tip: "\"Rather ... than\" is a comparison too." },
      { sentence: "My sister is taller ___ me.", answer: "than", choices: ["then", "than"], tip: "Than compares two things." },
      { sentence: "Wash your hands, and ___ we can eat.", answer: "then", choices: ["then", "than"], tip: "Then is about time or order: first this, then that." },
      { sentence: "The trip took longer ___ we expected.", answer: "than", choices: ["then", "than"], tip: "Than compares two things." }
    ]
  }
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
