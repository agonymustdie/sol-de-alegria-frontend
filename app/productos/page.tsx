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
      <section className="text-center py-4">
        <h2 className="mb-3">Nuestros productos</h2>

        <p>
          Encuentra diferentes productos y servicios para hacer
          de tu celebración un momento especial.
        </p>
      </section>

      <section className="py-4">
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
          <p className="text-center">
            No hay productos disponibles.
          </p>
        )}
      </section>
    </main>
  );
}
