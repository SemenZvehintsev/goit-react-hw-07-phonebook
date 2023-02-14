import { createSlice } from "@reduxjs/toolkit";
import { contactsInitialState } from "./contacts.initialState";
import { fetchContacts, addContact, deleteContact } from './contacts.thunk'

const handlePending = state => {
    state.contacts.isLoading = true;
};

const handleRejected = (state, {payload}) => {
    state.contacts.isLoading = true;
    state.contacts.error = payload;
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactsInitialState,
    reducers: {
            addFilter(state, {payload}){
            state.filter = payload
          }
    },
    extraReducers: {
        [fetchContacts.pending]: handlePending,
        [fetchContacts.fulfilled]: (state, {payload}) => {
            state.contacts.items = payload;
            state.contacts.isLoading = false
        },
        [fetchContacts.rejected]: handleRejected,
        [deleteContact.pending]: handlePending,
        [deleteContact.fulfilled]: (state, {payload}) => {
            state.contacts.items = state.contacts.items.filter(item => item.id !== payload.id);
            state.contacts.isLoading = false
        },
        [deleteContact.rejected]: handleRejected,
        [addContact.pending]: handlePending,
        [addContact.fulfilled]: (state, {payload}) => {
            state.contacts.items.push(payload);
            state.contacts.isLoading = false
        },
        [addContact.rejected]: handleRejected,
    }
})

export const {addFilter} = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
