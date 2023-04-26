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
const URL = 'http://localhost:3001/rickandmorty/login/';



function App() {
  
   const navigate = useNavigate();
   const [access, setAccess] = useState(false);


   const login = async (userData) => {
      try {
         const { email, password } = userData;
         const {data} = await   axios(URL + `?email=${email}&password=${password}`)
         const { access } = data;

            setAccess(access);
            access && navigate('/home');
            
         } catch (error) {
         console.log(error.message);        
      }
   }
   
   

   
   useEffect(() => {
      !access && navigate('/');
   }, [access, navigate]);
      
   const [characters, setCharacters] = useState([])
   const location = useLocation();



   const  onSearch = async (id) => {
      try {
         const {data} = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
            let include = characters.filter(ele => ele.id === id)
            if(include.length > 0){
             return alert("Ya existe el personaje con este ID")
            }
            if (data.name) {
               setCharacters([...characters, data]);           
            };
         } catch (error) {
         alert('¡No hay personajes con este ID!');       
      }
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
