import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { IUserUpdate } from "../../../interfaces/user.interface";
import { useAppDispatch } from "../../../redux/hooks";
import { useNotification } from "../../../context/notification.context";
import { updateUserAsync } from "../../../redux/actions/updateUser";
import { users } from "../../../api/users";

interface IUserDetails {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string
}

export interface ISuccessFalse {
  success: boolean;
  error?: string;
}
export interface ISuccessTrue {
  success: boolean;
  data?: IUserDetails;
}

// type ServerResponse = ISuccessFalse | ISuccessTrue;

export const UpdatePage: React.FC<{}> = () => {
  const dispatch = useAppDispatch();
  const { getSuccess, getError } = useNotification();
  const navigate = useNavigate();

  const [updateData, setUpdateData] = useState<IUserUpdate>({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  });


  useEffect(() => {
    const fetchUserById = async () => {
      try {        
        const userId : any = localStorage.getItem("user");  
        if (userId) {
          const user: any = JSON.parse(userId);
          const response = await users.getUserById(user.id);
          setUpdateData({
            id: user.id,
            firstName: response.data.data.firstName,
            lastName: response.data.data.lastName,
            username: response.data.data.username,
            email: response.data.data.email,
            password: "",
          });
        } else {
          throw new Error("ID de usuario no encontrado en el almacenamiento local");
        }
      } catch (error) {
        throw new Error("Error al obtener el usuario por ID:");
      }
    };

    fetchUserById();
  }, []);

  const dataUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (updateData.id === undefined) {
        throw new Error("ID de usuario no válido");
      }
      const response = await dispatch(
        updateUserAsync(updateData.id, {
          firstName: updateData.firstName,
          lastName: updateData.lastName,
          username: updateData.username,
          email: updateData.email,
        })
      );
      if(response.success){
        getSuccess("Actualizado!!! reinicie su sesión");
        navigate("/home");
      }else{
        getError("Error: no se pudo actualizar el usuario");
      }
    } catch (error) {
      throw new Error("Error al actualizar usuario:");
    }
    setUpdateData({
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
    });
  };
  

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
              Editar Usuario
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
                value={updateData.firstName}
                onChange={dataUpdate}
              />
              <TextField
                name="lastName"
                margin="normal"
                type="text"
                fullWidth
                label="Apellido"
                sx={{ mt: 1.5, mb: 1.5 }}
                required
                value={updateData.lastName}
                onChange={dataUpdate}
              />
              <TextField
                name="username"
                margin="normal"
                type="text"
                fullWidth
                label="Usuario"
                sx={{ mt: 1.5, mb: 1.5 }}
                required
                value={updateData.username}
                onChange={dataUpdate}
                disabled
              />
              <TextField
                name="email"
                margin="normal"
                type="email"
                fullWidth
                label="Email"
                sx={{ mt: 1.5, mb: 1.5 }}
                required
                value={updateData.email}
                onChange={dataUpdate}
                disabled
              />
              

              <Button
                fullWidth
                type="submit"
                variant="contained"
                sx={{ mt: 1.5, mb: 3 }}
              >
                Actualizar
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
