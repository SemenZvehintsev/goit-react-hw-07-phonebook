import styles from 'components/Filter/Filter.module.css'
import { useDispatch, useSelector } from "react-redux";
import { getFilter } from 'redux/selectors';
import { addFilter } from 'redux/contacts.slice';

export const Filter = () => {
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();
    const handleFilter =(event)=> {
        dispatch(addFilter(event.target.value))
    }

    return <><div className={styles.filterForm}>
    <label htmlFor="filter">Find contacts by name</label>
    <input className={styles.text} type="text" id="filter" name="filter" value={filter} onChange={handleFilter}/>
    </div></>
}