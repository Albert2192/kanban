import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import axios from "../config/axiosConfig";
import "../css/TareaModal.css";

Modal.setAppElement("#root");

const TareaModal = ({
  isOpen,
  onRequestClose,
  buscarDatos,
  cargandoSpinner,
}) => {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [asignado, setAsignado] = useState("");
  const [alerta, setAlerta] = useState(false);
  const [alertaDescripcion, setAlertaDescripcion] = useState("");

  const handleReset = () => {
    setNombre("");
    setDescripcion("");
    setAsignado("");
  };

  useEffect(() => {
    handleReset();
  }, [isOpen]);

  const handleSubmit = (event) => {
    cargandoSpinner(true);
    event.preventDefault();
    axios
      .post("/tareas", { nombre, descripcion, asignado })
      .then((response) => {
        console.log("Tarea creada:", response.data);
        if (response.data.status == "ok") {
          setTimeout(() => {
            cargandoSpinner(false);
            handleReset();
            onRequestClose();
            buscarDatos();
          }, 1000);
        } else if (response.data.status == "warning") {
          setAlertaDescripcion(response.data.message);
          cargandoSpinner(false);
          setAlerta(true);
          setTimeout(() => {
            setAlerta(false);
          }, 2000);
        }
      })
      .catch((error) => {
        console.error("Hubo un error al crear la tarea!", error);
      });
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Crear Tarea"
    >
      <div className={`alerta ${alerta ? "activa" : ""}`}>
        <p>{alertaDescripcion}</p>
      </div>

      <div className="overlay">
        <div className="modal-header">
          <h2>Crear Tarea</h2>
          <button className="closeModal" onClick={onRequestClose}>
            <i className="fa fa-times"></i>
          </button>
        </div>
        <div className="modal-body">
          <form onSubmit={handleSubmit}>
            <div className="inputContainer">
              <label className="label">Nombre de la Tarea:</label>
              <input
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
            <div className="inputContainer">
              <label className="label">Descipcion:</label>
              <textarea
                rows={4}
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
              ></textarea>
            </div>
            <div className="inputContainer">
              <label className="label">Asignado a:</label>
              <input
                value={asignado}
                onChange={(e) => setAsignado(e.target.value)}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="modalCancel"
                onClick={onRequestClose}
              >
                Cancel
              </button>
              <button type="submit" className="modalSubmit">
                Crear Tarea
              </button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default TareaModal;
