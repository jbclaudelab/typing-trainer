// All of the game's content lives in this file, so adding levels never means
// touching the game code in script.js.

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
  { id: "checkpoint-speed-sentences", category: "typing-fast", lesson: "speed-sentences", checkpoint: true, name: "Checkpoint: Speed sentences", text: "A wizard's job is to vex chumps quickly in fog. The quick brown fox jumps over the lazy dog." },

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
      { sentence: "___ going to love this movie.", answer: "You're", choices: ["Your", "You're"], tip: "You're = you are." },
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
      { sentence: "We had dinner and ___ watched a movie.", answer: "then", choices: ["then", "than"], tip: "Then = next, after that." },
      { sentence: "I'd rather walk ___ wait for the bus.", answer: "than", choices: ["then", "than"], tip: "\"Rather ... than\" is a comparison too." },
      { sentence: "My sister is taller ___ me.", answer: "than", choices: ["then", "than"], tip: "Than compares two things." },
      { sentence: "Wash your hands, and ___ we can eat.", answer: "then", choices: ["then", "than"], tip: "Then is about time or order: first this, then that." },
      { sentence: "The trip took longer ___ we expected.", answer: "than", choices: ["then", "than"], tip: "Than compares two things." }
    ]
  },
  {
    id: "confused-to", category: "english-build", type: "confused", name: "Confused words: to, too, two",
    questions: [
      { sentence: "I'm going ___ the store.", answer: "to", choices: ["to", "too", "two"], tip: "To shows direction: going to a place." },
      { sentence: "This soup is ___ hot to eat.", answer: "too", choices: ["to", "too", "two"], tip: "Too = more than you want, or \"also\"." },
      { sentence: "We have ___ cats and a dog.", answer: "two", choices: ["to", "too", "two"], tip: "Two is the number 2." },
      { sentence: "Can I come ___?", answer: "too", choices: ["to", "too", "two"], tip: "Too can mean \"also\"." },
      { sentence: "She wants ___ learn Spanish.", answer: "to", choices: ["to", "too", "two"], tip: "To comes before a verb: to learn, to eat." },
      { sentence: "The movie lasted ___ hours.", answer: "two", choices: ["to", "too", "two"], tip: "Two is the number 2." },
      { sentence: "Don't drive ___ fast.", answer: "too", choices: ["to", "too", "two"], tip: "Too = more than is good." },
      { sentence: "Give the letter ___ your teacher.", answer: "to", choices: ["to", "too", "two"], tip: "To shows who receives something." }
    ]
  },
  {
    id: "confused-were", category: "english-build", type: "confused", name: "Confused words: were, where, we're",
    questions: [
      { sentence: "___ are my keys?", answer: "Where", choices: ["Were", "Where", "We're"], tip: "Where asks about a place. It contains the word \"here\"." },
      { sentence: "___ going to be late!", answer: "We're", choices: ["Were", "Where", "We're"], tip: "We're = we are." },
      { sentence: "They ___ at the beach yesterday.", answer: "were", choices: ["were", "where", "we're"], tip: "Were is the past of \"are\"." },
      { sentence: "This is the house ___ I grew up.", answer: "where", choices: ["were", "where", "we're"], tip: "Where = the place in which." },
      { sentence: "I think ___ ready now.", answer: "we're", choices: ["were", "where", "we're"], tip: "We're = we are." },
      { sentence: "You ___ right about the weather.", answer: "were", choices: ["were", "where", "we're"], tip: "Were is the past of \"are\"." },
      { sentence: "Do you know ___ the station is?", answer: "where", choices: ["were", "where", "we're"], tip: "Where asks about a place." },
      { sentence: "If I ___ you, I would call her.", answer: "were", choices: ["were", "where", "we're"], tip: "\"If I were you\" is a fixed phrase for giving advice." }
    ]
  },
  {
    id: "confused-lose", category: "english-build", type: "confused", name: "Confused words: lose, loose",
    questions: [
      { sentence: "Don't ___ your ticket.", answer: "lose", choices: ["lose", "loose"], tip: "Lose = to not have something anymore, or to not win." },
      { sentence: "This shirt is too ___ on me.", answer: "loose", choices: ["lose", "loose"], tip: "Loose = not tight. It rhymes with \"goose\"." },
      { sentence: "Our team might ___ the game.", answer: "lose", choices: ["lose", "loose"], tip: "Lose is the opposite of win." },
      { sentence: "The dog got ___ and ran away.", answer: "loose", choices: ["lose", "loose"], tip: "Loose = free, not tied up." },
      { sentence: "I always ___ my sunglasses.", answer: "lose", choices: ["lose", "loose"], tip: "Lose = to not be able to find something." },
      { sentence: "One of the screws is ___.", answer: "loose", choices: ["lose", "loose"], tip: "Loose = not held firmly." },
      { sentence: "Try not to ___ your temper.", answer: "lose", choices: ["lose", "loose"], tip: "Lose has one o, like \"lost\"." },
      { sentence: "She wore her hair ___ today.", answer: "loose", choices: ["lose", "loose"], tip: "Loose = not tied back." }
    ]
  },
  {
    id: "past-irregular", category: "english-build", type: "confused", name: "Past tense: irregular verbs",
    questions: [
      { sentence: "Yesterday we ___ to the zoo.", answer: "went", choices: ["goed", "went", "gone"], tip: "Go → went (yesterday) → have gone." },
      { sentence: "I ___ a great book last month.", answer: "read", choices: ["readed", "read"], tip: "Read → read. It's spelled the same, but said like \"red\"." },
      { sentence: "She ___ her lunch an hour ago.", answer: "ate", choices: ["eated", "ate", "eaten"], tip: "Eat → ate → have eaten." },
      { sentence: "We ___ our friends at the party.", answer: "saw", choices: ["seed", "saw", "seen"], tip: "See → saw → have seen." },
      { sentence: "He ___ a new phone on Monday.", answer: "bought", choices: ["buyed", "bought", "brought"], tip: "Buy → bought. (Bring → brought is a different verb.)" },
      { sentence: "They ___ the race last year.", answer: "won", choices: ["winned", "won"], tip: "Win → won." },
      { sentence: "I ___ my keys at home this morning.", answer: "left", choices: ["leaved", "left"], tip: "Leave → left." },
      { sentence: "The kids ___ asleep in the car.", answer: "fell", choices: ["falled", "fell", "fallen"], tip: "Fall → fell → have fallen." }
    ]
  },

  // I'm new to English: everyday words and simple sentences
  {
    id: "basics-a-an", category: "english-new", type: "confused", name: "A or an",
    questions: [
      { sentence: "I eat ___ apple every day.", answer: "an", choices: ["a", "an"], tip: "Use an before a vowel sound: an apple, an egg." },
      { sentence: "She has ___ dog.", answer: "a", choices: ["a", "an"], tip: "Use a before a consonant sound: a dog, a cat." },
      { sentence: "We waited for ___ hour.", answer: "an", choices: ["a", "an"], tip: "The h in \"hour\" is silent, so it starts with a vowel sound." },
      { sentence: "He is ___ teacher.", answer: "a", choices: ["a", "an"], tip: "Teacher starts with a consonant sound." },
      { sentence: "I need ___ umbrella.", answer: "an", choices: ["a", "an"], tip: "Umbrella starts with a vowel sound." },
      { sentence: "This is ___ easy question.", answer: "an", choices: ["a", "an"], tip: "Easy starts with a vowel sound." },
      { sentence: "She goes to ___ university in Texas.", answer: "a", choices: ["a", "an"], tip: "University starts with a \"you\" sound, so it takes a." },
      { sentence: "Do you have ___ pen?", answer: "a", choices: ["a", "an"], tip: "Pen starts with a consonant sound." }
    ]
  },
  {
    id: "basics-be", category: "english-new", type: "confused", name: "Am, is, are",
    questions: [
      { sentence: "I ___ hungry.", answer: "am", choices: ["am", "is", "are"], tip: "I am." },
      { sentence: "She ___ my sister.", answer: "is", choices: ["am", "is", "are"], tip: "He is, she is, it is." },
      { sentence: "They ___ at work.", answer: "are", choices: ["am", "is", "are"], tip: "We are, you are, they are." },
      { sentence: "The weather ___ nice today.", answer: "is", choices: ["am", "is", "are"], tip: "One thing: is." },
      { sentence: "You ___ very kind.", answer: "are", choices: ["am", "is", "are"], tip: "You are, for one person or many." },
      { sentence: "My parents ___ from Mexico.", answer: "are", choices: ["am", "is", "are"], tip: "More than one person: are." },
      { sentence: "It ___ seven o'clock.", answer: "is", choices: ["am", "is", "are"], tip: "It is." },
      { sentence: "We ___ ready to go.", answer: "are", choices: ["am", "is", "are"], tip: "We are." }
    ]
  },
  {
    id: "basics-have", category: "english-new", type: "confused", name: "Has or have",
    questions: [
      { sentence: "I ___ two brothers.", answer: "have", choices: ["has", "have"], tip: "I have, you have, we have, they have." },
      { sentence: "She ___ a red car.", answer: "has", choices: ["has", "have"], tip: "He has, she has, it has." },
      { sentence: "We ___ a meeting at ten.", answer: "have", choices: ["has", "have"], tip: "We have." },
      { sentence: "The house ___ three bedrooms.", answer: "has", choices: ["has", "have"], tip: "One thing: has." },
      { sentence: "Do you ___ a minute?", answer: "have", choices: ["has", "have"], tip: "After \"do\" or \"does\", always use have." },
      { sentence: "My son ___ a cold.", answer: "has", choices: ["has", "have"], tip: "One person (he or she): has." },
      { sentence: "They ___ a big garden.", answer: "have", choices: ["has", "have"], tip: "They have." },
      { sentence: "Does he ___ a job?", answer: "have", choices: ["has", "have"], tip: "After \"does\", use have: Does he have...?" }
    ]
  },
  {
    id: "basics-in-on-at", category: "english-new", type: "confused", name: "In, on, at",
    questions: [
      { sentence: "The meeting is ___ Monday.", answer: "on", choices: ["in", "on", "at"], tip: "On for days: on Monday, on my birthday." },
      { sentence: "I was born ___ 1990.", answer: "in", choices: ["in", "on", "at"], tip: "In for years, months, and seasons." },
      { sentence: "Let's meet ___ 3 o'clock.", answer: "at", choices: ["in", "on", "at"], tip: "At for clock times: at 3 o'clock." },
      { sentence: "The keys are ___ the table.", answer: "on", choices: ["in", "on", "at"], tip: "On a surface: on the table." },
      { sentence: "My coat is ___ the closet.", answer: "in", choices: ["in", "on", "at"], tip: "In something closed: in the closet, in a box." },
      { sentence: "She is ___ the bus stop.", answer: "at", choices: ["in", "on", "at"], tip: "At a point or place: at the bus stop, at home." },
      { sentence: "We go swimming ___ July.", answer: "in", choices: ["in", "on", "at"], tip: "In for months: in July." },
      { sentence: "He lives ___ Chicago.", answer: "in", choices: ["in", "on", "at"], tip: "In for cities and countries." }
    ]
  },
  {
    id: "basics-this-these", category: "english-new", type: "confused", name: "This, these, that, those",
    questions: [
      { sentence: "___ book in my hand is great.", answer: "This", choices: ["This", "These", "That", "Those"], tip: "This = one thing, near you." },
      { sentence: "___ shoes I'm wearing are new.", answer: "These", choices: ["This", "These", "That", "Those"], tip: "These = more than one thing, near you." },
      { sentence: "Look at ___ bird up in the tree!", answer: "that", choices: ["this", "these", "that", "those"], tip: "That = one thing, far away." },
      { sentence: "___ houses across the river are old.", answer: "Those", choices: ["This", "These", "That", "Those"], tip: "Those = more than one thing, far away." },
      { sentence: "Is ___ your phone here on my desk?", answer: "this", choices: ["this", "these", "that", "those"], tip: "One thing, near you: this." },
      { sentence: "I bought ___ apples in this bag today.", answer: "these", choices: ["this", "these", "that", "those"], tip: "Many things, near you: these." },
      { sentence: "Who is ___ man over there?", answer: "that", choices: ["this", "these", "that", "those"], tip: "One person, far away: that." },
      { sentence: "Can you see ___ mountains far away?", answer: "those", choices: ["this", "these", "that", "those"], tip: "Many things, far away: those." }
    ]
  },
  {
    id: "basics-plurals", category: "english-new", type: "confused", name: "One or many: plurals",
    questions: [
      { sentence: "I have three ___.", answer: "boxes", choices: ["boxs", "boxes"], tip: "Words ending in x, s, sh, or ch add -es: boxes, buses." },
      { sentence: "There are two ___ in the yard.", answer: "children", choices: ["childs", "children"], tip: "Child → children. Some plurals are irregular." },
      { sentence: "We bought five ___.", answer: "tomatoes", choices: ["tomatos", "tomatoes"], tip: "Tomato → tomatoes, potato → potatoes." },
      { sentence: "Brush your ___ twice a day.", answer: "teeth", choices: ["tooths", "teeth"], tip: "Tooth → teeth, foot → feet." },
      { sentence: "The ___ fell from the trees.", answer: "leaves", choices: ["leafs", "leaves"], tip: "Many words ending in f change to -ves: leaf → leaves." },
      { sentence: "Three ___ are waiting outside.", answer: "women", choices: ["womans", "women"], tip: "Woman → women, man → men." },
      { sentence: "We visited many ___ in Europe.", answer: "cities", choices: ["citys", "cities"], tip: "Consonant + y becomes -ies: city → cities." },
      { sentence: "The farmer has ten ___.", answer: "sheep", choices: ["sheeps", "sheep"], tip: "Sheep is the same for one or many." }
    ]
  },

  // I want to polish my English: trickier grammar and richer vocabulary
  {
    id: "polish-affect-effect", category: "english-polish", type: "confused", name: "Affect or effect",
    questions: [
      { sentence: "The rain will ___ our plans.", answer: "affect", choices: ["affect", "effect"], tip: "Affect is usually the verb (the action): rain affects plans." },
      { sentence: "The new law had a big ___.", answer: "effect", choices: ["affect", "effect"], tip: "Effect is usually the noun (the result)." },
      { sentence: "Coffee has a strong ___ on me.", answer: "effect", choices: ["affect", "effect"], tip: "\"Have an effect on\" uses the noun." },
      { sentence: "Does the noise ___ your sleep?", answer: "affect", choices: ["affect", "effect"], tip: "A for action: affect." },
      { sentence: "The medicine took ___ quickly.", answer: "effect", choices: ["affect", "effect"], tip: "\"Take effect\" means start working." },
      { sentence: "Stress can ___ your health.", answer: "affect", choices: ["affect", "effect"], tip: "Affect = to change or influence something." },
      { sentence: "The movie's special ___ were amazing.", answer: "effects", choices: ["affects", "effects"], tip: "Special effects: results you can see, so it's the noun." },
      { sentence: "How will this decision ___ the team?", answer: "affect", choices: ["affect", "effect"], tip: "Affect is the verb here: it affects the team." }
    ]
  },
  {
    id: "polish-fewer-less", category: "english-polish", type: "confused", name: "Fewer or less",
    questions: [
      { sentence: "I drink ___ coffee than I used to.", answer: "less", choices: ["fewer", "less"], tip: "Less for things you can't count: less coffee, less time." },
      { sentence: "There were ___ people at the show.", answer: "fewer", choices: ["fewer", "less"], tip: "Fewer for things you can count: fewer people." },
      { sentence: "Use ___ sugar in the recipe.", answer: "less", choices: ["fewer", "less"], tip: "You can't count sugar, so: less." },
      { sentence: "This checkout is for ten items or ___.", answer: "fewer", choices: ["fewer", "less"], tip: "Items can be counted, so fewer is correct (though many stores say \"less\")." },
      { sentence: "We have ___ time than we thought.", answer: "less", choices: ["fewer", "less"], tip: "Time can't be counted one by one: less time." },
      { sentence: "She made ___ mistakes this week.", answer: "fewer", choices: ["fewer", "less"], tip: "Mistakes can be counted: fewer mistakes." },
      { sentence: "The new car uses ___ gas.", answer: "less", choices: ["fewer", "less"], tip: "Gas can't be counted one by one: less gas." },
      { sentence: "___ students failed the test this year.", answer: "Fewer", choices: ["Fewer", "Less"], tip: "Students can be counted: fewer students." }
    ]
  },
  {
    id: "polish-who-whom", category: "english-polish", type: "confused", name: "Who or whom",
    questions: [
      { sentence: "___ called you last night?", answer: "Who", choices: ["Who", "Whom"], tip: "Who does the action. Try answering with \"he\": He called." },
      { sentence: "To ___ should I send the letter?", answer: "whom", choices: ["who", "whom"], tip: "After a word like to, for, or with, use whom." },
      { sentence: "She is the friend ___ helped me move.", answer: "who", choices: ["who", "whom"], tip: "Who helped: she helped, so who." },
      { sentence: "The man ___ we met was very kind.", answer: "whom", choices: ["who", "whom"], tip: "We met him: him → whom (both end in m)." },
      { sentence: "___ is ready for lunch?", answer: "Who", choices: ["Who", "Whom"], tip: "Who does the action: he is ready." },
      { sentence: "For ___ is this gift?", answer: "whom", choices: ["who", "whom"], tip: "After \"for\", use whom." },
      { sentence: "I know someone ___ speaks French.", answer: "who", choices: ["who", "whom"], tip: "She speaks French: she → who." },
      { sentence: "With ___ did you travel?", answer: "whom", choices: ["who", "whom"], tip: "After \"with\", use whom." }
    ]
  },
  {
    id: "polish-i-me", category: "english-polish", type: "confused", name: "I, me, or myself",
    questions: [
      { sentence: "Sam and ___ went to the game.", answer: "I", choices: ["I", "me", "myself"], tip: "Remove \"Sam and\": I went (not me went)." },
      { sentence: "She gave the tickets to Sam and ___.", answer: "me", choices: ["I", "me", "myself"], tip: "Remove \"Sam and\": she gave them to me." },
      { sentence: "Between you and ___, I'm nervous.", answer: "me", choices: ["I", "me", "myself"], tip: "After \"between\", use me." },
      { sentence: "I hurt ___ in the kitchen.", answer: "myself", choices: ["I", "me", "myself"], tip: "Use myself when you do something to yourself." },
      { sentence: "Please call Maria or ___ with questions.", answer: "me", choices: ["I", "me", "myself"], tip: "Remove \"Maria or\": please call me." },
      { sentence: "My wife and ___ love to travel.", answer: "I", choices: ["I", "me", "myself"], tip: "Remove \"My wife and\": I love to travel." },
      { sentence: "I made this cake ___.", answer: "myself", choices: ["I", "me", "myself"], tip: "Myself can add emphasis: I did it with no help." },
      { sentence: "The boss invited Ana and ___ to lunch.", answer: "me", choices: ["I", "me", "myself"], tip: "Remove \"Ana and\": the boss invited me." }
    ]
  },
  {
    id: "polish-could-have", category: "english-polish", type: "confused", name: "Could have, not could of",
    questions: [
      { sentence: "You ___ told me earlier!", answer: "could have", choices: ["could of", "could have"], tip: "It sounds like \"could of\", but it's always could have (could've)." },
      { sentence: "I ___ left sooner.", answer: "should have", choices: ["should of", "should have"], tip: "Should have, never should of." },
      { sentence: "We ___ won with more practice.", answer: "would have", choices: ["would of", "would have"], tip: "Would have, never would of." },
      { sentence: "She ___ missed the bus.", answer: "must have", choices: ["must of", "must have"], tip: "Must have, never must of." },
      { sentence: "They ___ been stuck in traffic.", answer: "might have", choices: ["might of", "might have"], tip: "Might have, never might of." },
      { sentence: "He ___ asked for help.", answer: "should have", choices: ["should of", "should have"], tip: "Should have: the short form is should've." },
      { sentence: "I ___ called if I had known.", answer: "would have", choices: ["would of", "would have"], tip: "Would have: the short form is would've." },
      { sentence: "It ___ been worse.", answer: "could have", choices: ["could of", "could have"], tip: "Could have: the short form is could've." }
    ]
  },

  // More grammar for "I'm new to English"
  {
    id: "basics-do-does", category: "english-new", type: "confused", name: "Do or does",
    questions: [
      { sentence: "___ you like coffee?", answer: "Do", choices: ["Do", "Does"], tip: "Do: I, you, we, they." },
      { sentence: "___ she work here?", answer: "Does", choices: ["Do", "Does"], tip: "Does: he, she, it." },
      { sentence: "___ they live in Texas?", answer: "Do", choices: ["Do", "Does"], tip: "Do: I, you, we, they." },
      { sentence: "___ he play soccer?", answer: "Does", choices: ["Do", "Does"], tip: "Does: he, she, it." },
      { sentence: "What ___ you want for lunch?", answer: "do", choices: ["do", "does"], tip: "Do: I, you, we, they." },
      { sentence: "Where ___ your sister live?", answer: "does", choices: ["do", "does"], tip: "One person (your sister = she): does." },
      { sentence: "___ we have class today?", answer: "Do", choices: ["Do", "Does"], tip: "Do: I, you, we, they." },
      { sentence: "How ___ this machine work?", answer: "does", choices: ["do", "does"], tip: "One thing (it): does." }
    ]
  },
  {
    id: "basics-dont-doesnt", category: "english-new", type: "confused", name: "Don't or doesn't",
    questions: [
      { sentence: "I ___ like tea.", answer: "don't", choices: ["don't", "doesn't"], tip: "Don't = do not. Use it with I, you, we, they." },
      { sentence: "He ___ eat meat.", answer: "doesn't", choices: ["don't", "doesn't"], tip: "Doesn't = does not. Use it with he, she, it." },
      { sentence: "They ___ have a car.", answer: "don't", choices: ["don't", "doesn't"], tip: "Don't: I, you, we, they." },
      { sentence: "My phone ___ work.", answer: "doesn't", choices: ["don't", "doesn't"], tip: "One thing (it): doesn't." },
      { sentence: "We ___ live here.", answer: "don't", choices: ["don't", "doesn't"], tip: "Don't: I, you, we, they." },
      { sentence: "She ___ speak French.", answer: "doesn't", choices: ["don't", "doesn't"], tip: "Doesn't: he, she, it." },
      { sentence: "You ___ need a ticket.", answer: "don't", choices: ["don't", "doesn't"], tip: "Don't: I, you, we, they." },
      { sentence: "The bus ___ stop here.", answer: "doesn't", choices: ["don't", "doesn't"], tip: "One thing (it): doesn't." }
    ]
  },
  {
    id: "basics-there-is", category: "english-new", type: "confused", name: "There is or there are",
    questions: [
      { sentence: "There ___ a cat on the bed.", answer: "is", choices: ["is", "are"], tip: "One thing: there is." },
      { sentence: "There ___ two cats on the bed.", answer: "are", choices: ["is", "are"], tip: "More than one: there are." },
      { sentence: "There ___ some milk in the fridge.", answer: "is", choices: ["is", "are"], tip: "You can't count milk, so: there is." },
      { sentence: "There ___ many people here.", answer: "are", choices: ["is", "are"], tip: "More than one: there are." },
      { sentence: "There ___ a park near my house.", answer: "is", choices: ["is", "are"], tip: "One thing: there is." },
      { sentence: "There ___ three bedrooms in the house.", answer: "are", choices: ["is", "are"], tip: "More than one: there are." },
      { sentence: "___ there a bank near here?", answer: "Is", choices: ["Is", "Are"], tip: "One thing: is there?" },
      { sentence: "___ there any eggs?", answer: "Are", choices: ["Is", "Are"], tip: "More than one: are there?" }
    ]
  },
  {
    id: "basics-can", category: "english-new", type: "confused", name: "Can or can't",
    questions: [
      { sentence: "Fish ___ swim.", answer: "can", choices: ["can", "can't"], tip: "Can = it is possible." },
      { sentence: "Fish ___ walk.", answer: "can't", choices: ["can", "can't"], tip: "Can't = cannot. It is not possible." },
      { sentence: "Birds ___ fly.", answer: "can", choices: ["can", "can't"], tip: "Can = it is possible." },
      { sentence: "A baby ___ drive a car.", answer: "can't", choices: ["can", "can't"], tip: "Can't = cannot." },
      { sentence: "I ___ see. It is too dark.", answer: "can't", choices: ["can", "can't"], tip: "Can't = cannot." },
      { sentence: "Dogs ___ run fast.", answer: "can", choices: ["can", "can't"], tip: "Can = it is possible." },
      { sentence: "Cats ___ talk.", answer: "can't", choices: ["can", "can't"], tip: "Can't = cannot." },
      { sentence: "We take cards. You ___ pay with a card here.", answer: "can", choices: ["can", "can't"], tip: "Can = it is possible or allowed." }
    ]
  },
  {
    id: "basics-was-were", category: "english-new", type: "confused", name: "Was or were",
    questions: [
      { sentence: "I ___ tired yesterday.", answer: "was", choices: ["was", "were"], tip: "I was, he was, she was, it was." },
      { sentence: "They ___ at the park.", answer: "were", choices: ["was", "were"], tip: "We were, you were, they were." },
      { sentence: "She ___ my teacher last year.", answer: "was", choices: ["was", "were"], tip: "She was." },
      { sentence: "We ___ late for class.", answer: "were", choices: ["was", "were"], tip: "We were." },
      { sentence: "It ___ cold last night.", answer: "was", choices: ["was", "were"], tip: "It was." },
      { sentence: "You ___ right.", answer: "were", choices: ["was", "were"], tip: "You were, for one person or many." },
      { sentence: "The kids ___ happy.", answer: "were", choices: ["was", "were"], tip: "More than one person: were." },
      { sentence: "My dad ___ a cook.", answer: "was", choices: ["was", "were"], tip: "One person: was." }
    ]
  },
  {
    id: "basics-question-words", category: "english-new", type: "confused", name: "What, where, when, who",
    questions: [
      { sentence: "___ is your name?", answer: "What", choices: ["What", "Where", "When", "Who"], tip: "What asks about a thing." },
      { sentence: "___ do you live?", answer: "Where", choices: ["What", "Where", "When", "Who"], tip: "Where asks about a place." },
      { sentence: "___ is your birthday?", answer: "When", choices: ["What", "Where", "When", "Who"], tip: "When asks about a time or day." },
      { sentence: "___ is that man?", answer: "Who", choices: ["What", "Where", "When", "Who"], tip: "Who asks about a person." },
      { sentence: "___ is the bathroom?", answer: "Where", choices: ["What", "Where", "When", "Who"], tip: "Where asks about a place." },
      { sentence: "___ time is it?", answer: "What", choices: ["What", "Where", "When", "Who"], tip: "What time? asks for the time." },
      { sentence: "___ does the movie start?", answer: "When", choices: ["What", "Where", "When", "Who"], tip: "When asks about a time." },
      { sentence: "___ is your teacher?", answer: "Who", choices: ["What", "Where", "When", "Who"], tip: "Who asks about a person." }
    ]
  },
  {
    id: "basics-my-your", category: "english-new", type: "confused", name: "My, your, his, her",
    questions: [
      { sentence: "I love ___ mom.", answer: "my", choices: ["my", "your", "his", "her"], tip: "I → my." },
      { sentence: "You left this here. Is it ___ phone?", answer: "your", choices: ["my", "your", "his", "her"], tip: "You → your." },
      { sentence: "Tom is washing ___ car.", answer: "his", choices: ["my", "your", "his", "her"], tip: "He (Tom) → his." },
      { sentence: "Maria is reading ___ book.", answer: "her", choices: ["my", "your", "his", "her"], tip: "She (Maria) → her." },
      { sentence: "I cannot find ___ keys.", answer: "my", choices: ["my", "your", "his", "her"], tip: "I → my." },
      { sentence: "He lost ___ hat.", answer: "his", choices: ["my", "your", "his", "her"], tip: "He → his." },
      { sentence: "She loves ___ dog.", answer: "her", choices: ["my", "your", "his", "her"], tip: "She → her." },
      { sentence: "Do you have ___ ticket?", answer: "your", choices: ["my", "your", "his", "her"], tip: "You → your." }
    ]
  },
  {
    id: "basics-me-him", category: "english-new", type: "confused", name: "Me, him, her, them",
    questions: [
      { sentence: "I am lost. Please help ___.", answer: "me", choices: ["me", "him", "her", "them"], tip: "I → me." },
      { sentence: "I see Tom. I wave to ___.", answer: "him", choices: ["me", "him", "her", "them"], tip: "He (Tom) → him." },
      { sentence: "Anna is my friend. I call ___ every day.", answer: "her", choices: ["me", "him", "her", "them"], tip: "She (Anna) → her." },
      { sentence: "The kids are here. Give ___ the cake.", answer: "them", choices: ["me", "him", "her", "them"], tip: "They (the kids) → them." },
      { sentence: "I am talking. Can you hear ___?", answer: "me", choices: ["me", "him", "her", "them"], tip: "I → me." },
      { sentence: "My shoes are old. I want to throw ___ away.", answer: "them", choices: ["me", "him", "her", "them"], tip: "They (the shoes) → them." },
      { sentence: "Dad is home. Say hi to ___.", answer: "him", choices: ["me", "him", "her", "them"], tip: "He (Dad) → him." },
      { sentence: "Grandma is sick. We visit ___.", answer: "her", choices: ["me", "him", "her", "them"], tip: "She (Grandma) → her." }
    ]
  },
  {
    id: "basics-like-likes", category: "english-new", type: "confused", name: "Like or likes",
    questions: [
      { sentence: "I ___ pizza.", answer: "like", choices: ["like", "likes"], tip: "I like, you like, we like, they like." },
      { sentence: "She ___ music.", answer: "likes", choices: ["like", "likes"], tip: "He, she, it: add -s. She likes." },
      { sentence: "They ___ the beach.", answer: "like", choices: ["like", "likes"], tip: "They like." },
      { sentence: "My dad ___ coffee.", answer: "likes", choices: ["like", "likes"], tip: "One person (he): likes." },
      { sentence: "We ___ our teacher.", answer: "like", choices: ["like", "likes"], tip: "We like." },
      { sentence: "He ___ to swim.", answer: "likes", choices: ["like", "likes"], tip: "He likes." },
      { sentence: "You ___ red.", answer: "like", choices: ["like", "likes"], tip: "You like." },
      { sentence: "The cat ___ fish.", answer: "likes", choices: ["like", "likes"], tip: "One animal (it): likes." }
    ]
  },
  {
    id: "basics-comparing", category: "english-new", type: "confused", name: "Bigger, smaller: comparing two things",
    questions: [
      { sentence: "An elephant is ___ than a dog.", answer: "bigger", choices: ["big", "bigger"], tip: "Compare two things with -er and than." },
      { sentence: "A mouse is ___ than a cat.", answer: "smaller", choices: ["small", "smaller"], tip: "Compare two things with -er and than." },
      { sentence: "My brother is ___ than me.", answer: "taller", choices: ["tall", "taller"], tip: "Compare two things with -er and than." },
      { sentence: "Today is ___ than yesterday.", answer: "hotter", choices: ["hoter", "hotter"], tip: "Hot → hotter. The t doubles." },
      { sentence: "This bag is ___ than that one.", answer: "heavier", choices: ["heavyer", "heavier"], tip: "Heavy → heavier. The y changes to i." },
      { sentence: "The bus is ___ than the train.", answer: "slower", choices: ["slow", "slower"], tip: "Compare two things with -er and than." },
      { sentence: "Summer is ___ than winter.", answer: "warmer", choices: ["warm", "warmer"], tip: "Compare two things with -er and than." },
      { sentence: "A car is ___ than a bike.", answer: "faster", choices: ["fast", "faster"], tip: "Compare two things with -er and than." }
    ]
  },
  {
    id: "basics-the-biggest", category: "english-new", type: "confused", name: "The biggest: the most of all",
    questions: [
      { sentence: "The elephant is the ___ animal in the zoo.", answer: "biggest", choices: ["bigger", "biggest"], tip: "The most of all: the ...est." },
      { sentence: "Everest is the ___ mountain in the world.", answer: "highest", choices: ["higher", "highest"], tip: "The most of all: the ...est." },
      { sentence: "This is the ___ day of the year.", answer: "hottest", choices: ["hotter", "hottest"], tip: "Hot → hottest. The t doubles." },
      { sentence: "She is the ___ girl in her class.", answer: "tallest", choices: ["taller", "tallest"], tip: "The most of all: the ...est." },
      { sentence: "January is the ___ month here.", answer: "coldest", choices: ["colder", "coldest"], tip: "The most of all: the ...est." },
      { sentence: "This is the ___ book I have.", answer: "best", choices: ["better", "best"], tip: "Good → better → best." },
      { sentence: "He is the ___ runner on the team.", answer: "fastest", choices: ["faster", "fastest"], tip: "The most of all: the ...est." },
      { sentence: "That was the ___ movie ever.", answer: "worst", choices: ["worse", "worst"], tip: "Bad → worse → worst." }
    ]
  },
  {
    id: "basics-much-many", category: "english-new", type: "confused", name: "Much or many",
    questions: [
      { sentence: "How ___ apples do you want?", answer: "many", choices: ["much", "many"], tip: "Many: things you can count, like apples." },
      { sentence: "How ___ water do you drink?", answer: "much", choices: ["much", "many"], tip: "Much: things you can't count, like water." },
      { sentence: "I do not have ___ time.", answer: "much", choices: ["much", "many"], tip: "You can't count time one by one: much." },
      { sentence: "There are ___ cars on the road.", answer: "many", choices: ["much", "many"], tip: "You can count cars: many." },
      { sentence: "How ___ money is it?", answer: "much", choices: ["much", "many"], tip: "How much money? How much is it?" },
      { sentence: "We have ___ friends.", answer: "many", choices: ["much", "many"], tip: "You can count friends: many." },
      { sentence: "There is not ___ milk.", answer: "much", choices: ["much", "many"], tip: "You can't count milk: much." },
      { sentence: "How ___ people are coming?", answer: "many", choices: ["much", "many"], tip: "You can count people: many." }
    ]
  },
  {
    id: "basics-some-any", category: "english-new", type: "confused", name: "Some or any",
    questions: [
      { sentence: "I have ___ apples.", answer: "some", choices: ["some", "any"], tip: "Some in yes sentences." },
      { sentence: "Do you have ___ questions?", answer: "any", choices: ["some", "any"], tip: "Any in questions." },
      { sentence: "There is ___ bread on the table.", answer: "some", choices: ["some", "any"], tip: "Some in yes sentences." },
      { sentence: "I do not have ___ money.", answer: "any", choices: ["some", "any"], tip: "Any in not sentences." },
      { sentence: "Can I have ___ water?", answer: "some", choices: ["some", "any"], tip: "When you ask for something, use some." },
      { sentence: "Are there ___ chairs?", answer: "any", choices: ["some", "any"], tip: "Any in questions." },
      { sentence: "She bought ___ flowers.", answer: "some", choices: ["some", "any"], tip: "Some in yes sentences." },
      { sentence: "We do not need ___ help.", answer: "any", choices: ["some", "any"], tip: "Any in not sentences." }
    ]
  },
  {
    id: "basics-right-now", category: "english-new", type: "confused", name: "I am eating: right now",
    questions: [
      { sentence: "I am ___ lunch now.", answer: "eating", choices: ["eat", "eating"], tip: "Right now: am, is, or are + -ing." },
      { sentence: "She is ___ a book.", answer: "reading", choices: ["read", "reading"], tip: "Right now: is + -ing." },
      { sentence: "They are ___ in the park.", answer: "playing", choices: ["play", "playing"], tip: "Right now: are + -ing." },
      { sentence: "He is ___ a song.", answer: "singing", choices: ["sing", "singing"], tip: "Right now: is + -ing." },
      { sentence: "We are ___ TV.", answer: "watching", choices: ["watch", "watching"], tip: "Right now: are + -ing." },
      { sentence: "The baby is ___.", answer: "sleeping", choices: ["sleep", "sleeping"], tip: "Right now: is + -ing." },
      { sentence: "Take an umbrella. It is ___.", answer: "raining", choices: ["rain", "raining"], tip: "Right now: is + -ing." },
      { sentence: "I am ___ for the bus.", answer: "waiting", choices: ["wait", "waiting"], tip: "Right now: am + -ing." }
    ]
  },
  {
    id: "basics-past-ed", category: "english-new", type: "confused", name: "Past tense: -ed",
    questions: [
      { sentence: "Yesterday I ___ soccer.", answer: "played", choices: ["play", "played"], tip: "Past: add -ed." },
      { sentence: "Last night she ___ the door.", answer: "closed", choices: ["close", "closed"], tip: "Past: add -ed (or just -d after e)." },
      { sentence: "We ___ TV last night.", answer: "watched", choices: ["watch", "watched"], tip: "Past: add -ed." },
      { sentence: "He ___ to work yesterday.", answer: "walked", choices: ["walk", "walked"], tip: "Past: add -ed." },
      { sentence: "They ___ a cake last week.", answer: "baked", choices: ["bake", "baked"], tip: "Past: add -d after e." },
      { sentence: "I ___ my mom this morning.", answer: "called", choices: ["call", "called"], tip: "Past: add -ed." },
      { sentence: "The movie ___ at nine last night.", answer: "started", choices: ["start", "started"], tip: "Past: add -ed." },
      { sentence: "We ___ our friends last weekend.", answer: "visited", choices: ["visit", "visited"], tip: "Past: add -ed." }
    ]
  },
  {
    id: "basics-past-irregular", category: "english-new", type: "confused", name: "Past tense: came, had, made",
    questions: [
      { sentence: "She ___ home late last night.", answer: "came", choices: ["comed", "came"], tip: "Come → came." },
      { sentence: "I ___ a cold last week.", answer: "had", choices: ["haved", "had"], tip: "Have → had." },
      { sentence: "We ___ a cake for Dad.", answer: "made", choices: ["maked", "made"], tip: "Make → made." },
      { sentence: "He ___ the bus to work yesterday.", answer: "took", choices: ["taked", "took"], tip: "Take → took." },
      { sentence: "They ___ a new dog last month.", answer: "got", choices: ["getted", "got"], tip: "Get → got." },
      { sentence: "My friend ___ me a gift.", answer: "gave", choices: ["gived", "gave"], tip: "Give → gave." },
      { sentence: "The dog ___ across the yard.", answer: "ran", choices: ["runned", "ran"], tip: "Run → ran." },
      { sentence: "I ___ a glass of water.", answer: "drank", choices: ["drinked", "drank"], tip: "Drink → drank." }
    ]
  },
  {
    id: "basics-going-to", category: "english-new", type: "confused", name: "Going to: the future",
    questions: [
      { sentence: "I ___ going to call you.", answer: "am", choices: ["am", "is", "are"], tip: "I am going to." },
      { sentence: "She ___ going to cook dinner.", answer: "is", choices: ["am", "is", "are"], tip: "He, she, it: is going to." },
      { sentence: "They ___ going to play soccer.", answer: "are", choices: ["am", "is", "are"], tip: "We, you, they: are going to." },
      { sentence: "We ___ going to be late.", answer: "are", choices: ["am", "is", "are"], tip: "We are going to." },
      { sentence: "Look at the clouds. It ___ going to rain.", answer: "is", choices: ["am", "is", "are"], tip: "It is going to." },
      { sentence: "He ___ going to buy a car.", answer: "is", choices: ["am", "is", "are"], tip: "He is going to." },
      { sentence: "You ___ going to love it.", answer: "are", choices: ["am", "is", "are"], tip: "You are going to." },
      { sentence: "I ___ going to sleep now.", answer: "am", choices: ["am", "is", "are"], tip: "I am going to." }
    ]
  },
  {
    id: "basics-possessive", category: "english-new", type: "confused", name: "Anna's bag: whose is it?",
    questions: [
      { sentence: "This bag belongs to Anna. It is ___ bag.", answer: "Anna's", choices: ["Annas", "Anna's"], tip: "Add 's to show who something belongs to." },
      { sentence: "The dog belongs to Tom. It is ___ dog.", answer: "Tom's", choices: ["Toms", "Tom's"], tip: "Tom's dog = the dog of Tom." },
      { sentence: "My ___ name is Ella.", answer: "sister's", choices: ["sisters", "sister's"], tip: "My sister's name = the name of my sister." },
      { sentence: "This is my ___ car.", answer: "dad's", choices: ["dads", "dad's"], tip: "My dad's car = the car of my dad." },
      { sentence: "The ___ toys are on the floor.", answer: "baby's", choices: ["babys", "baby's"], tip: "The baby's toys = the toys of the baby." },
      { sentence: "This hat belongs to Sam. I like ___ hat.", answer: "Sam's", choices: ["Sams", "Sam's"], tip: "Add 's to show who something belongs to." },
      { sentence: "Where is the ___ office?", answer: "teacher's", choices: ["teachers", "teacher's"], tip: "The teacher's office = the office of the teacher." },
      { sentence: "That is my ___ house.", answer: "friend's", choices: ["friends", "friend's"], tip: "My friend's house = the house of my friend." }
    ]
  },
  {
    id: "basics-under-behind", category: "english-new", type: "confused", name: "Under, next to, behind",
    questions: [
      { sentence: "The ball is ___ the bed. It is on the floor below the bed.", answer: "under", choices: ["under", "next to", "behind"], tip: "Under = below." },
      { sentence: "I sit ___ my friend in class. We are side by side.", answer: "next to", choices: ["under", "next to", "behind"], tip: "Next to = by the side of." },
      { sentence: "The car is ___ the house. You cannot see it from the street.", answer: "behind", choices: ["under", "next to", "behind"], tip: "Behind = at the back of." },
      { sentence: "The bank is ___ the store. They are side by side.", answer: "next to", choices: ["under", "next to", "behind"], tip: "Next to = by the side of." },
      { sentence: "Hide ___ the door so they cannot see you.", answer: "behind", choices: ["under", "next to", "behind"], tip: "Behind = at the back of." },
      { sentence: "The shoes are ___ the chair, on the floor below it.", answer: "under", choices: ["under", "next to", "behind"], tip: "Under = below." },
      { sentence: "Stand right by my side. Stand ___ me.", answer: "next to", choices: ["under", "next to", "behind"], tip: "Next to = by the side of." },
      { sentence: "We cannot see the sun. It is ___ the clouds.", answer: "behind", choices: ["under", "next to", "behind"], tip: "Behind = at the back of, hidden." }
    ]
  },
  {
    id: "basics-a-the", category: "english-new", type: "confused", name: "A or the",
    questions: [
      { sentence: "I have ___ dog. The dog is brown.", answer: "a", choices: ["a", "the"], tip: "A: the first time you talk about something." },
      { sentence: "___ sun is very hot today.", answer: "The", choices: ["A", "The"], tip: "There is only one sun, so: the sun." },
      { sentence: "She is ___ nurse.", answer: "a", choices: ["a", "the"], tip: "A for jobs: she is a nurse." },
      { sentence: "I saw a cat. ___ cat was black.", answer: "The", choices: ["A", "The"], tip: "The: when we already know which one." },
      { sentence: "___ moon is bright tonight.", answer: "The", choices: ["A", "The"], tip: "There is only one moon, so: the moon." },
      { sentence: "I want ___ banana.", answer: "a", choices: ["a", "the"], tip: "A: any one, not a special one." },
      { sentence: "He lives in ___ big house.", answer: "a", choices: ["a", "the"], tip: "A: the first time you talk about something." },
      { sentence: "Excuse me. Where is ___ bathroom?", answer: "the", choices: ["a", "the"], tip: "The: we both know which one (the bathroom here)." }
    ]
  },

  // More grammar for "I know some English, and I want to build on it"
  {
    id: "build-for-since", category: "english-build", type: "confused", name: "For or since",
    questions: [
      { sentence: "I have lived here ___ 2015.", answer: "since", choices: ["for", "since"], tip: "Since + a starting point (2015, Monday, breakfast)." },
      { sentence: "She has worked there ___ five years.", answer: "for", choices: ["for", "since"], tip: "For + a length of time (five years, an hour)." },
      { sentence: "We have been friends ___ high school.", answer: "since", choices: ["for", "since"], tip: "Since + a starting point." },
      { sentence: "He has been waiting ___ an hour.", answer: "for", choices: ["for", "since"], tip: "For + a length of time." },
      { sentence: "I haven't eaten ___ breakfast.", answer: "since", choices: ["for", "since"], tip: "Since + a starting point." },
      { sentence: "They have been married ___ ten years.", answer: "for", choices: ["for", "since"], tip: "For + a length of time." },
      { sentence: "It has rained ___ Monday.", answer: "since", choices: ["for", "since"], tip: "Since + a starting point." },
      { sentence: "I've known her ___ a long time.", answer: "for", choices: ["for", "since"], tip: "For + a length of time." }
    ]
  },
  {
    id: "build-say-tell", category: "english-build", type: "confused", name: "Say or tell",
    questions: [
      { sentence: "Can you ___ me the time?", answer: "tell", choices: ["say", "tell"], tip: "Tell + a person: tell me, tell him." },
      { sentence: "What did she ___?", answer: "say", choices: ["say", "tell"], tip: "Say is about the words: what did she say?" },
      { sentence: "Please ___ hello to your mom.", answer: "say", choices: ["say", "tell"], tip: "Say hello, say goodbye, say thank you." },
      { sentence: "He likes to ___ jokes.", answer: "tell", choices: ["say", "tell"], tip: "Tell a joke, tell a story, tell the truth." },
      { sentence: "Don't ___ anyone my secret.", answer: "tell", choices: ["say", "tell"], tip: "Tell + a person." },
      { sentence: "I didn't ___ anything.", answer: "say", choices: ["say", "tell"], tip: "Say anything, say something." },
      { sentence: "___ me about your trip.", answer: "Tell", choices: ["Say", "Tell"], tip: "Tell + a person." },
      { sentence: "How do you ___ this word in Spanish?", answer: "say", choices: ["say", "tell"], tip: "Say is about the words themselves." }
    ]
  },
  {
    id: "build-make-do", category: "english-build", type: "confused", name: "Make or do",
    questions: [
      { sentence: "I need to ___ my homework.", answer: "do", choices: ["make", "do"], tip: "Do homework, do the dishes, do your best." },
      { sentence: "Can you ___ dinner tonight?", answer: "make", choices: ["make", "do"], tip: "Make = create something: make dinner, make a cake." },
      { sentence: "Try not to ___ a mistake.", answer: "make", choices: ["make", "do"], tip: "Make a mistake." },
      { sentence: "I ___ the dishes every night.", answer: "do", choices: ["make", "do"], tip: "Do the dishes." },
      { sentence: "She needs to ___ a phone call.", answer: "make", choices: ["make", "do"], tip: "Make a phone call." },
      { sentence: "Let's ___ some exercise.", answer: "do", choices: ["make", "do"], tip: "Do exercise." },
      { sentence: "Please ___ your bed.", answer: "make", choices: ["make", "do"], tip: "Make your bed." },
      { sentence: "He will ___ his best.", answer: "do", choices: ["make", "do"], tip: "Do your best." }
    ]
  },
  {
    id: "build-good-well", category: "english-build", type: "confused", name: "Good or well",
    questions: [
      { sentence: "She sings ___.", answer: "well", choices: ["good", "well"], tip: "Well describes how you do something." },
      { sentence: "This is a ___ book.", answer: "good", choices: ["good", "well"], tip: "Good describes a thing: a good book." },
      { sentence: "You did ___ on the test.", answer: "well", choices: ["good", "well"], tip: "Well describes how you did." },
      { sentence: "We had a ___ time.", answer: "good", choices: ["good", "well"], tip: "Good describes a thing: a good time." },
      { sentence: "He plays piano very ___.", answer: "well", choices: ["good", "well"], tip: "Well describes how he plays." },
      { sentence: "They work ___ together.", answer: "well", choices: ["good", "well"], tip: "Well describes how they work." },
      { sentence: "That's a ___ idea.", answer: "good", choices: ["good", "well"], tip: "Good describes a thing: a good idea." },
      { sentence: "Did you sleep ___?", answer: "well", choices: ["good", "well"], tip: "Well describes how you slept." }
    ]
  },
  {
    id: "build-borrow-lend", category: "english-build", type: "confused", name: "Borrow or lend",
    questions: [
      { sentence: "Can I ___ your pen?", answer: "borrow", choices: ["borrow", "lend"], tip: "Borrow = take something for a while." },
      { sentence: "Can you ___ me your pen?", answer: "lend", choices: ["borrow", "lend"], tip: "Lend = give something for a while." },
      { sentence: "I'll ___ you my car for the weekend.", answer: "lend", choices: ["borrow", "lend"], tip: "Lend = give something for a while." },
      { sentence: "She wants to ___ some money from the bank.", answer: "borrow", choices: ["borrow", "lend"], tip: "Borrow from someone." },
      { sentence: "Could you ___ me five dollars?", answer: "lend", choices: ["borrow", "lend"], tip: "Lend someone something." },
      { sentence: "You can ___ books from the library.", answer: "borrow", choices: ["borrow", "lend"], tip: "Borrow from someone." },
      { sentence: "My neighbor asked to ___ our ladder.", answer: "borrow", choices: ["borrow", "lend"], tip: "Borrow = take something for a while." },
      { sentence: "Banks ___ money to people who want to buy homes.", answer: "lend", choices: ["borrow", "lend"], tip: "Lend to someone." }
    ]
  },
  {
    id: "build-bring-take", category: "english-build", type: "confused", name: "Bring or take",
    questions: [
      { sentence: "___ an umbrella when you go out.", answer: "Take", choices: ["Bring", "Take"], tip: "Take = carry something away from here." },
      { sentence: "Can you ___ me a glass of water?", answer: "bring", choices: ["bring", "take"], tip: "Bring = carry something here, to me." },
      { sentence: "Don't forget to ___ the trash out.", answer: "take", choices: ["bring", "take"], tip: "Take = carry something away." },
      { sentence: "When you come to my party, ___ a friend.", answer: "bring", choices: ["bring", "take"], tip: "Bring = carry something here." },
      { sentence: "I'll ___ the kids to the park this afternoon.", answer: "take", choices: ["bring", "take"], tip: "Take = go with someone to another place." },
      { sentence: "Come here and ___ your homework with you.", answer: "bring", choices: ["bring", "take"], tip: "Bring = carry something here." },
      { sentence: "She will ___ the letter to the post office.", answer: "take", choices: ["bring", "take"], tip: "Take = carry something away." },
      { sentence: "Could you ___ some snacks when you visit us?", answer: "bring", choices: ["bring", "take"], tip: "Bring = carry something here." }
    ]
  },
  {
    id: "build-weather-whether", category: "english-build", type: "confused", name: "Weather or whether",
    questions: [
      { sentence: "The ___ is nice today.", answer: "weather", choices: ["weather", "whether"], tip: "Weather = sun, rain, snow, wind." },
      { sentence: "I don't know ___ she is coming.", answer: "whether", choices: ["weather", "whether"], tip: "Whether = if." },
      { sentence: "Check the ___ before the trip.", answer: "weather", choices: ["weather", "whether"], tip: "Weather = sun, rain, snow, wind." },
      { sentence: "Ask him ___ he wants tea.", answer: "whether", choices: ["weather", "whether"], tip: "Whether = if." },
      { sentence: "Cold ___ makes me sleepy.", answer: "weather", choices: ["weather", "whether"], tip: "Weather = sun, rain, snow, wind." },
      { sentence: "We'll go ___ it rains or not.", answer: "whether", choices: ["weather", "whether"], tip: "Whether ... or not." },
      { sentence: "The ___ forecast says snow.", answer: "weather", choices: ["weather", "whether"], tip: "Weather = sun, rain, snow, wind." },
      { sentence: "I'm not sure ___ to call her.", answer: "whether", choices: ["weather", "whether"], tip: "Whether = if." }
    ]
  },
  {
    id: "build-past-passed", category: "english-build", type: "confused", name: "Past or passed",
    questions: [
      { sentence: "We ___ the bakery on the way home.", answer: "passed", choices: ["past", "passed"], tip: "Passed is a verb: we passed it." },
      { sentence: "Don't worry about the ___.", answer: "past", choices: ["past", "passed"], tip: "The past = earlier times." },
      { sentence: "She ___ her driving test.", answer: "passed", choices: ["past", "passed"], tip: "Passed is a verb: she passed." },
      { sentence: "It's ten ___ five.", answer: "past", choices: ["past", "passed"], tip: "Telling time: ten past five = 5:10." },
      { sentence: "Time ___ quickly.", answer: "passed", choices: ["past", "passed"], tip: "Passed is a verb: time passed." },
      { sentence: "He walked ___ the school.", answer: "past", choices: ["past", "passed"], tip: "After a verb like walked, use past: walked past." },
      { sentence: "In the ___, people wrote letters.", answer: "past", choices: ["past", "passed"], tip: "The past = earlier times." },
      { sentence: "Two hours ___ before the bus came.", answer: "passed", choices: ["past", "passed"], tip: "Passed is a verb: two hours passed." }
    ]
  },
  {
    id: "build-used-to", category: "english-build", type: "confused", name: "Used to or use to",
    questions: [
      { sentence: "I ___ live in Chicago, but now I live in Denver.", answer: "used to", choices: ["use to", "used to"], tip: "Used to = something that was true before, but not now." },
      { sentence: "Did you ___ play the piano?", answer: "use to", choices: ["use to", "used to"], tip: "After did or didn't, write use to." },
      { sentence: "She ___ have long hair.", answer: "used to", choices: ["use to", "used to"], tip: "Used to = true before, not now." },
      { sentence: "We didn't ___ have a car.", answer: "use to", choices: ["use to", "used to"], tip: "After didn't, write use to." },
      { sentence: "He ___ smoke, but he quit.", answer: "used to", choices: ["use to", "used to"], tip: "Used to = true before, not now." },
      { sentence: "There ___ be a movie theater here.", answer: "used to", choices: ["use to", "used to"], tip: "Used to = true before, not now." },
      { sentence: "Did they ___ work together?", answer: "use to", choices: ["use to", "used to"], tip: "After did, write use to." },
      { sentence: "My grandma ___ tell us stories.", answer: "used to", choices: ["use to", "used to"], tip: "Used to = something that happened often before." }
    ]
  },
  {
    id: "build-quick-quickly", category: "english-build", type: "confused", name: "Quick or quickly",
    questions: [
      { sentence: "She runs ___.", answer: "quickly", choices: ["quick", "quickly"], tip: "-ly words describe how someone does something." },
      { sentence: "He is a ___ runner.", answer: "quick", choices: ["quick", "quickly"], tip: "Without -ly, it describes a person or thing." },
      { sentence: "Please speak ___.", answer: "slowly", choices: ["slow", "slowly"], tip: "-ly words describe how you do something." },
      { sentence: "The turtle is ___.", answer: "slow", choices: ["slow", "slowly"], tip: "After is, describe the thing: the turtle is slow." },
      { sentence: "They sang ___.", answer: "beautifully", choices: ["beautiful", "beautifully"], tip: "-ly words describe how someone does something." },
      { sentence: "What a ___ song!", answer: "beautiful", choices: ["beautiful", "beautifully"], tip: "Without -ly, it describes a thing: a beautiful song." },
      { sentence: "Drive ___ in the snow.", answer: "carefully", choices: ["careful", "carefully"], tip: "-ly words describe how you do something." },
      { sentence: "Be ___ on the ice.", answer: "careful", choices: ["careful", "carefully"], tip: "After be, describe the person: be careful." }
    ]
  },
  {
    id: "build-have-you-ever", category: "english-build", type: "confused", name: "Have you ever...? (present perfect)",
    questions: [
      { sentence: "I have ___ to Mexico twice.", answer: "been", choices: ["went", "been"], tip: "Have + been: I have been to Mexico." },
      { sentence: "Have you ever ___ sushi?", answer: "eaten", choices: ["ate", "eaten"], tip: "Have + eaten." },
      { sentence: "She has ___ that movie three times.", answer: "seen", choices: ["saw", "seen"], tip: "Has + seen." },
      { sentence: "We have ___ here for years.", answer: "lived", choices: ["live", "lived"], tip: "Have + lived." },
      { sentence: "He has never ___ on a plane.", answer: "flown", choices: ["flew", "flown"], tip: "Has + flown." },
      { sentence: "They have already ___ dinner.", answer: "had", choices: ["have", "had"], tip: "Have + had." },
      { sentence: "Oh no, I have ___ my keys.", answer: "lost", choices: ["lose", "lost"], tip: "Have + lost." },
      { sentence: "Has she ___ the letter yet?", answer: "written", choices: ["wrote", "written"], tip: "Has + written." }
    ]
  },
  {
    id: "build-if-will", category: "english-build", type: "confused", name: "If it rains: if and will",
    questions: [
      { sentence: "If it rains, we ___ stay home.", answer: "will", choices: ["will", "would"], tip: "If + now, then will: if it rains, we will stay." },
      { sentence: "If you study, you ___ pass.", answer: "will", choices: ["will", "would"], tip: "If + now, then will." },
      { sentence: "If she calls, I ___ answer.", answer: "will", choices: ["will", "would"], tip: "If + now, then will." },
      { sentence: "If I ___ time, I'll help you.", answer: "have", choices: ["have", "will have"], tip: "No will after if: if I have time." },
      { sentence: "If you ___ late, you'll miss the bus.", answer: "are", choices: ["are", "will be"], tip: "No will after if: if you are late." },
      { sentence: "If we leave now, we ___ arrive on time.", answer: "will", choices: ["will", "would"], tip: "If + now, then will." },
      { sentence: "If he ___ the job, he'll move to Austin.", answer: "gets", choices: ["gets", "will get"], tip: "No will after if: if he gets the job." },
      { sentence: "If it ___ sunny tomorrow, we'll go to the beach.", answer: "is", choices: ["is", "will be"], tip: "No will after if, even about tomorrow." }
    ]
  },
  {
    id: "build-to-swim-swimming", category: "english-build", type: "confused", name: "To swim or swimming",
    questions: [
      { sentence: "I enjoy ___.", answer: "swimming", choices: ["to swim", "swimming"], tip: "Enjoy + -ing." },
      { sentence: "She wants ___.", answer: "to swim", choices: ["to swim", "swimming"], tip: "Want + to." },
      { sentence: "He decided ___ a car.", answer: "to buy", choices: ["to buy", "buying"], tip: "Decide + to." },
      { sentence: "They finished ___ dinner.", answer: "eating", choices: ["to eat", "eating"], tip: "Finish + -ing." },
      { sentence: "We hope ___ you soon.", answer: "to see", choices: ["to see", "seeing"], tip: "Hope + to." },
      { sentence: "I don't mind ___.", answer: "waiting", choices: ["to wait", "waiting"], tip: "Mind + -ing." },
      { sentence: "She avoids ___ at night.", answer: "driving", choices: ["to drive", "driving"], tip: "Avoid + -ing." },
      { sentence: "I need ___ more water.", answer: "to drink", choices: ["to drink", "drinking"], tip: "Need + to." }
    ]
  },
  {
    id: "build-accept-except", category: "english-build", type: "confused", name: "Accept or except",
    questions: [
      { sentence: "Please ___ my apology.", answer: "accept", choices: ["accept", "except"], tip: "Accept = say yes to, receive." },
      { sentence: "Everyone came ___ Tom.", answer: "except", choices: ["accept", "except"], tip: "Except = but not." },
      { sentence: "We ___ credit cards.", answer: "accept", choices: ["accept", "except"], tip: "Accept = take, receive." },
      { sentence: "I like all vegetables ___ peas.", answer: "except", choices: ["accept", "except"], tip: "Except = but not." },
      { sentence: "She will ___ the job offer.", answer: "accept", choices: ["accept", "except"], tip: "Accept = say yes to." },
      { sentence: "The store is open every day ___ Sunday.", answer: "except", choices: ["accept", "except"], tip: "Except = but not." },
      { sentence: "Did they ___ your application?", answer: "accept", choices: ["accept", "except"], tip: "Accept = say yes to." },
      { sentence: "All the windows were closed ___ one.", answer: "except", choices: ["accept", "except"], tip: "Except = but not." }
    ]
  },
  {
    id: "build-advice-advise", category: "english-build", type: "confused", name: "Advice or advise",
    questions: [
      { sentence: "Can you give me some ___?", answer: "advice", choices: ["advice", "advise"], tip: "Advice (with c) is the noun: some advice." },
      { sentence: "I ___ you to see a doctor.", answer: "advise", choices: ["advice", "advise"], tip: "Advise (with s) is the verb: I advise you." },
      { sentence: "That's good ___.", answer: "advice", choices: ["advice", "advise"], tip: "Advice is the noun." },
      { sentence: "What do you ___ me to do?", answer: "advise", choices: ["advice", "advise"], tip: "Advise is the verb." },
      { sentence: "She asked for my ___.", answer: "advice", choices: ["advice", "advise"], tip: "Advice is the noun." },
      { sentence: "Doctors ___ patients to exercise.", answer: "advise", choices: ["advice", "advise"], tip: "Advise is the verb." },
      { sentence: "Thanks for the ___.", answer: "advice", choices: ["advice", "advise"], tip: "Advice is the noun." },
      { sentence: "I would ___ against it.", answer: "advise", choices: ["advice", "advise"], tip: "Advise is the verb." }
    ]
  },
  {
    id: "build-quiet-quite", category: "english-build", type: "confused", name: "Quiet, quite, or quit",
    questions: [
      { sentence: "Please be ___ in the library.", answer: "quiet", choices: ["quiet", "quite", "quit"], tip: "Quiet = not loud." },
      { sentence: "The test was ___ easy.", answer: "quite", choices: ["quiet", "quite", "quit"], tip: "Quite = fairly, very." },
      { sentence: "He ___ his job last year.", answer: "quit", choices: ["quiet", "quite", "quit"], tip: "Quit = stop doing something." },
      { sentence: "It's ___ cold today.", answer: "quite", choices: ["quiet", "quite", "quit"], tip: "Quite = fairly, very." },
      { sentence: "The house is very ___ at night.", answer: "quiet", choices: ["quiet", "quite", "quit"], tip: "Quiet = not loud." },
      { sentence: "She ___ smoking last year.", answer: "quit", choices: ["quiet", "quite", "quit"], tip: "Quit = stop doing something." },
      { sentence: "I'm not ___ ready.", answer: "quite", choices: ["quiet", "quite", "quit"], tip: "Not quite = not completely." },
      { sentence: "Keep ___. The baby is sleeping.", answer: "quiet", choices: ["quiet", "quite", "quit"], tip: "Quiet = not loud." }
    ]
  },
  {
    id: "build-whose-whos", category: "english-build", type: "confused", name: "Whose or who's",
    questions: [
      { sentence: "___ coat is this?", answer: "Whose", choices: ["Whose", "Who's"], tip: "Whose asks who something belongs to." },
      { sentence: "___ coming to dinner?", answer: "Who's", choices: ["Whose", "Who's"], tip: "Who's = who is." },
      { sentence: "___ your best friend?", answer: "Who's", choices: ["Whose", "Who's"], tip: "Who's = who is." },
      { sentence: "I know ___ car that is.", answer: "whose", choices: ["whose", "who's"], tip: "Whose = belonging to which person." },
      { sentence: "___ turn is it?", answer: "Whose", choices: ["Whose", "Who's"], tip: "Whose asks who something belongs to." },
      { sentence: "___ been to Canada?", answer: "Who's", choices: ["Whose", "Who's"], tip: "Who's can also mean who has." },
      { sentence: "The girl ___ dog barks all night is my neighbor.", answer: "whose", choices: ["whose", "who's"], tip: "Whose = belonging to whom." },
      { sentence: "Tell me ___ ready to start.", answer: "who's", choices: ["whose", "who's"], tip: "Who's = who is." }
    ]
  },
  {
    id: "build-breath-breathe", category: "english-build", type: "confused", name: "Breath or breathe",
    questions: [
      { sentence: "Take a deep ___.", answer: "breath", choices: ["breath", "breathe"], tip: "Breath (no e) is the noun: a breath." },
      { sentence: "___ in slowly.", answer: "Breathe", choices: ["Breath", "Breathe"], tip: "Breathe (with e) is the verb." },
      { sentence: "I was out of ___ after running.", answer: "breath", choices: ["breath", "breathe"], tip: "Out of breath: breath is the noun." },
      { sentence: "Fish ___ underwater.", answer: "breathe", choices: ["breath", "breathe"], tip: "Breathe is the verb." },
      { sentence: "Hold your ___.", answer: "breath", choices: ["breath", "breathe"], tip: "Breath is the noun." },
      { sentence: "It's hard to ___ in this smoke.", answer: "breathe", choices: ["breath", "breathe"], tip: "Breathe is the verb." },
      { sentence: "His ___ smelled like garlic.", answer: "breath", choices: ["breath", "breathe"], tip: "Breath is the noun." },
      { sentence: "Remember to ___ during the test.", answer: "breathe", choices: ["breath", "breathe"], tip: "Breathe is the verb." }
    ]
  },
  {
    id: "build-desert-dessert", category: "english-build", type: "confused", name: "Desert or dessert",
    questions: [
      { sentence: "We had ice cream for ___.", answer: "dessert", choices: ["desert", "dessert"], tip: "Dessert has two s's, like strawberry shortcake." },
      { sentence: "The Sahara is a huge ___.", answer: "desert", choices: ["desert", "dessert"], tip: "A desert is a dry, sandy place." },
      { sentence: "Cake is my favorite ___.", answer: "dessert", choices: ["desert", "dessert"], tip: "Dessert = sweet food after a meal." },
      { sentence: "It rarely rains in the ___.", answer: "desert", choices: ["desert", "dessert"], tip: "A desert is a dry place." },
      { sentence: "Save room for ___.", answer: "dessert", choices: ["desert", "dessert"], tip: "Dessert = sweet food after a meal." },
      { sentence: "Camels live in the ___.", answer: "desert", choices: ["desert", "dessert"], tip: "A desert is a dry, sandy place." },
      { sentence: "Would you like ___ after dinner?", answer: "dessert", choices: ["desert", "dessert"], tip: "Dessert = sweet food after a meal." },
      { sentence: "The ___ is hot in the day and cold at night.", answer: "desert", choices: ["desert", "dessert"], tip: "A desert is a dry place." }
    ]
  },
  {
    id: "build-already-yet", category: "english-build", type: "confused", name: "Already or yet",
    questions: [
      { sentence: "I've ___ eaten.", answer: "already", choices: ["already", "yet"], tip: "Already = sooner than expected, in yes sentences." },
      { sentence: "Have you finished ___?", answer: "yet", choices: ["already", "yet"], tip: "Yet in questions, usually at the end." },
      { sentence: "She hasn't called ___.", answer: "yet", choices: ["already", "yet"], tip: "Yet in not sentences, usually at the end." },
      { sentence: "The train has ___ left.", answer: "already", choices: ["already", "yet"], tip: "Already = it happened before now." },
      { sentence: "Are we there ___?", answer: "yet", choices: ["already", "yet"], tip: "Yet in questions." },
      { sentence: "I've ___ seen this movie.", answer: "already", choices: ["already", "yet"], tip: "Already = it happened before now." },
      { sentence: "He isn't here ___.", answer: "yet", choices: ["already", "yet"], tip: "Yet in not sentences." },
      { sentence: "We've ___ paid the bill.", answer: "already", choices: ["already", "yet"], tip: "Already = it happened before now." }
    ]
  },

  // More grammar for "I want to polish my English"
  {
    id: "polish-lie-lay", category: "english-polish", type: "confused", name: "Lie or lay",
    questions: [
      { sentence: "I need to ___ down for a nap.", answer: "lie", choices: ["lie", "lay"], tip: "Lie = recline yourself. Nothing comes after it." },
      { sentence: "Please ___ the book on the table.", answer: "lay", choices: ["lie", "lay"], tip: "Lay = put something down. It needs an object: lay the book." },
      { sentence: "The dog likes to ___ in the sun.", answer: "lie", choices: ["lie", "lay"], tip: "Lie = recline." },
      { sentence: "___ the baby gently in her crib.", answer: "Lay", choices: ["Lie", "Lay"], tip: "Lay + an object: lay the baby." },
      { sentence: "Don't ___ your wet towel on the bed.", answer: "lay", choices: ["lie", "lay"], tip: "Lay + an object: lay the towel." },
      { sentence: "I'm going to ___ on the couch for a while.", answer: "lie", choices: ["lie", "lay"], tip: "Lie = recline." },
      { sentence: "Workers will ___ the new carpet tomorrow.", answer: "lay", choices: ["lie", "lay"], tip: "Lay + an object: lay the carpet." },
      { sentence: "The cat loves to ___ on my keyboard.", answer: "lie", choices: ["lie", "lay"], tip: "Lie = recline." }
    ]
  },
  {
    id: "polish-imply-infer", category: "english-polish", type: "confused", name: "Imply or infer",
    questions: [
      { sentence: "Are you trying to ___ that I'm lazy?", answer: "imply", choices: ["imply", "infer"], tip: "The speaker implies (suggests without saying)." },
      { sentence: "From her smile, I ___ that she got the job.", answer: "infer", choices: ["imply", "infer"], tip: "The listener infers (works it out)." },
      { sentence: "What can we ___ from these results?", answer: "infer", choices: ["imply", "infer"], tip: "Infer = work out from clues." },
      { sentence: "His tone seemed to ___ that he was angry.", answer: "imply", choices: ["imply", "infer"], tip: "Imply = suggest without saying directly." },
      { sentence: "I didn't mean to ___ anything.", answer: "imply", choices: ["imply", "infer"], tip: "Imply = suggest without saying directly." },
      { sentence: "Readers can ___ the ending from the clues.", answer: "infer", choices: ["imply", "infer"], tip: "Infer = work out from clues." },
      { sentence: "The data seem to ___ a link, but they don't prove one.", answer: "imply", choices: ["imply", "infer"], tip: "Imply = suggest." },
      { sentence: "Don't ___ too much from one comment.", answer: "infer", choices: ["imply", "infer"], tip: "Infer = draw a conclusion." }
    ]
  },
  {
    id: "polish-farther-further", category: "english-polish", type: "confused", name: "Farther or further",
    questions: [
      { sentence: "The store is ___ than I thought.", answer: "farther", choices: ["farther", "further"], tip: "Farther = more physical distance (it has \"far\" in it)." },
      { sentence: "We need to discuss this ___.", answer: "further", choices: ["farther", "further"], tip: "Further = more, to a greater degree." },
      { sentence: "How much ___ is the beach?", answer: "farther", choices: ["farther", "further"], tip: "Farther = more physical distance." },
      { sentence: "For ___ information, call our office.", answer: "further", choices: ["farther", "further"], tip: "Further = more, additional." },
      { sentence: "He threw the ball ___ than anyone.", answer: "farther", choices: ["farther", "further"], tip: "Farther = more physical distance." },
      { sentence: "Nothing could be ___ from the truth.", answer: "further", choices: ["farther", "further"], tip: "\"Further from the truth\" is about degree, not distance." },
      { sentence: "Let's not delay any ___.", answer: "further", choices: ["farther", "further"], tip: "Further = more." },
      { sentence: "Mars is ___ from the sun than Earth.", answer: "farther", choices: ["farther", "further"], tip: "Farther = more physical distance." }
    ]
  },
  {
    id: "polish-among-between", category: "english-polish", type: "confused", name: "Among or between",
    questions: [
      { sentence: "Divide the cake ___ the two kids.", answer: "between", choices: ["among", "between"], tip: "Between: two clearly separate people or things." },
      { sentence: "The news spread quickly ___ the whole team.", answer: "among", choices: ["among", "between"], tip: "Among: a group." },
      { sentence: "There's a fence ___ our houses.", answer: "between", choices: ["among", "between"], tip: "Between: two separate things." },
      { sentence: "She felt at home ___ friends.", answer: "among", choices: ["among", "between"], tip: "Among: part of a group." },
      { sentence: "Choose ___ red and blue.", answer: "between", choices: ["among", "between"], tip: "Between: two separate options." },
      { sentence: "The house is hidden ___ the trees.", answer: "among", choices: ["among", "between"], tip: "Among: surrounded by a group." },
      { sentence: "What's the difference ___ these two words?", answer: "between", choices: ["among", "between"], tip: "Between: two separate things." },
      { sentence: "The prize money was shared ___ the ten winners.", answer: "among", choices: ["among", "between"], tip: "Among: a group." }
    ]
  },
  {
    id: "polish-that-which", category: "english-polish", type: "confused", name: "That or which",
    questions: [
      { sentence: "The car ___ I bought is blue.", answer: "that", choices: ["that", "which"], tip: "That: needed to know which one, no comma." },
      { sentence: "My car, ___ is blue, is in the shop.", answer: "which", choices: ["that", "which"], tip: "Which: extra information between commas." },
      { sentence: "This is the book ___ changed my life.", answer: "that", choices: ["that", "which"], tip: "That: needed to know which one, no comma." },
      { sentence: "The museum, ___ opened in 1900, is free.", answer: "which", choices: ["that", "which"], tip: "Which: extra information between commas." },
      { sentence: "Do you have a pen ___ works?", answer: "that", choices: ["that", "which"], tip: "That: needed to know which one, no comma." },
      { sentence: "Our office, ___ is downtown, is closed today.", answer: "which", choices: ["that", "which"], tip: "Which: extra information between commas." },
      { sentence: "The movie ___ we saw was long.", answer: "that", choices: ["that", "which"], tip: "That: needed to know which one, no comma." },
      { sentence: "The report, ___ was due Monday, is late.", answer: "which", choices: ["that", "which"], tip: "Which: extra information between commas." }
    ]
  },
  {
    id: "polish-compliment", category: "english-polish", type: "confused", name: "Compliment or complement",
    questions: [
      { sentence: "She gave me a nice ___ on my dress.", answer: "compliment", choices: ["compliment", "complement"], tip: "Compliment (with i) = nice words: I like it." },
      { sentence: "The wine will ___ the meal.", answer: "complement", choices: ["compliment", "complement"], tip: "Complement (with e) = go well with, complete." },
      { sentence: "Thanks for the ___!", answer: "compliment", choices: ["compliment", "complement"], tip: "Compliment = nice words." },
      { sentence: "Blue and orange ___ each other.", answer: "complement", choices: ["compliment", "complement"], tip: "Complement = go well together." },
      { sentence: "It's polite to accept a ___ gracefully.", answer: "compliment", choices: ["compliment", "complement"], tip: "Compliment = nice words." },
      { sentence: "Their skills ___ each other well.", answer: "complement", choices: ["compliment", "complement"], tip: "Complement = complete each other." },
      { sentence: "The hotel offers ___ breakfast, so it's free.", answer: "complimentary", choices: ["complimentary", "complementary"], tip: "Complimentary also means free." },
      { sentence: "The new rug is a perfect ___ to the room.", answer: "complement", choices: ["compliment", "complement"], tip: "Complement = something that completes." }
    ]
  },
  {
    id: "polish-principal", category: "english-polish", type: "confused", name: "Principal or principle",
    questions: [
      { sentence: "The school ___ called my parents.", answer: "principal", choices: ["principal", "principle"], tip: "The principal is your pal (the head of a school)." },
      { sentence: "It's a matter of ___.", answer: "principle", choices: ["principal", "principle"], tip: "Principle = a rule or belief." },
      { sentence: "Honesty is my guiding ___.", answer: "principle", choices: ["principal", "principle"], tip: "Principle = a rule or belief." },
      { sentence: "The ___ reason for the delay was the weather.", answer: "principal", choices: ["principal", "principle"], tip: "Principal = main, most important." },
      { sentence: "Gravity is a basic ___ of physics.", answer: "principle", choices: ["principal", "principle"], tip: "Principle = a basic rule." },
      { sentence: "The ___ of the loan is $5,000.", answer: "principal", choices: ["principal", "principle"], tip: "Principal = the main amount of money borrowed." },
      { sentence: "He refused to lie on ___.", answer: "principle", choices: ["principal", "principle"], tip: "On principle = because of a belief." },
      { sentence: "The ___ dancer bowed to the crowd.", answer: "principal", choices: ["principal", "principle"], tip: "Principal = main, leading." }
    ]
  },
  {
    id: "polish-ensure-insure", category: "english-polish", type: "confused", name: "Ensure or insure",
    questions: [
      { sentence: "Please ___ that all doors are locked.", answer: "ensure", choices: ["ensure", "insure"], tip: "Ensure = make sure." },
      { sentence: "We ___ our home against fire.", answer: "insure", choices: ["ensure", "insure"], tip: "Insure = buy insurance for." },
      { sentence: "Practice will help ___ success.", answer: "ensure", choices: ["ensure", "insure"], tip: "Ensure = make sure." },
      { sentence: "You should ___ your jewelry.", answer: "insure", choices: ["ensure", "insure"], tip: "Insure = buy insurance for." },
      { sentence: "Double-check your work to ___ accuracy.", answer: "ensure", choices: ["ensure", "insure"], tip: "Ensure = make sure." },
      { sentence: "The company will ___ the shipment for its full value.", answer: "insure", choices: ["ensure", "insure"], tip: "Insure = protect with insurance." },
      { sentence: "Steps were taken to ___ everyone's safety.", answer: "ensure", choices: ["ensure", "insure"], tip: "Ensure = make sure." },
      { sentence: "It costs more to ___ a sports car.", answer: "insure", choices: ["ensure", "insure"], tip: "Insure = buy insurance for." }
    ]
  },
  {
    id: "polish-discreet", category: "english-polish", type: "confused", name: "Discreet or discrete",
    questions: [
      { sentence: "Please be ___. This is private.", answer: "discreet", choices: ["discreet", "discrete"], tip: "Discreet = careful to keep things private." },
      { sentence: "The project has three ___ phases.", answer: "discrete", choices: ["discreet", "discrete"], tip: "Discrete = separate. The t separates the two e's." },
      { sentence: "She gave me a ___ nod.", answer: "discreet", choices: ["discreet", "discrete"], tip: "Discreet = subtle, not noticeable." },
      { sentence: "The data is divided into ___ groups.", answer: "discrete", choices: ["discreet", "discrete"], tip: "Discrete = separate." },
      { sentence: "A good assistant is ___ with secrets.", answer: "discreet", choices: ["discreet", "discrete"], tip: "Discreet = careful to keep things private." },
      { sentence: "Break the task into small, ___ steps.", answer: "discrete", choices: ["discreet", "discrete"], tip: "Discrete = separate." },
      { sentence: "He made a ___ exit during the speech.", answer: "discreet", choices: ["discreet", "discrete"], tip: "Discreet = quiet, not noticeable." },
      { sentence: "These are two ___ problems, not one.", answer: "discrete", choices: ["discreet", "discrete"], tip: "Discrete = separate." }
    ]
  },
  {
    id: "polish-stationery", category: "english-polish", type: "confused", name: "Stationary or stationery",
    questions: [
      { sentence: "I ride a ___ bike at the gym.", answer: "stationary", choices: ["stationary", "stationery"], tip: "Stationary (with a) = not moving." },
      { sentence: "She wrote on fancy ___.", answer: "stationery", choices: ["stationary", "stationery"], tip: "Stationery (with e) = paper and envelopes. E for envelope." },
      { sentence: "The car remained ___ at the light.", answer: "stationary", choices: ["stationary", "stationery"], tip: "Stationary = not moving." },
      { sentence: "The office ordered more ___ and envelopes.", answer: "stationery", choices: ["stationary", "stationery"], tip: "Stationery = writing paper and supplies." },
      { sentence: "Keep the camera ___ while recording.", answer: "stationary", choices: ["stationary", "stationery"], tip: "Stationary = not moving." },
      { sentence: "This shop sells pens, cards, and ___.", answer: "stationery", choices: ["stationary", "stationery"], tip: "Stationery = writing paper and supplies." },
      { sentence: "Traffic was ___ for an hour.", answer: "stationary", choices: ["stationary", "stationery"], tip: "Stationary = not moving." },
      { sentence: "Her ___ had her name printed at the top.", answer: "stationery", choices: ["stationary", "stationery"], tip: "Stationery = writing paper." }
    ]
  },
  {
    id: "polish-everyday", category: "english-polish", type: "confused", name: "Everyday or every day",
    questions: [
      { sentence: "I walk the dog ___.", answer: "every day", choices: ["everyday", "every day"], tip: "Every day (two words) = each day." },
      { sentence: "These are my ___ shoes.", answer: "everyday", choices: ["everyday", "every day"], tip: "Everyday (one word) = ordinary, normal." },
      { sentence: "We practice ___.", answer: "every day", choices: ["everyday", "every day"], tip: "Every day = each day." },
      { sentence: "Traffic is an ___ problem here.", answer: "everyday", choices: ["everyday", "every day"], tip: "Everyday = ordinary, common." },
      { sentence: "She calls her mom ___.", answer: "every day", choices: ["everyday", "every day"], tip: "Every day = each day." },
      { sentence: "Use ___ language in your speech.", answer: "everyday", choices: ["everyday", "every day"], tip: "Everyday = ordinary, normal." },
      { sentence: "It rains almost ___ in April.", answer: "every day", choices: ["everyday", "every day"], tip: "Every day = each day." },
      { sentence: "Cooking is part of ___ life.", answer: "everyday", choices: ["everyday", "every day"], tip: "Everyday = ordinary, normal." }
    ]
  },
  {
    id: "polish-anyway-regardless", category: "english-polish", type: "confused", name: "Anyway and regardless",
    questions: [
      { sentence: "It was raining, but we went ___.", answer: "anyway", choices: ["anyway", "anyways"], tip: "Anyways is common in speech, but write anyway." },
      { sentence: "___ of the cost, we need a new roof.", answer: "Regardless", choices: ["Regardless", "Irregardless"], tip: "Irregardless is common in speech, but write regardless." },
      { sentence: "I wasn't hungry, but I ate ___.", answer: "anyway", choices: ["anyway", "anyways"], tip: "Write anyway." },
      { sentence: "We'll finish on time ___ of the delays.", answer: "regardless", choices: ["regardless", "irregardless"], tip: "Write regardless." },
      { sentence: "___, let's get back to the topic.", answer: "Anyway", choices: ["Anyway", "Anyways"], tip: "Write anyway." },
      { sentence: "The show goes on, ___ of the weather.", answer: "regardless", choices: ["regardless", "irregardless"], tip: "Write regardless." },
      { sentence: "I know it's late. ___, thanks for coming.", answer: "Anyway", choices: ["Anyway", "Anyways"], tip: "Write anyway." },
      { sentence: "He'll do it ___ of what we say.", answer: "regardless", choices: ["regardless", "irregardless"], tip: "Write regardless." }
    ]
  },
  {
    id: "polish-if-i-were", category: "english-polish", type: "confused", name: "If I were: wishes and suggestions",
    questions: [
      { sentence: "If I ___ rich, I would travel the world.", answer: "were", choices: ["was", "were"], tip: "Imagined situations: if I were." },
      { sentence: "I wish it ___ Friday.", answer: "were", choices: ["was", "were"], tip: "Wishes: I wish it were." },
      { sentence: "If she ___ here, she'd know what to do.", answer: "were", choices: ["was", "were"], tip: "Imagined situations: if she were." },
      { sentence: "The doctor recommended that he ___ more.", answer: "rest", choices: ["rest", "rests"], tip: "After recommend that: the plain verb (he rest)." },
      { sentence: "I suggest that she ___ early.", answer: "leave", choices: ["leave", "leaves"], tip: "After suggest that: the plain verb (she leave)." },
      { sentence: "It's important that everyone ___ on time.", answer: "be", choices: ["be", "is"], tip: "After important that: the plain verb (be)." },
      { sentence: "I wish I ___ taller.", answer: "were", choices: ["was", "were"], tip: "Wishes: I wish I were." },
      { sentence: "They insisted that he ___ the bill.", answer: "pay", choices: ["pay", "pays"], tip: "After insist that: the plain verb (he pay)." }
    ]
  },
  {
    id: "polish-amount-number", category: "english-polish", type: "confused", name: "Amount or number",
    questions: [
      { sentence: "A large ___ of people came to the concert.", answer: "number", choices: ["amount", "number"], tip: "Number: things you can count." },
      { sentence: "A large ___ of water was lost.", answer: "amount", choices: ["amount", "number"], tip: "Amount: things you can't count." },
      { sentence: "The ___ of cars on the road has doubled.", answer: "number", choices: ["amount", "number"], tip: "Number: things you can count." },
      { sentence: "The ___ of time we have is limited.", answer: "amount", choices: ["amount", "number"], tip: "Amount: things you can't count." },
      { sentence: "Reduce the ___ of sugar in your diet.", answer: "amount", choices: ["amount", "number"], tip: "Amount: things you can't count." },
      { sentence: "The ___ of students in the class is 30.", answer: "number", choices: ["amount", "number"], tip: "Number: things you can count." },
      { sentence: "We saved a small ___ of money.", answer: "amount", choices: ["amount", "number"], tip: "Amount of money." },
      { sentence: "The ___ of mistakes went down.", answer: "number", choices: ["amount", "number"], tip: "Number: things you can count." }
    ]
  },
  {
    id: "polish-peak-peek", category: "english-polish", type: "confused", name: "Peak, peek, or pique",
    questions: [
      { sentence: "We hiked to the ___ of the mountain.", answer: "peak", choices: ["peak", "peek", "pique"], tip: "Peak = the top. The a looks like a mountain." },
      { sentence: "Take a ___ at the menu.", answer: "peek", choices: ["peak", "peek", "pique"], tip: "Peek = a quick look. Two e's like two eyes." },
      { sentence: "The story will ___ your interest.", answer: "pique", choices: ["peak", "peek", "pique"], tip: "Pique = spark (interest or curiosity)." },
      { sentence: "Sales ___ in December.", answer: "peak", choices: ["peak", "peek", "pique"], tip: "Peak = reach the highest point." },
      { sentence: "Don't ___ at your gift before your birthday.", answer: "peek", choices: ["peak", "peek", "pique"], tip: "Peek = a quick look." },
      { sentence: "The trailer is meant to ___ your curiosity.", answer: "pique", choices: ["peak", "peek", "pique"], tip: "Pique = spark." },
      { sentence: "Traffic is worst at ___ hours.", answer: "peak", choices: ["peak", "peek", "pique"], tip: "Peak = the highest point." },
      { sentence: "The kids tried to ___ through the window.", answer: "peek", choices: ["peak", "peek", "pique"], tip: "Peek = a quick look." }
    ]
  },
  {
    id: "polish-elicit-illicit", category: "english-polish", type: "confused", name: "Elicit or illicit",
    questions: [
      { sentence: "The question was meant to ___ a response.", answer: "elicit", choices: ["elicit", "illicit"], tip: "Elicit = draw out (a reaction or answer)." },
      { sentence: "Police found ___ drugs in the car.", answer: "illicit", choices: ["elicit", "illicit"], tip: "Illicit = illegal. Both start with ill." },
      { sentence: "Her joke failed to ___ a laugh.", answer: "elicit", choices: ["elicit", "illicit"], tip: "Elicit = draw out." },
      { sentence: "He was fired for ___ activity.", answer: "illicit", choices: ["elicit", "illicit"], tip: "Illicit = illegal or not allowed." },
      { sentence: "Good teachers ___ ideas from students.", answer: "elicit", choices: ["elicit", "illicit"], tip: "Elicit = draw out." },
      { sentence: "The ___ trade in ivory is a crime.", answer: "illicit", choices: ["elicit", "illicit"], tip: "Illicit = illegal." },
      { sentence: "The survey aims to ___ honest feedback.", answer: "elicit", choices: ["elicit", "illicit"], tip: "Elicit = draw out." },
      { sentence: "They ran an ___ gambling business.", answer: "illicit", choices: ["elicit", "illicit"], tip: "Illicit = illegal." }
    ]
  },
  {
    id: "polish-capital-capitol", category: "english-polish", type: "confused", name: "Capital or capitol",
    questions: [
      { sentence: "Austin is the ___ of Texas.", answer: "capital", choices: ["capital", "capitol"], tip: "Capital = the city where the government is." },
      { sentence: "The senators met inside the ___ building.", answer: "capitol", choices: ["capital", "capitol"], tip: "Capitol (with o) = the building. The o is like its dome." },
      { sentence: "Start each sentence with a ___ letter.", answer: "capital", choices: ["capital", "capitol"], tip: "Capital letter = a big letter." },
      { sentence: "Tourists visited the U.S. ___ in Washington.", answer: "Capitol", choices: ["Capital", "Capitol"], tip: "The U.S. Capitol is the building where Congress meets." },
      { sentence: "The company needs more ___ to grow.", answer: "capital", choices: ["capital", "capitol"], tip: "Capital = money for a business." },
      { sentence: "The ___ dome was lit up at night.", answer: "capitol", choices: ["capital", "capitol"], tip: "Capitol = the building, with its dome." },
      { sentence: "Paris is the ___ of France.", answer: "capital", choices: ["capital", "capitol"], tip: "Capital = the city where the government is." },
      { sentence: "Lawmakers argued on the steps of the state ___.", answer: "capitol", choices: ["capital", "capitol"], tip: "Capitol = the building." }
    ]
  },
  {
    id: "polish-loath-loathe", category: "english-polish", type: "confused", name: "Loath or loathe",
    questions: [
      { sentence: "I ___ doing laundry.", answer: "loathe", choices: ["loath", "loathe"], tip: "Loathe (with e) = hate. It's a verb." },
      { sentence: "She was ___ to leave her friends.", answer: "loath", choices: ["loath", "loathe"], tip: "Loath (no e) = unwilling." },
      { sentence: "Cats ___ getting wet.", answer: "loathe", choices: ["loath", "loathe"], tip: "Loathe = hate." },
      { sentence: "He's ___ to admit his mistakes.", answer: "loath", choices: ["loath", "loathe"], tip: "Loath = unwilling." },
      { sentence: "I absolutely ___ traffic.", answer: "loathe", choices: ["loath", "loathe"], tip: "Loathe = hate." },
      { sentence: "We were ___ to spend so much money.", answer: "loath", choices: ["loath", "loathe"], tip: "Loath = unwilling." },
      { sentence: "Many people ___ public speaking.", answer: "loathe", choices: ["loath", "loathe"], tip: "Loathe = hate." },
      { sentence: "The judge was ___ to delay the trial again.", answer: "loath", choices: ["loath", "loathe"], tip: "Loath = unwilling." }
    ]
  },
  {
    id: "polish-emigrate", category: "english-polish", type: "confused", name: "Emigrate or immigrate",
    questions: [
      { sentence: "They plan to ___ from Brazil next year.", answer: "emigrate", choices: ["emigrate", "immigrate"], tip: "Emigrate = exit a country (from)." },
      { sentence: "Many people ___ to Canada each year.", answer: "immigrate", choices: ["emigrate", "immigrate"], tip: "Immigrate = come into a country (to)." },
      { sentence: "She decided to ___ to the United States.", answer: "immigrate", choices: ["emigrate", "immigrate"], tip: "Immigrate = come into a country." },
      { sentence: "He wants to ___ from his home country.", answer: "emigrate", choices: ["emigrate", "immigrate"], tip: "Emigrate = exit a country." },
      { sentence: "It's hard to ___ from a place you love.", answer: "emigrate", choices: ["emigrate", "immigrate"], tip: "Emigrate from." },
      { sentence: "Thousands hope to ___ to Australia.", answer: "immigrate", choices: ["emigrate", "immigrate"], tip: "Immigrate to." },
      { sentence: "Why did your family ___ from Italy?", answer: "emigrate", choices: ["emigrate", "immigrate"], tip: "Emigrate from." },
      { sentence: "To ___ to Japan, you need a visa.", answer: "immigrate", choices: ["emigrate", "immigrate"], tip: "Immigrate to." }
    ]
  },
  {
    id: "polish-ie-eg", category: "english-polish", type: "confused", name: "i.e. or e.g.",
    questions: [
      { sentence: "Bring some fruit, ___ apples or pears.", answer: "e.g.", choices: ["i.e.", "e.g."], tip: "e.g. = for example (example given)." },
      { sentence: "He's my only sibling, ___ my brother.", answer: "i.e.", choices: ["i.e.", "e.g."], tip: "i.e. = that is, in other words." },
      { sentence: "I love citrus fruit, ___ oranges and lemons.", answer: "e.g.", choices: ["i.e.", "e.g."], tip: "e.g. = for example." },
      { sentence: "The deadline is the end of the month, ___ March 31.", answer: "i.e.", choices: ["i.e.", "e.g."], tip: "i.e. = that is." },
      { sentence: "Try a winter sport, ___ skiing.", answer: "e.g.", choices: ["i.e.", "e.g."], tip: "e.g. = for example." },
      { sentence: "Meet at noon, ___ 12:00 p.m.", answer: "i.e.", choices: ["i.e.", "e.g."], tip: "i.e. = that is." },
      { sentence: "Pack warm clothes, ___ a scarf and gloves.", answer: "e.g.", choices: ["i.e.", "e.g."], tip: "e.g. = for example." },
      { sentence: "She's a polyglot, ___ she speaks many languages.", answer: "i.e.", choices: ["i.e.", "e.g."], tip: "i.e. = in other words." }
    ]
  },
  // Learn new words: each entry below is a group of words, and word-levels.js turns every
  // group into a few levels, shown under one heading in the menu:
  //   1. Meet the words: a card for each word (meaning and example), and you type the word.
  //   2. Type the words: you type each word 3 times.
  //   3. Sentences: you type the right word into the gaps. Every 8 questions make one
  //      sentence level, so harder groups with 16 or 24 questions get 2 or 3 of them.
  // A group's "id" starts the ids of its levels, so group ids must never change either.

  // New words for "I'm new to English". It starts with the very first words children learn
  // and are taught (greetings, family, animals, food, colors, numbers, and early reading
  // words like go, run, big, and little), then moves on to harder everyday words.
  // These sentences keep punctuation simple (just periods and question marks) so they
  // don't scare off brand-new learners.
  {
    id: "words-hello", category: "words-new", section: "First words", type: "words", name: "Hello and goodbye",
    words: [
      { word: "hi", kind: "greeting", meaning: "a friendly way to say hello", example: "Hi. How are you?" },
      { word: "bye", kind: "greeting", meaning: "what you say when you leave", example: "Bye. See you tomorrow." },
      { word: "yes", kind: "answer", meaning: "what you say when something is right, or when you agree", example: "Yes. I like it." },
      { word: "no", kind: "answer", meaning: "what you say when something is not right, or when you do not agree", example: "No. It is not my bag." },
      { word: "please", kind: "polite word", meaning: "a kind word you say when you ask for something", example: "Please sit down." }
    ],
    questions: [
      { sentence: "___. My name is Ana.", answer: "Hi", choices: ["Hi", "Bye", "No"], tip: "Hi means hello. You say it when you meet someone." },
      { sentence: "I have to go now. ___.", answer: "Bye", choices: ["Bye", "Hi", "Yes"], tip: "Bye is what you say when you leave." },
      { sentence: "Do you like pizza? ___. I love it.", answer: "Yes", choices: ["Yes", "No", "Bye"], tip: "Yes means you agree." },
      { sentence: "Is it cold today? ___. It is hot.", answer: "No", choices: ["No", "Yes", "Hi"], tip: "No means that is not right." },
      { sentence: "___ help me.", answer: "Please", choices: ["Please", "Bye", "No"], tip: "Say please when you ask for something." },
      { sentence: "Say ___ when you meet a friend.", answer: "hi", choices: ["hi", "bye", "no"], tip: "Hi means hello." },
      { sentence: "Is your name Tom? ___. My name is Ben.", answer: "No", choices: ["No", "Yes", "Please"], tip: "No means that is not right." },
      { sentence: "Say ___ when you leave.", answer: "bye", choices: ["bye", "yes", "please"], tip: "Bye is what you say when you leave." }
    ]
  },
  {
    id: "words-family", category: "words-new", section: "First words", type: "words", name: "Family",
    words: [
      { word: "mom", kind: "noun", meaning: "your mother", example: "My mom is at work." },
      { word: "dad", kind: "noun", meaning: "your father", example: "My dad makes dinner." },
      { word: "baby", kind: "noun", meaning: "a very young child", example: "The baby is sleeping." },
      { word: "sister", kind: "noun", meaning: "a girl who has the same parents as you", example: "My sister is ten." },
      { word: "brother", kind: "noun", meaning: "a boy who has the same parents as you", example: "I play with my brother." }
    ],
    questions: [
      { sentence: "My ___ is my mother.", answer: "mom", choices: ["mom", "dad", "baby"], tip: "Mom means mother." },
      { sentence: "My ___ is my father.", answer: "dad", choices: ["dad", "mom", "sister"], tip: "Dad means father." },
      { sentence: "The ___ is one month old.", answer: "baby", choices: ["baby", "brother", "dad"], tip: "A baby is a very young child." },
      { sentence: "My ___ is a girl. Her name is Lily.", answer: "sister", choices: ["sister", "brother", "dad"], tip: "A sister is a girl." },
      { sentence: "My ___ is a boy. His name is Max.", answer: "brother", choices: ["brother", "sister", "mom"], tip: "A brother is a boy." },
      { sentence: "The ___ drinks milk and cries a lot.", answer: "baby", choices: ["baby", "mom", "sister"], tip: "A baby is a very young child." },
      { sentence: "My mom and my ___ are my parents.", answer: "dad", choices: ["dad", "sister", "baby"], tip: "Your mom and dad are your parents." },
      { sentence: "Is that your ___? She looks like you.", answer: "sister", choices: ["sister", "brother", "dad"], tip: "She means a girl or a woman." }
    ]
  },
  {
    id: "words-body", category: "words-new", section: "First words", type: "words", name: "My body",
    words: [
      { word: "eye", kind: "noun", meaning: "the part of your face that you see with", example: "Close one eye." },
      { word: "ear", kind: "noun", meaning: "the part of your head that you hear with", example: "Put your hand over your ear." },
      { word: "nose", kind: "noun", meaning: "the part of your face that you smell with", example: "The clown has a red nose." },
      { word: "mouth", kind: "noun", meaning: "the part of your face that you eat and talk with", example: "Open your mouth." },
      { word: "hand", kind: "noun", meaning: "the part at the end of your arm, with five fingers", example: "Raise your hand." }
    ],
    questions: [
      { sentence: "I smell the flowers with my ___.", answer: "nose", choices: ["nose", "ear", "hand"], tip: "You smell with your nose." },
      { sentence: "I hear the music with my ___.", answer: "ear", choices: ["ear", "eye", "mouth"], tip: "You hear with your ears." },
      { sentence: "I eat with my ___.", answer: "mouth", choices: ["mouth", "ear", "eye"], tip: "You eat and talk with your mouth." },
      { sentence: "I write with my ___.", answer: "hand", choices: ["hand", "nose", "ear"], tip: "You write with your hand." },
      { sentence: "Close one ___ and look at the bird.", answer: "eye", choices: ["eye", "mouth", "hand"], tip: "You see with your eyes." },
      { sentence: "The dog has a wet black ___.", answer: "nose", choices: ["nose", "hand", "eye"], tip: "Dogs have wet noses." },
      { sentence: "Wave your ___ to say hi.", answer: "hand", choices: ["hand", "mouth", "ear"], tip: "You wave with your hand." },
      { sentence: "Open your ___ wide.", answer: "mouth", choices: ["mouth", "nose", "ear"], tip: "You eat and talk with your mouth." }
    ]
  },
  {
    id: "words-animals", category: "words-new", section: "First words", type: "words", name: "Animals",
    words: [
      { word: "cat", kind: "noun", meaning: "a small pet that says meow", example: "The cat is on the bed." },
      { word: "dog", kind: "noun", meaning: "a pet that says woof", example: "My dog likes to run." },
      { word: "cow", kind: "noun", meaning: "a big farm animal that gives us milk", example: "The cow eats grass." },
      { word: "pig", kind: "noun", meaning: "a pink farm animal", example: "The pig is in the mud." },
      { word: "duck", kind: "noun", meaning: "a bird that swims and says quack", example: "The duck is on the water." }
    ],
    questions: [
      { sentence: "The ___ says meow.", answer: "cat", choices: ["cat", "dog", "cow"], tip: "A cat says meow." },
      { sentence: "The ___ says woof.", answer: "dog", choices: ["dog", "cat", "pig"], tip: "A dog says woof." },
      { sentence: "We get milk from a ___.", answer: "cow", choices: ["cow", "duck", "cat"], tip: "A cow gives us milk." },
      { sentence: "The ___ swims in the pond.", answer: "duck", choices: ["duck", "pig", "cow"], tip: "A duck is a bird that swims." },
      { sentence: "The pink ___ plays in the mud.", answer: "pig", choices: ["pig", "dog", "duck"], tip: "A pig is a pink farm animal." },
      { sentence: "My ___ runs after the ball.", answer: "dog", choices: ["dog", "cow", "pig"], tip: "Dogs love to play with balls." },
      { sentence: "The ___ says quack.", answer: "duck", choices: ["duck", "cat", "dog"], tip: "A duck says quack." },
      { sentence: "The ___ sleeps on my bed and says meow.", answer: "cat", choices: ["cat", "cow", "pig"], tip: "A cat says meow." }
    ]
  },
  {
    id: "words-food", category: "words-new", section: "First words", type: "words", name: "Food and drinks",
    words: [
      { word: "milk", kind: "noun", meaning: "a white drink that comes from cows", example: "I drink milk with my breakfast." },
      { word: "water", kind: "noun", meaning: "a clear drink. Rain and rivers are water.", example: "Can I have some water?" },
      { word: "apple", kind: "noun", meaning: "a round fruit that is red or green", example: "I eat an apple every day." },
      { word: "banana", kind: "noun", meaning: "a long yellow fruit", example: "Monkeys love bananas." },
      { word: "egg", kind: "noun", meaning: "a food that comes from a chicken", example: "I have an egg for breakfast." }
    ],
    questions: [
      { sentence: "I am thirsty. Can I have some ___?", answer: "water", choices: ["water", "egg", "apple"], tip: "Water is a drink." },
      { sentence: "A ___ is long and yellow.", answer: "banana", choices: ["banana", "apple", "milk"], tip: "A banana is a long yellow fruit." },
      { sentence: "Cows give us ___.", answer: "milk", choices: ["milk", "egg", "banana"], tip: "Milk comes from cows." },
      { sentence: "An ___ can be red or green.", answer: "apple", choices: ["apple", "egg", "milk"], tip: "An apple is a round fruit. It is red or green." },
      { sentence: "We get an ___ from a chicken.", answer: "egg", choices: ["egg", "milk", "banana"], tip: "Eggs come from chickens." },
      { sentence: "I put ___ on my cereal.", answer: "milk", choices: ["milk", "egg", "apple"], tip: "Milk is a white drink." },
      { sentence: "Monkeys like to eat a ___.", answer: "banana", choices: ["banana", "water", "milk"], tip: "Monkeys love bananas." },
      { sentence: "Fish live in ___.", answer: "water", choices: ["water", "milk", "egg"], tip: "Rivers, lakes, and the sea are water." }
    ]
  },
  {
    id: "words-colors", category: "words-new", section: "First words", type: "words", name: "Colors",
    words: [
      { word: "red", kind: "color", meaning: "the color of a strawberry", example: "Stop at the red light." },
      { word: "blue", kind: "color", meaning: "the color of the sky on a sunny day", example: "My shirt is blue." },
      { word: "green", kind: "color", meaning: "the color of grass", example: "The leaves are green." },
      { word: "yellow", kind: "color", meaning: "the color of the sun and of bananas", example: "I have a yellow pencil." },
      { word: "white", kind: "color", meaning: "the color of snow and milk", example: "The cat is white." }
    ],
    questions: [
      { sentence: "The sky is ___.", answer: "blue", choices: ["blue", "red", "green"], tip: "On a sunny day, the sky is blue." },
      { sentence: "Grass is ___.", answer: "green", choices: ["green", "white", "yellow"], tip: "Grass is green." },
      { sentence: "Snow is ___.", answer: "white", choices: ["white", "blue", "red"], tip: "Snow is white." },
      { sentence: "A banana is ___.", answer: "yellow", choices: ["yellow", "blue", "white"], tip: "Bananas are yellow." },
      { sentence: "A strawberry is ___.", answer: "red", choices: ["red", "green", "blue"], tip: "Strawberries are red." },
      { sentence: "The light is ___. Stop the car.", answer: "red", choices: ["red", "white", "blue"], tip: "A red light means stop." },
      { sentence: "The sun is big and ___.", answer: "yellow", choices: ["yellow", "green", "blue"], tip: "We draw the sun yellow." },
      { sentence: "Many frogs are ___.", answer: "green", choices: ["green", "white", "red"], tip: "Many frogs are green, like grass." }
    ]
  },
  {
    id: "words-numbers", category: "words-new", section: "First words", type: "words", name: "Numbers",
    words: [
      { word: "one", kind: "number", meaning: "the number 1", example: "I have one nose." },
      { word: "two", kind: "number", meaning: "the number 2", example: "I have two eyes." },
      { word: "three", kind: "number", meaning: "the number 3", example: "Three cats are sleeping." },
      { word: "four", kind: "number", meaning: "the number 4", example: "A table has four legs." },
      { word: "five", kind: "number", meaning: "the number 5", example: "I have five fingers on one hand." }
    ],
    questions: [
      { sentence: "I have ___ nose.", answer: "one", choices: ["one", "two", "five"], tip: "One is 1." },
      { sentence: "I have ___ hands.", answer: "two", choices: ["two", "one", "four"], tip: "Two is 2." },
      { sentence: "A dog has ___ legs.", answer: "four", choices: ["four", "two", "three"], tip: "Four is 4." },
      { sentence: "One hand has ___ fingers.", answer: "five", choices: ["five", "three", "one"], tip: "Five is 5." },
      { sentence: "1 2 ___ 4 5", answer: "three", choices: ["three", "five", "one"], tip: "Three is 3." },
      { sentence: "A car has ___ wheels.", answer: "four", choices: ["four", "one", "three"], tip: "Four is 4." },
      { sentence: "A bird has ___ legs.", answer: "two", choices: ["two", "four", "five"], tip: "Two is 2." },
      { sentence: "2 and 3 make ___.", answer: "five", choices: ["five", "two", "one"], tip: "2 and 3 make 5." }
    ]
  },
  {
    id: "words-house", category: "words-new", section: "First words", type: "words", name: "Around the house",
    words: [
      { word: "bed", kind: "noun", meaning: "the thing you sleep on", example: "I go to bed at nine." },
      { word: "table", kind: "noun", meaning: "furniture with legs and a flat top, where you eat or work", example: "Dinner is on the table." },
      { word: "chair", kind: "noun", meaning: "a seat for one person", example: "Sit on the chair." },
      { word: "door", kind: "noun", meaning: "what you open to go in or out of a room", example: "Please close the door." },
      { word: "window", kind: "noun", meaning: "glass in a wall that lets in light", example: "I look out the window." }
    ],
    questions: [
      { sentence: "I am tired. I want to go to ___.", answer: "bed", choices: ["bed", "door", "table"], tip: "You sleep in your bed." },
      { sentence: "Please sit down on the ___.", answer: "chair", choices: ["chair", "window", "door"], tip: "A chair is a seat for one person." },
      { sentence: "Someone is knocking on the ___.", answer: "door", choices: ["door", "bed", "chair"], tip: "You open a door to go in or out." },
      { sentence: "Open the ___ to let in some fresh air.", answer: "window", choices: ["window", "chair", "bed"], tip: "A window is glass in a wall." },
      { sentence: "We eat dinner at the ___.", answer: "table", choices: ["table", "window", "door"], tip: "You eat at a table." },
      { sentence: "Put your plate on the ___.", answer: "table", choices: ["table", "door", "bed"], tip: "A table has a flat top." },
      { sentence: "The cat looks out the ___ at the birds.", answer: "window", choices: ["window", "table", "chair"], tip: "You look out of a window." },
      { sentence: "Grandma sits in her favorite ___.", answer: "chair", choices: ["chair", "door", "window"], tip: "A chair is a seat for one person." }
    ]
  },
  {
    id: "words-bathroom", category: "words-new", section: "First words", type: "words", name: "The bathroom",
    words: [
      { word: "bathroom", kind: "noun", meaning: "the room with a toilet and a sink", example: "Where is the bathroom?" },
      { word: "toilet", kind: "noun", meaning: "the seat with a bowl of water that you flush", example: "Please flush the toilet." },
      { word: "sink", kind: "noun", meaning: "a small bowl with running water, for washing your hands", example: "Wash your hands in the sink." },
      { word: "soap", kind: "noun", meaning: "what you use with water to get clean", example: "This soap smells like flowers." },
      { word: "towel", kind: "noun", meaning: "a soft cloth for drying yourself", example: "Dry your hands with the towel." },
      { word: "toothbrush", kind: "noun", meaning: "a small brush for cleaning your teeth", example: "My toothbrush is blue." }
    ],
    questions: [
      { sentence: "Where is the ___?", answer: "bathroom", choices: ["bathroom", "towel", "soap"], tip: "The bathroom is the room with the toilet." },
      { sentence: "Wash your hands with ___ and water.", answer: "soap", choices: ["soap", "towel", "sink"], tip: "Soap helps you get clean." },
      { sentence: "Dry your body with a ___.", answer: "towel", choices: ["towel", "soap", "toilet"], tip: "A towel is for drying yourself." },
      { sentence: "Brush your teeth with your ___.", answer: "toothbrush", choices: ["toothbrush", "towel", "sink"], tip: "A toothbrush cleans your teeth." },
      { sentence: "Please flush the ___.", answer: "toilet", choices: ["toilet", "sink", "towel"], tip: "You flush a toilet." },
      { sentence: "Wash your face at the ___.", answer: "sink", choices: ["sink", "towel", "toothbrush"], tip: "A sink has running water for washing." },
      { sentence: "I need to use the ___.", answer: "bathroom", choices: ["bathroom", "sink", "soap"], tip: "I need to use the bathroom is a polite way to say you need the toilet." },
      { sentence: "This ___ is wet. Can I have a dry one?", answer: "towel", choices: ["towel", "soap", "toilet"], tip: "A towel is for drying yourself." }
    ]
  },
  {
    id: "words-actions", category: "words-new", section: "First words", type: "words", name: "Go, run, jump",
    words: [
      { word: "go", kind: "verb", meaning: "to move from one place to another", example: "I go to school." },
      { word: "run", kind: "verb", meaning: "to move very fast on your feet", example: "I run in the park." },
      { word: "jump", kind: "verb", meaning: "to push yourself up into the air", example: "The frog can jump." },
      { word: "see", kind: "verb", meaning: "to notice something with your eyes", example: "I see a bird." },
      { word: "play", kind: "verb", meaning: "to have fun with toys or games", example: "The kids play outside." }
    ],
    questions: [
      { sentence: "Can you ___ the moon?", answer: "see", choices: ["see", "run", "jump"], tip: "See means notice with your eyes." },
      { sentence: "Do you want to ___ a game?", answer: "play", choices: ["play", "see", "go"], tip: "Play means have fun with toys or games." },
      { sentence: "A kangaroo can ___ very high.", answer: "jump", choices: ["jump", "see", "play"], tip: "Jump means push yourself up into the air." },
      { sentence: "It is late. We ___ to bed now.", answer: "go", choices: ["go", "see", "jump"], tip: "Go means move from one place to another." },
      { sentence: "I am late. I have to ___ fast.", answer: "run", choices: ["run", "see", "play"], tip: "Run means move very fast on your feet." },
      { sentence: "Open your eyes so you can ___.", answer: "see", choices: ["see", "go", "run"], tip: "You see with your eyes." },
      { sentence: "The kids ___ with their toys.", answer: "play", choices: ["play", "jump", "go"], tip: "Play means have fun with toys or games." },
      { sentence: "A green light means ___.", answer: "go", choices: ["go", "see", "play"], tip: "Green means go. Red means stop." }
    ]
  },
  {
    id: "words-opposites", category: "words-new", section: "First words", type: "words", name: "Big and little",
    words: [
      { word: "big", kind: "adjective", meaning: "large. Not small.", example: "An elephant is big." },
      { word: "little", kind: "adjective", meaning: "small. Not big.", example: "A mouse is little." },
      { word: "hot", kind: "adjective", meaning: "very warm", example: "The soup is hot." },
      { word: "cold", kind: "adjective", meaning: "not warm", example: "Ice is cold." },
      { word: "happy", kind: "adjective", meaning: "feeling good", example: "I am happy today." },
      { word: "sad", kind: "adjective", meaning: "feeling bad, like you want to cry", example: "She is sad because her toy broke." }
    ],
    questions: [
      { sentence: "An elephant is very ___.", answer: "big", choices: ["big", "little", "cold"], tip: "Big means large. The opposite is little." },
      { sentence: "A mouse is ___.", answer: "little", choices: ["little", "big", "hot"], tip: "Little means small. The opposite is big." },
      { sentence: "Do not touch the stove. It is ___.", answer: "hot", choices: ["hot", "cold", "sad"], tip: "Hot means very warm. The opposite is cold." },
      { sentence: "Put on a coat. It is ___ outside.", answer: "cold", choices: ["cold", "hot", "happy"], tip: "Cold means not warm. The opposite is hot." },
      { sentence: "She smiles because she is ___.", answer: "happy", choices: ["happy", "sad", "cold"], tip: "Happy means feeling good. The opposite is sad." },
      { sentence: "He cries because he is ___.", answer: "sad", choices: ["sad", "happy", "big"], tip: "Sad means feeling bad. The opposite is happy." },
      { sentence: "Ice cream is ___.", answer: "cold", choices: ["cold", "hot", "big"], tip: "Cold means not warm." },
      { sentence: "It is my birthday. I am so ___.", answer: "happy", choices: ["happy", "sad", "little"], tip: "Happy means feeling good." }
    ]
  },
  {
    id: "words-more-numbers", category: "words-new", section: "First words", type: "words", name: "Numbers 6 to 10",
    words: [
      { word: "six", kind: "number", meaning: "the number 6", example: "I have six books." },
      { word: "seven", kind: "number", meaning: "the number 7", example: "A week has seven days." },
      { word: "eight", kind: "number", meaning: "the number 8", example: "A spider has eight legs." },
      { word: "nine", kind: "number", meaning: "the number 9", example: "The game starts at nine." },
      { word: "ten", kind: "number", meaning: "the number 10", example: "I have ten fingers." }
    ],
    questions: [
      { sentence: "A week has ___ days.", answer: "seven", choices: ["seven", "six", "ten"], tip: "A week has 7 days." },
      { sentence: "A spider has ___ legs.", answer: "eight", choices: ["eight", "nine", "six"], tip: "A spider has 8 legs." },
      { sentence: "I have ___ fingers.", answer: "ten", choices: ["ten", "eight", "seven"], tip: "Two hands have 10 fingers." },
      { sentence: "5 and 1 make ___.", answer: "six", choices: ["six", "nine", "ten"], tip: "5 and 1 make 6." },
      { sentence: "7 8 ___ 10", answer: "nine", choices: ["nine", "six", "seven"], tip: "Nine is 9." },
      { sentence: "3 and 3 make ___.", answer: "six", choices: ["six", "eight", "seven"], tip: "3 and 3 make 6." },
      { sentence: "4 and 4 make ___.", answer: "eight", choices: ["eight", "ten", "nine"], tip: "4 and 4 make 8." },
      { sentence: "6 and 1 make ___.", answer: "seven", choices: ["seven", "nine", "ten"], tip: "6 and 1 make 7." }
    ]
  },
  {
    id: "words-days", category: "words-new", section: "First words", type: "words", name: "Days of the week",
    words: [
      { word: "Monday", kind: "day", meaning: "the first day of the work week", example: "I go back to work on Monday." },
      { word: "Tuesday", kind: "day", meaning: "the day after Monday", example: "I have a class on Tuesday." },
      { word: "Wednesday", kind: "day", meaning: "the day after Tuesday. It is in the middle of the week.", example: "We eat pizza on Wednesday." },
      { word: "Thursday", kind: "day", meaning: "the day after Wednesday", example: "My sister visits on Thursday." },
      { word: "Friday", kind: "day", meaning: "the day after Thursday. The last day of the work week.", example: "Friday is my favorite day." },
      { word: "Saturday", kind: "day", meaning: "the day after Friday. A weekend day.", example: "We go to the park on Saturday." },
      { word: "Sunday", kind: "day", meaning: "the day after Saturday. A weekend day.", example: "The store is closed on Sunday." }
    ],
    questions: [
      { sentence: "The day after Monday is ___.", answer: "Tuesday", choices: ["Tuesday", "Friday", "Sunday"], tip: "Monday then Tuesday." },
      { sentence: "The day after Saturday is ___.", answer: "Sunday", choices: ["Sunday", "Monday", "Thursday"], tip: "Saturday then Sunday." },
      { sentence: "The day before Saturday is ___.", answer: "Friday", choices: ["Friday", "Tuesday", "Wednesday"], tip: "Friday then Saturday." },
      { sentence: "Saturday and ___ are the weekend.", answer: "Sunday", choices: ["Sunday", "Monday", "Wednesday"], tip: "The weekend is Saturday and Sunday." },
      { sentence: "The day after Wednesday is ___.", answer: "Thursday", choices: ["Thursday", "Monday", "Saturday"], tip: "Wednesday then Thursday." },
      { sentence: "The day after Tuesday is ___.", answer: "Wednesday", choices: ["Wednesday", "Sunday", "Friday"], tip: "Tuesday then Wednesday. The first d in Wednesday is silent." },
      { sentence: "The work week starts on ___.", answer: "Monday", choices: ["Monday", "Saturday", "Thursday"], tip: "Many people start work on Monday." },
      { sentence: "The day after Friday is ___.", answer: "Saturday", choices: ["Saturday", "Tuesday", "Monday"], tip: "Friday then Saturday." }
    ]
  },
  {
    id: "words-weather", category: "words-new", section: "First words", type: "words", name: "Weather",
    words: [
      { word: "sun", kind: "noun", meaning: "the big bright light in the sky in the day", example: "The sun is hot today." },
      { word: "rain", kind: "noun", meaning: "water that falls from the sky", example: "I like the sound of rain." },
      { word: "snow", kind: "noun", meaning: "soft white ice that falls from the sky when it is very cold", example: "The kids play in the snow." },
      { word: "wind", kind: "noun", meaning: "air that moves fast outside", example: "The wind is strong today." },
      { word: "cloud", kind: "noun", meaning: "a white or gray shape in the sky", example: "There is a big cloud in the sky." }
    ],
    questions: [
      { sentence: "Take an umbrella. The ___ is coming.", answer: "rain", choices: ["rain", "sun", "wind"], tip: "An umbrella keeps the rain off you." },
      { sentence: "The ___ is bright and hot today.", answer: "sun", choices: ["sun", "rain", "cloud"], tip: "The sun is bright and hot." },
      { sentence: "It is very cold. The ___ is white on the ground.", answer: "snow", choices: ["snow", "wind", "sun"], tip: "Snow is white and cold." },
      { sentence: "The ___ blows my hat away.", answer: "wind", choices: ["wind", "rain", "sun"], tip: "Wind is air that moves fast." },
      { sentence: "A gray ___ is in the sky.", answer: "cloud", choices: ["cloud", "wind", "snow"], tip: "A cloud is a white or gray shape in the sky." },
      { sentence: "Wear a hat. The ___ is very hot.", answer: "sun", choices: ["sun", "snow", "wind"], tip: "The sun is hot." },
      { sentence: "We can make a snowman in the ___.", answer: "snow", choices: ["snow", "rain", "cloud"], tip: "You make a snowman with snow." },
      { sentence: "The ___ makes the trees move.", answer: "wind", choices: ["wind", "sun", "cloud"], tip: "Wind is air that moves fast." }
    ]
  },
  {
    id: "words-kitchen", category: "words-new", section: "First words", type: "words", name: "The kitchen",
    words: [
      { word: "cup", kind: "noun", meaning: "a small bowl with a handle that you drink from", example: "I drink tea from a cup." },
      { word: "plate", kind: "noun", meaning: "a flat round dish for food", example: "Put the bread on a plate." },
      { word: "spoon", kind: "noun", meaning: "what you eat soup with", example: "I eat soup with a spoon." },
      { word: "fork", kind: "noun", meaning: "what you pick up food with. It has points.", example: "Eat your salad with a fork." },
      { word: "knife", kind: "noun", meaning: "what you cut food with. The k is silent.", example: "Cut the bread with a knife." }
    ],
    questions: [
      { sentence: "I drink milk from a ___.", answer: "cup", choices: ["cup", "fork", "knife"], tip: "You drink from a cup." },
      { sentence: "Cut the apple with a ___.", answer: "knife", choices: ["knife", "spoon", "cup"], tip: "You cut with a knife." },
      { sentence: "I eat soup with a ___.", answer: "spoon", choices: ["spoon", "fork", "plate"], tip: "You eat soup with a spoon." },
      { sentence: "Put the food on a ___.", answer: "plate", choices: ["plate", "cup", "spoon"], tip: "A plate is a flat dish for food." },
      { sentence: "Eat the salad with a ___.", answer: "fork", choices: ["fork", "cup", "plate"], tip: "A fork picks up food." },
      { sentence: "The ___ is sharp. Be careful.", answer: "knife", choices: ["knife", "spoon", "plate"], tip: "A knife is sharp. The k is silent." },
      { sentence: "Can I have a ___ of coffee?", answer: "cup", choices: ["cup", "plate", "fork"], tip: "You drink coffee from a cup." },
      { sentence: "The cake is on a big ___.", answer: "plate", choices: ["plate", "knife", "spoon"], tip: "Food goes on a plate." }
    ]
  },
  {
    id: "words-town", category: "words-new", section: "First words", type: "words", name: "In town",
    words: [
      { word: "store", kind: "noun", meaning: "a place where you buy things", example: "I buy food at the store." },
      { word: "park", kind: "noun", meaning: "a place with grass and trees where people play", example: "We walk in the park." },
      { word: "bank", kind: "noun", meaning: "a place that keeps your money safe", example: "I go to the bank to get money." },
      { word: "hospital", kind: "noun", meaning: "a place where doctors help sick people", example: "The doctor works at the hospital." },
      { word: "bus", kind: "noun", meaning: "a big car that carries many people", example: "I take the bus to work." }
    ],
    questions: [
      { sentence: "We need milk. I will go to the ___.", answer: "store", choices: ["store", "park", "bank"], tip: "You buy things at a store." },
      { sentence: "The kids play on the grass in the ___.", answer: "park", choices: ["park", "bank", "bus"], tip: "A park has grass and trees." },
      { sentence: "I keep my money in the ___.", answer: "bank", choices: ["bank", "park", "store"], tip: "A bank keeps your money safe." },
      { sentence: "He is very sick. He needs to go to the ___.", answer: "hospital", choices: ["hospital", "store", "park"], tip: "Doctors help sick people at a hospital." },
      { sentence: "I take the ___ to school.", answer: "bus", choices: ["bus", "bank", "hospital"], tip: "A bus carries many people." },
      { sentence: "The ___ sells bread and fruit.", answer: "store", choices: ["store", "hospital", "bus"], tip: "A store sells things." },
      { sentence: "We have a picnic in the ___.", answer: "park", choices: ["park", "bank", "hospital"], tip: "A park has grass and trees." },
      { sentence: "Wait at the stop for the ___.", answer: "bus", choices: ["bus", "store", "park"], tip: "You wait for a bus at a bus stop." }
    ]
  },
  {
    id: "words-school", category: "words-new", section: "First words", type: "words", name: "At school",
    words: [
      { word: "teacher", kind: "noun", meaning: "a person who helps you learn", example: "My teacher is very kind." },
      { word: "student", kind: "noun", meaning: "a person who is learning at a school", example: "There are twenty students in my class." },
      { word: "book", kind: "noun", meaning: "pages with words that you read", example: "I read a book every night." },
      { word: "pencil", kind: "noun", meaning: "what you write or draw with", example: "Can I use your pencil?" },
      { word: "desk", kind: "noun", meaning: "a table where you work or study", example: "My books are on my desk." }
    ],
    questions: [
      { sentence: "The ___ helps the class learn.", answer: "teacher", choices: ["teacher", "desk", "pencil"], tip: "A teacher helps you learn." },
      { sentence: "I write my name with a ___.", answer: "pencil", choices: ["pencil", "desk", "student"], tip: "You write with a pencil." },
      { sentence: "The ___ is learning to read.", answer: "student", choices: ["student", "book", "desk"], tip: "A student is learning." },
      { sentence: "Open your ___ to page ten.", answer: "book", choices: ["book", "pencil", "teacher"], tip: "A book has pages." },
      { sentence: "I sit at my ___ to do my homework.", answer: "desk", choices: ["desk", "teacher", "book"], tip: "A desk is a table for work." },
      { sentence: "My ___ gives us homework every day.", answer: "teacher", choices: ["teacher", "student", "pencil"], tip: "A teacher gives homework." },
      { sentence: "This ___ has many pictures in it.", answer: "book", choices: ["book", "desk", "student"], tip: "A book has pages with words and pictures." },
      { sentence: "Each ___ has a desk and a chair.", answer: "student", choices: ["student", "pencil", "book"], tip: "A student is a person who is learning." }
    ]
  },
  {
    id: "words-time", category: "words-new", section: "First words", type: "words", name: "Time words",
    words: [
      { word: "today", kind: "time word", meaning: "this day", example: "Today is my birthday." },
      { word: "tomorrow", kind: "time word", meaning: "the day after today", example: "See you tomorrow." },
      { word: "yesterday", kind: "time word", meaning: "the day before today", example: "I was sick yesterday." },
      { word: "morning", kind: "noun", meaning: "the early part of the day", example: "I eat breakfast in the morning." },
      { word: "night", kind: "noun", meaning: "the dark time when people sleep", example: "The stars come out at night." }
    ],
    questions: [
      { sentence: "I eat breakfast in the ___.", answer: "morning", choices: ["morning", "night", "yesterday"], tip: "Morning is the early part of the day." },
      { sentence: "It is dark at ___.", answer: "night", choices: ["night", "morning", "today"], tip: "Night is the dark time." },
      { sentence: "Today is Monday. ___ is Tuesday.", answer: "Tomorrow", choices: ["Tomorrow", "Yesterday", "Night"], tip: "Tomorrow is the day after today." },
      { sentence: "Today is Monday. ___ was Sunday.", answer: "Yesterday", choices: ["Yesterday", "Tomorrow", "Morning"], tip: "Yesterday is the day before today." },
      { sentence: "What day is it ___?", answer: "today", choices: ["today", "night", "morning"], tip: "Today is this day." },
      { sentence: "I go to sleep at ___.", answer: "night", choices: ["night", "morning", "tomorrow"], tip: "People sleep at night." },
      { sentence: "We will go to the park ___.", answer: "tomorrow", choices: ["tomorrow", "yesterday", "morning"], tip: "Will is for the future, like tomorrow." },
      { sentence: "I saw her ___ at the store.", answer: "yesterday", choices: ["yesterday", "tomorrow", "night"], tip: "Saw is the past, like yesterday." }
    ]
  },
  {
    id: "words-feelings", category: "words-new", section: "Everyday words", type: "words", name: "Feelings",
    words: [
      { word: "hungry", kind: "adjective", meaning: "wanting to eat", example: "I am hungry. Let us have lunch." },
      { word: "tired", kind: "adjective", meaning: "needing rest or sleep", example: "She is tired after work." },
      { word: "worried", kind: "adjective", meaning: "thinking that something bad might happen", example: "He is worried about his test." },
      { word: "excited", kind: "adjective", meaning: "very happy about something that is going to happen", example: "The kids are excited about the trip." },
      { word: "angry", kind: "adjective", meaning: "very upset with someone or something", example: "My boss was angry about the late report." }
    ],
    questions: [
      { sentence: "I did not eat breakfast. I am very ___.", answer: "hungry", choices: ["hungry", "tired", "angry"], tip: "Hungry means wanting to eat." },
      { sentence: "I worked all day. Now I am ___.", answer: "tired", choices: ["tired", "excited", "hungry"], tip: "Tired means needing rest or sleep." },
      { sentence: "Her son is late. She is ___ about him.", answer: "worried", choices: ["worried", "excited", "hungry"], tip: "Worried means thinking something bad might happen." },
      { sentence: "We go on vacation tomorrow. I am so ___.", answer: "excited", choices: ["angry", "excited", "tired"], tip: "Excited means very happy about something that is going to happen." },
      { sentence: "He was ___ when someone took his parking space.", answer: "angry", choices: ["angry", "hungry", "excited"], tip: "Angry means very upset with someone or something." },
      { sentence: "The baby is ___. She needs a nap.", answer: "tired", choices: ["tired", "worried", "angry"], tip: "Tired means needing rest or sleep." },
      { sentence: "Do not be ___. Everything will be OK.", answer: "worried", choices: ["excited", "worried", "hungry"], tip: "Worried means thinking something bad might happen." },
      { sentence: "The fans cheered and jumped. They were very ___.", answer: "excited", choices: ["excited", "tired", "hungry"], tip: "Excited means very happy about something." },
      { sentence: "My stomach is making noises. I am ___.", answer: "hungry", choices: ["hungry", "excited", "angry"], tip: "When you are hungry, your stomach can make noises." },
      { sentence: "She did not sleep last night. She is ___ today.", answer: "tired", choices: ["tired", "hungry", "excited"], tip: "Tired means needing rest or sleep." },
      { sentence: "A big storm is coming. Grandma is ___.", answer: "worried", choices: ["worried", "hungry", "tired"], tip: "Worried means thinking something bad might happen." },
      { sentence: "The kids are ___ about the birthday party tomorrow.", answer: "excited", choices: ["excited", "angry", "tired"], tip: "Excited means very happy about something that is going to happen." },
      { sentence: "The teacher was ___ because nobody did the homework.", answer: "angry", choices: ["angry", "excited", "hungry"], tip: "Angry means very upset with someone or something." },
      { sentence: "Dinner is ready. Everyone is ___.", answer: "hungry", choices: ["hungry", "worried", "excited"], tip: "Hungry means wanting to eat." },
      { sentence: "I cannot find my passport. I am ___.", answer: "worried", choices: ["worried", "tired", "excited"], tip: "Worried means thinking something bad might happen." },
      { sentence: "Someone broke his window. He is very ___.", answer: "angry", choices: ["angry", "tired", "excited"], tip: "Angry means very upset with someone or something." }
    ]
  },
  {
    id: "words-everyday-verbs", category: "words-new", section: "Everyday words", type: "words", name: "Action words",
    words: [
      { word: "borrow", kind: "verb", meaning: "to take something and give it back later", example: "Can I borrow your pen?" },
      { word: "carry", kind: "verb", meaning: "to hold something and take it with you", example: "I carry my lunch in a small bag." },
      { word: "choose", kind: "verb", meaning: "to pick one thing from many", example: "You can choose any seat." },
      { word: "forget", kind: "verb", meaning: "to not remember something", example: "I always forget her birthday." },
      { word: "remember", kind: "verb", meaning: "to keep something in your mind", example: "Do you remember my name?" }
    ],
    questions: [
      { sentence: "Can I ___ your umbrella? I will give it back tomorrow.", answer: "borrow", choices: ["borrow", "carry", "choose"], tip: "Borrow means take something and give it back later." },
      { sentence: "These boxes are heavy. Can you help me ___ them?", answer: "carry", choices: ["forget", "carry", "borrow"], tip: "Carry means hold something and take it with you." },
      { sentence: "There are three cakes. Which one will you ___?", answer: "choose", choices: ["choose", "remember", "carry"], tip: "Choose means pick one thing from many." },
      { sentence: "I wrote it down so I would not ___.", answer: "forget", choices: ["forget", "choose", "borrow"], tip: "Forget means not remember." },
      { sentence: "Do you ___ where we parked the car?", answer: "remember", choices: ["remember", "carry", "borrow"], tip: "Remember means keep something in your mind." },
      { sentence: "She likes to ___ books from the library.", answer: "borrow", choices: ["borrow", "choose", "forget"], tip: "You borrow library books, then give them back." },
      { sentence: "Please ___ to lock the door.", answer: "remember", choices: ["remember", "forget", "carry"], tip: "Remember to do something means do not forget it." },
      { sentence: "It is hard to ___ between pizza and pasta.", answer: "choose", choices: ["choose", "carry", "borrow"], tip: "Choose means pick one thing from many." },
      { sentence: "My phone is dead. Can I ___ your charger?", answer: "borrow", choices: ["borrow", "carry", "remember"], tip: "Borrow means take something and give it back later." },
      { sentence: "Please ___ the bags into the kitchen.", answer: "carry", choices: ["carry", "choose", "forget"], tip: "Carry means hold something and take it with you." },
      { sentence: "You can ___ one prize from the box.", answer: "choose", choices: ["choose", "borrow", "carry"], tip: "Choose means pick one thing from many." },
      { sentence: "Do not ___ to call your grandmother.", answer: "forget", choices: ["forget", "remember", "carry"], tip: "Do not forget means remember to do it." },
      { sentence: "I cannot ___ where I put my glasses.", answer: "remember", choices: ["remember", "choose", "borrow"], tip: "Remember means keep something in your mind." },
      { sentence: "Dad had to ___ my little brother home.", answer: "carry", choices: ["carry", "borrow", "choose"], tip: "Carry means hold something and take it with you." },
      { sentence: "We need to ___ a color for the kitchen.", answer: "choose", choices: ["choose", "forget", "borrow"], tip: "Choose means pick one thing from many." },
      { sentence: "I always ___ my keys at home.", answer: "forget", choices: ["forget", "remember", "carry"], tip: "Forget means not remember." }
    ]
  },

  // New words for "I know some English, and I want to build on it"
  {
    id: "words-work", category: "words-build", type: "words", name: "Words for work",
    words: [
      { word: "deadline", kind: "noun", meaning: "the time or day by which something must be finished", example: "The deadline for the report is Friday." },
      { word: "schedule", kind: "noun", meaning: "a plan that shows when things will happen", example: "My schedule is full this week." },
      { word: "colleague", kind: "noun", meaning: "a person you work with", example: "I had lunch with a colleague." },
      { word: "available", kind: "adjective", meaning: "free to do something, or ready to be used", example: "Are you available for a call at 2:00?" },
      { word: "confirm", kind: "verb", meaning: "to say that something is true or will definitely happen", example: "Please confirm your appointment." }
    ],
    questions: [
      { sentence: "We must finish the project before the ___ on Monday.", answer: "deadline", choices: ["deadline", "schedule", "colleague"], tip: "Deadline = the time something must be finished by." },
      { sentence: "Let me check my ___ to see if I'm free on Tuesday.", answer: "schedule", choices: ["schedule", "deadline", "colleague"], tip: "Schedule = a plan of when things will happen." },
      { sentence: "My ___ Ana sits at the desk next to mine.", answer: "colleague", choices: ["colleague", "deadline", "schedule"], tip: "Colleague = a person you work with." },
      { sentence: "Is the meeting room ___ this afternoon?", answer: "available", choices: ["available", "confirm", "deadline"], tip: "Available = free, or ready to be used." },
      { sentence: "Can you ___ that you received my email?", answer: "confirm", choices: ["confirm", "available", "schedule"], tip: "Confirm = say that something is true." },
      { sentence: "The doctor isn't ___ until next week.", answer: "available", choices: ["available", "colleague", "confirm"], tip: "Available = free to do something." },
      { sentence: "I missed the ___, so my application was late.", answer: "deadline", choices: ["deadline", "colleague", "schedule"], tip: "Deadline = the time something must be finished by." },
      { sentence: "The hotel sent an email to ___ our booking.", answer: "confirm", choices: ["confirm", "deadline", "available"], tip: "Confirm = say that something will definitely happen." },
      { sentence: "The ___ for this year's taxes is April 15.", answer: "deadline", choices: ["deadline", "colleague", "schedule"], tip: "Deadline = the time something must be finished by." },
      { sentence: "The bus ___ changed, so I'll take the earlier one.", answer: "schedule", choices: ["schedule", "deadline", "colleague"], tip: "Schedule = a plan of when things will happen." },
      { sentence: "I asked a ___ to cover my shift on Friday.", answer: "colleague", choices: ["colleague", "schedule", "deadline"], tip: "Colleague = a person you work with." },
      { sentence: "Sorry, that size isn't ___ right now.", answer: "available", choices: ["available", "confirm", "colleague"], tip: "Available = ready to be bought or used." },
      { sentence: "Please ___ your address before we ship the order.", answer: "confirm", choices: ["confirm", "available", "deadline"], tip: "Confirm = say that something is true." },
      { sentence: "My ___ and I are working on the same project.", answer: "colleague", choices: ["colleague", "deadline", "available"], tip: "Colleague = a person you work with." },
      { sentence: "Is the manager ___ to talk today?", answer: "available", choices: ["available", "colleague", "schedule"], tip: "Available = free to do something." },
      { sentence: "Can you send me the meeting ___ for next week?", answer: "schedule", choices: ["schedule", "confirm", "colleague"], tip: "Schedule = a plan of when things will happen." }
    ]
  },
  {
    id: "words-describing", category: "words-build", type: "words", name: "Words for describing places and things",
    words: [
      { word: "convenient", kind: "adjective", meaning: "easy and useful for you; saving time or trouble", example: "Online shopping is convenient." },
      { word: "reliable", kind: "adjective", meaning: "able to be trusted to work well or do what you expect", example: "My old car is still reliable." },
      { word: "crowded", kind: "adjective", meaning: "full of people", example: "The train was crowded this morning." },
      { word: "affordable", kind: "adjective", meaning: "cheap enough for people to buy", example: "We found an affordable apartment." },
      { word: "comfortable", kind: "adjective", meaning: "pleasant and relaxing to wear, sit in, or use", example: "This sofa is very comfortable." }
    ],
    questions: [
      { sentence: "The beach was so ___ that we couldn't find a place to sit.", answer: "crowded", choices: ["crowded", "reliable", "affordable"], tip: "Crowded = full of people." },
      { sentence: "These shoes are ___, so I can wear them all day.", answer: "comfortable", choices: ["comfortable", "crowded", "convenient"], tip: "Comfortable = pleasant to wear or use." },
      { sentence: "The bus stop is right outside, which is very ___.", answer: "convenient", choices: ["convenient", "crowded", "reliable"], tip: "Convenient = easy and useful, saving time or trouble." },
      { sentence: "I need a ___ car that won't break down.", answer: "reliable", choices: ["reliable", "crowded", "comfortable"], tip: "Reliable = you can trust it to work well." },
      { sentence: "The hotel was nice and ___, only $60 a night.", answer: "affordable", choices: ["affordable", "crowded", "reliable"], tip: "Affordable = cheap enough to buy." },
      { sentence: "Is Thursday a ___ time for you to meet?", answer: "convenient", choices: ["convenient", "affordable", "crowded"], tip: "A convenient time = a time that's easy for you." },
      { sentence: "She's very ___: she always does what she promises.", answer: "reliable", choices: ["reliable", "affordable", "convenient"], tip: "Reliable people do what you expect them to." },
      { sentence: "The restaurant gets ___ on Friday nights.", answer: "crowded", choices: ["crowded", "comfortable", "affordable"], tip: "Crowded = full of people." },
      { sentence: "The waiting room has ___ chairs, so I didn't mind waiting.", answer: "comfortable", choices: ["comfortable", "crowded", "reliable"], tip: "Comfortable = pleasant to sit in." },
      { sentence: "The subway is always ___ at 8 a.m.", answer: "crowded", choices: ["crowded", "affordable", "convenient"], tip: "Crowded = full of people." },
      { sentence: "This phone is ___, and it still works well.", answer: "affordable", choices: ["affordable", "crowded", "comfortable"], tip: "Affordable = cheap enough to buy." },
      { sentence: "Online banking is ___ because you can do it from home.", answer: "convenient", choices: ["convenient", "crowded", "comfortable"], tip: "Convenient = easy and useful, saving time or trouble." },
      { sentence: "We need a ___ babysitter who always arrives on time.", answer: "reliable", choices: ["reliable", "crowded", "affordable"], tip: "Reliable people do what you expect them to." },
      { sentence: "The store has ___ prices, so many families shop there.", answer: "affordable", choices: ["affordable", "comfortable", "reliable"], tip: "Affordable = cheap enough to buy." },
      { sentence: "This mattress is so ___ that I fell asleep right away.", answer: "comfortable", choices: ["comfortable", "convenient", "crowded"], tip: "Comfortable = pleasant and relaxing to lie on." },
      { sentence: "The weather app isn't very ___. It's often wrong.", answer: "reliable", choices: ["reliable", "affordable", "crowded"], tip: "Reliable = you can trust it to be right." }
    ]
  },
  {
    id: "words-shopping", category: "words-build", type: "words", name: "Shopping and money",
    words: [
      { word: "receipt", kind: "noun", meaning: "a paper that shows what you bought and paid. The p is silent.", example: "Keep the receipt in case it doesn't fit." },
      { word: "discount", kind: "noun", meaning: "a lower price than usual", example: "Students get a 10% discount." },
      { word: "refund", kind: "noun", meaning: "money that is given back to you", example: "The store gave me a refund for the broken lamp." },
      { word: "cash", kind: "noun", meaning: "money in coins and paper bills", example: "Do you want to pay with cash or card?" },
      { word: "afford", kind: "verb", meaning: "to have enough money to pay for something", example: "We can't afford a new car this year." }
    ],
    questions: [
      { sentence: "Keep your ___ so you can return the shirt.", answer: "receipt", choices: ["receipt", "discount", "cash"], tip: "A receipt shows what you bought and paid." },
      { sentence: "The jacket was half price with the ___.", answer: "discount", choices: ["discount", "refund", "receipt"], tip: "A discount is a lower price than usual." },
      { sentence: "The blender broke, so I asked for a ___.", answer: "refund", choices: ["refund", "cash", "discount"], tip: "A refund is money given back to you." },
      { sentence: "This small shop only takes ___, not cards.", answer: "cash", choices: ["cash", "receipt", "refund"], tip: "Cash is coins and paper bills." },
      { sentence: "I can't ___ a vacation this year.", answer: "afford", choices: ["afford", "refund", "discount"], tip: "Afford = have enough money to pay for something." },
      { sentence: "The cashier handed me the ___ with my change.", answer: "receipt", choices: ["receipt", "afford", "discount"], tip: "A receipt shows what you bought and paid." },
      { sentence: "I took some ___ out of the ATM.", answer: "cash", choices: ["cash", "refund", "discount"], tip: "An ATM gives you cash." },
      { sentence: "Members get a 15% ___ on everything.", answer: "discount", choices: ["discount", "cash", "receipt"], tip: "A discount is a lower price than usual." },
      { sentence: "The package never arrived, so they gave me a full ___.", answer: "refund", choices: ["refund", "receipt", "cash"], tip: "A refund is money given back to you." },
      { sentence: "Can you ___ the rent on one salary?", answer: "afford", choices: ["afford", "discount", "refund"], tip: "Afford = have enough money to pay for something." },
      { sentence: "The ___ shows that I paid $42.", answer: "receipt", choices: ["receipt", "cash", "refund"], tip: "A receipt shows what you paid." },
      { sentence: "Is there a ___ for seniors?", answer: "discount", choices: ["discount", "refund", "cash"], tip: "A discount is a lower price than usual." },
      { sentence: "You can get a ___ within 30 days if you return it.", answer: "refund", choices: ["refund", "receipt", "afford"], tip: "A refund is money given back to you." },
      { sentence: "Do you have any ___ for the parking meter?", answer: "cash", choices: ["cash", "discount", "afford"], tip: "Cash is coins and paper bills." },
      { sentence: "We saved for months so we could ___ the new couch.", answer: "afford", choices: ["afford", "cash", "receipt"], tip: "Afford = have enough money to pay for something." },
      { sentence: "Without a ___, the store won't take it back.", answer: "receipt", choices: ["receipt", "discount", "afford"], tip: "Stores often need a receipt for returns." }
    ]
  },
  {
    id: "words-doctor", category: "words-build", type: "words", name: "At the doctor",
    words: [
      { word: "appointment", kind: "noun", meaning: "a set time to see someone, like a doctor", example: "I have a doctor's appointment at 3:00." },
      { word: "symptom", kind: "noun", meaning: "a sign that you are sick, like a cough or a headache", example: "A sore throat is a common symptom of a cold." },
      { word: "prescription", kind: "noun", meaning: "a doctor's note that lets you get medicine", example: "The doctor wrote me a prescription." },
      { word: "fever", kind: "noun", meaning: "a body temperature that is higher than normal", example: "She stayed home because she had a fever." },
      { word: "pharmacy", kind: "noun", meaning: "a store where you get medicine", example: "I picked up my medicine at the pharmacy." }
    ],
    questions: [
      { sentence: "I need to make an ___ with the dentist.", answer: "appointment", choices: ["appointment", "fever", "pharmacy"], tip: "An appointment is a set time to see someone." },
      { sentence: "A cough is one ___ of the flu.", answer: "symptom", choices: ["symptom", "pharmacy", "prescription"], tip: "A symptom is a sign that you are sick." },
      { sentence: "Take this ___ to the pharmacy.", answer: "prescription", choices: ["prescription", "symptom", "fever"], tip: "A prescription lets you get medicine." },
      { sentence: "His temperature is very high. He has a ___.", answer: "fever", choices: ["fever", "appointment", "pharmacy"], tip: "A fever is a high body temperature." },
      { sentence: "The ___ on the corner is open until 9 p.m.", answer: "pharmacy", choices: ["pharmacy", "symptom", "appointment"], tip: "A pharmacy is a store for medicine." },
      { sentence: "I'm sorry I'm late for my ___.", answer: "appointment", choices: ["appointment", "prescription", "symptom"], tip: "An appointment is a set time to see someone." },
      { sentence: "Tiredness can be a ___ of many illnesses.", answer: "symptom", choices: ["symptom", "fever", "pharmacy"], tip: "A symptom is a sign that you are sick." },
      { sentence: "You can't buy this medicine without a ___.", answer: "prescription", choices: ["prescription", "fever", "appointment"], tip: "A prescription lets you get medicine." },
      { sentence: "Drink water and rest if you have a ___.", answer: "fever", choices: ["fever", "pharmacy", "symptom"], tip: "A fever is a high body temperature." },
      { sentence: "The ___ called to say my medicine is ready.", answer: "pharmacy", choices: ["pharmacy", "fever", "appointment"], tip: "A pharmacy is a store for medicine." },
      { sentence: "Can I change my ___ to Friday morning?", answer: "appointment", choices: ["appointment", "symptom", "fever"], tip: "An appointment is a set time to see someone." },
      { sentence: "A rash is a common ___ of an allergy.", answer: "symptom", choices: ["symptom", "prescription", "pharmacy"], tip: "A symptom is a sign that you are sick." },
      { sentence: "The doctor gave me a ___ for antibiotics.", answer: "prescription", choices: ["prescription", "appointment", "symptom"], tip: "A prescription lets you get medicine." },
      { sentence: "The baby has a ___, so we called the doctor.", answer: "fever", choices: ["fever", "prescription", "pharmacy"], tip: "A fever is a high body temperature." },
      { sentence: "Is there a 24-hour ___ near here?", answer: "pharmacy", choices: ["pharmacy", "symptom", "fever"], tip: "A pharmacy is a store for medicine." },
      { sentence: "I need to refill my ___ before I travel.", answer: "prescription", choices: ["prescription", "appointment", "fever"], tip: "You refill a prescription to get more medicine." }
    ]
  },
  {
    id: "words-travel", category: "words-build", type: "words", name: "Travel",
    words: [
      { word: "passport", kind: "noun", meaning: "an official document you need to travel to other countries", example: "Don't forget your passport." },
      { word: "luggage", kind: "noun", meaning: "the bags and suitcases you take on a trip", example: "Our luggage was very heavy." },
      { word: "reservation", kind: "noun", meaning: "an arrangement to keep a room, table, or seat for you", example: "I made a reservation for dinner at 7." },
      { word: "departure", kind: "noun", meaning: "the act of leaving, especially for a plane, train, or bus", example: "Our departure time is 6:15 a.m." },
      { word: "destination", kind: "noun", meaning: "the place you are traveling to", example: "Our final destination is Seattle." }
    ],
    questions: [
      { sentence: "You need a ___ to fly to another country.", answer: "passport", choices: ["passport", "luggage", "departure"], tip: "A passport lets you travel to other countries." },
      { sentence: "We checked our ___ at the airport counter.", answer: "luggage", choices: ["luggage", "reservation", "destination"], tip: "Luggage = your bags and suitcases." },
      { sentence: "I have a ___ for two at 8 p.m.", answer: "reservation", choices: ["reservation", "passport", "departure"], tip: "A reservation keeps a table or room for you." },
      { sentence: "The flight's ___ was delayed by an hour.", answer: "departure", choices: ["departure", "destination", "luggage"], tip: "Departure = leaving." },
      { sentence: "Hawaii is a popular vacation ___.", answer: "destination", choices: ["destination", "departure", "reservation"], tip: "A destination is where you are going." },
      { sentence: "My ___ expires next year, so I need to renew it.", answer: "passport", choices: ["passport", "reservation", "luggage"], tip: "Passports expire and must be renewed." },
      { sentence: "Each passenger can bring one piece of ___.", answer: "luggage", choices: ["luggage", "passport", "destination"], tip: "Luggage = your bags and suitcases." },
      { sentence: "Did you make a hotel ___?", answer: "reservation", choices: ["reservation", "departure", "luggage"], tip: "A reservation keeps a room for you." },
      { sentence: "Check the ___ time on your ticket.", answer: "departure", choices: ["departure", "passport", "reservation"], tip: "Departure = the time you leave." },
      { sentence: "After ten hours, we finally reached our ___.", answer: "destination", choices: ["destination", "luggage", "passport"], tip: "A destination is where you are going." },
      { sentence: "Show your ___ at the border.", answer: "passport", choices: ["passport", "destination", "departure"], tip: "You show your passport when you cross a border." },
      { sentence: "Our ___ didn't arrive, so we had no clean clothes.", answer: "luggage", choices: ["luggage", "departure", "reservation"], tip: "Luggage = your bags and suitcases." },
      { sentence: "We canceled our ___ because of the storm.", answer: "reservation", choices: ["reservation", "destination", "passport"], tip: "A reservation keeps a room, table, or seat for you." },
      { sentence: "Please arrive two hours before ___.", answer: "departure", choices: ["departure", "luggage", "destination"], tip: "Departure = leaving." },
      { sentence: "The taxi driver asked for our ___.", answer: "destination", choices: ["destination", "reservation", "luggage"], tip: "A destination is where you are going." },
      { sentence: "Keep your ___ in a safe place while traveling.", answer: "passport", choices: ["passport", "departure", "destination"], tip: "A passport is an important document." }
    ]
  },
  {
    id: "words-renting", category: "words-build", type: "words", name: "Renting a home",
    words: [
      { word: "rent", kind: "noun", meaning: "money you pay every month to live in a place", example: "The rent is due on the first of the month." },
      { word: "landlord", kind: "noun", meaning: "the person who owns the home you rent", example: "Call the landlord if the heat stops working." },
      { word: "lease", kind: "noun", meaning: "a contract to rent a home for a set time", example: "We signed a one-year lease." },
      { word: "deposit", kind: "noun", meaning: "money you pay at the start and get back later if nothing is damaged", example: "We got our deposit back when we moved out." },
      { word: "utilities", kind: "noun", meaning: "services like water, gas, and electricity", example: "Utilities are included in the rent." }
    ],
    questions: [
      { sentence: "The ___ is $1,200 a month.", answer: "rent", choices: ["rent", "lease", "deposit"], tip: "Rent is the money you pay each month." },
      { sentence: "The ___ fixed the broken window.", answer: "landlord", choices: ["landlord", "lease", "utilities"], tip: "The landlord owns the home you rent." },
      { sentence: "Read the ___ carefully before you sign it.", answer: "lease", choices: ["lease", "landlord", "rent"], tip: "A lease is a rental contract." },
      { sentence: "We paid a ___ of one month's rent.", answer: "deposit", choices: ["deposit", "utilities", "landlord"], tip: "A deposit is paid at the start and returned later." },
      { sentence: "Are ___ like water and electricity included?", answer: "utilities", choices: ["utilities", "deposit", "lease"], tip: "Utilities = water, gas, and electricity." },
      { sentence: "I paid the ___ late, so there was a fee.", answer: "rent", choices: ["rent", "landlord", "utilities"], tip: "Rent is the money you pay each month." },
      { sentence: "Our ___ lives in the apartment downstairs.", answer: "landlord", choices: ["landlord", "deposit", "rent"], tip: "The landlord owns the home you rent." },
      { sentence: "The ___ ends in June, so we need to decide whether to stay.", answer: "lease", choices: ["lease", "deposit", "utilities"], tip: "A lease is for a set time." },
      { sentence: "They kept part of our ___ because of a stain on the carpet.", answer: "deposit", choices: ["deposit", "rent", "landlord"], tip: "Damage can be paid for out of the deposit." },
      { sentence: "In winter, our ___ cost more because of the heating.", answer: "utilities", choices: ["utilities", "lease", "rent"], tip: "Utilities = water, gas, and electricity." },
      { sentence: "Ask the ___ if pets are allowed.", answer: "landlord", choices: ["landlord", "utilities", "deposit"], tip: "The landlord makes the rules for the home." },
      { sentence: "Can we break the ___ if we move for work?", answer: "lease", choices: ["lease", "rent", "deposit"], tip: "Breaking a lease = ending the contract early." },
      { sentence: "The ___ went up by $50 this year.", answer: "rent", choices: ["rent", "deposit", "lease"], tip: "Rent is the money you pay each month." },
      { sentence: "You will get your ___ back if the apartment is clean.", answer: "deposit", choices: ["deposit", "lease", "utilities"], tip: "A deposit is returned if nothing is damaged." },
      { sentence: "We split the ___ with our roommate.", answer: "utilities", choices: ["utilities", "landlord", "lease"], tip: "Utilities = water, gas, and electricity." },
      { sentence: "Tell the ___ about the leaking faucet.", answer: "landlord", choices: ["landlord", "rent", "lease"], tip: "The landlord fixes problems in the home." }
    ]
  },
  {
    id: "words-phone", category: "words-build", type: "words", name: "Phones and email",
    words: [
      { word: "attachment", kind: "noun", meaning: "a file sent with an email", example: "I sent the photo as an attachment." },
      { word: "password", kind: "noun", meaning: "a secret word that lets you into an account", example: "Never share your password." },
      { word: "voicemail", kind: "noun", meaning: "a message you leave when someone doesn't answer the phone", example: "She left me a voicemail." },
      { word: "download", kind: "verb", meaning: "to copy a file or app from the internet to your device", example: "Download the app to order online." },
      { word: "reply", kind: "verb", meaning: "to answer a message", example: "Please reply by Friday." }
    ],
    questions: [
      { sentence: "I forgot my ___, so I can't log in.", answer: "password", choices: ["password", "attachment", "voicemail"], tip: "A password lets you into an account." },
      { sentence: "The report is in the ___ to this email.", answer: "attachment", choices: ["attachment", "password", "voicemail"], tip: "An attachment is a file sent with an email." },
      { sentence: "He didn't answer, so I left a ___.", answer: "voicemail", choices: ["voicemail", "attachment", "password"], tip: "A voicemail is a phone message." },
      { sentence: "You can ___ the form from our website.", answer: "download", choices: ["download", "reply", "voicemail"], tip: "Download = copy from the internet to your device." },
      { sentence: "Please ___ to this email by Monday.", answer: "reply", choices: ["reply", "download", "password"], tip: "Reply = answer a message." },
      { sentence: "Use a strong ___ with letters and numbers.", answer: "password", choices: ["password", "voicemail", "reply"], tip: "A strong password is hard to guess." },
      { sentence: "The ___ was too large to send by email.", answer: "attachment", choices: ["attachment", "reply", "download"], tip: "An attachment is a file sent with an email." },
      { sentence: "Check your ___. I called you this morning.", answer: "voicemail", choices: ["voicemail", "password", "attachment"], tip: "A voicemail is a phone message." },
      { sentence: "It takes a few minutes to ___ the update.", answer: "download", choices: ["download", "reply", "attachment"], tip: "Download = copy from the internet to your device." },
      { sentence: "She didn't ___ to my text yet.", answer: "reply", choices: ["reply", "download", "voicemail"], tip: "Reply = answer a message." },
      { sentence: "Never write your ___ on a sticky note.", answer: "password", choices: ["password", "download", "attachment"], tip: "Keep your password secret." },
      { sentence: "Did you open the ___ I sent you?", answer: "attachment", choices: ["attachment", "voicemail", "password"], tip: "An attachment is a file sent with an email." },
      { sentence: "My ___ box is full, so people can't leave messages.", answer: "voicemail", choices: ["voicemail", "reply", "download"], tip: "A voicemail is a phone message." },
      { sentence: "Don't ___ files from websites you don't trust.", answer: "download", choices: ["download", "reply", "password"], tip: "Download = copy from the internet to your device." },
      { sentence: "I'll ___ as soon as I get home.", answer: "reply", choices: ["reply", "download", "attachment"], tip: "Reply = answer a message." },
      { sentence: "Change your ___ every few months.", answer: "password", choices: ["password", "voicemail", "download"], tip: "Changing your password keeps your account safe." }
    ]
  },

  // New words for "I want to polish my English"
  {
    id: "words-precise-verbs", category: "words-polish", type: "words", name: "Precise action words",
    words: [
      { word: "clarify", kind: "verb", meaning: "to make something clearer or easier to understand", example: "Could you clarify what you mean?" },
      { word: "emphasize", kind: "verb", meaning: "to show that something is especially important", example: "The coach emphasized teamwork." },
      { word: "postpone", kind: "verb", meaning: "to move an event to a later time", example: "They postponed the wedding until June." },
      { word: "anticipate", kind: "verb", meaning: "to expect something and prepare for it", example: "We anticipate a busy weekend." },
      { word: "acknowledge", kind: "verb", meaning: "to accept that something is true, or to show that you received something", example: "She acknowledged her mistake." }
    ],
    questions: [
      { sentence: "Because of the storm, we had to ___ the picnic until next week.", answer: "postpone", choices: ["postpone", "clarify", "emphasize"], tip: "Postpone = move to a later time." },
      { sentence: "Let me ___ the instructions, since some people were confused.", answer: "clarify", choices: ["clarify", "postpone", "anticipate"], tip: "Clarify = make something clearer." },
      { sentence: "I want to ___ how important it is to arrive on time.", answer: "emphasize", choices: ["emphasize", "postpone", "acknowledge"], tip: "Emphasize = show that something is especially important." },
      { sentence: "We ___ that sales will rise in December.", answer: "anticipate", choices: ["anticipate", "clarify", "postpone"], tip: "Anticipate = expect something and prepare for it." },
      { sentence: "Please ___ this email so I know you received it.", answer: "acknowledge", choices: ["acknowledge", "anticipate", "emphasize"], tip: "Acknowledge = show that you received something." },
      { sentence: "Can you ___ your answer? I didn't quite understand it.", answer: "clarify", choices: ["clarify", "acknowledge", "postpone"], tip: "Clarify = make something easier to understand." },
      { sentence: "He finally had to ___ that he was wrong.", answer: "acknowledge", choices: ["acknowledge", "anticipate", "clarify"], tip: "Acknowledge = accept that something is true." },
      { sentence: "Good drivers ___ problems before they happen.", answer: "anticipate", choices: ["anticipate", "emphasize", "postpone"], tip: "Anticipate = expect something and prepare for it." },
      { sentence: "Can we ___ the meeting until Thursday?", answer: "postpone", choices: ["postpone", "clarify", "acknowledge"], tip: "Postpone = move to a later time." },
      { sentence: "The report should ___ the most important results.", answer: "emphasize", choices: ["emphasize", "postpone", "anticipate"], tip: "Emphasize = show that something is especially important." },
      { sentence: "Could you ___ the difference between these two plans?", answer: "clarify", choices: ["clarify", "postpone", "emphasize"], tip: "Clarify = make something easier to understand." },
      { sentence: "Companies try to ___ what customers will want next year.", answer: "anticipate", choices: ["anticipate", "acknowledge", "clarify"], tip: "Anticipate = expect something and prepare for it." },
      { sentence: "It takes courage to ___ a mistake in public.", answer: "acknowledge", choices: ["acknowledge", "postpone", "emphasize"], tip: "Acknowledge = accept that something is true." },
      { sentence: "If it rains, we will ___ the game.", answer: "postpone", choices: ["postpone", "anticipate", "clarify"], tip: "Postpone = move to a later time." },
      { sentence: "Teachers often ___ key words by writing them in bold.", answer: "emphasize", choices: ["emphasize", "acknowledge", "anticipate"], tip: "Emphasize = show that something is especially important." },
      { sentence: "We didn't ___ that so many people would come.", answer: "anticipate", choices: ["anticipate", "clarify", "emphasize"], tip: "Anticipate = expect something before it happens." },
      { sentence: "Please ___ receipt of the package by replying to this email.", answer: "acknowledge", choices: ["acknowledge", "anticipate", "postpone"], tip: "Acknowledge = show that you received something." },
      { sentence: "Let me ___: the deadline is Friday, not Monday.", answer: "clarify", choices: ["clarify", "emphasize", "postpone"], tip: "Clarify = make something clearer." },
      { sentence: "The airline had to ___ the flight because of fog.", answer: "postpone", choices: ["postpone", "acknowledge", "clarify"], tip: "Postpone = move to a later time." },
      { sentence: "I can't ___ enough how grateful we are.", answer: "emphasize", choices: ["emphasize", "anticipate", "clarify"], tip: "\"I can't emphasize enough\" = this is very important to me." },
      { sentence: "Good chess players ___ their opponent's next move.", answer: "anticipate", choices: ["anticipate", "postpone", "acknowledge"], tip: "Anticipate = expect something and prepare for it." },
      { sentence: "The company refused to ___ the problem.", answer: "acknowledge", choices: ["acknowledge", "emphasize", "clarify"], tip: "Acknowledge = accept that something is true." },
      { sentence: "The new manual should ___ how the system works.", answer: "clarify", choices: ["clarify", "anticipate", "postpone"], tip: "Clarify = make something easier to understand." },
      { sentence: "Don't ___ your doctor's appointment again; it's important.", answer: "postpone", choices: ["postpone", "emphasize", "acknowledge"], tip: "Postpone = move to a later time." }
    ]
  },
  {
    id: "words-precise-adjectives", category: "words-polish", type: "words", name: "Precise describing words",
    words: [
      { word: "meticulous", kind: "adjective", meaning: "very careful about every small detail", example: "He keeps meticulous notes." },
      { word: "resilient", kind: "adjective", meaning: "able to recover quickly after something difficult", example: "Children are often resilient." },
      { word: "candid", kind: "adjective", meaning: "honest and direct, even when the truth is uncomfortable", example: "Thank you for your candid feedback." },
      { word: "ambiguous", kind: "adjective", meaning: "having more than one possible meaning, so it's unclear", example: "The ending of the movie was ambiguous." },
      { word: "pragmatic", kind: "adjective", meaning: "dealing with problems in a sensible, practical way", example: "We need a pragmatic solution." }
    ],
    questions: [
      { sentence: "Her ___ planning meant that nothing was forgotten.", answer: "meticulous", choices: ["meticulous", "candid", "ambiguous"], tip: "Meticulous = very careful about every detail." },
      { sentence: "The town was ___ and rebuilt quickly after the flood.", answer: "resilient", choices: ["resilient", "ambiguous", "candid"], tip: "Resilient = able to recover quickly." },
      { sentence: "To be ___, I didn't enjoy the movie.", answer: "candid", choices: ["candid", "meticulous", "pragmatic"], tip: "Candid = honest and direct." },
      { sentence: "The question was ___, so half the class answered it the wrong way.", answer: "ambiguous", choices: ["ambiguous", "resilient", "meticulous"], tip: "Ambiguous = it could mean more than one thing." },
      { sentence: "Instead of waiting for the perfect plan, let's take a ___ approach.", answer: "pragmatic", choices: ["pragmatic", "ambiguous", "candid"], tip: "Pragmatic = sensible and practical." },
      { sentence: "The instructions were ___, and nobody knew which button to press.", answer: "ambiguous", choices: ["ambiguous", "pragmatic", "resilient"], tip: "Ambiguous = unclear, with more than one possible meaning." },
      { sentence: "She's ___ about her work and checks every number twice.", answer: "meticulous", choices: ["meticulous", "resilient", "candid"], tip: "Meticulous = very careful about every detail." },
      { sentence: "Small businesses had to be ___ during the hard times.", answer: "resilient", choices: ["resilient", "candid", "ambiguous"], tip: "Resilient = able to recover after something difficult." },
      { sentence: "The detective was ___ and noticed every tiny clue.", answer: "meticulous", choices: ["meticulous", "candid", "ambiguous"], tip: "Meticulous = very careful about every detail." },
      { sentence: "Her ___ answer surprised everyone with its honesty.", answer: "candid", choices: ["candid", "pragmatic", "resilient"], tip: "Candid = honest and direct." },
      { sentence: "The contract has an ___ sentence that could mean two things.", answer: "ambiguous", choices: ["ambiguous", "meticulous", "pragmatic"], tip: "Ambiguous = it could mean more than one thing." },
      { sentence: "A ___ leader focuses on what actually works.", answer: "pragmatic", choices: ["pragmatic", "ambiguous", "candid"], tip: "Pragmatic = sensible and practical." },
      { sentence: "After losing his job, he stayed ___ and quickly found a new one.", answer: "resilient", choices: ["resilient", "meticulous", "ambiguous"], tip: "Resilient = able to recover after something difficult." },
      { sentence: "She keeps ___ records of every expense.", answer: "meticulous", choices: ["meticulous", "resilient", "pragmatic"], tip: "Meticulous = very careful about every detail." },
      { sentence: "Let's be ___: the plan isn't working.", answer: "candid", choices: ["candid", "ambiguous", "resilient"], tip: "Candid = honest and direct." },
      { sentence: "Instead of arguing, they found a ___ compromise.", answer: "pragmatic", choices: ["pragmatic", "candid", "meticulous"], tip: "Pragmatic = sensible and practical." },
      { sentence: "Some plants are ___ enough to survive a long drought.", answer: "resilient", choices: ["resilient", "candid", "ambiguous"], tip: "Resilient = able to recover after something difficult." },
      { sentence: "His text was ___, so I wasn't sure if he was joking.", answer: "ambiguous", choices: ["ambiguous", "pragmatic", "meticulous"], tip: "Ambiguous = unclear, with more than one possible meaning." },
      { sentence: "The editor did a ___ job and caught every typo.", answer: "meticulous", choices: ["meticulous", "ambiguous", "candid"], tip: "Meticulous = very careful about every detail." },
      { sentence: "Thank you for being so ___ about your concerns.", answer: "candid", choices: ["candid", "resilient", "pragmatic"], tip: "Candid = honest and direct." },
      { sentence: "A ___ approach is to fix the biggest problem first.", answer: "pragmatic", choices: ["pragmatic", "resilient", "ambiguous"], tip: "Pragmatic = sensible and practical." },
      { sentence: "The team proved ___ after losing their first three games.", answer: "resilient", choices: ["resilient", "pragmatic", "meticulous"], tip: "Resilient = able to recover after something difficult." },
      { sentence: "The sign was ___: did it mean left or right?", answer: "ambiguous", choices: ["ambiguous", "candid", "resilient"], tip: "Ambiguous = it could mean more than one thing." },
      { sentence: "Kids can be very ___ about what they think of your cooking.", answer: "candid", choices: ["candid", "meticulous", "pragmatic"], tip: "Candid = honest and direct." }
    ]
  },
  {
    id: "words-persuading", category: "words-polish", type: "words", name: "Words for persuading",
    words: [
      { word: "advocate", kind: "verb", meaning: "to publicly support an idea or cause", example: "She advocates for better public transportation." },
      { word: "concede", kind: "verb", meaning: "to admit that something is true, often unwillingly", example: "He conceded that she had a point." },
      { word: "refute", kind: "verb", meaning: "to prove that a statement or argument is wrong", example: "The new data refutes his claim." },
      { word: "substantiate", kind: "verb", meaning: "to support a claim with proof", example: "Can you substantiate that statistic?" },
      { word: "compelling", kind: "adjective", meaning: "so convincing or interesting that you pay attention", example: "She made a compelling case for the plan." }
    ],
    questions: [
      { sentence: "Many doctors ___ regular exercise for better sleep.", answer: "advocate", choices: ["advocate", "concede", "refute"], tip: "Advocate = publicly support." },
      { sentence: "I ___ that your plan is cheaper, but mine is faster.", answer: "concede", choices: ["concede", "refute", "substantiate"], tip: "Concede = admit something is true." },
      { sentence: "The scientist used new evidence to ___ the old theory.", answer: "refute", choices: ["refute", "advocate", "concede"], tip: "Refute = prove wrong." },
      { sentence: "You'll need documents to ___ your claim.", answer: "substantiate", choices: ["substantiate", "concede", "advocate"], tip: "Substantiate = support with proof." },
      { sentence: "The lawyer made a ___ argument, and the jury agreed.", answer: "compelling", choices: ["compelling", "refute", "concede"], tip: "Compelling = very convincing." },
      { sentence: "Our group will ___ for safer bike lanes.", answer: "advocate", choices: ["advocate", "substantiate", "refute"], tip: "Advocate for = publicly support." },
      { sentence: "After the vote, the candidate had to ___ defeat.", answer: "concede", choices: ["concede", "advocate", "compelling"], tip: "Concede defeat = admit you lost." },
      { sentence: "It's hard to ___ an argument backed by so much data.", answer: "refute", choices: ["refute", "advocate", "substantiate"], tip: "Refute = prove wrong." },
      { sentence: "Can you ___ these numbers with a source?", answer: "substantiate", choices: ["substantiate", "refute", "concede"], tip: "Substantiate = support with proof." },
      { sentence: "The documentary tells a ___ story about climate change.", answer: "compelling", choices: ["compelling", "advocate", "refute"], tip: "Compelling = so interesting you pay attention." },
      { sentence: "Parents often ___ for their children at school meetings.", answer: "advocate", choices: ["advocate", "concede", "substantiate"], tip: "Advocate for = speak up in support of." },
      { sentence: "I'll ___ one point: the timeline was too short.", answer: "concede", choices: ["concede", "refute", "advocate"], tip: "Concede = admit something is true." },
      { sentence: "She was able to ___ every point he raised.", answer: "refute", choices: ["refute", "concede", "compelling"], tip: "Refute = prove wrong." },
      { sentence: "The report fails to ___ its main conclusion.", answer: "substantiate", choices: ["substantiate", "advocate", "compelling"], tip: "Substantiate = support with proof." },
      { sentence: "What makes this offer so ___?", answer: "compelling", choices: ["compelling", "substantiate", "concede"], tip: "Compelling = very convincing." },
      { sentence: "Few politicians would ___ for raising taxes right now.", answer: "advocate", choices: ["advocate", "refute", "concede"], tip: "Advocate for = publicly support." },
      { sentence: "Even his critics must ___ that he worked hard.", answer: "concede", choices: ["concede", "substantiate", "advocate"], tip: "Concede = admit something is true." },
      { sentence: "The defense will try to ___ the witness's story.", answer: "refute", choices: ["refute", "compelling", "advocate"], tip: "Refute = prove wrong." },
      { sentence: "Rumors are easy to spread and hard to ___.", answer: "substantiate", choices: ["substantiate", "compelling", "concede"], tip: "Substantiate = support with proof." },
      { sentence: "The evidence against him is ___.", answer: "compelling", choices: ["compelling", "concede", "refute"], tip: "Compelling evidence = convincing evidence." },
      { sentence: "She wants to ___ for patients' rights.", answer: "advocate", choices: ["advocate", "compelling", "substantiate"], tip: "Advocate for = speak up in support of." },
      { sentence: "Neither side was willing to ___ anything.", answer: "concede", choices: ["concede", "refute", "substantiate"], tip: "Concede = give up a point." },
      { sentence: "No one could ___ her logic.", answer: "refute", choices: ["refute", "substantiate", "advocate"], tip: "Refute = prove wrong." },
      { sentence: "His speech was short but ___.", answer: "compelling", choices: ["compelling", "advocate", "concede"], tip: "Compelling = very convincing." }
    ]
  },
  {
    id: "words-formal-email", category: "words-polish", type: "words", name: "Words for formal emails",
    words: [
      { word: "regarding", kind: "preposition", meaning: "about; on the subject of", example: "I'm writing regarding your order." },
      { word: "inquire", kind: "verb", meaning: "to ask for information (formal)", example: "I'm writing to inquire about the job opening." },
      { word: "sincerely", kind: "adverb", meaning: "honestly; also a polite way to end a formal letter", example: "Sincerely, Maria Lopez" },
      { word: "assistance", kind: "noun", meaning: "help (formal)", example: "Thank you for your assistance." },
      { word: "prompt", kind: "adjective", meaning: "quick; done without delay", example: "Thank you for your prompt reply." }
    ],
    questions: [
      { sentence: "I am writing ___ the invoice you sent last week.", answer: "regarding", choices: ["regarding", "prompt", "sincerely"], tip: "Regarding = about." },
      { sentence: "I would like to ___ about your availability next month.", answer: "inquire", choices: ["inquire", "assistance", "regarding"], tip: "Inquire = ask for information." },
      { sentence: "Thank you for your ___ with this matter.", answer: "assistance", choices: ["assistance", "inquire", "prompt"], tip: "Assistance = help." },
      { sentence: "We appreciate your ___ response.", answer: "prompt", choices: ["prompt", "sincerely", "regarding"], tip: "Prompt = quick." },
      { sentence: "End a formal letter with \"Yours ___\" and your name.", answer: "sincerely", choices: ["sincerely", "prompt", "regarding"], tip: "\"Yours sincerely\" or just \"Sincerely\" ends a formal letter." },
      { sentence: "Please contact me with any questions ___ the schedule.", answer: "regarding", choices: ["regarding", "assistance", "inquire"], tip: "Regarding = about." },
      { sentence: "Customers can ___ about refunds by phone or email.", answer: "inquire", choices: ["inquire", "regarding", "prompt"], tip: "Inquire = ask for information." },
      { sentence: "If you need further ___, please let me know.", answer: "assistance", choices: ["assistance", "regarding", "sincerely"], tip: "Assistance = help." },
      { sentence: "A ___ payment would be appreciated.", answer: "prompt", choices: ["prompt", "assistance", "inquire"], tip: "Prompt = without delay." },
      { sentence: "I ___ hope this resolves the issue.", answer: "sincerely", choices: ["sincerely", "prompt", "regarding"], tip: "Sincerely = honestly, truly." },
      { sentence: "I have a question ___ my account.", answer: "regarding", choices: ["regarding", "inquire", "assistance"], tip: "Regarding = about." },
      { sentence: "May I ___ whether the position is still open?", answer: "inquire", choices: ["inquire", "prompt", "sincerely"], tip: "Inquire = ask for information." },
      { sentence: "We are grateful for your ___ during the move.", answer: "assistance", choices: ["assistance", "regarding", "prompt"], tip: "Assistance = help." },
      { sentence: "Thank you for your ___ attention to this matter.", answer: "prompt", choices: ["prompt", "assistance", "inquire"], tip: "Prompt = quick." },
      { sentence: "We ___ apologize for the delay.", answer: "sincerely", choices: ["sincerely", "regarding", "assistance"], tip: "Sincerely = honestly, truly." },
      { sentence: "This email is ___ tomorrow's meeting.", answer: "regarding", choices: ["regarding", "sincerely", "prompt"], tip: "Regarding = about." },
      { sentence: "I am calling to ___ about the apartment for rent.", answer: "inquire", choices: ["inquire", "regarding", "assistance"], tip: "Inquire = ask for information." },
      { sentence: "Do you require any ___ with your application?", answer: "assistance", choices: ["assistance", "inquire", "sincerely"], tip: "Assistance = help." },
      { sentence: "Her ___ reply helped us meet the deadline.", answer: "prompt", choices: ["prompt", "regarding", "inquire"], tip: "Prompt = quick." },
      { sentence: "I ___ appreciate your patience.", answer: "sincerely", choices: ["sincerely", "inquire", "prompt"], tip: "Sincerely = honestly, truly." },
      { sentence: "Please send all questions ___ payroll to Lisa.", answer: "regarding", choices: ["regarding", "prompt", "assistance"], tip: "Regarding = about." },
      { sentence: "Guests may ___ at the front desk.", answer: "inquire", choices: ["inquire", "sincerely", "regarding"], tip: "Inquire = ask for information." },
      { sentence: "Call this number for technical ___.", answer: "assistance", choices: ["assistance", "prompt", "regarding"], tip: "Assistance = help." },
      { sentence: "The team was ___ in fixing the problem.", answer: "prompt", choices: ["prompt", "sincerely", "inquire"], tip: "Prompt = quick, without delay." }
    ]
  },
  {
    id: "words-character", category: "words-polish", type: "words", name: "Describing character",
    words: [
      { word: "diligent", kind: "adjective", meaning: "careful and hard-working", example: "She is a diligent student who never misses a class." },
      { word: "humble", kind: "adjective", meaning: "not thinking you are better than others", example: "Despite his success, he stayed humble." },
      { word: "arrogant", kind: "adjective", meaning: "acting as if you are better or more important than others", example: "His arrogant attitude annoyed the team." },
      { word: "empathetic", kind: "adjective", meaning: "able to understand and share other people's feelings", example: "A good nurse is empathetic." },
      { word: "stubborn", kind: "adjective", meaning: "refusing to change your mind", example: "My grandfather is too stubborn to ask for directions." }
    ],
    questions: [
      { sentence: "He is so ___ that he never admits he's wrong.", answer: "stubborn", choices: ["stubborn", "humble", "empathetic"], tip: "Stubborn = refusing to change your mind." },
      { sentence: "A ___ worker checks every detail before finishing.", answer: "diligent", choices: ["diligent", "arrogant", "stubborn"], tip: "Diligent = careful and hard-working." },
      { sentence: "She won the award but stayed ___ and thanked her team.", answer: "humble", choices: ["humble", "arrogant", "stubborn"], tip: "Humble = not thinking you're better than others." },
      { sentence: "The ___ manager never listened to anyone else's ideas.", answer: "arrogant", choices: ["arrogant", "humble", "empathetic"], tip: "Arrogant = acting superior to others." },
      { sentence: "An ___ friend listens and understands how you feel.", answer: "empathetic", choices: ["empathetic", "stubborn", "arrogant"], tip: "Empathetic = understanding others' feelings." },
      { sentence: "The ___ mule refused to move.", answer: "stubborn", choices: ["stubborn", "diligent", "humble"], tip: "Stubborn = refusing to change." },
      { sentence: "Thanks to her ___ research, the report had no errors.", answer: "diligent", choices: ["diligent", "arrogant", "empathetic"], tip: "Diligent = careful and hard-working." },
      { sentence: "Even famous chefs can be ___ about their cooking.", answer: "humble", choices: ["humble", "stubborn", "diligent"], tip: "Humble = modest." },
      { sentence: "It's ___ to assume you know more than everyone.", answer: "arrogant", choices: ["arrogant", "diligent", "empathetic"], tip: "Arrogant = acting superior to others." },
      { sentence: "Teachers need to be ___ toward struggling students.", answer: "empathetic", choices: ["empathetic", "arrogant", "stubborn"], tip: "Empathetic = understanding others' feelings." },
      { sentence: "Don't be so ___. Try it my way just once.", answer: "stubborn", choices: ["stubborn", "empathetic", "diligent"], tip: "Stubborn = refusing to change your mind." },
      { sentence: "Years of ___ practice made her an excellent pianist.", answer: "diligent", choices: ["diligent", "humble", "arrogant"], tip: "Diligent = careful and hard-working." },
      { sentence: "He gave a ___ speech and credited his parents.", answer: "humble", choices: ["humble", "arrogant", "stubborn"], tip: "Humble = modest, giving credit to others." },
      { sentence: "Bragging about your salary can seem ___.", answer: "arrogant", choices: ["arrogant", "empathetic", "diligent"], tip: "Arrogant = acting superior to others." },
      { sentence: "Being ___ helps doctors connect with patients.", answer: "empathetic", choices: ["empathetic", "stubborn", "humble"], tip: "Empathetic = understanding others' feelings." },
      { sentence: "The ___ toddler refused to wear a coat.", answer: "stubborn", choices: ["stubborn", "diligent", "empathetic"], tip: "Stubborn = refusing to change your mind." },
      { sentence: "The most ___ employees often get promoted.", answer: "diligent", choices: ["diligent", "stubborn", "arrogant"], tip: "Diligent = careful and hard-working." },
      { sentence: "She's talented but ___, and never shows off.", answer: "humble", choices: ["humble", "arrogant", "empathetic"], tip: "Humble = modest." },
      { sentence: "His ___ tone made everyone stop listening.", answer: "arrogant", choices: ["arrogant", "humble", "diligent"], tip: "Arrogant = acting superior to others." },
      { sentence: "An ___ response would be to ask how she's feeling.", answer: "empathetic", choices: ["empathetic", "diligent", "stubborn"], tip: "Empathetic = understanding others' feelings." },
      { sentence: "Some stains are ___ and won't come out.", answer: "stubborn", choices: ["stubborn", "humble", "arrogant"], tip: "Stubborn can also describe things that are hard to remove or change." },
      { sentence: "She was ___ about saving money every month.", answer: "diligent", choices: ["diligent", "empathetic", "humble"], tip: "Diligent = careful and hard-working." },
      { sentence: "A ___ winner thanks the other players.", answer: "humble", choices: ["humble", "stubborn", "arrogant"], tip: "Humble = modest." },
      { sentence: "It was ___ of him to ignore the experts.", answer: "arrogant", choices: ["arrogant", "empathetic", "humble"], tip: "Arrogant = acting superior to others." }
    ]
  },
  {
    id: "words-change", category: "words-polish", type: "words", name: "Change and progress",
    words: [
      { word: "accelerate", kind: "verb", meaning: "to speed up, or to make something happen faster", example: "The car accelerated onto the highway." },
      { word: "decline", kind: "verb", meaning: "to become less or worse; also, to politely say no", example: "Sales began to decline in March." },
      { word: "enhance", kind: "verb", meaning: "to improve the quality of something", example: "Good lighting can enhance a photo." },
      { word: "transition", kind: "noun", meaning: "a change from one state or stage to another", example: "The transition to the new system went smoothly." },
      { word: "gradual", kind: "adjective", meaning: "happening slowly, a little at a time", example: "There was a gradual rise in prices." }
    ],
    questions: [
      { sentence: "New technology can ___ the pace of research.", answer: "accelerate", choices: ["accelerate", "decline", "gradual"], tip: "Accelerate = speed up." },
      { sentence: "Bird populations continue to ___ in the area.", answer: "decline", choices: ["decline", "enhance", "accelerate"], tip: "Decline = become less." },
      { sentence: "Fresh herbs ___ the flavor of any dish.", answer: "enhance", choices: ["enhance", "decline", "transition"], tip: "Enhance = improve." },
      { sentence: "The ___ from high school to college can be hard.", answer: "transition", choices: ["transition", "gradual", "enhance"], tip: "Transition = a change from one stage to another." },
      { sentence: "Her recovery was slow and ___.", answer: "gradual", choices: ["gradual", "transition", "accelerate"], tip: "Gradual = little by little." },
      { sentence: "Pressing the pedal makes the car ___.", answer: "accelerate", choices: ["accelerate", "enhance", "decline"], tip: "Accelerate = speed up." },
      { sentence: "Interest in the show began to ___ after the second season.", answer: "decline", choices: ["decline", "accelerate", "gradual"], tip: "Decline = become less." },
      { sentence: "A new coat of paint will ___ the room.", answer: "enhance", choices: ["enhance", "transition", "decline"], tip: "Enhance = improve." },
      { sentence: "The company is in ___ after the merger.", answer: "transition", choices: ["transition", "enhance", "gradual"], tip: "In transition = in the middle of changing." },
      { sentence: "There has been a ___ improvement in his grades.", answer: "gradual", choices: ["gradual", "decline", "accelerate"], tip: "Gradual = little by little." },
      { sentence: "Rising demand will ___ price increases.", answer: "accelerate", choices: ["accelerate", "gradual", "transition"], tip: "Accelerate = make something happen faster." },
      { sentence: "Her health started to ___ last winter.", answer: "decline", choices: ["decline", "enhance", "transition"], tip: "Decline = become worse." },
      { sentence: "Training can ___ your skills and confidence.", answer: "enhance", choices: ["enhance", "accelerate", "decline"], tip: "Enhance = improve." },
      { sentence: "The ___ to electric cars is happening worldwide.", answer: "transition", choices: ["transition", "decline", "gradual"], tip: "Transition = a change from one state to another." },
      { sentence: "The path has a ___ slope, so it's easy to walk.", answer: "gradual", choices: ["gradual", "enhance", "transition"], tip: "A gradual slope rises a little at a time." },
      { sentence: "Warmer temperatures could ___ the melting of glaciers.", answer: "accelerate", choices: ["accelerate", "enhance", "transition"], tip: "Accelerate = make something happen faster." },
      { sentence: "If you ___ the invitation, please let us know.", answer: "decline", choices: ["decline", "enhance", "accelerate"], tip: "Decline an invitation = politely say no." },
      { sentence: "Music can ___ the mood of a film.", answer: "enhance", choices: ["enhance", "gradual", "decline"], tip: "Enhance = improve." },
      { sentence: "A good ___ connects one paragraph to the next.", answer: "transition", choices: ["transition", "accelerate", "enhance"], tip: "In writing, a transition links one idea to the next." },
      { sentence: "Change in the town was ___, not sudden.", answer: "gradual", choices: ["gradual", "accelerate", "decline"], tip: "Gradual is the opposite of sudden." },
      { sentence: "The runner began to ___ near the finish line.", answer: "accelerate", choices: ["accelerate", "decline", "transition"], tip: "Accelerate = speed up." },
      { sentence: "Crime rates continued to ___ over the decade.", answer: "decline", choices: ["decline", "gradual", "enhance"], tip: "Decline = become less." },
      { sentence: "Filters can ___ the colors in your photos.", answer: "enhance", choices: ["enhance", "transition", "accelerate"], tip: "Enhance = improve." },
      { sentence: "We need a plan for a smooth ___ to the new manager.", answer: "transition", choices: ["transition", "gradual", "decline"], tip: "Transition = a change from one state to another." }
    ]
  },
  {
    // This level used to be in the Grammar "polish" starting point. Its id stays the same, so
    // your best score comes with it.
    id: "polish-precise-words", category: "words-polish", type: "confused", name: "Richer vocabulary: the precise word",
    questions: [
      { sentence: "The instructions were so ___ that nobody was confused.", answer: "clear", choices: ["clear", "vague"], tip: "Clear = easy to understand. Vague = unclear." },
      { sentence: "Her ___ answer left no room for doubt.", answer: "definitive", choices: ["definitive", "tentative"], tip: "Definitive = final and certain. Tentative = not yet sure." },
      { sentence: "He was ___ about the plan, so he asked many questions.", answer: "skeptical", choices: ["skeptical", "eager"], tip: "Skeptical = doubtful, not easily convinced." },
      { sentence: "The museum has an ___ collection of rare coins.", answer: "extensive", choices: ["extensive", "meager"], tip: "Extensive = large and wide-ranging. Meager = very small." },
      { sentence: "She gave a ___ speech that moved the whole room.", answer: "compelling", choices: ["compelling", "tedious"], tip: "Compelling = powerful and convincing. Tedious = boring." },
      { sentence: "The weather is ___, so bring a jacket just in case.", answer: "unpredictable", choices: ["unpredictable", "reliable"], tip: "Unpredictable = hard to know in advance." },
      { sentence: "Please be ___ and keep your answer short.", answer: "concise", choices: ["concise", "verbose"], tip: "Concise = brief and clear. Verbose = using too many words." },
      { sentence: "The two reports were ___, with almost no differences.", answer: "identical", choices: ["identical", "distinct"], tip: "Identical = exactly the same. Distinct = clearly different." }
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
