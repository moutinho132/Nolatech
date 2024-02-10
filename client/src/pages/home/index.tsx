import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import React, { useEffect, useState } from "react";
import { users } from "../../api/users";
import { IUser } from "../../interfaces/user.interface";

export const HomePage: React.FC<{}> = () => {
  const [usersAll, setUsersAll] = useState<IUser[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [userIdToDelete, setUserIdToDelete] = useState<string | null>(null);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

  useEffect(() => {
    users
      .getFindUsers()
      .then((u) => {
        setUsersAll(u.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    event?.type
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleDeleteUser = (userId: string) => {
    setUserIdToDelete(userId);
    setOpenDeleteDialog(true);
  };

  const confirmDeleteUser = async () => {
    try {
      if (userIdToDelete) {
        await users.deleteUser(userIdToDelete);
        const updatedUsers = usersAll.filter((user) => user.id !== userIdToDelete);
        setUsersAll(updatedUsers);
        setOpenDeleteDialog(false);
      }
    } catch (error) {
      console.error("Error al eliminar usuario:", error);
    }
  };

  const cancelDeleteUser = () => {
    setUserIdToDelete(null);
    setOpenDeleteDialog(false);
  };

  return (
    <Container sx={{ mt: 9 }} maxWidth="md">
      <h3>Listado de Usuarios de la aplicación</h3>
      <hr />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nombres</TableCell>
              <TableCell>Apellidos</TableCell>
              <TableCell>Usuario</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Acciones</TableCell> 
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
                ? usersAll.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                : usersAll
              ).map((user) => (
                <TableRow key={user.username}>
                  <TableCell>{user.firstName}</TableCell>
                  <TableCell>{user.lastName}</TableCell>
                  <TableCell>{user.username}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <Button variant="outlined" onClick={() => user.id && handleDeleteUser(user.id)}>Eliminar</Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        labelRowsPerPage="Usuarios por página" 
        rowsPerPageOptions={[5, 10, 20]}
        component="div"
        count={usersAll.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      {/* Diálogo de confirmación para eliminar usuario */}
      <Dialog
        open={openDeleteDialog}
        onClose={cancelDeleteUser}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Eliminar"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            ¿Estás seguro de que deseas eliminar este usuario?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={cancelDeleteUser} color="primary">
            Cancelar
          </Button>
          <Button onClick={confirmDeleteUser} color="primary" autoFocus>
            Eliminar
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

