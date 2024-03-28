import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../store';

import {questions} from '../../data/questions';
import type {Questions} from '../../data/questions';

type QuestionState = {
  initialQuestions: Questions;
  currentIndex: number;
  answerIds: {questionId: number; answerId: number}[];
};

const initialState: QuestionState = {
  initialQuestions: questions
    .map(item => [Math.random(), item])
    .sort(([a], [b]) => a - b)
    .map(([, item]) => item),
  currentIndex: 0,
  answerIds: [],
};

export const questionSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {
    saveAnswer: (
      state,
      action: PayloadAction<{questionId: number; answerId: number}>,
    ) => {
      const body: {questionId: number; answerId: number} = {
        questionId: action.payload.questionId,
        answerId: action.payload.answerId,
      };
      const foundIndex = state.answerIds.findIndex(
        asnwerId => asnwerId.questionId === body.questionId,
      );
      if (foundIndex > -1) {
        state.answerIds[foundIndex] = {
          ...state.answerIds[foundIndex],
          answerId: body.answerId,
        };
      } else {
        state.answerIds = [...state.answerIds, body];
        console.log(state.answerIds)
      }
    },
    nextQuestion: state => {
      if (state.currentIndex + 1 < state.initialQuestions.length) {
        state.currentIndex += 1;
      }
    },
    previousQuestion: state => {
      if (state.currentIndex > 0) {
        state.currentIndex -= 1;
      }
    },
  },
});

export const {nextQuestion, previousQuestion, saveAnswer} =
  questionSlice.actions;

export const selectCurrentQestion = (state: RootState) =>
  state.question.initialQuestions[state.question.currentIndex];
export const selectSelectedChoice = (state: RootState) =>
  state.question.answerIds[state.question.currentIndex];

export default questionSlice.reducer;
