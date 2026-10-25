"use client";

import { useState } from "react";
import Link from "next/link";

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
      <div className="text-center mb-4">
        <h1 className="fw-bold">Crear cuenta</h1>
        <p className="text-secondary">
          Regístrate y comienza a preparar tus celebraciones
          con Sol de Alegría.
        </p>
      </div>

      <div
        className="card border-0 shadow-sm mx-auto"
        style={{ maxWidth: "550px" }}
      >
        <div className="card-body p-4 p-md-5">
          <h2 className="fs-4 fw-bold text-center mb-4">
            Datos de registro
          </h2>

          <form onSubmit={registrarUsuario}>
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">
                Nombre completo
              </label>

              <input
                id="nombre"
                type="text"
                className="form-control"
                placeholder="Ingresa tu nombre"
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
                placeholder="ejemplo@correo.cl"
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
                placeholder="Mínimo 8 caracteres"
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
                placeholder="Repite tu contraseña"
                value={confirmar}
                onChange={(e) => setConfirmar(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-warning w-100">
              Registrarse
            </button>
          </form>

          <hr className="my-4" />

          <p className="text-center mb-0">
            ¿Ya tienes una cuenta?{" "}
            <Link href="/login" className="text-decoration-none">
              Inicia sesión aquí
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
