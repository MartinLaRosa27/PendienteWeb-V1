import React, { useEffect, useState } from "react";
import { Formulario } from "./Formulario.jsx";
import axios from "axios";

export const Listado = () => {
  const [pendientes, setPendientes] = useState([]);
  const url = `http://${process.env.REACT_APP_BACKEND_URL}/get-pendiente`;

  const getPendientes = async () => {
    try {
      await axios.get(url).then((res) => {
        setPendientes(res.data);
      });
    } catch (e) {
      setPendientes([]);
    }
  };

  useEffect(() => {
    getPendientes();
  }, []);

  return (
    <>
      <header>Lista de Pendientes</header>
      <Formulario />
      <main>
        {pendientes.length == 0 && <h3>No hay pendientes registrados</h3>}
        <ul>
          {pendientes.map((valor) => {
            return (
              <li key={valor._id}>
                {valor.descripcion} para <span>{valor.tarea}</span>
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
};
