
"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import {
  obtenerSesionEnServidor,
  obtenerSesionGuardada,
  suscribirseASesion,
  type UsuarioSesion,
} from "./session";

export default function Footer() {
  const sesionGuardada = useSyncExternalStore(
    suscribirseASesion,
    obtenerSesionGuardada,
    obtenerSesionEnServidor
  );
  const usuario: UsuarioSesion | null =
    sesionGuardada ? JSON.parse(sesionGuardada) : null;

  if (usuario?.rol === "admin") {
    return (
      <footer className="bg-dark text-white py-2 mt-4">
        <p className="container text-center small mb-0">
          © 2026 Sol de Alegría
        </p>
      </footer>
    );
  }

  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-12 col-md-4">
            <h3 className="fs-5">Sol de Alegría</h3>
            <p className="mb-0">
              Eventos infantiles y servicios para celebraciones.
              Creamos momentos especiales para toda la familia.
            </p>
          </div>

          <div className="col-12 col-md-4">
            <h3 className="fs-5">Enlaces rápidos</h3>

            <div className="d-flex flex-column gap-2">
              <Link href="/" className="text-white text-decoration-none">
                Inicio
              </Link>
              <Link href="/productos" className="text-white text-decoration-none">
                Productos
              </Link>
              <Link href="/nosotros" className="text-white text-decoration-none">
                Nosotros
              </Link>
              <Link href="/blogs" className="text-white text-decoration-none">
                Blog
              </Link>
              <Link href="/contacto" className="text-white text-decoration-none">
                Contacto
              </Link>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <h3 className="fs-5">Nuestra tienda</h3>
            <p className="mb-2">
              Encuentra productos y servicios para tus celebraciones.
            </p>
            <Link href="/carrito" className="btn btn-warning">
              Ver carrito
            </Link>
          </div>
        </div>

        <hr className="my-4" />

        <p className="text-center mb-0">
          © 2026 Sol de Alegría. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
