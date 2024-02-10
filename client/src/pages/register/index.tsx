import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { IUser } from "../../interfaces/user.interface";
import { useAppDispatch } from "../../redux/hooks";
import { createUserAsync } from "../../redux/actions/createUser.action";
import { useNotification } from "../../context/notification.context";
import { useNavigate } from "react-router-dom";


export interface ISuccessFalse {
  success: boolean;
  error?:   string;
}
export interface ISuccessTrue {
  success: boolean;
  data?:    Data;
}

export interface Data {
  firstName: string;
  lastName:  string;
  username:  string;
  email:     string;
  id:        string;
  createdAt: Date;
  updatedAt: Date;
}
type ServerResponse = ISuccessFalse | ISuccessTrue;


export const RegisterPage: React.FC<{}> = () => {
  const dispatch = useAppDispatch();
  const { getSuccess, getError } = useNotification()
  const navigate = useNavigate()
  
  const [registerData, setRegisterData] = React.useState<IUser>({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  });

  const [backendResponse, setBackendResponse] = useState<ServerResponse | null>(null);
  const dataRegister = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await dispatch(
        createUserAsync({
          firstName: registerData.firstName,
          lastName: registerData.lastName,
          username: registerData.username,
          email: registerData.email,
          password: registerData.password,
        })
      );
      setBackendResponse(response);       
    } catch (error) {
      // setBackendResponse({ "success": false ,"error":"error"}); 
      setBackendResponse({ success: false, error: "Error al crear usuario" }); 
      console.error("Error al crear usuario:", error);        
    }
    setRegisterData({  
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
    });
    handleNotification()
  };
  const handleNotification = () => {
    if (backendResponse?.success === true) {
      getSuccess("Usuario agregado Exitosamente");
      navigate('/login')
    } else {
      getError("Error: usuario ya existe, verifique credenciales");      
    }   
  };
  // console.log(`Verifica sucess: ${getSuccess} error: ${getError}`)
  // console.log(`respuesta back: ${backendResponse?.success}`)
  
  return (
    <Container maxWidth="sm">
        <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "100vh" }}
      >
        <Grid item>
          <Paper sx={{ padding: "1.2em", borderRadius: "0.5em" }}>
            <Typography sx={{ mt: 1, mb: 1 }} variant="h4">
              Registrarse
            </Typography>
            <Box component="form" onSubmit={handleSubmit}>
              <TextField
                name="firstName"
                margin="normal"
                type="text"
                fullWidth
                label="Nombre"
                sx={{ mt: 2, mb: 1.5 }}
                required
                onChange={dataRegister}
              />
              <TextField
                name="lastName"
                margin="normal"
                type="text"
                fullWidth
                label="Apellido"
                sx={{ mt: 1.5, mb: 1.5 }}
                required
                onChange={dataRegister}
              />
              <TextField
                name="username"
                margin="normal"
                type="text"
                fullWidth
                label="Usuario"
                sx={{ mt: 1.5, mb: 1.5 }}
                required
                onChange={dataRegister}
              />
              <TextField
                name="email"
                margin="normal"
                type="email"
                fullWidth
                label="Email"
                sx={{ mt: 1.5, mb: 1.5 }}
                required
                onChange={dataRegister}
              />
              <TextField
                name="password"
                margin="normal"
                type="password"
                fullWidth
                label="Contraseña"
                sx={{ mt: 1.5, mb: 1.5 }}
                required
                onChange={dataRegister}
              />

              <Button
                fullWidth
                type="submit"
                variant="contained"
                sx={{ mt: 1.5, mb: 3 }}
              >
                Registrarse
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
