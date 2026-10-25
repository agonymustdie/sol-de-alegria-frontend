"use client";

import { useEffect, useState } from "react";
import ProductoCard from "../../components/ProductoCard";
import { productos as productosIniciales } from "../../data/productos";

export default function ProductosPage() {
  const [productos, setProductos] = useState(productosIniciales);

  useEffect(() => {
    const guardados = localStorage.getItem("productos");

    if (guardados !== null) {
      setProductos(JSON.parse(guardados));
    }
  }, []);

  return (
    <main className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold mb-3">Nuestros productos</h1>

        <p className="text-secondary">
          Encuentra productos y servicios para hacer de tu celebración
          un momento inolvidable.
        </p>
      </div>

      <div className="row g-4">
        {productos.map((producto) => (
          <div
            key={producto.id}
            className="col-12 col-md-6 col-lg-4"
          >
            <ProductoCard
              id={producto.id}
              nombre={producto.nombre}
              descripcion={producto.descripcion}
              precio={producto.precio}
            />
          </div>
        ))}
      </div>

      {productos.length === 0 && (
        <div className="alert alert-info text-center mt-4">
          No hay productos disponibles.
        </div>
      )}
    </main>
  );
}
