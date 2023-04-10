import SearchBar from "./SearchBar"
import { Link } from 'react-router-dom';
// import About from "./About";

const Nav = (props) => {
    return (
   
        <nav>
            <SearchBar onSearch={props.onSearch}/>
            <button >
                <Link to="/about">ABOUT</Link>
            </button>
            <button>
                <Link to="/home">HOME</Link>
            </button>
        </nav>

    )
}


export default Nav