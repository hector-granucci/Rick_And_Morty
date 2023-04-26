import { useState } from 'react';
import style from './Form.module.css'
import validate from './Validation';

const Form = (props) => {

    const [useData, setuseData] = useState({
        email: "",
        password: "",
    })

    const [errors, setErrors] = useState({})


    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value

        setuseData({
            ...useData,
            [name]: value
        })

        setErrors(validate({
            ...useData,
            [name]: value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.login(useData);
        setuseData({
            email: "",
            password: "",
        })
    }

    return (
        <div className={style.container}>
            <div className={style.form}>
                <form onSubmit={handleSubmit}>
                    <div className={style.email}>
                        <div className={style.lab}>
                        <label htmlFor="email">Email:</label>
                        </div>
                        <div className={style.int}>
                        <input type="text" value={useData.email} name="email" onChange={handleChange} />
                        <p>{errors.email? errors.email : null }</p>
                        </div>
                    </div>
                    <div className={style.pass}>
                        <div>
                        <label htmlFor="password">Password:</label>
                        </div>
                        <div>
                        <input type="password" value={useData.password} name="password" onChange={handleChange} />
                        <p>{errors.password? errors.password : null }</p>
                        </div>
                    </div>
                    <div className={style.btn}>
                        <button type="submit">Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form