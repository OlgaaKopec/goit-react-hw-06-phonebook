import PropTypes from 'prop-types'
import './filter.css'

export const Filter = ({filterContact, onFilterSearch }) => {

    return (
    <div className="filterStyle">
    <input 
    type= "text"
    placeholder="Type for search.."
    value={filterContact}
    onChange={onFilterSearch}>
    </input>
    </div>
)}

Filter.propTypes={
    filterContact: PropTypes.string.isRequired,
    onFilterSearch: PropTypes.func.isRequired,
}