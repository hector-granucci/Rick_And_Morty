import { useState } from 'react';


const Form = (props) => {
     
    const [useData, setuseData] = useState({
        email:"",
        password:"",
     })
     
     const [errors, setErrors] = useState({})


     const handleChange = (event) => {
        const name = event.target.name 
        const value = event.target.value

        setuseData({
            ...useData,
            [name]: value
        })       
     }

     const handleSubmit = (event) => {
        event.preventDefault();
        props.login(useData);
        setuseData({
            email:"",
            password:"",
        })
      }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input type="text" value={useData.email} name="email"  onChange={handleChange}/>
                <label htmlFor="password">Password:</label>
                <input type="password" value={useData.password}  name="password" onChange={handleChange}/>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Form