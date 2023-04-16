import SearchBar from "../SearchBar/SearchBar"
import { Link } from 'react-router-dom';
import style from "./Nav.module.css"


const Nav = (props) => {
    return (
        <div className={style.conteiner}>
        <nav>
            <div className={style.bar}>
            <SearchBar onSearch={props.onSearch}/>
            </div>
            <div className={style.about}>
            <button >
                <Link to="/about">ABOUT</Link>
            </button>
            </div>
            <div className={style.home}>
            <button>
                <Link to="/home">HOME</Link>
            </button>
            </div>
            <div className={style.fav}>
            <button>
                <Link to="/favorites">Favorites</Link>
            </button>
            </div>
        </nav>
        </div>
   

    )
}


export default Nav