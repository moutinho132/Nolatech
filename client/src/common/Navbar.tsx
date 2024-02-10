import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import logo from "../../public/vite.svg";
import { useNavigate } from "react-router-dom";
import { useNotification } from "../context/notification.context";
import { IUser } from "../interfaces/user.interface";



export const Navbar: React.FC<{}> = () => {
  const { getInfo } = useNotification();
    const navigate = useNavigate();

    const handleLogout = () => {
      const userString: string | null = localStorage.getItem("user");
      if (userString) {
          const user: IUser = JSON.parse(userString);
          getInfo(`${user.username} ha cerrado sesión.`);
      } else {
          getInfo("Se ha cerrado la sesión.");
      }
      localStorage.removeItem("accessToken");
      localStorage.removeItem("user");
      navigate("/login");
  };
  
  const userString: string | null = localStorage.getItem("user");
  const isLoggedIn = !!userString;

  let currentUser: string | null = null;
  if (userString) {
    const user: IUser = JSON.parse(userString);
    currentUser = `${user.firstName} ${user.lastName}`;
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar>
          <Container maxWidth="xl">
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Avatar alt="Logo" src={logo} />
                  <Typography>Prueba Técnica</Typography>
                </Stack>
              </Grid>
              <Grid item>
                  {isLoggedIn && currentUser && (
                    <Typography variant="h6" sx={{color:'#C8FA5F'}}>{currentUser}</Typography>
                  )}
              </Grid>
              <Grid item>
                <Stack spacing={2} direction="row">
                <a href="localhost:8000/docs" target="_blank">
                  <Button variant="outlined">Ir a la documentación</Button></a>                  
                  {isLoggedIn ? (
                    <>
                <Button variant="outlined" onClick={() => navigate('/home')}>
                    Inicio
                  </Button>
                    <Button variant="outlined" onClick={() => navigate('/update')}>
                      Actualizar
                    </Button>
                    <Button variant="contained" onClick={handleLogout}>
                      Cerrar Sesion
                    </Button></>
                  ) : (
                    <>
                      <Button variant="contained" onClick={() => navigate('login')}>
                        Login
                      </Button>
                      <Button variant="outlined" onClick={() => navigate('register')}>
                        Register
                      </Button>
                    </>
                  )}                 
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
};