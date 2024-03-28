import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../store';

interface PlayerState {
  name: string;
  score: number;
  allPlayers: {
    name: string;
    score: number;
  }[];
}


const initialState: PlayerState = {
  name: '',
  score: 0,
  allPlayers: [],
};

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    addScore: (state, action: PayloadAction<number>) => {
      state.score += action.payload;
    },
    setPlayerName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

export const {addScore, setPlayerName} = playerSlice.actions;

export const selectPlayerName = (state: RootState) => state.player.name;
export const selectScore = (state: RootState) => state.player.score;

export default playerSlice.reducer;
