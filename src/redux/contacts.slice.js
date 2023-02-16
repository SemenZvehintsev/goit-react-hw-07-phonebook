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
        state.filter = payload}
    },
    extraReducers: builder => {
        builder
        .addCase(addFilter, (state, {payload}) => {
            state.filter = payload
        })
        .addCase(fetchContacts.pending, handlePending)
        .addCase(fetchContacts.fulfilled, (state, {payload}) => {
            state.contacts.items = payload;
            state.contacts.isLoading = false
        })
        .addCase(fetchContacts.rejected, handleRejected)
        .addCase(deleteContact.pending, handlePending)
        .addCase(deleteContact.fulfilled, (state, {payload}) => {
            state.contacts.items = state.contacts.items.filter(item => item.id !== payload.id);
            state.contacts.isLoading = false
        })
        .addCase(deleteContact.rejected, handleRejected)
        .addCase(addContact.pending, handlePending)
        .addCase(addContact.fulfilled, (state, {payload}) => {
            state.contacts.items.push(payload);
            state.contacts.isLoading = false
        })
        .addCase(addContact.rejected, handleRejected)
    }
})

export const {addFilter} = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
