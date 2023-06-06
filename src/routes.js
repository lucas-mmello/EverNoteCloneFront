import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./screens/home";
import Register from "./screens/auth/register";
import Login from "./screens/auth/login";
import Notes from "./screens/notes/index";
import UserEdit from "./screens/user/edit";

const Rotas = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/notes" element={<Notes />} />
      <Route path="/user/edit" element={<UserEdit />} />
    </Routes>
  </BrowserRouter>
);

export default Rotas;
