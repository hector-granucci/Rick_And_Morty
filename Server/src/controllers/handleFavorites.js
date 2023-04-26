let myFavorites = [];

const postFav = (req, res) => {
  const character = req.body;
  
  myFavorites.push(character);
  
  return res.status(200).json(myFavorites);
}


const deleteFav = (req, res) => {
    const {id} = req.params

     const characterFiltered = myFavorites.filter((favorite) => favorite.id !== id);

    myFavorites = characterFiltered;
  
    return res.status(200).json(myFavorites);
  };
  
  
  module.exports = {
    postFav,
    deleteFav
  };


