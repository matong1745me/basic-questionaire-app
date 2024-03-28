type Choice = {
  id: number;
  choiceTitle: string;
};

type Choices = Choice[];

type Question = {
  id: number;
  questionTitle: string;
  choices: Choices;
  answer: number;
};

type Questions = Question[];

const questions: Questions = [
  {
    id: 1,
    questionTitle: 'What is the capital of Italy?',
    choices: [
      {
        id: 1,
        choiceTitle: 'Paris',
      },
      {
        id: 2,
        choiceTitle: 'Berlin',
      },
      {
        id: 3,
        choiceTitle: 'Rome',
      },
      {
        id: 4,
        choiceTitle: 'Madrid',
      },
    ],
    answer: 3,
  },
  {
    id: 2,
    questionTitle: 'Which is the largest ocean on Earth?',
    choices: [
      {
        id: 1,
        choiceTitle: 'Atlantic Ocean',
      },
      {
        id: 2,
        choiceTitle: 'Indian Ocean',
      },
      {
        id: 3,
        choiceTitle: 'Arctic Ocean',
      },
      {
        id: 4,
        choiceTitle: 'Pacific Ocean',
      },
    ],
    answer: 4,
  },
  {
    id: 3,
    questionTitle: 'What is the chemical symbol for oxygen?',
    choices: [
      {
        id: 1,
        choiceTitle: 'O2',
      },
      {
        id: 2,
        choiceTitle: 'CO2',
      },
      {
        id: 3,
        choiceTitle: 'H2O',
      },
      {
        id: 4,
        choiceTitle: 'N2',
      },
    ],
    answer: 1,
  },
  {
    id: 4,
    questionTitle: 'Who wrote "Romeo and Juliet"?',
    choices: [
      {
        id: 1,
        choiceTitle: 'Charles Dickens',
      },
      {
        id: 2,
        choiceTitle: 'William Shakespeare',
      },
      {
        id: 3,
        choiceTitle: 'Jane Austen',
      },
      {
        id: 4,
        choiceTitle: 'Mark Twain',
      },
    ],
    answer: 2,
  },
  {
    id: 5,
    questionTitle: 'What is the chemical symbol for gold?',
    choices: [
      {
        id: 1,
        choiceTitle: 'Au',
      },
      {
        id: 2,
        choiceTitle: 'Ag',
      },
      {
        id: 3,
        choiceTitle: 'Pb',
      },
      {
        id: 4,
        choiceTitle: 'Fe',
      },
    ],
    answer: 1,
  },
  {
    id: 6,
    questionTitle: 'Which country is known as the Land of the Rising Sun?',
    choices: [
      {
        id: 1,
        choiceTitle: 'China',
      },
      {
        id: 2,
        choiceTitle: 'Japan',
      },
      {
        id: 3,
        choiceTitle: 'India',
      },
      {
        id: 4,
        choiceTitle: 'Australia',
      },
    ],
    answer: 2,
  },
  {
    id: 7,
    questionTitle: 'Who painted the Mona Lisa?',
    choices: [
      {
        id: 1,
        choiceTitle: 'Leonardo da Vinci',
      },
      {
        id: 2,
        choiceTitle: 'Pablo Picasso',
      },
      {
        id: 3,
        choiceTitle: 'Vincent van Gogh',
      },
      {
        id: 4,
        choiceTitle: 'Michelangelo',
      },
    ],
    answer: 1,
  },
  {
    id: 8,
    questionTitle: 'What is the largest mammal?',
    choices: [
      {
        id: 1,
        choiceTitle: 'Elephant',
      },
      {
        id: 2,
        choiceTitle: 'Blue Whale',
      },
      {
        id: 3,
        choiceTitle: 'Giraffe',
      },
      {
        id: 4,
        choiceTitle: 'Hippopotamus',
      },
    ],
    answer: 2,
  },
  {
    id: 9,
    questionTitle: 'Who developed the theory of relativity?',
    choices: [
      {
        id: 1,
        choiceTitle: 'Albert Einstein',
      },
      {
        id: 2,
        choiceTitle: 'Isaac Newton',
      },
      {
        id: 3,
        choiceTitle: 'Stephen Hawking',
      },
      {
        id: 4,
        choiceTitle: 'Nikola Tesla',
      },
    ],
    answer: 1,
  },
  {
    id: 10,
    questionTitle: 'What is the chemical symbol for sodium?',
    choices: [
      {
        id: 1,
        choiceTitle: 'Na',
      },
      {
        id: 2,
        choiceTitle: 'S',
      },
      {
        id: 3,
        choiceTitle: 'Sn',
      },
      {
        id: 4,
        choiceTitle: 'Ni',
      },
    ],
    answer: 1,
  },
  {
    id: 11,
    questionTitle: 'Who is known as the father of modern physics?',
    choices: [
      {
        id: 1,
        choiceTitle: 'Albert Einstein',
      },
      {
        id: 2,
        choiceTitle: 'Isaac Newton',
      },
      {
        id: 3,
        choiceTitle: 'Galileo Galilei',
      },
      {
        id: 4,
        choiceTitle: 'Nikola Tesla',
      },
    ],
    answer: 1,
  },
  {
    id: 12,
    questionTitle: 'What is the smallest planet in our solar system?',
    choices: [
      {
        id: 1,
        choiceTitle: 'Mars',
      },
      {
        id: 2,
        choiceTitle: 'Venus',
      },
      {
        id: 3,
        choiceTitle: 'Mercury',
      },
      {
        id: 4,
        choiceTitle: 'Earth',
      },
    ],
    answer: 3,
  },
  {
    id: 13,
    questionTitle: 'Who wrote "The Great Gatsby"?',
    choices: [
      {
        id: 1,
        choiceTitle: 'F. Scott Fitzgerald',
      },
      {
        id: 2,
        choiceTitle: 'Ernest Hemingway',
      },
      {
        id: 3,
        choiceTitle: 'William Faulkner',
      },
      {
        id: 4,
        choiceTitle: 'John Steinbeck',
      },
    ],
    answer: 1,
  },
  {
    id: 14,
    questionTitle: 'What is the chemical symbol for carbon?',
    choices: [
      {
        id: 1,
        choiceTitle: 'C',
      },
      {
        id: 2,
        choiceTitle: 'Ca',
      },
      {
        id: 3,
        choiceTitle: 'Co',
      },
      {
        id: 4,
        choiceTitle: 'Cr',
      },
    ],
    answer: 1,
  },
  {
    id: 15,
    questionTitle: 'Who painted "The Starry Night"?',
    choices: [
      {
        id: 1,
        choiceTitle: 'Pablo Picasso',
      },
      {
        id: 2,
        choiceTitle: 'Vincent van Gogh',
      },
      {
        id: 3,
        choiceTitle: 'Leonardo da Vinci',
      },
      {
        id: 4,
        choiceTitle: 'Claude Monet',
      },
    ],
    answer: 2,
  },
  {
    id: 16,
    questionTitle: 'What is the chemical symbol for helium?',
    choices: [
      {
        id: 1,
        choiceTitle: 'He',
      },
      {
        id: 2,
        choiceTitle: 'H',
      },
      {
        id: 3,
        choiceTitle: 'Li',
      },
      {
        id: 4,
        choiceTitle: 'Ne',
      },
    ],
    answer: 1,
  },
  {
    id: 17,
    questionTitle: 'Which planet is known as the "Red Planet"?',
    choices: [
      {
        id: 1,
        choiceTitle: 'Mars',
      },
      {
        id: 2,
        choiceTitle: 'Venus',
      },
      {
        id: 3,
        choiceTitle: 'Jupiter',
      },
      {
        id: 4,
        choiceTitle: 'Mercury',
      },
    ],
    answer: 1,
  },
  {
    id: 18,
    questionTitle: 'Who wrote "To Kill a Mockingbird"?',
    choices: [
      {
        id: 1,
        choiceTitle: 'Mark Twain',
      },
      {
        id: 2,
        choiceTitle: 'Harper Lee',
      },
      {
        id: 3,
        choiceTitle: 'John Steinbeck',
      },
      {
        id: 4,
        choiceTitle: 'J.D. Salinger',
      },
    ],
    answer: 2,
  },
  {
    id: 19,
    questionTitle: 'What is the chemical symbol for silver?',
    choices: [
      {
        id: 1,
        choiceTitle: 'Ag',
      },
      {
        id: 2,
        choiceTitle: 'Au',
      },
      {
        id: 3,
        choiceTitle: 'Si',
      },
      {
        id: 4,
        choiceTitle: 'Fe',
      },
    ],
    answer: 1,
  },
  {
    id: 20,
    questionTitle: 'Who invented the telephone?',
    choices: [
      {
        id: 1,
        choiceTitle: 'Thomas Edison',
      },
      {
        id: 2,
        choiceTitle: 'Alexander Graham Bell',
      },
      {
        id: 3,
        choiceTitle: 'Nikola Tesla',
      },
      {
        id: 4,
        choiceTitle: 'Guglielmo Marconi',
      },
    ],
    answer: 2,
  },
];

export {type Question, type Questions, questions};
