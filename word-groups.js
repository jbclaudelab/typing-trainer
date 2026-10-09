// New words: each entry below is a group of words, and word-levels.js turns every group
// into a few levels, shown under one heading (a unit) in the menu:
//   1. Meet the words: a card for each word (meaning and example), and you type the word.
//   2. Type the words: you type each word 3 times.
//   3. Sentences: you type the right word into the gaps. Every 8 questions make one
//      sentence level, so harder groups with 16 or 24 questions get 2 or 3 of them.
// A group's "id" starts the ids of its levels, so group ids must never change either.
// Loaded after grammar-levels.js and before word-levels.js.

levels.push(
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
      { sentence: "The ___ comes from a chicken.", answer: "egg", choices: ["egg", "milk", "banana"], tip: "Eggs come from chickens." },
      { sentence: "I put ___ on my cereal.", answer: "milk", choices: ["milk", "egg", "apple"], tip: "Milk is a white drink." },
      { sentence: "The monkey is eating a ___.", answer: "banana", choices: ["banana", "water", "milk"], tip: "Monkeys love bananas." },
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
      { sentence: "It is late. We need to ___ to bed.", answer: "go", choices: ["go", "see", "jump"], tip: "Go means move from one place to another." },
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
      { word: "hungry", kind: "adjective", meaning: "wanting to eat", example: "I am hungry. It is time for lunch." },
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
      { sentence: "This phone only costs $99. It's very ___.", answer: "affordable", choices: ["affordable", "crowded", "comfortable"], tip: "Affordable = cheap enough to buy." },
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
      { sentence: "My ___ with the dentist is at 3:00.", answer: "appointment", choices: ["appointment", "fever", "pharmacy"], tip: "An appointment is a set time to see someone." },
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
      { sentence: "One sentence in the contract is ___. It could mean two things.", answer: "ambiguous", choices: ["ambiguous", "meticulous", "pragmatic"], tip: "Ambiguous = it could mean more than one thing." },
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
      { sentence: "We would appreciate ___ payment of this invoice.", answer: "prompt", choices: ["prompt", "assistance", "inquire"], tip: "Prompt = without delay." },
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
      { sentence: "The most ___ response would be to ask how she's feeling.", answer: "empathetic", choices: ["empathetic", "diligent", "stubborn"], tip: "Empathetic = understanding others' feelings." },
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
      { sentence: "The museum's collection of rare coins is ___, with thousands of pieces.", answer: "extensive", choices: ["extensive", "meager"], tip: "Extensive = large and wide-ranging. Meager = very small." },
      { sentence: "She gave a ___ speech that moved the whole room.", answer: "compelling", choices: ["compelling", "tedious"], tip: "Compelling = powerful and convincing. Tedious = boring." },
      { sentence: "The weather is ___, so bring a jacket just in case.", answer: "unpredictable", choices: ["unpredictable", "reliable"], tip: "Unpredictable = hard to know in advance." },
      { sentence: "Please be ___ and keep your answer short.", answer: "concise", choices: ["concise", "verbose"], tip: "Concise = brief and clear. Verbose = using too many words." },
      { sentence: "The two reports were ___, with no differences at all.", answer: "identical", choices: ["identical", "distinct"], tip: "Identical = exactly the same. Distinct = clearly different." }
    ]
  }
);
