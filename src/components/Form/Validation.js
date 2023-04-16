const validate = (userData) => {
    const { email, password } = userData;
    const regexUsername = /\S+@\S+\S+/;
    const regexPassword = /^(?=.*?[a-z])(?=.*?[0-9]).{6,10}$/
    

    let errors = {}
    
    if (!email) {
      errors.email = "El email no puede estar vacío.";
    } else if (!regexUsername.test(email)) {
      errors.email = "El email ingresado no es válido.";
    } else if (email.length > 35) {
      errors.email = "El email no puede tener más de 35 caracteres.";
    }
  
    if (!password) {
      errors.password = "La contraseña no puede estar vacía.";
    } else if (!regexPassword.test(password)) {
      errors.password = "La contraseña debe contener al menos un número.";
    } else if (password.length < 6 || password.length > 10) {
      errors.password = "La contraseña debe tener una longitud entre 6 y 10 caracteres.";
    }
 
    return errors;
  };


  export default validate;