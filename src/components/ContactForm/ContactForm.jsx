import { useState } from "react";
import styles from 'components/ContactForm/ContactForm.module.css'
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "redux/selectors";
import { addContact } from "redux/contacts.slice";

export const ContactForm = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleSubmit =(event) => {
        event.preventDefault();
        if (contacts.map(({contactName}) => contactName.toLowerCase()).includes(name.toLowerCase())) { 
            alert(`${name} is already in contacts.`)} 
        else {
            dispatch(addContact(name, number));
            setName('');
            setNumber('');
        }
    }

    return <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="name">Name
        </label>
        <input
        className={styles.text}
        type="text"
        name="name"
        id="name"
        placeholder="Add name"
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={(event) => setName(event.target.value)}
        required
        />    
        <label htmlFor="tel">Number
        </label>
        <input
        className={styles.text}
        type="tel"
        name="number"
        id="tel"
        placeholder="Add number"
        value={number}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        onChange={(event) => setNumber(event.target.value)}
        required
        />
        <button className={styles.button} type="submit">Add contact</button>
    </form>
}
