import { filmInformation, type videoType } from './../data'
import { createSlice } from '@reduxjs/toolkit'

export interface videoInitType {
  value: videoType[]
}

const initialState: videoInitType = {
  value: filmInformation
}

export const videoSlice = createSlice({
  name: 'video',
  initialState,
  reducers: {
    addVideo: (state, action) => {
      state.value.push(action.payload)
    },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
  },
})

// Action creators are generated for each case reducer function
export const { addVideo } = videoSlice.actions

export default videoSlice.reducer
