import { createSlice, createSelector } from "@reduxjs/toolkit";
import {selectContacts} from '../contacts/selectors';
import { selectNameFilter } from "./selectors";
const slice = createSlice({
    name:'filters',
    initialState:{
        name:'',
    },
    reducers:{
        searchName:(state,action)=>{
          state.name=action.payload
        }
    }
})

export const { searchName } = slice.actions;

export default slice.reducer;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) =>
    contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase()) || contact.number.includes(filter) 
    )
  );