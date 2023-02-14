import { ContactItem } from "components/ContactItem/ContactItem";
import { useSelector } from "react-redux/es/exports";
import styles from 'components/ContactList/ContactList.module.css'
import { getContacts, getError, getFilter, getIsLoading } from "redux/selectors";

export const ContactList = () => {
    let contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    const error = useSelector(getError);
    const isLoading = useSelector(getIsLoading)

    if (filter) {
        contacts = contacts.filter(({contactName}) => 
        {return contactName.toLowerCase().indexOf(filter.toLowerCase()) > -1})
    }

    if (error) {alert(error)}
    
    return  <ul className={styles.contactList}>{isLoading && <p>Loading...</p>}{contacts && contacts.map(({id, contactName, contactNumber}) => 
    <ContactItem key={id} id={id} contactName={contactName} contactNumber={contactNumber}/>)}
    </ul>
}
