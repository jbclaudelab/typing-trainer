// Grammar levels: fill-the-gap questions, sorted into units (headings in the level menu
// that open and close). Each unit lists its levels from easiest to hardest, and the units
// in each starting point go from easiest to hardest too.
// Each level's "id" is where its best score is saved, so ids must never change.
// Loaded after levels.js.

units.push(
  { id: "g-new-be", category: "english-new", name: "Be and have" },
  { id: "g-new-things", category: "english-new", name: "A, an, the, and plurals" },
  { id: "g-new-questions", category: "english-new", name: "Asking questions" },
  { id: "g-new-whose", category: "english-new", name: "My, me, and whose" },
  { id: "g-new-where", category: "english-new", name: "Where things are" },
  { id: "g-new-doing", category: "english-new", name: "Doing things" },
  { id: "g-new-how-much", category: "english-new", name: "How much and how many" },
  { id: "g-new-past", category: "english-new", name: "The past" },
  { id: "g-new-comparing", category: "english-new", name: "Comparing" },
  { id: "g-build-apostrophes", category: "english-build", name: "Their, your, its: apostrophe words" },
  { id: "g-build-sound-alike", category: "english-build", name: "Sound-alike words" },
  { id: "g-build-look-alike", category: "english-build", name: "Look-alike words" },
  { id: "g-build-pairs", category: "english-build", name: "Word pairs people mix up" },
  { id: "g-build-tenses", category: "english-build", name: "Verbs and tenses" },
  { id: "g-build-sentences", category: "english-build", name: "Building sentences" },
  { id: "g-polish-common", category: "english-polish", name: "Common mistakes" },
  { id: "g-polish-pairs", category: "english-polish", name: "Mixed-up pairs" },
  { id: "g-polish-spelling", category: "english-polish", name: "Spelling twins" },
  { id: "g-polish-rules", category: "english-polish", name: "Grammar rules" },
  { id: "g-polish-precise", category: "english-polish", name: "Precise meanings" }
);

levels.push(
  // ===== I'm new to English =====

  // Be and have
  {
    id: "basics-be", category: "english-new", unit: "g-new-be", type: "confused", name: "Am, is, are",
    questions: [
      { sentence: "I ___ hungry.", answer: "am", choices: ["am", "is", "are"], tip: "I am." },
      { sentence: "She ___ my sister.", answer: "is", choices: ["am", "is", "are"], tip: "He is, she is, it is." },
      { sentence: "They ___ at work.", answer: "are", choices: ["am", "is", "are"], tip: "We are, you are, they are." },
      { sentence: "The weather ___ nice today.", answer: "is", choices: ["am", "is", "are"], tip: "One thing: is." },
      { sentence: "You ___ very kind.", answer: "are", choices: ["am", "is", "are"], tip: "You are, for one person or many." },
      { sentence: "My parents ___ from Mexico.", answer: "are", choices: ["am", "is", "are"], tip: "More than one person: are." },
      { sentence: "It ___ hot today.", answer: "is", choices: ["am", "is", "are"], tip: "It is." },
      { sentence: "We ___ ready to go.", answer: "are", choices: ["am", "is", "are"], tip: "We are." }
    ]
  },
  {
    id: "basics-there-is", category: "english-new", unit: "g-new-be", type: "confused", name: "There is or there are",
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
    id: "basics-have", category: "english-new", unit: "g-new-be", type: "confused", name: "Has or have",
    questions: [
      { sentence: "I ___ two brothers.", answer: "have", choices: ["has", "have"], tip: "I have, you have, we have, they have." },
      { sentence: "She ___ a red car.", answer: "has", choices: ["has", "have"], tip: "He has, she has, it has." },
      { sentence: "We ___ a meeting at ten.", answer: "have", choices: ["has", "have"], tip: "We have." },
      { sentence: "The house ___ three bedrooms.", answer: "has", choices: ["has", "have"], tip: "One thing: has." },
      { sentence: "Do you ___ a minute?", answer: "have", choices: ["has", "have"], tip: "After do or does, always use have." },
      { sentence: "My son ___ a cold.", answer: "has", choices: ["has", "have"], tip: "One person (he or she): has." },
      { sentence: "They ___ a big garden.", answer: "have", choices: ["has", "have"], tip: "They have." },
      { sentence: "Does he ___ a job?", answer: "have", choices: ["has", "have"], tip: "After does, use have. Does he have a job?" }
    ]
  },

  // A, an, the, and plurals
  {
    id: "basics-a-an", category: "english-new", unit: "g-new-things", type: "confused", name: "A or an",
    questions: [
      { sentence: "I eat ___ apple every day.", answer: "an", choices: ["a", "an"], tip: "Use an before a vowel sound: an apple, an egg." },
      { sentence: "She has ___ dog.", answer: "a", choices: ["a", "an"], tip: "Use a before a consonant sound: a dog, a cat." },
      { sentence: "We waited for ___ hour.", answer: "an", choices: ["a", "an"], tip: "The h in hour is silent, so hour starts with a vowel sound." },
      { sentence: "He is ___ teacher.", answer: "a", choices: ["a", "an"], tip: "Teacher starts with a consonant sound." },
      { sentence: "I need ___ umbrella.", answer: "an", choices: ["a", "an"], tip: "Umbrella starts with a vowel sound." },
      { sentence: "This is ___ easy question.", answer: "an", choices: ["a", "an"], tip: "Easy starts with a vowel sound." },
      { sentence: "She goes to ___ university in Texas.", answer: "a", choices: ["a", "an"], tip: "University starts with a you sound, so it takes a." },
      { sentence: "Do you have ___ pen?", answer: "a", choices: ["a", "an"], tip: "Pen starts with a consonant sound." }
    ]
  },
  {
    id: "basics-plurals", category: "english-new", unit: "g-new-things", type: "confused", name: "One or many: plurals",
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
  {
    id: "basics-this-these", category: "english-new", unit: "g-new-things", type: "confused", name: "This, these, that, those",
    questions: [
      { sentence: "___ book in my hand is great.", answer: "This", choices: ["This", "These", "That", "Those"], tip: "This = one thing, near you." },
      { sentence: "___ shoes on my feet are new.", answer: "These", choices: ["This", "These", "That", "Those"], tip: "These = more than one thing, near you." },
      { sentence: "Look at ___ bird up in the tree.", answer: "that", choices: ["this", "these", "that", "those"], tip: "That = one thing, far away." },
      { sentence: "___ houses across the river are old.", answer: "Those", choices: ["This", "These", "That", "Those"], tip: "Those = more than one thing, far away." },
      { sentence: "Is ___ your phone here on my desk?", answer: "this", choices: ["this", "these", "that", "those"], tip: "One thing, near you: this." },
      { sentence: "I bought ___ apples in this bag today.", answer: "these", choices: ["this", "these", "that", "those"], tip: "Many things, near you: these." },
      { sentence: "Who is ___ man over there?", answer: "that", choices: ["this", "these", "that", "those"], tip: "One person, far away: that." },
      { sentence: "Can you see ___ mountains far away?", answer: "those", choices: ["this", "these", "that", "those"], tip: "Many things, far away: those." }
    ]
  },
  {
    id: "basics-a-the", category: "english-new", unit: "g-new-things", type: "confused", name: "A or the",
    questions: [
      { sentence: "I have ___ dog. The dog is brown.", answer: "a", choices: ["a", "the"], tip: "A: the first time you talk about something." },
      { sentence: "___ sun is very hot today.", answer: "The", choices: ["A", "The"], tip: "There is only one sun, so: the sun." },
      { sentence: "She is ___ nurse.", answer: "a", choices: ["a", "the"], tip: "A for jobs: she is a nurse." },
      { sentence: "I saw a cat. ___ cat was black.", answer: "The", choices: ["A", "The"], tip: "The: when we already know which one." },
      { sentence: "___ moon is bright tonight.", answer: "The", choices: ["A", "The"], tip: "There is only one moon, so: the moon." },
      { sentence: "Can I have ___ banana? Any one is fine.", answer: "a", choices: ["a", "the"], tip: "A: any one, not a special one." },
      { sentence: "There is ___ big house on my street.", answer: "a", choices: ["a", "the"], tip: "A: the first time you talk about something." },
      { sentence: "Excuse me. Where is ___ bathroom?", answer: "the", choices: ["a", "the"], tip: "The: we both know which one." }
    ]
  },

  // Asking questions
  {
    id: "basics-question-words", category: "english-new", unit: "g-new-questions", type: "confused", name: "What, where, when, who",
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
    id: "basics-do-does", category: "english-new", unit: "g-new-questions", type: "confused", name: "Do or does",
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
    id: "basics-dont-doesnt", category: "english-new", unit: "g-new-questions", type: "confused", name: "Don't or doesn't",
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
    id: "basics-can", category: "english-new", unit: "g-new-questions", type: "confused", name: "Can or can't",
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

  // My, me, and whose
  {
    id: "basics-my-your", category: "english-new", unit: "g-new-whose", type: "confused", name: "My, your, his, her",
    questions: [
      { sentence: "I have a dog. ___ dog is brown.", answer: "My", choices: ["My", "Your", "His", "Her"], tip: "It is my dog. I → my." },
      { sentence: "You have a new phone. I like ___ phone.", answer: "your", choices: ["my", "your", "his", "her"], tip: "It is your phone. You → your." },
      { sentence: "Tom has a car. Tom is washing ___ car.", answer: "his", choices: ["my", "your", "his", "her"], tip: "It is Tom's car. He → his." },
      { sentence: "Maria has a book. Maria is reading ___ book.", answer: "her", choices: ["my", "your", "his", "her"], tip: "It is Maria's book. She → her." },
      { sentence: "I have keys. I cannot find ___ keys.", answer: "my", choices: ["my", "your", "his", "her"], tip: "They are my keys. I → my." },
      { sentence: "Sam had a hat. He lost ___ hat.", answer: "his", choices: ["my", "your", "his", "her"], tip: "It is Sam's hat. He → his." },
      { sentence: "Lily has a cat. She loves ___ cat.", answer: "her", choices: ["my", "your", "his", "her"], tip: "It is Lily's cat. She → her." },
      { sentence: "You have a ticket. Please show me ___ ticket.", answer: "your", choices: ["my", "your", "his", "her"], tip: "It is your ticket. You → your." }
    ]
  },
  {
    id: "basics-me-him", category: "english-new", unit: "g-new-whose", type: "confused", name: "Me, him, her, them",
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
    id: "basics-possessive", category: "english-new", unit: "g-new-whose", type: "confused", name: "Anna's bag: whose is it?",
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

  // Where things are
  {
    id: "basics-under-behind", category: "english-new", unit: "g-new-where", type: "confused", name: "Under, next to, behind",
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
    id: "basics-in-on-at", category: "english-new", unit: "g-new-where", type: "confused", name: "In, on, at",
    questions: [
      { sentence: "The meeting is ___ Monday.", answer: "on", choices: ["in", "on", "at"], tip: "On for days: on Monday, on my birthday." },
      { sentence: "I was born ___ 1990.", answer: "in", choices: ["in", "on", "at"], tip: "In for years, months, and seasons." },
      { sentence: "The class starts ___ nine.", answer: "at", choices: ["in", "on", "at"], tip: "At for clock times: at nine, at noon." },
      { sentence: "The keys are ___ the table.", answer: "on", choices: ["in", "on", "at"], tip: "On a surface: on the table." },
      { sentence: "My coat is ___ the closet.", answer: "in", choices: ["in", "on", "at"], tip: "In something closed: in the closet, in a box." },
      { sentence: "She is ___ the bus stop.", answer: "at", choices: ["in", "on", "at"], tip: "At a point or place: at the bus stop, at home." },
      { sentence: "We go swimming ___ July.", answer: "in", choices: ["in", "on", "at"], tip: "In for months: in July." },
      { sentence: "He lives ___ Chicago.", answer: "in", choices: ["in", "on", "at"], tip: "In for cities and countries." }
    ]
  },

  // Doing things
  {
    id: "basics-like-likes", category: "english-new", unit: "g-new-doing", type: "confused", name: "Like or likes",
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
    id: "basics-right-now", category: "english-new", unit: "g-new-doing", type: "confused", name: "I am eating: right now",
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
    id: "basics-going-to", category: "english-new", unit: "g-new-doing", type: "confused", name: "Going to: the future",
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

  // How much and how many
  {
    id: "basics-some-any", category: "english-new", unit: "g-new-how-much", type: "confused", name: "Some or any",
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
    id: "basics-much-many", category: "english-new", unit: "g-new-how-much", type: "confused", name: "Much or many",
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

  // The past
  {
    id: "basics-was-were", category: "english-new", unit: "g-new-past", type: "confused", name: "Was or were",
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
    id: "basics-past-ed", category: "english-new", unit: "g-new-past", type: "confused", name: "Past tense: -ed",
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
    id: "basics-past-irregular", category: "english-new", unit: "g-new-past", type: "confused", name: "Past tense: came, had, made",
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

  // Comparing
  {
    id: "basics-comparing", category: "english-new", unit: "g-new-comparing", type: "confused", name: "Bigger, smaller: comparing two things",
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
    id: "basics-the-biggest", category: "english-new", unit: "g-new-comparing", type: "confused", name: "The biggest: the most of all",
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
  // ===== I know some English, and I want to build on it =====

  // Their, your, its: apostrophe words
  {
    id: "confused-there", category: "english-build", unit: "g-build-apostrophes", type: "confused", name: "Confused words: their, there, they're",
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
    id: "confused-your", category: "english-build", unit: "g-build-apostrophes", type: "confused", name: "Confused words: your, you're",
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
    id: "confused-its", category: "english-build", unit: "g-build-apostrophes", type: "confused", name: "Confused words: its, it's",
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
    id: "confused-were", category: "english-build", unit: "g-build-apostrophes", type: "confused", name: "Confused words: were, where, we're",
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
    id: "build-whose-whos", category: "english-build", unit: "g-build-apostrophes", type: "confused", name: "Whose or who's",
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

  // Sound-alike words
  {
    id: "confused-to", category: "english-build", unit: "g-build-sound-alike", type: "confused", name: "Confused words: to, too, two",
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
    id: "build-weather-whether", category: "english-build", unit: "g-build-sound-alike", type: "confused", name: "Weather or whether",
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
    id: "build-past-passed", category: "english-build", unit: "g-build-sound-alike", type: "confused", name: "Past or passed",
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
    id: "build-accept-except", category: "english-build", unit: "g-build-sound-alike", type: "confused", name: "Accept or except",
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

  // Look-alike words
  {
    id: "confused-then", category: "english-build", unit: "g-build-look-alike", type: "confused", name: "Confused words: then, than",
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
    id: "confused-lose", category: "english-build", unit: "g-build-look-alike", type: "confused", name: "Confused words: lose, loose",
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
    id: "build-quiet-quite", category: "english-build", unit: "g-build-look-alike", type: "confused", name: "Quiet, quite, or quit",
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
    id: "build-advice-advise", category: "english-build", unit: "g-build-look-alike", type: "confused", name: "Advice or advise",
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
    id: "build-breath-breathe", category: "english-build", unit: "g-build-look-alike", type: "confused", name: "Breath or breathe",
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
    id: "build-desert-dessert", category: "english-build", unit: "g-build-look-alike", type: "confused", name: "Desert or dessert",
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

  // Word pairs people mix up
  {
    id: "build-say-tell", category: "english-build", unit: "g-build-pairs", type: "confused", name: "Say or tell",
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
    id: "build-make-do", category: "english-build", unit: "g-build-pairs", type: "confused", name: "Make or do",
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
    id: "build-borrow-lend", category: "english-build", unit: "g-build-pairs", type: "confused", name: "Borrow or lend",
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
    id: "build-bring-take", category: "english-build", unit: "g-build-pairs", type: "confused", name: "Bring or take",
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
    id: "build-good-well", category: "english-build", unit: "g-build-pairs", type: "confused", name: "Good or well",
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

  // Verbs and tenses
  {
    id: "past-irregular", category: "english-build", unit: "g-build-tenses", type: "confused", name: "Past tense: irregular verbs",
    questions: [
      { sentence: "Yesterday we ___ to the zoo.", answer: "went", choices: ["goed", "went", "gone"], tip: "Go → went (yesterday) → have gone." },
      { sentence: "I ___ a great book last month.", answer: "read", choices: ["readed", "read"], tip: "Read → read. It's spelled the same, but said like \"red\"." },
      { sentence: "She ___ her lunch an hour ago.", answer: "ate", choices: ["eated", "ate", "eaten"], tip: "Eat → ate → have eaten." },
      { sentence: "We ___ our friends at the party.", answer: "saw", choices: ["seed", "saw", "seen"], tip: "See → saw → have seen." },
      { sentence: "He ___ a new phone for $300.", answer: "bought", choices: ["buyed", "bought", "brought"], tip: "Buy → bought. (Bring → brought is a different verb.)" },
      { sentence: "They ___ the race last year.", answer: "won", choices: ["winned", "won"], tip: "Win → won." },
      { sentence: "I ___ my keys at home this morning.", answer: "left", choices: ["leaved", "left"], tip: "Leave → left." },
      { sentence: "The kids ___ asleep in the car.", answer: "fell", choices: ["falled", "fell", "fallen"], tip: "Fall → fell → have fallen." }
    ]
  },
  {
    id: "build-used-to", category: "english-build", unit: "g-build-tenses", type: "confused", name: "Used to or use to",
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
    id: "build-for-since", category: "english-build", unit: "g-build-tenses", type: "confused", name: "For or since",
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
    id: "build-have-you-ever", category: "english-build", unit: "g-build-tenses", type: "confused", name: "Have you ever...? (present perfect)",
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
    id: "build-already-yet", category: "english-build", unit: "g-build-tenses", type: "confused", name: "Already or yet",
    questions: [
      { sentence: "I've ___ eaten.", answer: "already", choices: ["already", "yet"], tip: "Already = sooner than expected, in yes sentences." },
      { sentence: "I haven't finished my homework ___.", answer: "yet", choices: ["already", "yet"], tip: "Yet in not sentences, usually at the end." },
      { sentence: "She hasn't called ___.", answer: "yet", choices: ["already", "yet"], tip: "Yet in not sentences, usually at the end." },
      { sentence: "The train has ___ left.", answer: "already", choices: ["already", "yet"], tip: "Already = it happened before now." },
      { sentence: "We're not there ___. Keep driving.", answer: "yet", choices: ["already", "yet"], tip: "Yet in not sentences, usually at the end." },
      { sentence: "I've ___ seen this movie.", answer: "already", choices: ["already", "yet"], tip: "Already = it happened before now." },
      { sentence: "He isn't here ___.", answer: "yet", choices: ["already", "yet"], tip: "Yet in not sentences." },
      { sentence: "We've ___ paid the bill.", answer: "already", choices: ["already", "yet"], tip: "Already = it happened before now." }
    ]
  },

  // Building sentences
  {
    id: "build-quick-quickly", category: "english-build", unit: "g-build-sentences", type: "confused", name: "Quick or quickly",
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
    id: "build-to-swim-swimming", category: "english-build", unit: "g-build-sentences", type: "confused", name: "To swim or swimming",
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
    id: "build-if-will", category: "english-build", unit: "g-build-sentences", type: "confused", name: "If it rains: if and will",
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
  // ===== I want to polish my English =====

  // Common mistakes
  {
    id: "polish-could-have", category: "english-polish", unit: "g-polish-common", type: "confused", name: "Could have, not could of",
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
    id: "polish-i-me", category: "english-polish", unit: "g-polish-common", type: "confused", name: "I, me, or myself",
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
    id: "polish-everyday", category: "english-polish", unit: "g-polish-common", type: "confused", name: "Everyday or every day",
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
    id: "polish-anyway-regardless", category: "english-polish", unit: "g-polish-common", type: "confused", name: "Anyway and regardless",
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
    id: "polish-fewer-less", category: "english-polish", unit: "g-polish-common", type: "confused", name: "Fewer or less",
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

  // Mixed-up pairs
  {
    id: "polish-affect-effect", category: "english-polish", unit: "g-polish-pairs", type: "confused", name: "Affect or effect",
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
    id: "polish-farther-further", category: "english-polish", unit: "g-polish-pairs", type: "confused", name: "Farther or further",
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
    id: "polish-ensure-insure", category: "english-polish", unit: "g-polish-pairs", type: "confused", name: "Ensure or insure",
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
    id: "polish-among-between", category: "english-polish", unit: "g-polish-pairs", type: "confused", name: "Among or between",
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
    id: "polish-amount-number", category: "english-polish", unit: "g-polish-pairs", type: "confused", name: "Amount or number",
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

  // Spelling twins
  {
    id: "polish-compliment", category: "english-polish", unit: "g-polish-spelling", type: "confused", name: "Compliment or complement",
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
    id: "polish-principal", category: "english-polish", unit: "g-polish-spelling", type: "confused", name: "Principal or principle",
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
    id: "polish-stationery", category: "english-polish", unit: "g-polish-spelling", type: "confused", name: "Stationary or stationery",
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
    id: "polish-capital-capitol", category: "english-polish", unit: "g-polish-spelling", type: "confused", name: "Capital or capitol",
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
    id: "polish-peak-peek", category: "english-polish", unit: "g-polish-spelling", type: "confused", name: "Peak, peek, or pique",
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

  // Grammar rules
  {
    id: "polish-who-whom", category: "english-polish", unit: "g-polish-rules", type: "confused", name: "Who or whom",
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
    id: "polish-that-which", category: "english-polish", unit: "g-polish-rules", type: "confused", name: "That or which",
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
    id: "polish-lie-lay", category: "english-polish", unit: "g-polish-rules", type: "confused", name: "Lie or lay",
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
    id: "polish-if-i-were", category: "english-polish", unit: "g-polish-rules", type: "confused", name: "If I were: wishes and suggestions",
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

  // Precise meanings
  {
    id: "polish-imply-infer", category: "english-polish", unit: "g-polish-precise", type: "confused", name: "Imply or infer",
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
    id: "polish-discreet", category: "english-polish", unit: "g-polish-precise", type: "confused", name: "Discreet or discrete",
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
    id: "polish-elicit-illicit", category: "english-polish", unit: "g-polish-precise", type: "confused", name: "Elicit or illicit",
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
    id: "polish-loath-loathe", category: "english-polish", unit: "g-polish-precise", type: "confused", name: "Loath or loathe",
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
    id: "polish-emigrate", category: "english-polish", unit: "g-polish-precise", type: "confused", name: "Emigrate or immigrate",
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
    id: "polish-ie-eg", category: "english-polish", unit: "g-polish-precise", type: "confused", name: "i.e. or e.g.",
    questions: [
      { sentence: "Bring some fruit, ___, apples or pears.", answer: "e.g.", choices: ["i.e.", "e.g."], tip: "e.g. = for example (example given)." },
      { sentence: "He's my only sibling, ___, my brother.", answer: "i.e.", choices: ["i.e.", "e.g."], tip: "i.e. = that is, in other words." },
      { sentence: "I love citrus fruit, ___, oranges and lemons.", answer: "e.g.", choices: ["i.e.", "e.g."], tip: "e.g. = for example." },
      { sentence: "The deadline is the end of the month, ___, March 31.", answer: "i.e.", choices: ["i.e.", "e.g."], tip: "i.e. = that is." },
      { sentence: "Try a winter sport, ___, skiing.", answer: "e.g.", choices: ["i.e.", "e.g."], tip: "e.g. = for example." },
      { sentence: "Meet at noon, ___, 12:00 p.m.", answer: "i.e.", choices: ["i.e.", "e.g."], tip: "i.e. = that is." },
      { sentence: "Pack warm clothes, ___, a scarf and gloves.", answer: "e.g.", choices: ["i.e.", "e.g."], tip: "e.g. = for example." },
      { sentence: "She's a polyglot, ___, she speaks many languages.", answer: "i.e.", choices: ["i.e.", "e.g."], tip: "i.e. = in other words." }
    ]
  }
);
