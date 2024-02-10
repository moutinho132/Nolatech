import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home";
import { RouterLayout } from "./common/RouterLayout";
import { LoginPage } from "./pages/login";
import { RegisterPage } from "./pages/register";
import { UpdatePage } from "./pages/home/updateUser";

export const AppRouter: React.FC<{}> = () => {

  return (
    <Routes>
      <Route path="/" element={<RouterLayout />}>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage /> } />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/update" element={<UpdatePage />} />
      </Route>
    </Routes>
  );
};
