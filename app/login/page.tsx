"use client";

import { useState } from "react";
import Link from "next/link";

type Usuario = {
  nombre: string;
  correo: string;
};

export default function LoginPage() {
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");

  function iniciarSesion(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!correo.trim() || !contrasena) {
      alert("Debes completar todos los campos");
      return;
    }

    if (!correo.includes("@")) {
      alert("Ingresa un correo válido");
      return;
    }

    const usuarios: Usuario[] = JSON.parse(
      localStorage.getItem("usuarios") || "[]"
    );

    const usuario = usuarios.find(
      (usuario) => usuario.correo === correo
    );

    if (!usuario) {
      alert("No existe un usuario registrado con este correo");
      return;
    }

    localStorage.setItem("sesion", JSON.stringify(usuario));

    alert("Sesión de demostración iniciada");
    window.location.href = "/";
  }

  return (
    <main className="container py-5">
      <section className="py-4">
        <h2 className="mb-3">Iniciar sesión</h2>

        <p className="mb-4">
          Ingresa tus datos para acceder a Sol de Alegría.
        </p>

        <form
          onSubmit={iniciarSesion}
          className="card p-4 shadow-sm mx-auto"
          style={{ maxWidth: "600px" }}
        >
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

          <button type="submit" className="btn btn-warning">
            Iniciar sesión
          </button>

          <p className="mt-3 mb-0">
            ¿No tienes una cuenta?{" "}
            <Link href="/registro">Regístrate aquí</Link>
          </p>
        </form>
      </section>
    </main>
  );
}
