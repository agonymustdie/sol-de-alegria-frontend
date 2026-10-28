"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { useRouter } from "next/navigation";
import {
  cerrarSesionGuardada,
  obtenerSesionEnServidor,
  obtenerSesionGuardada,
  suscribirseASesion,
  type UsuarioSesion,
} from "./session";

export default function Header() {
  const router = useRouter();
  const sesionGuardada = useSyncExternalStore(
    suscribirseASesion,
    obtenerSesionGuardada,
    obtenerSesionEnServidor
  );
  const usuario: UsuarioSesion | null =
    sesionGuardada ? JSON.parse(sesionGuardada) : null;

  function cerrarSesion() {
    cerrarSesionGuardada();
    router.replace("/");
  }

  return (
    <>
      <header className="bg-warning py-4">
        <div className="container text-center">
          <h1 className="fw-bold mb-2">Sol de Alegría</h1>
          <p className="mb-0">
            Celebramos momentos que quedan para siempre
          </p>
        </div>
      </header>

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link
            href={usuario?.rol === "admin" ? "/admin" : "/"}
            className="navbar-brand fw-bold"
          >
            Sol de Alegría
          </Link>

          <div className="d-flex flex-wrap align-items-center gap-3">
            {usuario?.rol === "admin" ? (
              <>
                <Link href="/admin" className="nav-link text-white">
                  Panel de administración
                </Link>

                <span className="text-white">
                  Hola, {usuario.nombre}
                </span>

                <button
                  type="button"
                  className="btn btn-outline-light btn-sm"
                  onClick={cerrarSesion}
                >
                  Cerrar sesión
                </button>
              </>
            ) : (
              <>
                <Link href="/" className="nav-link text-white">
                  Inicio
                </Link>

                <Link href="/productos" className="nav-link text-white">
                  Productos
                </Link>

                <Link href="/nosotros" className="nav-link text-white">
                  Nosotros
                </Link>

                <Link href="/blogs" className="nav-link text-white">
                  Blog
                </Link>

                <Link href="/contacto" className="nav-link text-white">
                  Contacto
                </Link>

                <Link href="/carrito" className="nav-link text-white">
                  Carrito
                </Link>

                {usuario ? (
                  <>
                    <span className="text-white">
                      Hola, {usuario.nombre}
                    </span>

                    <button
                      type="button"
                      className="btn btn-outline-light btn-sm"
                      onClick={cerrarSesion}
                    >
                      Cerrar sesión
                    </button>
                  </>
                ) : (
                  <>
                    <Link href="/login" className="nav-link text-white">
                      Iniciar sesión
                    </Link>

                    <Link href="/registro" className="btn btn-warning btn-sm">
                      Registrarse
                    </Link>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
