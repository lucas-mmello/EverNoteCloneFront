import React, { useState } from "react";
import { Button } from "react-bulma-companion";
import UserService from "../../../services/users";
import { Navigate } from "react-router-dom";

function UsersDelete() {
  const [redirectToHome, setRedirectToHome] = useState(false);

  const deleteUser = async () => {
    if (window.confirm("Are you sure you wish to delete this account?")) {
      try {
        await UserService.delete();
        setRedirectToHome(true);
      } catch (error) {
        // Trate o erro de acordo com suas necessidades
        return alert("Erro ao excluir a conta:");
      }
    }
  };

  if (redirectToHome == true)
    return <Navigate replace to={{ pathname: "/" }} />;

  return (
    <Button color="danger" onClick={() => deleteUser()}>
      Excluir conta
    </Button>
  );
}

export default UsersDelete;
