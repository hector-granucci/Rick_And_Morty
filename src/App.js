import './App.css';
import Cards from './components/Cards.jsx';
import Nav from "./components/Nav"
import { useState } from 'react';
import axios from "axios";
import {Routes, Route} from 'react-router-dom';
import Detail from './components/Detail';
import About from './components/About';
import Form from "./components/Form"
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Favorites from './components/favorites';



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
