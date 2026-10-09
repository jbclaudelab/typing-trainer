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
  // Learn new words: each level teaches a few words (type each one once to learn it),
  // then you practice them by filling the gaps in new sentences.

  // New words for "I'm new to English". It starts with the very first words children learn
  // and are taught (greetings, family, animals, food, colors, numbers, and early reading
  // words like go, run, big, and little), then moves on to harder everyday words.
  {
    id: "words-hello", category: "words-new", type: "words", name: "First words: hello and goodbye",
    words: [
      { word: "hi", kind: "greeting", meaning: "a friendly way to say hello", example: "Hi, Sam!" },
      { word: "bye", kind: "greeting", meaning: "what you say when you leave", example: "Bye! See you tomorrow!" },
      { word: "yes", kind: "answer", meaning: "what you say when something is right, or when you agree", example: "Yes, I like it." },
      { word: "no", kind: "answer", meaning: "what you say when something is not right, or when you don't agree", example: "No, thank you." },
      { word: "please", kind: "polite word", meaning: "a kind word you say when you ask for something", example: "Can I have some water, please?" }
    ],
    questions: [
      { sentence: "___! My name is Ana.", answer: "Hi", choices: ["Hi", "Bye", "No"], tip: "Hi = hello. You say it when you meet someone." },
      { sentence: "I have to go now. ___!", answer: "Bye", choices: ["Bye", "Hi", "Yes"], tip: "Bye = what you say when you leave." },
      { sentence: "Do you like pizza? ___, I love it!", answer: "Yes", choices: ["Yes", "No", "Bye"], tip: "Yes = you agree." },
      { sentence: "Is it cold? ___, it's hot today.", answer: "No", choices: ["No", "Yes", "Hi"], tip: "No = that's not right." },
      { sentence: "Can I have a cookie, ___?", answer: "please", choices: ["please", "bye", "no"], tip: "Say please when you ask for something." },
      { sentence: "___, Dad! I'm home!", answer: "Hi", choices: ["Hi", "Bye", "Please"], tip: "Hi = hello." },
      { sentence: "Is your name Tom? ___, my name is Ben.", answer: "No", choices: ["No", "Yes", "Please"], tip: "No = that's not right." },
      { sentence: "See you later. ___!", answer: "Bye", choices: ["Bye", "Yes", "Please"], tip: "Bye = what you say when you leave." }
    ]
  },
  {
    id: "words-family", category: "words-new", type: "words", name: "First words: family",
    words: [
      { word: "mom", kind: "noun", meaning: "your mother", example: "My mom is at work." },
      { word: "dad", kind: "noun", meaning: "your father", example: "My dad makes dinner." },
      { word: "baby", kind: "noun", meaning: "a very young child", example: "The baby is sleeping." },
      { word: "sister", kind: "noun", meaning: "a girl who has the same parents as you", example: "My sister is ten." },
      { word: "brother", kind: "noun", meaning: "a boy who has the same parents as you", example: "I play with my brother." }
    ],
    questions: [
      { sentence: "My ___ is my mother.", answer: "mom", choices: ["mom", "dad", "baby"], tip: "Mom = mother." },
      { sentence: "My ___ is my father.", answer: "dad", choices: ["dad", "mom", "sister"], tip: "Dad = father." },
      { sentence: "The ___ is only one month old.", answer: "baby", choices: ["baby", "brother", "dad"], tip: "Baby = a very young child." },
      { sentence: "My ___ is a girl. Her name is Lily.", answer: "sister", choices: ["sister", "brother", "dad"], tip: "A sister is a girl." },
      { sentence: "My ___ is a boy. His name is Max.", answer: "brother", choices: ["brother", "sister", "mom"], tip: "A brother is a boy." },
      { sentence: "The ___ drinks milk and cries a lot.", answer: "baby", choices: ["baby", "mom", "sister"], tip: "Baby = a very young child." },
      { sentence: "My mom and my ___ are my parents.", answer: "dad", choices: ["dad", "sister", "baby"], tip: "Your mom and dad are your parents." },
      { sentence: "Is that your ___? She looks like you!", answer: "sister", choices: ["sister", "brother", "dad"], tip: "She = a girl or a woman." }
    ]
  },
  {
    id: "words-animals", category: "words-new", type: "words", name: "First words: animals",
    words: [
      { word: "cat", kind: "noun", meaning: "a small pet that says \"meow\"", example: "The cat is on the bed." },
      { word: "dog", kind: "noun", meaning: "a pet that says \"woof\"", example: "My dog likes to run." },
      { word: "cow", kind: "noun", meaning: "a big farm animal that gives us milk", example: "The cow eats grass." },
      { word: "pig", kind: "noun", meaning: "a pink farm animal", example: "The pig is in the mud." },
      { word: "duck", kind: "noun", meaning: "a bird that swims and says \"quack\"", example: "The duck is on the water." }
    ],
    questions: [
      { sentence: "The ___ says \"meow.\"", answer: "cat", choices: ["cat", "dog", "cow"], tip: "A cat says \"meow.\"" },
      { sentence: "The ___ says \"woof.\"", answer: "dog", choices: ["dog", "cat", "pig"], tip: "A dog says \"woof.\"" },
      { sentence: "We get milk from a ___.", answer: "cow", choices: ["cow", "duck", "cat"], tip: "A cow gives us milk." },
      { sentence: "The ___ swims in the pond.", answer: "duck", choices: ["duck", "pig", "cow"], tip: "A duck is a bird that swims." },
      { sentence: "The pink ___ plays in the mud.", answer: "pig", choices: ["pig", "dog", "duck"], tip: "A pig is a pink farm animal." },
      { sentence: "My ___ runs after the ball.", answer: "dog", choices: ["dog", "cow", "pig"], tip: "Dogs love to play with balls." },
      { sentence: "The ___ says \"quack.\"", answer: "duck", choices: ["duck", "cat", "dog"], tip: "A duck says \"quack.\"" },
      { sentence: "The ___ sleeps on my bed and says \"meow.\"", answer: "cat", choices: ["cat", "cow", "pig"], tip: "A cat says \"meow.\"" }
    ]
  },
  {
    id: "words-food", category: "words-new", type: "words", name: "First words: food and drinks",
    words: [
      { word: "milk", kind: "noun", meaning: "a white drink that comes from cows", example: "I drink milk with my breakfast." },
      { word: "water", kind: "noun", meaning: "a clear drink; rain and rivers are water", example: "Can I have some water?" },
      { word: "apple", kind: "noun", meaning: "a round fruit that is red or green", example: "I eat an apple every day." },
      { word: "banana", kind: "noun", meaning: "a long yellow fruit", example: "Monkeys love bananas." },
      { word: "egg", kind: "noun", meaning: "a food that comes from a chicken", example: "I have an egg for breakfast." }
    ],
    questions: [
      { sentence: "I'm thirsty. Can I have some ___?", answer: "water", choices: ["water", "egg", "apple"], tip: "Water is a drink." },
      { sentence: "A ___ is long and yellow.", answer: "banana", choices: ["banana", "apple", "milk"], tip: "Banana = a long yellow fruit." },
      { sentence: "Cows give us ___.", answer: "milk", choices: ["milk", "egg", "banana"], tip: "Milk comes from cows." },
      { sentence: "An ___ can be red or green.", answer: "apple", choices: ["apple", "egg", "milk"], tip: "Apple = a round fruit, red or green." },
      { sentence: "We get an ___ from a chicken.", answer: "egg", choices: ["egg", "milk", "banana"], tip: "Eggs come from chickens." },
      { sentence: "I put ___ on my cereal.", answer: "milk", choices: ["milk", "egg", "apple"], tip: "Milk is a white drink." },
      { sentence: "Monkeys like to eat a ___.", answer: "banana", choices: ["banana", "water", "milk"], tip: "Monkeys love bananas." },
      { sentence: "Fish live in ___.", answer: "water", choices: ["water", "milk", "egg"], tip: "Rivers, lakes, and the sea are water." }
    ]
  },
  {
    id: "words-colors", category: "words-new", type: "words", name: "First words: colors",
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
      { sentence: "Stop! The light is ___.", answer: "red", choices: ["red", "white", "blue"], tip: "A red light means stop." },
      { sentence: "The sun is big and ___.", answer: "yellow", choices: ["yellow", "green", "blue"], tip: "We draw the sun yellow." },
      { sentence: "Many frogs are ___.", answer: "green", choices: ["green", "white", "red"], tip: "Many frogs are green, like grass." }
    ]
  },
  {
    id: "words-numbers", category: "words-new", type: "words", name: "First words: numbers",
    words: [
      { word: "one", kind: "number", meaning: "the number 1", example: "I have one nose." },
      { word: "two", kind: "number", meaning: "the number 2", example: "I have two eyes." },
      { word: "three", kind: "number", meaning: "the number 3", example: "Three cats are sleeping." },
      { word: "four", kind: "number", meaning: "the number 4", example: "A table has four legs." },
      { word: "five", kind: "number", meaning: "the number 5", example: "I have five fingers on one hand." }
    ],
    questions: [
      { sentence: "I have ___ nose.", answer: "one", choices: ["one", "two", "five"], tip: "One = 1." },
      { sentence: "I have ___ hands.", answer: "two", choices: ["two", "one", "four"], tip: "Two = 2." },
      { sentence: "A dog has ___ legs.", answer: "four", choices: ["four", "two", "three"], tip: "Four = 4." },
      { sentence: "One hand has ___ fingers.", answer: "five", choices: ["five", "three", "one"], tip: "Five = 5." },
      { sentence: "1, 2, ___, 4, 5", answer: "three", choices: ["three", "five", "one"], tip: "Three = 3." },
      { sentence: "A car has ___ wheels.", answer: "four", choices: ["four", "one", "three"], tip: "Four = 4." },
      { sentence: "A bird has ___ legs.", answer: "two", choices: ["two", "four", "five"], tip: "Two = 2." },
      { sentence: "Count with me: one, two, three, four, ___!", answer: "five", choices: ["five", "two", "one"], tip: "After four comes five." }
    ]
  },
  {
    id: "words-actions", category: "words-new", type: "words", name: "First words: go, run, jump",
    words: [
      { word: "go", kind: "verb", meaning: "to move from one place to another", example: "Let's go home." },
      { word: "run", kind: "verb", meaning: "to move very fast on your feet", example: "I run in the park." },
      { word: "jump", kind: "verb", meaning: "to push yourself up into the air", example: "The frog can jump." },
      { word: "see", kind: "verb", meaning: "to notice something with your eyes", example: "I see a bird." },
      { word: "play", kind: "verb", meaning: "to have fun with toys or games", example: "The kids play outside." }
    ],
    questions: [
      { sentence: "Can you ___ the moon?", answer: "see", choices: ["see", "run", "jump"], tip: "See = notice with your eyes." },
      { sentence: "Let's ___ a game!", answer: "play", choices: ["play", "see", "go"], tip: "Play = have fun with toys or games." },
      { sentence: "A kangaroo can ___ very high.", answer: "jump", choices: ["jump", "see", "play"], tip: "Jump = push yourself up into the air." },
      { sentence: "It's late. Let's ___ to bed.", answer: "go", choices: ["go", "see", "jump"], tip: "Go = move from one place to another." },
      { sentence: "I'm late! I have to ___ fast.", answer: "run", choices: ["run", "see", "play"], tip: "Run = move very fast on your feet." },
      { sentence: "Open your eyes so you can ___.", answer: "see", choices: ["see", "go", "run"], tip: "You see with your eyes." },
      { sentence: "The kids ___ with their toys.", answer: "play", choices: ["play", "jump", "go"], tip: "Play = have fun with toys or games." },
      { sentence: "Ready, set, ___!", answer: "go", choices: ["go", "see", "play"], tip: "\"Ready, set, go!\" starts a race." }
    ]
  },
  {
    id: "words-opposites", category: "words-new", type: "words", name: "First words: big and little",
    words: [
      { word: "big", kind: "adjective", meaning: "large; not small", example: "An elephant is big." },
      { word: "little", kind: "adjective", meaning: "small; not big", example: "A mouse is little." },
      { word: "hot", kind: "adjective", meaning: "very warm", example: "The soup is hot." },
      { word: "cold", kind: "adjective", meaning: "not warm", example: "Ice is cold." },
      { word: "happy", kind: "adjective", meaning: "feeling good", example: "I'm happy today." },
      { word: "sad", kind: "adjective", meaning: "feeling bad, like you want to cry", example: "She is sad because her toy broke." }
    ],
    questions: [
      { sentence: "An elephant is very ___.", answer: "big", choices: ["big", "little", "cold"], tip: "Big = large. The opposite is little." },
      { sentence: "A mouse is ___.", answer: "little", choices: ["little", "big", "hot"], tip: "Little = small. The opposite is big." },
      { sentence: "Don't touch the stove. It's ___!", answer: "hot", choices: ["hot", "cold", "sad"], tip: "Hot = very warm. The opposite is cold." },
      { sentence: "Put on a coat. It's ___ outside.", answer: "cold", choices: ["cold", "hot", "happy"], tip: "Cold = not warm. The opposite is hot." },
      { sentence: "She smiles because she is ___.", answer: "happy", choices: ["happy", "sad", "cold"], tip: "Happy = feeling good. The opposite is sad." },
      { sentence: "He cries because he is ___.", answer: "sad", choices: ["sad", "happy", "big"], tip: "Sad = feeling bad. The opposite is happy." },
      { sentence: "Ice cream is ___.", answer: "cold", choices: ["cold", "hot", "big"], tip: "Cold = not warm." },
      { sentence: "It's my birthday! I'm so ___!", answer: "happy", choices: ["happy", "sad", "little"], tip: "Happy = feeling good." }
    ]
  },
  {
    id: "words-feelings", category: "words-new", type: "words", name: "Words for feelings",
    words: [
      { word: "hungry", kind: "adjective", meaning: "wanting to eat", example: "I'm hungry, so let's have lunch." },
      { word: "tired", kind: "adjective", meaning: "needing rest or sleep", example: "She is tired after work." },
      { word: "worried", kind: "adjective", meaning: "thinking that something bad might happen", example: "He is worried about his test." },
      { word: "excited", kind: "adjective", meaning: "very happy about something that is going to happen", example: "The kids are excited about the trip." },
      { word: "angry", kind: "adjective", meaning: "very upset with someone or something", example: "My boss was angry about the late report." }
    ],
    questions: [
      { sentence: "I didn't eat breakfast, so I'm very ___.", answer: "hungry", choices: ["hungry", "tired", "angry"], tip: "Hungry = wanting to eat." },
      { sentence: "I worked all day, and now I'm ___.", answer: "tired", choices: ["tired", "excited", "hungry"], tip: "Tired = needing rest or sleep." },
      { sentence: "Her son is late and isn't answering his phone, so she's ___.", answer: "worried", choices: ["worried", "excited", "hungry"], tip: "Worried = thinking something bad might happen." },
      { sentence: "We're going on vacation tomorrow, and I'm so ___!", answer: "excited", choices: ["angry", "excited", "tired"], tip: "Excited = very happy about something that's going to happen." },
      { sentence: "He was ___ when someone took his parking space.", answer: "angry", choices: ["angry", "hungry", "excited"], tip: "Angry = very upset with someone or something." },
      { sentence: "The baby is ___, so she needs a nap.", answer: "tired", choices: ["tired", "worried", "angry"], tip: "Tired = needing rest or sleep." },
      { sentence: "Don't be ___. Everything will be OK.", answer: "worried", choices: ["excited", "worried", "hungry"], tip: "Worried = thinking something bad might happen." },
      { sentence: "The fans cheered and jumped. They were so ___!", answer: "excited", choices: ["excited", "tired", "hungry"], tip: "Excited = very happy about something." }
    ]
  },
  {
    id: "words-everyday-verbs", category: "words-new", type: "words", name: "Everyday action words",
    words: [
      { word: "borrow", kind: "verb", meaning: "to take something and give it back later", example: "Can I borrow your pen?" },
      { word: "carry", kind: "verb", meaning: "to hold something and take it with you", example: "I carry my lunch in a small bag." },
      { word: "choose", kind: "verb", meaning: "to pick one thing from many", example: "You can choose any seat." },
      { word: "forget", kind: "verb", meaning: "to not remember something", example: "I always forget her birthday." },
      { word: "remember", kind: "verb", meaning: "to keep something in your mind", example: "Do you remember my name?" }
    ],
    questions: [
      { sentence: "Can I ___ your umbrella? I'll give it back tomorrow.", answer: "borrow", choices: ["borrow", "carry", "choose"], tip: "Borrow = take something and give it back later." },
      { sentence: "These boxes are heavy. Can you help me ___ them?", answer: "carry", choices: ["forget", "carry", "borrow"], tip: "Carry = hold something and take it with you." },
      { sentence: "There are three cakes. Which one will you ___?", answer: "choose", choices: ["choose", "remember", "carry"], tip: "Choose = pick one thing from many." },
      { sentence: "I wrote it down so I wouldn't ___.", answer: "forget", choices: ["forget", "choose", "borrow"], tip: "Forget = not remember." },
      { sentence: "Do you ___ where we parked the car?", answer: "remember", choices: ["remember", "carry", "borrow"], tip: "Remember = keep something in your mind." },
      { sentence: "She likes to ___ books from the library.", answer: "borrow", choices: ["borrow", "choose", "forget"], tip: "You borrow library books, then give them back." },
      { sentence: "Please ___ to lock the door.", answer: "remember", choices: ["remember", "forget", "carry"], tip: "Remember to do something = don't forget to do it." },
      { sentence: "It's hard to ___ between pizza and pasta.", answer: "choose", choices: ["choose", "carry", "borrow"], tip: "Choose = pick one thing from many." }
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
      { sentence: "The hotel sent an email to ___ our booking.", answer: "confirm", choices: ["confirm", "deadline", "available"], tip: "Confirm = say that something will definitely happen." }
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
      { sentence: "The restaurant gets ___ on Friday nights.", answer: "crowded", choices: ["crowded", "comfortable", "affordable"], tip: "Crowded = full of people." }
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
      { sentence: "Good drivers ___ problems before they happen.", answer: "anticipate", choices: ["anticipate", "emphasize", "postpone"], tip: "Anticipate = expect something and prepare for it." }
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
      { sentence: "Small businesses had to be ___ during the hard times.", answer: "resilient", choices: ["resilient", "candid", "ambiguous"], tip: "Resilient = able to recover after something difficult." }
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
