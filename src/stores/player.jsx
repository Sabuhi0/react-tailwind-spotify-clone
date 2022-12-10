import { createSlice } from '@reduxjs/toolkit'

export const playerSlice = createSlice({
  name: 'player',
  initialState: {
    current: false,
    controls: false,
    playing: false
  },
  reducers: {
    setCurrent: (state, action) => {
      state.current = action.payload
    },
    setControls: (state, action) => {
      state.controls = action.payload
    },
    setPlaying: (state, action) => {
      state.playing = action.payload
    }
  }
})

export const { setControls, setCurrent, setPlaying } = playerSlice.actions

export default playerSlice.reducer