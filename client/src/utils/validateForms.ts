import * as yup from "yup";

export const LoginValidate = yup.object().shape({

  firstName: yup.string().trim()
  .min(3, "El nombre debe tener al menos 3 caracteres")
  .max(10, "El nombre no puede tener más de 10 caracteres")
  .required("El nombre es requerido"),

  lastName: yup.string().trim()
  .min(3, "El apellido debe tener al menos 3 caracteres")
  .max(10, "El apellido no puede tener más de 10 caracteres")
  .required("El apellido es requerido"),

  username: yup.string().trim()
  .test('username', "El username debe ser un correo electrónico válido o un string", 
  function (value) {
    if (!value) return false; 
    if (value.includes('@') || value.includes('.')) {      
      return yup.string().email().isValidSync(value);
    } else {      
      return true;
    }
  }).required("El username es requerido"),

  password: yup.string().trim()
  .min(4, "La contraseña debe tener al menos 5 caracteres")
  .max(12, "La contraseña no puede tener más de 12 caracteres")
  .required("La contraseña es requerida"),
});
