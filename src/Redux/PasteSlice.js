import { createSlice } from '@reduxjs/toolkit'
import toast, { Toaster } from 'react-hot-toast';

export const PasteSlice  = createSlice({
  name: 'paste',
  initialState: {
    pastes: localStorage.getItem('pastes')?
    JSON.parse(localStorage.getItem('pastes')):[]
  },
  reducers: {
    addToPaste: (state, action) => {
        const paste = action.payload;
        
        state.pastes.push(paste);
        localStorage.setItem("pastes", 
            JSON.stringify(state.pastes)
        )

        toast.success("Paste Added Successfully...")

    },
    updateToPaste: (state, action) => {
      const paste = action.payload;
      const index = state.pastes.findIndex((item) => item._id === paste._id);

      if(index >= 0)
      {
        state.pastes[index] = paste;
        localStorage.setItem("pastes", 
            JSON.stringify(state.pastes)
        )

        toast.success("Paste Updated Successfully...")
      }
    },
    removeFromPaste: (state, action) => {
        const pasteId = action.payload;
        const index = state.pastes.findIndex((item) => item._id === pasteId);

        if(index >= 0)
        {
            state.pastes.splice(index , 1);
            localStorage.setItem("pastes", JSON.stringify(state.pastes));

            toast.success("Paste Removed Succesfully....")
        }

    },
  },
})

// Action creators are generated for each case reducer function
export const { addToPaste, updateToPaste, removeFromPaste } = PasteSlice.actions

export default PasteSlice.reducer