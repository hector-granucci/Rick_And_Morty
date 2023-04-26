import { Link} from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import { useState } from 'react';
import { addFav, removeFav } from '../../redux/actions';
import { useEffect } from 'react';
import style from "./Card.module.css"


export default function Card({id,name,status,species,gender,origin,image,onClose}) {
   const dispatch = useDispatch();
   const myFavorites = useSelector(state => state.myFavorites)
   const [isFav, setIsFav] = useState(false);

   const handleFavorites = () => {
      if (isFav){
         setIsFav(false)
         dispatch(removeFav(id))
      }
      else {
         setIsFav(true);
         dispatch(addFav({id,name,status,species,gender,origin,image,onClose}))
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites, id]);
 

   return ( 
      <div className={style.conteiner}>
         <div className={style.X}>
            <button onClick={() => onClose(id)}>X</button>
         </div>
         <div className={style.corazon}>
         {
            isFav ? (
               <button onClick={handleFavorites}>❤️</button>
             ) : (
               <button onClick={handleFavorites}>🤍</button>
            )
         }
         </div >
         <div className={style.detalle}>
         <Link to={`/detail/${id}`} >
           <h3 className="card-name">{name}</h3>
         </Link>
         </div>
         <div className={style.date}>
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin.name}</h2>
         <div className={style.img}>
         <img src={image} alt={name} />
         </div>
         </div>
      </div>
   );
}
