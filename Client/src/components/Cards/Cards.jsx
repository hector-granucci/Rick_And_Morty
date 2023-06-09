import Card from '../Card/Card';
import style from "./Cards.module.css"


 function Cards(props) {

   return (
   <div className={style.Cards}>
      {
      props.characters?.map((s) => {
         return ( <div key={s.id}>
          <Card
          id ={s.id}
         name={s.name}
         status={s.status}
         species={s.species}
         gender={s.gender}
         origin={s.origin.name}
         image={s.image}
         onClose= {props.onClose} />
         </div>
         )
      })
   }
   </div>
   )
}

export default Cards;