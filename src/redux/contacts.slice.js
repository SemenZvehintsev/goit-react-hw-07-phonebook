import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import storage from "redux-persist/lib/storage";
import { persistReducer } from 'redux-persist';
import { contactsInitialState } from "./contacts.initialState";

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactsInitialState,
    reducers: {
        addContact: {
            reducer(state, {payload}) {
                state.contacts.push(payload)}, 
            prepare(contactName, contactNumber) {
                return {
                    payload: {
                        id: nanoid(), 
                        contactName, 
                        contactNumber
                    },
                };
            },
        },
        deleteContact(state, {payload}) {
            state.contacts = state.contacts.filter(contact => contact.id !== payload)
        },
        addFilter(state, {payload}){
            state.filter = payload
          }
    },
})

const persistConfig = {
    key: 'contacts',
    storage,

    whitelist: ['contacts']
};

export const {addContact, deleteContact, addFilter} = contactsSlice.actions;
export const contactsReducer = persistReducer(persistConfig, contactsSlice.reducer);
