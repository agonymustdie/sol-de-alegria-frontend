"use client";

import { Suspense, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import BotonCarrito from "../../../components/BotonCarrito";
import { productos as productosIniciales } from "../../../data/productos";

type Producto = {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
};

export default function ProductoDetallePage() {
  return (
    <Suspense
      fallback={
        <main className="container py-5">
          <p>Cargando producto...</p>
        </main>
      }
    >
      <ProductoDetalle />
    </Suspense>
  );
}

function ProductoDetalle() {
  const params = useParams();
  const id = Number(params.id);

  const [producto, setProducto] = useState<Producto | null>(null);
  const [cargado, setCargado] = useState(false);

  useEffect(() => {
    const guardados = localStorage.getItem("productos");

    const productos: Producto[] =
      guardados !== null
        ? JSON.parse(guardados)
        : productosIniciales;

    const encontrado = productos.find(
      (producto) => producto.id === id
    );

    setProducto(encontrado || null);
    setCargado(true);
  }, [id]);

  if (!cargado) {
    return (
      <main className="container py-5">
        <p>Cargando producto...</p>
      </main>
    );
  }

  if (!producto) {
    return (
      <main className="container py-5">
        <div className="alert alert-warning text-center">
          <h2 className="fs-4">Producto no encontrado</h2>
          <p>El producto que buscas no está disponible.</p>

          <Link href="/productos" className="btn btn-dark">
            Volver a productos
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="container py-5">
      <nav aria-label="breadcrumb" className="mb-4">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/" className="text-decoration-none">
              Inicio
            </Link>
          </li>

          <li className="breadcrumb-item">
            <Link href="/productos" className="text-decoration-none">
              Productos
            </Link>
          </li>

          <li className="breadcrumb-item active">
            {producto.nombre}
          </li>
        </ol>
      </nav>

      <div className="card border-0 shadow-sm overflow-hidden">
        <div className="row g-0">
          <div className="col-12 col-md-6">
            <div className="bg-light h-100 d-flex align-items-center justify-content-center py-5">
              <span style={{ fontSize: "100px" }}>🎉</span>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="card-body p-4 p-lg-5">
              <h1 className="fw-bold fs-2 mb-3">
                {producto.nombre}
              </h1>

              <p className="text-secondary mb-4">
                {producto.descripcion}
              </p>

              <h2 className="precio-nuevo mb-4">
                ${producto.precio.toLocaleString("es-CL")}
              </h2>

              <div className="d-grid gap-3">
                <BotonCarrito
                  id={producto.id}
                  nombre={producto.nombre}
                  precio={producto.precio}
                />

                <Link
                  href="/productos"
                  className="btn btn-outline-dark"
                >
                  Volver a productos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
