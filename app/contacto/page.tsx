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
      <section className="py-4">
        <h2 className="mb-3">Contáctanos</h2>

        <p className="mb-4">
          ¿Tienes alguna duda o quieres consultar sobre nuestros servicios?
          Completa el siguiente formulario y nos pondremos en contacto contigo.
        </p>

        <form
          onSubmit={enviarMensaje}
          className="card p-4 shadow-sm mx-auto w-100"
          style={{ maxWidth: "600px" }}
        >
          <div className="mb-3">
            <label htmlFor="nombreContacto" className="form-label">
              Nombre:
            </label>

            <input
              type="text"
              id="nombreContacto"
              name="nombreContacto"
              className="form-control"
              maxLength={100}
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="emailContacto" className="form-label">
              Correo electrónico:
            </label>

            <input
              type="email"
              id="emailContacto"
              name="emailContacto"
              className="form-control"
              maxLength={100}
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="comentarioContacto" className="form-label">
              Mensaje:
            </label>

            <textarea
              id="comentarioContacto"
              name="comentarioContacto"
              className="form-control"
              rows={5}
              maxLength={500}
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-warning">
            Enviar mensaje
          </button>
        </form>
      </section>
    </main>
  );
}
