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
      <div className="text-center mb-4">
        <h1 className="fw-bold">Iniciar sesión</h1>
        <p className="text-secondary">
          Bienvenido a Sol de Alegría. Ingresa tus datos para continuar.
        </p>
      </div>

      <div
        className="card border-0 shadow-sm mx-auto"
        style={{ maxWidth: "500px" }}
      >
        <div className="card-body p-4 p-md-5">
          <h2 className="fs-4 fw-bold text-center mb-4">
            Accede a tu cuenta
          </h2>

          <form onSubmit={iniciarSesion}>
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

            <div className="mb-4">
              <label htmlFor="contrasena" className="form-label">
                Contraseña
              </label>

              <input
                id="contrasena"
                type="password"
                className="form-control"
                placeholder="Ingresa tu contraseña"
                value={contrasena}
                onChange={(e) => setContrasena(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-warning w-100">
              Iniciar sesión
            </button>
          </form>

          <hr className="my-4" />

          <p className="text-center mb-0">
            ¿No tienes una cuenta?{" "}
            <Link href="/registro" className="text-decoration-none">
              Regístrate aquí
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
