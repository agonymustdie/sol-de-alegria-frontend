"use client";

import { useState } from "react";

export default function RegistroPage() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [confirmar, setConfirmar] = useState("");

  function registrarUsuario(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!nombre.trim() || !correo.trim() || !contrasena || !confirmar) {
      alert("Debes completar todos los campos");
      return;
    }

    if (!correo.includes("@")) {
      alert("Ingresa un correo válido");
      return;
    }

    if (contrasena.length < 8) {
      alert("La contraseña debe tener al menos 8 caracteres");
      return;
    }

    if (contrasena !== confirmar) {
      alert("Las contraseñas no coinciden");
      return;
    }

    const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");

    const existe = usuarios.some(
      (usuario: { correo: string }) => usuario.correo === correo
    );

    if (existe) {
      alert("Este correo ya está registrado");
      return;
    }

    const nuevoUsuario = {
      nombre,
      correo,
    };

    usuarios.push(nuevoUsuario);

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("Usuario registrado correctamente");
    window.location.href = "/login";
  }

  return (
    <main className="container py-5">
      <section className="py-4">
        <h2 className="mb-3">Crear cuenta</h2>

        <p className="mb-4">
          Regístrate para acceder a Sol de Alegría.
        </p>

        <form
          onSubmit={registrarUsuario}
          className="card p-4 shadow-sm mx-auto"
          style={{ maxWidth: "600px" }}
        >
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">
              Nombre completo
            </label>
            <input
              id="nombre"
              type="text"
              className="form-control"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="correo" className="form-label">
              Correo electrónico
            </label>
            <input
              id="correo"
              type="email"
              className="form-control"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="contrasena" className="form-label">
              Contraseña
            </label>
            <input
              id="contrasena"
              type="password"
              className="form-control"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="confirmar" className="form-label">
              Confirmar contraseña
            </label>
            <input
              id="confirmar"
              type="password"
              className="form-control"
              value={confirmar}
              onChange={(e) => setConfirmar(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-warning">
            Registrarse
          </button>
        </form>
      </section>
    </main>
  );
}
