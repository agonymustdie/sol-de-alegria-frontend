"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";

type MensajeContacto = {
  id: number;
  nombre: string;
  correo: string;
  mensaje: string;
  fecha: string;
};

function suscribirseAMensajes(notificar: () => void) {
  window.addEventListener("storage", notificar);
  return () => window.removeEventListener("storage", notificar);
}

function obtenerMensajesGuardados() {
  return localStorage.getItem("mensajes") || "[]";
}

function obtenerMensajesEnServidor() {
  return "[]";
}

export default function AdminMensajesPage() {
  const mensajesGuardados = useSyncExternalStore(
    suscribirseAMensajes,
    obtenerMensajesGuardados,
    obtenerMensajesEnServidor
  );
  const mensajes: MensajeContacto[] = JSON.parse(mensajesGuardados);

  return (
    <main className="container py-5">
      <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4">
        <div>
          <h1 className="fw-bold mb-2">Mensajes</h1>
          <p className="text-secondary mb-0">
            Revisa los mensajes enviados desde el formulario de contacto.
          </p>
        </div>

        <Link href="/admin" className="btn btn-dark">
          Volver al panel
        </Link>
      </div>

      {mensajes.length === 0 ? (
        <div className="card border-0 shadow-sm p-4 text-center">
          <p className="text-secondary mb-0">
            Todavía no hay mensajes recibidos.
          </p>
        </div>
      ) : (
        <div className="row g-4">
          {mensajes.map((mensaje) => (
            <div className="col-12" key={mensaje.id}>
              <article className="card border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex flex-wrap justify-content-between gap-2 mb-3">
                    <h2 className="fs-5 fw-bold mb-0">{mensaje.nombre}</h2>
                    <time
                      className="text-secondary"
                      dateTime={mensaje.fecha}
                    >
                      {new Date(mensaje.fecha).toLocaleString("es-CL")}
                    </time>
                  </div>
                  <p>
                    <strong>Correo:</strong> {mensaje.correo}
                  </p>
                  <p className="mb-0" style={{ whiteSpace: "pre-wrap" }}>
                    {mensaje.mensaje}
                  </p>
                </div>
              </article>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
