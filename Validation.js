const validate = (userData) => {
    const { email, password } = userData;
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i; 
  
    
    if (!email) {
      return "El email no puede estar vacío.";
    } else if (!emailRegex.test(email)) {
      return "El email ingresado no es válido.";
    } else if (email.length > 35) {
      return "El email no puede tener más de 35 caracteres.";
    }
  
    if (!password) {
      return "La contraseña no puede estar vacía.";
    } else if (!/\d/.test(password)) {
      return "La contraseña debe contener al menos un número.";
    } else if (password.length < 6 || password.length > 10) {
      return "La contraseña debe tener una longitud entre 6 y 10 caracteres.";
    }
 
    return null;
  };


  export default validate;