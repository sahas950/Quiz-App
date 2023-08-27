const qBank = [
  {
    question:
      "Which company did Valve cooperate with in the creation of the Vive?",
    answers: ["HTC", "Oculus", "Google", "Razer"],
    correct: "HTC",
    questionId: "267908"
  },
  {
    question: "What's the name of Batman's  parents?",
    answers: [
      "Thomas & Martha",
      "Joey & Jackie",
      "Jason & Sarah",
      "Todd & Mira"
    ],
    correct: "Thomas & Martha",
    questionId: "333247"
  },
  {
    question: "What is the most common surname Wales?",
    answers: ["Jones", "Williams", "Davies", "Evans"],
    correct: "Jones",
    questionId: "496293"
  },
  {
    question:
      "What was the name of the WWF professional wrestling tag team made up of the wrestlers Ax and Smash?",
    answers: [
      "Demolition",
      "The Dream Team",
      "The Bushwhackers",
      "The British Bulldogs"
    ],
    correct: "Demolition",
    questionId: "588909"
  },
  {
    question:
      'What name represents the letter "M" in the NATO phonetic alphabet?',
    answers: ["Mike", "Matthew", "Mark", "Max"],
    correct: "Mike",
    questionId: "648452"
  }
];

export default (n = 5) =>
  Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));
