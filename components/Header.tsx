
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Usuario = {
  nombre: string;
  correo: string;
};

export default function Header() {
  const [usuario, setUsuario] = useState<Usuario | null>(null);

  useEffect(() => {
    const sesion = localStorage.getItem("sesion");

    if (sesion) {
      setUsuario(JSON.parse(sesion));
    }
  }, []);

  function cerrarSesion() {
    localStorage.removeItem("sesion");
    setUsuario(null);
    window.location.href = "/";
  }

  return (
    <>
      <header>
        <div>
          <h1>Sol de Alegría</h1>
          <p>Celebramos momentos que quedan para siempre</p>
        </div>
      </header>

      <nav>
        <Link href="/">Inicio</Link>
        <Link href="/productos">Productos</Link>
        <Link href="/nosotros">Nosotros</Link>
        <Link href="/blogs">Blog</Link>
        <Link href="/contacto">Contacto</Link>
        <Link href="/carrito">Carrito</Link>

        {usuario ? (
          <>
            <span style={{ color: "white" }}>
              Hola, {usuario.nombre}
            </span>

            <button type="button" onClick={cerrarSesion}>
              Cerrar sesión
            </button>
          </>
        ) : (
          <>
            <Link href="/login">Iniciar sesión</Link>
            <Link href="/registro">Registrarse</Link>
          </>
        )}
      </nav>
    </>
  );
}
