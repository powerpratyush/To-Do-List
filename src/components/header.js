import PropTypes from 'prop-types'
import Button from './button';
const Header = ({title, onAdd, toggleAdd}) =>{
    
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color={toggleAdd ? "red" : "green"} text={toggleAdd ? "Close" : "Add"} onClick={onAdd}/>
        </header>
    );
}
Header.defaultProps = {
    title: 'Task Tracker',
}
Header.propTypes = {
    title: PropTypes.string.isRequired,
}
export default Header