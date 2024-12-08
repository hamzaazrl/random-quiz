const questions = {
  easy: [
    { question: "What is 2 + 2?", answers: ["3", "4", "5", "6"], correct: "4" },
    {
      question: "What is the capital of France?",
      answers: ["Berlin", "Madrid", "Paris", "Rome"],
      correct: "Paris",
    },
    {
      question: "What is 5 + 3?",
      answers: ["7", "8", "9", "10"],
      correct: "8",
    },
    {
      question: "What color is the sky?",
      answers: ["Red", "Blue", "Green", "Yellow"],
      correct: "Blue",
    },
    {
      question: "How many continents are there?",
      answers: ["5", "6", "7", "8"],
      correct: "7",
    },
    {
      question: "Which animal is the largest?",
      answers: ["Elephant", "Giraffe", "Blue Whale", "Shark"],
      correct: "Blue Whale",
    },
    {
      question: "How many legs does a spider have?",
      answers: ["6", "8", "10", "12"],
      correct: "8",
    },
    {
      question: "How many planets are in the solar system?",
      answers: ["7", "8", "9", "10"],
      correct: "8",
    },
    {
      question: "Which month has 28 days?",
      answers: ["January", "February", "March", "All of them"],
      correct: "All of them",
    },
    {
      question: "What is the largest ocean?",
      answers: ["Atlantic", "Indian", "Pacific", "Arctic"],
      correct: "Pacific",
    },
  ],
  medium: [
    {
      question: "Who developed the theory of relativity?",
      answers: ["Newton", "Einstein", "Tesla", "Curie"],
      correct: "Einstein",
    },
    {
      question: "What is the chemical symbol for water?",
      answers: ["O2", "H2O", "CO2", "O3"],
      correct: "H2O",
    },
    {
      question: "Who wrote '1984'?",
      answers: ["George Orwell", "Aldous Huxley", "H.G. Wells", "Isaac Asimov"],
      correct: "George Orwell",
    },
    {
      question: "Which is the smallest planet in our solar system?",
      answers: ["Mars", "Venus", "Mercury", "Earth"],
      correct: "Mercury",
    },
    {
      question: "Who painted the Mona Lisa?",
      answers: ["Van Gogh", "Picasso", "Da Vinci", "Monet"],
      correct: "Da Vinci",
    },
    {
      question: "What is the capital of Japan?",
      answers: ["Seoul", "Beijing", "Tokyo", "Bangkok"],
      correct: "Tokyo",
    },
    {
      question: "Which animal can live without water for long periods?",
      answers: ["Camel", "Elephant", "Lion", "Dog"],
      correct: "Camel",
    },
    {
      question: "What is the hardest natural substance on Earth?",
      answers: ["Gold", "Diamond", "Iron", "Copper"],
      correct: "Diamond",
    },
    {
      question: "What is the largest desert in the world?",
      answers: ["Sahara", "Arctic", "Gobi", "Kalahari"],
      correct: "Arctic",
    },
    {
      question: "How many bones are in the adult human body?",
      answers: ["206", "210", "212", "220"],
      correct: "206",
    },
  ],
  hard: [
    {
      question: "What is the square root of 144?",
      answers: ["10", "11", "12", "13"],
      correct: "12",
    },
    {
      question: "Who wrote 'War and Peace'?",
      answers: ["Tolstoy", "Dostoevsky", "Pushkin", "Turgenev"],
      correct: "Tolstoy",
    },
    {
      question: "What is the value of Pi?",
      answers: ["3.141", "3.142", "3.14", "3.145"],
      correct: "3.141",
    },
    {
      question: "What element does 'O' represent on the periodic table?",
      answers: ["Oxygen", "Osmium", "Oganesson", "Ozone"],
      correct: "Oxygen",
    },
    {
      question: "What is the chemical symbol for gold?",
      answers: ["Au", "Ag", "Cu", "Fe"],
      correct: "Au",
    },
    {
      question: "Who was the first President of the United States?",
      answers: [
        "Abraham Lincoln",
        "George Washington",
        "Thomas Jefferson",
        "James Madison",
      ],
      correct: "George Washington",
    },
    {
      question: "What is the capital of Canada?",
      answers: ["Toronto", "Ottawa", "Vancouver", "Montreal"],
      correct: "Ottawa",
    },
    {
      question: "How many elements are in the periodic table?",
      answers: ["92", "108", "118", "126"],
      correct: "118",
    },
    {
      question: "Who is the author of 'The Great Gatsby'?",
      answers: [
        "F. Scott Fitzgerald",
        "J.K. Rowling",
        "Mark Twain",
        "Ernest Hemingway",
      ],
      correct: "F. Scott Fitzgerald",
    },
    {
      question: "What is the largest land animal?",
      answers: ["Elephant", "Giraffe", "Rhino", "Hippo"],
      correct: "Elephant",
    },
  ],
  veryHard: [
    // Add very hard questions here
    {
      question: "What is the value of Planck's constant?",
      answers: ["6.62607015×10^-34", "6.28×10^-34", "1.602×10^-19", "3.14159"],
      correct: "6.62607015×10^-34",
    },
    {
      question: "What is the first element in the periodic table?",
      answers: ["Oxygen", "Hydrogen", "Carbon", "Helium"],
      correct: "Hydrogen",
    },
    {
      question: "Who was the first woman to win a Nobel Prize?",
      answers: [
        "Marie Curie",
        "Dorothy Hodgkin",
        "Rosalind Franklin",
        "Lise Meitner",
      ],
      correct: "Marie Curie",
    },
    {
      question: "What year was the first iPhone released?",
      answers: ["2005", "2006", "2007", "2008"],
      correct: "2007",
    },
    {
      question: "What is the capital of Australia?",
      answers: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
      correct: "Canberra",
    },
    // More questions...
  ],
  expert: [
    // Add expert-level questions here
    {
      question: "What is the solution to the Riemann Hypothesis?",
      answers: ["Proven", "Unproven", "Conjecture", "None of the above"],
      correct: "Unproven",
    },
    {
      question: "What is the Schrödinger's cat thought experiment about?",
      answers: [
        "Quantum mechanics",
        "General relativity",
        "Astrophysics",
        "Electromagnetism",
      ],
      correct: "Quantum mechanics",
    },
    {
      question: "What is the capital of Bhutan?",
      answers: ["Thimphu", "Kathmandu", "Paro", "Bumthang"],
      correct: "Thimphu",
    },
    {
      question: "Which country was the first to grant women the right to vote?",
      answers: ["New Zealand", "Australia", "United States", "France"],
      correct: "New Zealand",
    },
    {
      question: "What is the origin of the term 'Computer Bug'?",
      answers: [
        "First found by Grace Hopper",
        "A defect in hardware",
        "A virus",
        "None of the above",
      ],
      correct: "First found by Grace Hopper",
    },
    // More questions...
  ],
};

let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let currentDifficulty = "";

// Start the quiz with the selected difficulty
function startQuiz(difficulty) {
  currentDifficulty = difficulty;
  score = 0;
  currentQuestionIndex = 0;
  currentQuestions = questions[difficulty];

  document.getElementById("menu").style.display = "none";
  document.getElementById("quiz").style.display = "block";

  loadQuestion();
}

// Load the current question
function loadQuestion() {
  if (currentQuestionIndex >= currentQuestions.length) {
    showResult();
    return;
  }

  const question = currentQuestions[currentQuestionIndex];
  document.getElementById("question").innerText = question.question;

  const answers = document.querySelectorAll(".answer");
  answers.forEach((button, index) => {
    button.innerText = question.answers[index];
    button.onclick = () =>
      checkAnswer(question.answers[index], question.correct);
  });
}

// Check the answer
function checkAnswer(selectedAnswer, correctAnswer) {
  if (selectedAnswer === correctAnswer) {
    score++;
  }

  // Disable buttons and show next question
  document.querySelectorAll(".answer").forEach((button) => {
    button.disabled = true;
  });
  document.getElementById("next").style.display = "block";
}

// Go to next question
function nextQuestion() {
  currentQuestionIndex++;
  loadQuestion();
  document.getElementById("next").style.display = "none";
  document.querySelectorAll(".answer").forEach((button) => {
    button.disabled = false;
  });
}

// Show final score
function showResult() {
  document.getElementById("quiz").style.display = "none";
  document.getElementById("result").style.display = "block";
  document.getElementById("final-score-result").innerText = score;
}

// Go back to the main menu
function goToMenu() {
  document.getElementById("result").style.display = "none";
  document.getElementById("menu").style.display = "block";
}
