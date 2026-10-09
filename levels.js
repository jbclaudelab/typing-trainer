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
  {
    id: "polish-precise-words", category: "english-polish", type: "confused", name: "Richer vocabulary: the precise word",
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
