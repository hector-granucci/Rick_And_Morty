import { Link} from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import { useState } from 'react';
import { addfav, removefav } from '../redux/actions';
import { useEffect } from 'react';


export default function Card({id,name,status,species,gender,origin,image,onClose}) {
   const dispatch = useDispatch();
   const myFavorites = useSelector(state => state.myFavorites)
   const [isFav, setIsFav] = useState(false);

   const handleFavorites = () => {
      if (isFav){
         setIsFav(false)
         dispatch(removefav(id))
      }
      else {
         setIsFav(true);
         dispatch(addfav({id,name,status,species,gender,origin,image,onClose}))
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);
 

   return ( 
      <div>
         <div>
         {
            isFav ? (
               <button onClick={handleFavorites}>❤️</button>
             ) : (
               <button onClick={handleFavorites}>🤍</button>
            )
         }
         </div>
         <Link to={`/detail/${id}`} >
           <h3 className="card-name">{name}</h3>
         </Link>
         <button onClick={() => onClose(id)}>X</button>
         <h2>{name}</h2>
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin.name}</h2>
         <img src={image} alt={name} />
      </div>
   );
}
