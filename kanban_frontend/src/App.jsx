import React, { useState } from "react";
import TareasList from "./components/TareasList";
import TareaModal from "./components/TareaModal";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [cargando, setCargando] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const actualizarLista = () => {
    setLoading(!loading);
  };

  const cargandoSpinner = (estado) => {
    setCargando(estado);
  };

  return (
    <div className="App">
      <TareaModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        buscarDatos={actualizarLista}
        cargandoSpinner={cargandoSpinner}
      />
      <TareasList
        openModal={openModal}
        actualizarLista={loading}
        buscarDatos={actualizarLista}
        cargandoSpinner={cargandoSpinner}
      />

      <button className="nuevoMovil" onClick={openModal}>
        <i class="fa fa-plus-circle" aria-hidden="true"></i>
      </button>

      <div className={`overlayCargando ${cargando ? "active" : ""}`}>
        <div>
          <i class="fa fa-spinner fa-spin fa-3x fa-fw spinner"></i>
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  );
}

export default App;
