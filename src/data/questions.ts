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
    questionTitle: 'Questtion 1',
    choices: [
      {
        id: 1,
        choiceTitle: 'Choice 1',
      },
      {
        id: 2,
        choiceTitle: 'Choice 2',
      },
    ],
    answer: 1,
  },
  {
    id: 2,
    questionTitle: 'Questtion 2',
    choices: [
      {
        id: 3,
        choiceTitle: 'Choice 1',
      },
      {
        id: 4,
        choiceTitle: 'Choice 2',
      },
    ],
    answer: 4,
  },
];

export default questions;
