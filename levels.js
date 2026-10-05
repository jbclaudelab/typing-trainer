// All of the game's content lives in this file, so adding levels never means
// touching the game code in script.js.

// The starting points a player can choose from. Each level below says which
// one it belongs to with its "category".
const categories = [
  { id: "typing-new", path: "typing", title: "I'm new to typing", description: "Learn where every key is, one row at a time" },
  { id: "typing-quicker", path: "typing", title: "I can type, but I want to be quicker", description: "Capital letters and punctuation" },
  { id: "typing-fast", path: "typing", title: "I want to type fast and accurately", description: "Numbers, quotes and full sentences" },
  { id: "english-new", path: "english", title: "I'm new to English", description: "Everyday words and simple sentences" },
  { id: "english-build", path: "english", title: "I know some English, and I want to build on it", description: "Grammar and commonly confused words" },
  { id: "english-polish", path: "english", title: "I want to polish my English", description: "Trickier grammar and richer vocabulary" }
];

// Every level. Each level's "id" is also where its best score is saved, so ids must never change.
const levels = [
  // I'm new to typing: home row, lowercase, no punctuation
  { id: "home-left", category: "typing-new", name: "Home row: left hand", text: "asdf fdsa asdf fdsa" },
  { id: "home-right", category: "typing-new", name: "Home row: right hand", text: "jkl lkj jkl lkj" },
  { id: "home-both", category: "typing-new", name: "Home row: both hands", text: "asdf jkl fdsa lkj" },
  { id: "home-words", category: "typing-new", name: "Home row words", text: "a sad lad asks dad" },
  { id: "home-words-2", category: "typing-new", name: "More home row words", text: "dad has a glass flask" },

  // I'm new to typing: reaching to the top and bottom rows
  { id: "top-e-i", category: "typing-new", name: "Top row: E and I", text: "he hides his keys" },
  { id: "top-r-t-o-u", category: "typing-new", name: "Top row: R, T, O, and U", text: "our tour starts at the old fort" },
  { id: "bottom-n-m-c-v", category: "typing-new", name: "Bottom row: N, M, C, and V", text: "my mom can move the van" },
  { id: "every-letter", category: "typing-new", name: "Every letter", text: "the quick brown fox jumps over the lazy dog" },
  { id: "longer-words", category: "typing-new", name: "Longer words", text: "practice makes progress every single day" },

  // I want to be quicker: capital letters
  { id: "capitals", category: "typing-quicker", name: "Capital letters", text: "Maria and Jake live in Boston" },
  { id: "capitals-start", category: "typing-quicker", name: "Capitals to start", text: "The sun rose over the quiet town" },

  // I want to be quicker: punctuation
  { id: "periods", category: "typing-quicker", name: "Periods", text: "I like to type. It gets easier each day." },
  { id: "commas", category: "typing-quicker", name: "Commas", text: "We packed apples, bread, cheese, and water." },
  { id: "question-marks", category: "typing-quicker", name: "Question marks", text: "Where are you going? Can I come too?" },
  { id: "apostrophes", category: "typing-quicker", name: "Apostrophes", text: "It's late, but we're almost done. Don't stop now!" },

  // I want to type fast and accurately: quotes, numbers and full sentences
  { id: "quotes", category: "typing-fast", name: "Quotation marks", text: "\"Keep going,\" she said. \"You're doing great!\"" },
  { id: "numbers", category: "typing-fast", name: "Numbers", text: "We left at 7:30 and drove 125 miles." },
  { id: "colons", category: "typing-fast", name: "Colons and semicolons", text: "Bring three things: a pen, a notebook, and a snack; we'll provide the rest." },
  { id: "final", category: "typing-fast", name: "Final challenge", text: "On March 3, 2026, Sam asked, \"Who's ready?\" Everyone cheered; the race had begun!" },

  // I want to build on my English: commonly confused words (type the word that fills the gap)
  {
    id: "confused-there", category: "english-build", type: "confused", name: "Confused words: their, there, they're",
    questions: [
      { sentence: "___ coat is still on the chair.", answer: "Their", choices: ["Their", "There", "They're"], tip: "Their = belonging to them." },
      { sentence: "We parked over ___ by the gate.", answer: "there", choices: ["their", "there", "they're"], tip: "There = a place. It contains the word \"here\"." },
      { sentence: "___ hoping to finish by Friday.", answer: "They're", choices: ["Their", "There", "They're"], tip: "They're = they are." },
      { sentence: "Is ___ any coffee left?", answer: "there", choices: ["their", "there", "they're"], tip: "There is / there are: something exists." },
      { sentence: "The neighbours sold ___ car last week.", answer: "their", choices: ["their", "there", "they're"], tip: "Their = belonging to them." }
    ]
  },
  {
    id: "confused-your", category: "english-build", type: "confused", name: "Confused words: your, you're",
    questions: [
      { sentence: "___ report was really clear.", answer: "Your", choices: ["Your", "You're"], tip: "Your = belonging to you." },
      { sentence: "Let me know when ___ ready.", answer: "you're", choices: ["your", "you're"], tip: "You're = you are." },
      { sentence: "Thanks for ___ patience.", answer: "your", choices: ["your", "you're"], tip: "Your = belonging to you." },
      { sentence: "___ welcome to join us.", answer: "You're", choices: ["Your", "You're"], tip: "You're = you are." },
      { sentence: "Is this ___ umbrella?", answer: "your", choices: ["your", "you're"], tip: "Your = belonging to you." }
    ]
  },
  {
    id: "confused-its", category: "english-build", type: "confused", name: "Confused words: its, it's",
    questions: [
      { sentence: "___ going to rain later.", answer: "It's", choices: ["Its", "It's"], tip: "It's = it is." },
      { sentence: "The company changed ___ logo.", answer: "its", choices: ["its", "it's"], tip: "Its = belonging to it. No apostrophe, just like \"his\" and \"hers\"." },
      { sentence: "___ been a long week.", answer: "It's", choices: ["Its", "It's"], tip: "It's can also mean \"it has\"." },
      { sentence: "The dog wagged ___ tail.", answer: "its", choices: ["its", "it's"], tip: "Its = belonging to it." },
      { sentence: "I think ___ worth a try.", answer: "it's", choices: ["its", "it's"], tip: "It's = it is." }
    ]
  },
  {
    id: "confused-then", category: "english-build", type: "confused", name: "Confused words: then, than",
    questions: [
      { sentence: "She types faster ___ I do.", answer: "than", choices: ["then", "than"], tip: "Than compares two things." },
      { sentence: "Finish the report, ___ send it to me.", answer: "then", choices: ["then", "than"], tip: "Then is about time or order: first this, then that." },
      { sentence: "This route is shorter ___ the motorway.", answer: "than", choices: ["then", "than"], tip: "Than compares two things." },
      { sentence: "We had dinner and ___ watched a film.", answer: "then", choices: ["then", "than"], tip: "Then = next, after that." },
      { sentence: "I'd rather walk ___ wait for the bus.", answer: "than", choices: ["then", "than"], tip: "\"Rather ... than\" is a comparison too." }
    ]
  }
];
