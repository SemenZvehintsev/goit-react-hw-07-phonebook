import { ContactItem } from "components/ContactItem/ContactItem";
import { useSelector } from "react-redux/es/exports";
import styles from 'components/ContactList/ContactList.module.css'
import { getContacts, getFilter } from "redux/selectors";

export const ContactList = () => {
    let contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);

    if (filter) {
        contacts = contacts.filter(({contactName}) => 
        {return contactName.toLowerCase().indexOf(filter.toLowerCase()) > -1})
    }
    
    return  <ul className={styles.contactList}>{contacts && contacts.map(({id, contactName, contactNumber}) => 
    <ContactItem key={id} id={id} contactName={contactName} contactNumber={contactNumber}/>)}
    </ul>
}
