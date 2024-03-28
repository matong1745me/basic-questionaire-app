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
  allPlayers: [
    {
      name: 'Player 1',
      score: 13,
    },
    {
      name: 'Player 2',
      score: 15,
    },
    {
      name: 'Player 3',
      score: 11,
    },
    {
      name: 'Player 10',
      score: 2,
    },
  ],
};

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    addScore: (state, action: PayloadAction<number>) => {
      state.allPlayers.push({
        name: state.name,
        score: action.payload,
      });
      state.name = '';
    },
    setPlayerName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

export const {addScore, setPlayerName} = playerSlice.actions;

export const selectPlayerName = (state: RootState) => state.player.name;
export const selectScore = (state: RootState) => state.player.score;
export const selectSortedPlayers = (state: RootState) => 
  [...state.player.allPlayers].sort((a, b) => b.score - a.score);
export default playerSlice.reducer;
