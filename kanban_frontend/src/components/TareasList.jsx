import React, { useEffect, useState } from "react";
import axios from "../config/axiosConfig";

const TareasList = ({
  actualizarLista,
  buscarDatos,
  openModal,
  cargandoSpinner,
}) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("/tareas")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the posts!", error);
      });
  }, [actualizarLista]);

  const handlerCambioEstado = (id, estadoActual) => {
    cargandoSpinner(true);
    let estado = estadoActual + 1;
    axios
      .post(`/tareas/${id}`, { estado })
      .then((response) => {
        console.log("Tarea Actualizada:", response.data);
        setTimeout(() => {
          cargandoSpinner(false);
          buscarDatos();
        }, 1000);
      })
      .catch((error) => {
        console.error("Hubo un error al crear la tarea!", error);
      });
  };

  const handlerEliminar = (id) => {
    cargandoSpinner(true);
    axios
      .delete(`/tareas/${id}`)
      .then((response) => {
        console.log("Tarea Eliminada:", response.data);
        setTimeout(() => {
          cargandoSpinner(false);
          buscarDatos();
        }, 1000);
      })
      .catch((error) => {
        console.error("Hubo un error al crear la tarea!", error);
      });
  };

  return (
    <div>
      <div className="titulo">
        <h2>Kanban - Panel de Tareas</h2>
        <p>A continuacion se listan las tareas correspondientes</p>
        <button onClick={openModal} className="NuevaTarea">
          <i class="fa fa-plus-circle" aria-hidden="true"></i>
          <span>Nueva tarea</span>
        </button>
      </div>

      <div className="tableContainer">
        <div className="containerMainIndividual">
          <div>
            <div className="seccionTitulo">
              <i className="fas fa-list icono"></i>
              <h2>Pendientes</h2>
            </div>
            <hr />
          </div>
          <div className="containerIndividual">
            {posts
              .filter((post) => post.estado === 0)
              .map((post) => (
                <div
                  className={`card ${post.estado === 0 ? "pendiente" : ""}`}
                  key={post.id}
                >
                  <h3>
                    <i className="fa fa-tags"></i>
                    <span className="nombre">{post.nombre}</span>
                  </h3>
                  <hr />
                  <p className="descripcion">
                    <span className="descripcionTitulo">Descripción: </span>
                    {post.descripcion}
                  </p>
                  <p title="Usuario Asigando" className="asignado">
                    <i className="fa fa-user"></i> <span>{post.asignado}</span>
                  </p>
                  <button
                    className="btnProceso btnEnProceso"
                    onClick={() => handlerCambioEstado(post.id, post.estado)}
                  >
                    En proceso
                    <i class="fa fa-chevron-right" aria-hidden="true"></i>
                  </button>
                  <button
                    className="btnDelete"
                    onClick={() => handlerEliminar(post.id)}
                  >
                    <i className="fa fa-times"></i>
                  </button>
                </div>
              ))}
          </div>
        </div>

        <div className="containerMainIndividual">
          <div>
            <div className="seccionTitulo">
              <i className="fas fa-clock icono"></i>
              <h2>En Proceso</h2>
            </div>
            <hr />
          </div>

          <div className="containerIndividual">
            {posts
              .filter((post) => post.estado === 1)
              .map((post) => (
                <div
                  className={`card ${post.estado === 1 ? "proceso" : ""}`}
                  key={post.id}
                >
                  <h3>
                    <i className="fa fa-tags"></i>
                    <span className="nombre">{post.nombre}</span>
                  </h3>
                  <hr />
                  <p className="descripcion">
                    <span className="descripcionTitulo">Descripcion: </span>
                    {post.descripcion}
                  </p>
                  <p title="Usuario Asigando" className="asignado">
                    <i className="fa fa-user"></i> <span>{post.asignado}</span>
                  </p>
                  <button
                    className="btnProceso btnFinalizar"
                    onClick={() => handlerCambioEstado(post.id, post.estado)}
                  >
                    Finalizar
                    <i class="fa fa-chevron-right" aria-hidden="true"></i>
                  </button>
                  <button
                    className="btnDelete"
                    onClick={() => handlerEliminar(post.id)}
                  >
                    <i className="fa fa-times"></i>
                  </button>
                </div>
              ))}
          </div>
        </div>

        <div className="containerMainIndividual">
          <div>
            <div className="seccionTitulo">
              <i className="fas fa-check-square icono"></i>
              <h2>Finalizado</h2>
            </div>
            <hr />
          </div>

          <div className="containerIndividual">
            {posts
              .filter((post) => post.estado === 2)
              .map((post) => (
                <div
                  className={`card ${post.estado === 2 ? "terminado" : ""}`}
                  key={post.id}
                >
                  <h3>
                    <i className="fa fa-tags"></i>
                    <span className="nombre">{post.nombre}</span>
                  </h3>
                  <hr />
                  <p className="descripcion">
                    <span className="descripcionTitulo">Descripcion: </span>
                    {post.descripcion}
                  </p>
                  <p title="Usuario Asigando" className="asignado">
                    <i className="fa fa-user"></i> <span>{post.asignado}</span>
                  </p>
                  <button
                    className="btnDelete"
                    onClick={() => handlerEliminar(post.id)}
                  >
                    <i className="fa fa-times"></i>
                  </button>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TareasList;
