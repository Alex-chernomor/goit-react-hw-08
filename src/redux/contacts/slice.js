import { createSlice } from "@reduxjs/toolkit";
import {
  fetchContacts,
   addContact,
   deleteContact,
  } from './operations'

const slice = createSlice({
    name:'items',
    initialState: {
        items: [], 
        loading: false,
        error: null
    },

    extraReducers: (builder) => {
        builder
          .addCase(fetchContacts.pending, (state) => {
            state.loading = true;
            state.error = false;
          })
          .addCase(fetchContacts.fulfilled, (state, action) => {
            state.loading = false;
            state.items = action.payload;
          })
          .addCase(fetchContacts.rejected, (state) => {
            state.loading = false;
            state.error = true;
          })
          .addCase(addContact.pending, (state) => {
            state.loading = true;
            state.error = false;
          })
          .addCase(addContact.fulfilled, (state, action) => {
            state.loading = false;
            state.items.push(action.payload);
          })
          .addCase(addContact.rejected, (state) => {
            state.loading = false;
            state.error = true;
          })
          .addCase(deleteContact.pending, (state) => {
            state.loading = true;
          })
          .addCase(deleteContact.fulfilled, (state, action) => {
            state.loading = false;
            state.items = state.items.filter(
              (item) => item.id !== action.payload.id
            );
          })
      },
});


export default slice.reducer;