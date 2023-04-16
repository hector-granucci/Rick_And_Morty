import './App.css';
import Cards from './components/Cards/Cards';
import Nav from "./components/Nav/Nav"
import { useState, useEffect } from 'react';
import axios from "axios";
import Detail from './components/Detail/Detail';
import About from './components/About/About';
import Form from "./components/Form/Form"
import { useLocation, useNavigate, Routes, Route } from 'react-router-dom';
import Favorites from './components/Favorites/favorites';



function App() {
  
   const navigate = useNavigate();
   const EMAIL = 'titototoxd456@hotmail.com';
   const [access, setAccess] = useState(false);
   const PASSWORD = 'Dientes7';
   
   function login(userData) {
   if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate('/home');
    }
   }
   
   useEffect(() => {
      !access && navigate('/');
   }, [access]);
      
   const [characters, setCharacters] = useState([])

   const URL_BASE = "https://be-a-rym.up.railway.app/api/character";
   const API_KEY = "d2ec3b11fb95.5c0a34dfa6871328216a"


   const location = useLocation();

   function onSearch(id) {
      axios(`${URL_BASE}/${id}?key=${API_KEY}`).then(({ data }) => {
         let include = characters.filter(ele => ele.id === id)
         if(include.length > 0){
          return alert("Ya existe el personaje con este ID")
         }
         if (data.name) {
            setCharacters([...characters, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

 
   const onClose=(id) => {
      const nuevosPersonajes= characters.filter(characters => characters.id !== id);
      setCharacters(nuevosPersonajes);
   }

 
   return (
      <div className='App'>
         {location.pathname !== '/' && <Nav onSearch={onSearch} />} 
         <Routes>
         <Route path="/home"  element={<Cards characters={characters} onClose={onClose}/>}/>
         <Route path="/about"  element={<About/>}/>
         <Route path="/detail/:id"  element={<Detail/>}/>
         <Route path="/"  element={<Form login={login}/>}/>
         <Route path="/favorites" element={<Favorites/>}/>
      </Routes>
      </div>
   );
}

export default App;
