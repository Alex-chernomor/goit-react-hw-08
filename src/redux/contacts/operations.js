import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const baseURL = 'https://connections-api.goit.global';

export const fetchContacts  = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(`${baseURL}/contacts`);      
      return res.data;
    } catch (error) {      
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact  = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkAPI) => {
    try {
      const res = await axios.post(`${baseURL}/contacts`, newContact);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const res = await axios.delete(`${baseURL}/contacts/${contactId}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editContact = createAsyncThunk(
  'contacts/editContact',
  async (contactId, thunkAPI) => {
    try {
      const res = await axios.patch(`${baseURL}/contacts/${contactId}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);