import React, { useContext, useState } from "react";
import { Notification } from "../components";
import { AlertColor } from "@mui/material";

type ContextProps = {
  getError: (message: string) => void;  
  getSuccess: (message: string) => void;  
  getInfo: (message: string) => void;  
};

const NotificationContext = React.createContext<ContextProps | null>(null);
export const NotificationProvider: React.FC<{ children: JSX.Element }> = ({
  children,
}) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState<AlertColor | undefined>(undefined);

  const handleClose = () => {
    setOpen(false);
  };

  const getError = (message: string) => {
    setSeverity("error");
    setOpen(true);
    setMessage(message);
  };
  const getSuccess = (message: string) => {
    setSeverity("success");
    setOpen(true);
    setMessage(message);
  };
  const getInfo = (message: string) => {
    setSeverity("info");
    setOpen(true);
    setMessage(message);
  };

  const value = { 
    getError,
    getSuccess,
    getInfo
  };

  return (
    <NotificationContext.Provider  value={value}>
      <Notification
        handleClose={handleClose}
        severity={severity}
        open={open}
        message={message}
      />
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => { 
    const context = useContext(NotificationContext);
    if (!context) throw new Error ('No existe context');
    return context
}
