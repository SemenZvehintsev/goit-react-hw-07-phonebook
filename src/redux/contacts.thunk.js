import axios from "axios";
const { createAsyncThunk } = require("@reduxjs/toolkit");


export const fetchContacts = createAsyncThunk('fetchAll', 
    async (_, thunkAPI) => {
    try {
        const {data} = await axios.get('https://63ebaebfbdcfa5035f6bd1de.mockapi.io/contacts')
        return data
    } catch (error) {return thunkAPI.rejectWithValue(error.message)}
})


export const addContact = createAsyncThunk('addContact', 
    async (contact, thunkAPI) => {
    try {
        const {data} = await axios.post(`https://63ebaebfbdcfa5035f6bd1de.mockapi.io/contacts/`, contact)
        return data
    } catch (error) {return thunkAPI.rejectWithValue(error.message)}
})

export const deleteContact = createAsyncThunk(
    'deleteContact', 
    async (id, thunkAPI) => {
    try {
        const {data} = await axios.delete(`https://63ebaebfbdcfa5035f6bd1de.mockapi.io/contacts/${id}`)
        return data
    } catch (error) {return thunkAPI.rejectWithValue(error.message)}
})
