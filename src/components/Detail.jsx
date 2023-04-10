import axios from "axios";
import { useParams } from 'react-router-dom';
import { useEffect, useState  } from 'react';

const URL_BASE = "https://be-a-rym.up.railway.app/api/character";
const API_KEY = "d2ec3b11fb95.5c0a34dfa6871328216a"


const Detail = (props) => {

    const { id } = useParams();

    const [character, setCharacter] = useState({})


    useEffect(() => {
        axios(`${URL_BASE}/${id}?key=${API_KEY}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);


    return (
        <div>
            <h2>{character?.name}</h2>
            <h2>{character?.status}</h2>
            <h2>{character?.species}</h2>
            <h2>{character?.gender}</h2>
            <h2>{character?.origin?.name}</h2>
            <img src={character?.image} alt={character?.name}/>
        </div>
    )
}


export default Detail