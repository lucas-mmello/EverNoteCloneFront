import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./screens/home";
import Register from "./screens/auth/register";
import Login from "./screens/auth/login";
import NotesIndex from "./screens/notes/index";
import UserEdit from "./screens/user/edit";
import PrivateRoute from "./components/auth/private_route";
import Logged from "./screens/home/logged";

const Rotas = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/logged" element={<Logged />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route element={<PrivateRoute />}>
        <Route exact path="/notes" element={<NotesIndex />} />
        <Route exact path="/user/edit" element={<UserEdit />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Rotas;
