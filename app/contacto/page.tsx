"use client";

import { useState } from "react";

export default function ContactoPage() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");

  function enviarMensaje(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!nombre.trim() || !correo.trim() || !mensaje.trim()) {
      alert("Debes completar todos los campos");
      return;
    }

    if (!correo.includes("@")) {
      alert("Ingresa un correo válido");
      return;
    }

    alert("Mensaje enviado correctamente (simulación)");

    setNombre("");
    setCorreo("");
    setMensaje("");
  }

  return (
    <main className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold mb-3">Contáctanos</h1>

        <p className="text-secondary">
          ¿Tienes alguna duda o quieres consultar sobre nuestros servicios?
          Estamos aquí para ayudarte.
        </p>
      </div>

      <div className="row g-4">
        <div className="col-12 col-lg-5">
          <div className="bg-warning rounded p-4 p-md-5 h-100">
            <h2 className="fw-bold fs-3 mb-4">
              Hablemos de tu celebración
            </h2>

            <p className="mb-4">
              En Sol de Alegría queremos ayudarte a organizar
              momentos especiales para toda la familia.
            </p>

            <h3 className="fs-5 fw-bold mb-3">
              ¿En qué podemos ayudarte?
            </h3>

            <ul className="ps-3">
              <li className="mb-2">
                Consultas sobre nuestros productos y servicios.
              </li>

              <li className="mb-2">
                Información sobre celebraciones infantiles.
              </li>

              <li className="mb-2">
                Dudas sobre nuestros pedidos.
              </li>

              <li>
                Consultas generales.
              </li>
            </ul>
          </div>
        </div>

        <div className="col-12 col-lg-7">
          <form
            onSubmit={enviarMensaje}
            className="card border-0 shadow-sm p-4 p-md-5 h-100"
          >
            <h2 className="fs-4 fw-bold mb-4">
              Envíanos un mensaje
            </h2>

            <div className="mb-3">
              <label htmlFor="nombreContacto" className="form-label">
                Nombre completo
              </label>

              <input
                type="text"
                id="nombreContacto"
                name="nombreContacto"
                className="form-control"
                placeholder="Ingresa tu nombre"
                maxLength={100}
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="emailContacto" className="form-label">
                Correo electrónico
              </label>

              <input
                type="email"
                id="emailContacto"
                name="emailContacto"
                className="form-control"
                placeholder="ejemplo@correo.cl"
                maxLength={100}
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="comentarioContacto" className="form-label">
                Mensaje
              </label>

              <textarea
                id="comentarioContacto"
                name="comentarioContacto"
                className="form-control"
                rows={5}
                maxLength={500}
                placeholder="Escribe tu consulta aquí..."
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-warning w-100">
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
