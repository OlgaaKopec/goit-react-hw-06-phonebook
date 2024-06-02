import PropTypes from 'prop-types'
import './contactList.css'

export const ContactList = ({ contacts, onRemoveContact}) =>{ 
    
      return (
    <ul className="contactList">
      {contacts.map(({ id, name, number }) => (
        <li key={id}>{name}: {number}
        <button onClick={() => onRemoveContact(id)}>Delete</button>
        </li>
      ))}
    </ul>
 )}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf (
PropTypes.shape ({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
})
    ).isRequired,
    onRemoveContact: PropTypes.func.isRequired
    }