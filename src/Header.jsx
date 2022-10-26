import './Header.css'
const Header = (props) => {
    return (
    <header>
        <h2>Counter App</h2>
        <h2>{props.name}</h2>
    </header>
    )
}

export default Header;