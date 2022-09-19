import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import ClasesComponent from "./components/ClasesComponent/ClasesComponent";
import HomeComponent from "./components/HomeComponent/HomeComponent.lazy";
import LoginComponent from "./components/LoginComponent/LoginComponent.lazy";
import MateriasInscritasComponent from "./components/MateriasInscritasComponent/MateriasInscritasComponent.lazy";
import SignupComponent from "./components/SignupComponent/SignupComponent.lazy";
import ResetPasswordComponent from "./components/ResetPasswordComponent/ResetPasswordComponent.lazy";
import { UserResponse } from "./models/UserResponse";
import MateriasAsignadasComponent from "./components/MateriasAsignadasComponent/MateriasAsignadasComponent";
import PublicarClaseComponent from "./components/PublicarClaseComponent/PublicarClaseComponent.lazy";
import ModificarCuentaComponent from "./components/ModificarCuentaComponent/ModificarCuentaComponent.lazy";

function App() {

  // obtenemos el usuario
  const [user] = useState<UserResponse | null>(null);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
        sessionStorage.setItem("usuario", JSON.stringify({
          "name": "Sergio Garroni",
          "type": "professor",
          "email": "sergio@garroni.com",
          "id": "1111",
          "picture": "../../mockData/mockImages/user-dummy.svg"
        }));
      } catch (err: any) {
        sessionStorage.setItem("usuario", JSON.stringify({
          "name": "Sergio Garroni",
          "type": "professor",
          "email": "sergio@garroni.com",
          "id": "1111",
          "picture": "../../mockData/mockImages/user-dummy.svg"
        }));
      }
    }
    getUserData()
  }, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/register" element={<SignupComponent />} />
        <Route path="/clases" element={<ClasesComponent />} />
        <Route path="/clases-asignadas" element={<MateriasAsignadasComponent />} />
        <Route path="/inscripciones" element={<MateriasInscritasComponent />} />
        <Route path="/resetpassword" element={<ResetPasswordComponent />} />
        <Route path="/publicarclase" element={<PublicarClaseComponent />} />
        <Route path="/modificarcuenta" element={<ModificarCuentaComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;