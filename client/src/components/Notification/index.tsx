import { Alert, AlertColor, Snackbar, Typography } from "@mui/material";
import React from "react";


type NotificationProps ={
    open: boolean;
    message: string;
    severity: AlertColor | undefined;
    handleClose: () => void;
}


    export const Notification: React.FC<NotificationProps> = ({handleClose, message,open,severity}) => {  
        return(
            <> 
            <Snackbar sx={{mt:8}}
            anchorOrigin={{ vertical: "top", horizontal:"center"}} 
            autoHideDuration={4000}
            open={open}
            onClose={handleClose}
            >
                <Alert onClose={handleClose} severity={severity}>
                    <Typography>{message}</Typography>
                </Alert>
            </Snackbar>
            </>
        )
    }