import {configureStore} from '@reduxjs/toolkit';
import playerSlice from './features/playerSlice';
import questionSlice from './features/questionSlice';
export const store = configureStore({
  reducer: {
    player: playerSlice,
    question: questionSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch;
