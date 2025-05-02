import { createSlice } from '@reduxjs/toolkit'

const chatSlice = createSlice({
  name: 'chatData',
  initialState: { welcomeMsg:"👋 Want to chat about Hubly? I'm an chatbot here to help you find your way.",
    
  },
  reducers: {
    setWelcomeMsg:((state, action)=>{
        state.welcomeMsg = action.payload;
    })
  },
})

export const { setWelcomeMsg } = chatSlice.actions
export default chatSlice.reducer