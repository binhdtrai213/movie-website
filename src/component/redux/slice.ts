import { type videoType } from './../data'
import { createSlice } from '@reduxjs/toolkit'

export interface videoInitType {
  value: videoType[]
}

const initialState: videoInitType = {
  value: []
}

export const videoSlice = createSlice({
  name: 'video',
  initialState,
  reducers: {
    setInitialValue: (state, action) => {
      state.value = action.payload
    },
    addVideo: (state, action) => {
      state.value.push(action.payload)
    },
    deleteVideo: (state, action) => {
      state.value = state.value.filter(todo => todo.id !== action.payload)
    }
  },
})

// Action creators are generated for each case reducer function
export const { addVideo, deleteVideo, setInitialValue } = videoSlice.actions

export default videoSlice.reducer
