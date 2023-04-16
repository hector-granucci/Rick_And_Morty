import { useSelector, useDispatch } from "react-redux"
import { Link } from 'react-router-dom';
import { filterCards, orderCards } from "../../redux/actions";
import { useState } from "react";


const Favorites = () => {

    const [aux, setAux] = useState(false)

    const dispatch = useDispatch();

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value))
        setAux(true)
    }

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
    }

    const { myFavorites } = useSelector(state => state)


    return (
        <div>
            <select onChange={handleOrder}>
                <option value="A">Asendente</option>
                <option value="D">Desendente</option>
            </select>
            <select onChange={handleFilter}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Gender</option>
                <option value="unknown">unknown</option>
                <option value="allCharacters">allCharacters</option>
            </select>
            <hr />
            {
                myFavorites?.map((character) => {
                    return (
                        <div key={character.id}>
                            <Link to={`/detail/${character.id}`} >
                                <h3 className="card-name">{character.name}</h3>
                            </Link>
                            <h2>{character.name}</h2>
                            <h2>{character.status}</h2>
                            <h2>{character.species}</h2>
                            <h2>{character.gender}</h2>
                            <h2>{character.origin.name}</h2>
                            <img src={character.image} alt={character.name} />
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Favorites