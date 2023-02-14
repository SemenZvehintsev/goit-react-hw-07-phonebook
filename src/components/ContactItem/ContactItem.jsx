import { useDispatch } from 'react-redux/es/exports';
import { deleteContact } from 'redux/contacts.slice';
import PropTypes from 'prop-types';
import styles from 'components/ContactItem/ContactItem.module.css'

export const ContactItem =({id, contactName, contactNumber})=> {
    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(deleteContact(id))
    }
    return <li className={styles.contact}> - {contactName}: {contactNumber} 
    <button className={styles.button} type="button" onClick={handleDelete}>Delete</button> 
    </li>
}

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    contactName: PropTypes.string.isRequired,
    contactNumber: PropTypes.string.isRequired,
}