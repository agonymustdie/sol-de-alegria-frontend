"use client";

import { useEffect, useState } from "react";
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

export default function ProductoDetalle() {
  const params = useParams();
  const id = Number(params.id);

  const [producto, setProducto] = useState<Producto | null>(null);
  const [cargado, setCargado] = useState(false);

  useEffect(() => {
    const guardados = localStorage.getItem("productos");

    const productos: Producto[] = guardados !== null
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
        <h2>Producto no encontrado</h2>

        <Link href="/productos" className="btn btn-warning mt-3">
          Volver a productos
        </Link>
      </main>
    );
  }

  return (
    <main className="container py-5">
      <section className="py-4">
        <h2 className="mb-3">Detalle del producto</h2>

        <p className="text-secondary mb-4">
          Conoce nuestros productos y servicios para tu celebración.
        </p>

        <div
          className="card shadow-sm border-0 mx-auto text-start"
          style={{ maxWidth: "650px" }}
        >
          <div className="card-body p-4">
            <h3 className="fs-3 mb-3">{producto.nombre}</h3>

            <p className="text-secondary mb-4">
              {producto.descripcion}
            </p>

            <h4 className="fw-bold mb-4">
              ${producto.precio.toLocaleString("es-CL")}
            </h4>

            <div className="d-grid gap-2">
              <BotonCarrito
                id={producto.id}
                nombre={producto.nombre}
                precio={producto.precio}
              />

              <Link
                href="/productos"
                className="btn btn-outline-secondary"
              >
                Volver a productos
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
